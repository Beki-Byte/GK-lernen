/* ===========================================================
   NwT KA-Training – Interaktive Trainer & Abbildungen
   =========================================================== */
(function () {
  'use strict';

  var SIMS = {};
  var cleanups = [];
  SIMS._cleanup = function () { cleanups.forEach(function (f) { try { f(); } catch (e) {} }); cleanups = []; };

  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function fmt(n, d) {
    if (d === undefined) d = 2;
    var s = (Math.round(n * Math.pow(10, d)) / Math.pow(10, d)).toString();
    return s.replace('.', ',');
  }
  function num(str) { return parseFloat(String(str).replace(/\s/g, '').replace(',', '.')); }
  function close(a, b, tol) { return Math.abs(a - b) <= (tol || Math.max(0.011, Math.abs(b) * 0.011)); }

  /* =========================================================
     1) Voxel-Körper: Raumbild + Dreitafelprojektion
     ========================================================= */
  function shapeFromRows(rows) {
    // rows[y][x] = Höhe, y = 0 ist VORNE
    var Y = rows.length, X = rows[0].length, Z = 0;
    rows.forEach(function (r) { r.forEach(function (h) { if (h > Z) Z = h; }); });
    return {
      X: X, Y: Y, Z: Z, rows: rows,
      has: function (x, y, z) {
        if (x < 0 || y < 0 || z < 0 || x >= X || y >= Y || z >= Z) return false;
        return z < rows[y][x];
      }
    };
  }

  var SHAPES = {
    winkel: shapeFromRows([[4, 4, 1, 1, 1, 1], [4, 4, 1, 1, 1, 1], [4, 4, 1, 1, 1, 1]]),
    treppe: shapeFromRows([[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]]),
    podest: shapeFromRows([[2, 2, 2, 2], [2, 2, 2, 2], [3, 3, 1, 1]]),
    nut: shapeFromRows([[2, 2, 1, 1, 2, 2], [2, 2, 1, 1, 2, 2], [2, 2, 1, 1, 2, 2], [2, 2, 1, 1, 2, 2]])
  };
  SIMS.SHAPES = SHAPES;

  function isoSVG(sh, o) {
    o = o || {};
    var s = o.scale || 24, c = Math.cos(Math.PI / 6);
    function P(x, y, z) { return [(x + y) * c * s, (x - y) * 0.5 * s - z * s]; }
    function pt(p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }
    var has = sh.has;
    function topF(x, y, z) { return has(x, y, z) && !has(x, y, z + 1); }
    function frontF(x, y, z) { return has(x, y, z) && !has(x, y - 1, z); }
    function rightF(x, y, z) { return has(x, y, z) && !has(x + 1, y, z); }

    var faces = [];
    for (var x = 0; x < sh.X; x++) for (var y = 0; y < sh.Y; y++) for (var z = 0; z < sh.Z; z++) {
      if (!has(x, y, z)) continue;
      var key = x - y + z;
      if (topF(x, y, z)) faces.push({ k: key, o: 2, cls: 'f-top',
        poly: [P(x, y, z + 1), P(x + 1, y, z + 1), P(x + 1, y + 1, z + 1), P(x, y + 1, z + 1)],
        edges: [
          [P(x, y, z + 1), P(x + 1, y, z + 1), topF(x, y - 1, z)],
          [P(x + 1, y, z + 1), P(x + 1, y + 1, z + 1), topF(x + 1, y, z)],
          [P(x + 1, y + 1, z + 1), P(x, y + 1, z + 1), topF(x, y + 1, z)],
          [P(x, y + 1, z + 1), P(x, y, z + 1), topF(x - 1, y, z)]
        ] });
      if (frontF(x, y, z)) faces.push({ k: key, o: 0, cls: 'f-front',
        poly: [P(x, y, z), P(x + 1, y, z), P(x + 1, y, z + 1), P(x, y, z + 1)],
        edges: [
          [P(x, y, z), P(x + 1, y, z), frontF(x, y, z - 1)],
          [P(x + 1, y, z), P(x + 1, y, z + 1), frontF(x + 1, y, z)],
          [P(x + 1, y, z + 1), P(x, y, z + 1), frontF(x, y, z + 1)],
          [P(x, y, z + 1), P(x, y, z), frontF(x - 1, y, z)]
        ] });
      if (rightF(x, y, z)) faces.push({ k: key, o: 1, cls: 'f-right',
        poly: [P(x + 1, y, z), P(x + 1, y + 1, z), P(x + 1, y + 1, z + 1), P(x + 1, y, z + 1)],
        edges: [
          [P(x + 1, y, z), P(x + 1, y + 1, z), rightF(x, y, z - 1)],
          [P(x + 1, y + 1, z), P(x + 1, y + 1, z + 1), rightF(x, y + 1, z)],
          [P(x + 1, y + 1, z + 1), P(x + 1, y, z + 1), rightF(x, y, z + 1)],
          [P(x + 1, y, z + 1), P(x + 1, y, z), rightF(x, y - 1, z)]
        ] });
    }
    faces.sort(function (a, b) { return a.k - b.k || a.o - b.o; });

    var pts = [];
    faces.forEach(function (f) { f.poly.forEach(function (p) { pts.push(p); }); });
    var arrow = '';
    if (o.arrow) {
      var hz = sh.Z / 2, ax = sh.X / 2;
      var a1 = P(ax, -2.6, hz), a2 = P(ax, -0.35, hz);
      pts.push(a1);
      arrow = '<line x1="' + a1[0].toFixed(1) + '" y1="' + a1[1].toFixed(1) + '" x2="' + a2[0].toFixed(1) + '" y2="' + a2[1].toFixed(1) +
        '" class="iso-arrow" marker-end="url(#isoArr)"/>' +
        '<text x="' + (a1[0] - 14).toFixed(1) + '" y="' + (a1[1] + 18).toFixed(1) + '" class="iso-label">V</text>';
    }
    var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    pts.forEach(function (p) { minX = Math.min(minX, p[0]); maxX = Math.max(maxX, p[0]); minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]); });
    var pad = 12;
    if (o.arrow) { minX -= 20; maxY += 16; }
    var vb = (minX - pad).toFixed(1) + ' ' + (minY - pad).toFixed(1) + ' ' + (maxX - minX + 2 * pad).toFixed(1) + ' ' + (maxY - minY + 2 * pad).toFixed(1);
    var body = faces.map(function (f) {
      var e = f.edges.filter(function (ed) { return !ed[2]; }).map(function (ed) { return 'M' + pt(ed[0]) + 'L' + pt(ed[1]); }).join('');
      return '<polygon points="' + f.poly.map(pt).join(' ') + '" class="' + f.cls + '"/>' + (e ? '<path d="' + e + '" class="iso-edge"/>' : '');
    }).join('');
    var w = (maxX - minX + 2 * pad), h = (maxY - minY + 2 * pad);
    return '<svg class="iso" viewBox="' + vb + '" width="' + Math.round(w * (o.zoom || 1)) + '" height="' + Math.round(h * (o.zoom || 1)) + '" role="img" aria-label="Raumbild des Körpers">' +
      '<defs><marker id="isoArr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="iso-arrowhead"/></marker></defs>' +
      body + arrow + '</svg>';
  }

  function makeView(sh, type) {
    var X = sh.X, Y = sh.Y, Z = sh.Z, v;
    if (type === 'front') v = { W: X, H: Z, D: Y, occ: function (i, j, k) { return sh.has(i, k, Z - 1 - j); } };
    else if (type === 'top') v = { W: X, H: Y, D: Z, occ: function (i, j, k) { return sh.has(i, Y - 1 - j, Z - 1 - k); } };
    else v = { W: Y, H: Z, D: X, occ: function (i, j, k) { return sh.has(k, Y - 1 - i, Z - 1 - j); } };
    v.lines = computeLines(v);
    return v;
  }

  function computeLines(v) {
    function occ(i, j, k) { return i >= 0 && j >= 0 && i < v.W && j < v.H && v.occ(i, j, k); }
    function first(i, j) { for (var k = 0; k < v.D; k++) if (occ(i, j, k)) return k; return Infinity; }
    function classify(a, b) {
      var fa = first(a[0], a[1]), fb = first(b[0], b[1]), m = Math.min(fa, fb), vis = false, hid = false;
      for (var k = 0; k < v.D; k++) {
        if (occ(a[0], a[1], k) !== occ(b[0], b[1], k)) { if (k <= m) vis = true; else hid = true; }
      }
      return vis ? 'v' : hid ? 'h' : null;
    }
    var segs = [];
    for (var i = 0; i <= v.W; i++) for (var j = 0; j < v.H; j++) {
      var t = classify([i - 1, j], [i, j]);
      if (t) segs.push({ o: 'v', at: i, a: j, b: j + 1, t: t });
    }
    for (var j2 = 0; j2 <= v.H; j2++) for (var i2 = 0; i2 < v.W; i2++) {
      var t2 = classify([i2, j2 - 1], [i2, j2]);
      if (t2) segs.push({ o: 'h', at: j2, a: i2, b: i2 + 1, t: t2 });
    }
    // zusammenfassen
    segs.sort(function (p, q) { return p.o < q.o ? -1 : p.o > q.o ? 1 : p.t < q.t ? -1 : p.t > q.t ? 1 : p.at - q.at || p.a - q.a; });
    var out = [];
    segs.forEach(function (s) {
      var l = out[out.length - 1];
      if (l && l.o === s.o && l.t === s.t && l.at === s.at && l.b === s.a) l.b = s.b;
      else out.push({ o: s.o, at: s.at, a: s.a, b: s.b, t: s.t });
    });
    return out;
  }

  function viewKey(lines) {
    return lines.map(function (l) { return l.o + l.at + ':' + l.a + '-' + l.b + l.t; }).sort().join('|');
  }
  function mirrorH(v) {
    return { W: v.W, H: v.H, lines: v.lines.map(function (l) {
      return l.o === 'v' ? { o: 'v', at: v.W - l.at, a: l.a, b: l.b, t: l.t } : { o: 'h', at: l.at, a: v.W - l.b, b: v.W - l.a, t: l.t };
    }) };
  }
  function mirrorV(v) {
    return { W: v.W, H: v.H, lines: v.lines.map(function (l) {
      return l.o === 'h' ? { o: 'h', at: v.H - l.at, a: l.a, b: l.b, t: l.t } : { o: 'v', at: l.at, a: v.H - l.b, b: v.H - l.a, t: l.t };
    }) };
  }

  function viewPaths(v, ox, oy, c) {
    var vis = '', hid = '';
    v.lines.forEach(function (l) {
      var d = l.o === 'v'
        ? 'M' + (ox + l.at * c) + ',' + (oy + l.a * c) + 'V' + (oy + l.b * c)
        : 'M' + (ox + l.a * c) + ',' + (oy + l.at * c) + 'H' + (ox + l.b * c);
      if (l.t === 'v') vis += d; else hid += d;
    });
    return (hid ? '<path d="' + hid + '" class="v-hid"/>' : '') + (vis ? '<path d="' + vis + '" class="v-line"/>' : '');
  }

  function viewSVG(v, o) {
    o = o || {};
    var c = o.cell || 22, pad = 10;
    var W = v.W * c + 2 * pad, H = v.H * c + 2 * pad;
    var box = o.box ? Math.max(W, H) : 0;
    var ox = pad + (box ? (box - W) / 2 : 0), oy = pad + (box ? (box - H) / 2 : 0);
    var vw = box || W, vh = box || H;
    return '<svg class="view svgc" viewBox="0 0 ' + vw + ' ' + vh + '" width="' + vw + '" height="' + vh + '">' + viewPaths(v, ox, oy, c) + '</svg>';
  }

  function dtpSVG(sh, o) {
    o = o || {};
    var c = o.cell || 22, gap = 34, pad = 22;
    var V = makeView(sh, 'front'), S = makeView(sh, 'left'), D = makeView(sh, 'top');
    var vx = pad, vy = pad + 12, sx = vx + V.W * c + gap, dy = vy + V.H * c + gap;
    var W = Math.max(sx + S.W * c + pad, sx + 92), H = dy + D.H * c + pad;
    var proj =
      '<path class="proj" d="' +
      'M' + (vx + V.W * c) + ',' + vy + 'H' + sx + 'M' + (vx + V.W * c) + ',' + (vy + V.H * c) + 'H' + sx +
      'M' + vx + ',' + (vy + V.H * c) + 'V' + dy + 'M' + (vx + V.W * c) + ',' + (vy + V.H * c) + 'V' + dy + '"/>';
    var lab = function (x, y, t) { return '<text x="' + x + '" y="' + y + '" class="v-lab">' + t + '</text>'; };
    return '<svg class="dtp-svg svgc" viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" role="img" aria-label="Dreitafelprojektion">' +
      proj +
      viewPaths(V, vx, vy, c) + viewPaths(S, sx, vy, c) + viewPaths(D, vx, dy, c) +
      lab(vx, vy - 8, 'Vorderansicht (V)') + lab(sx, vy - 8, 'Seitenansicht (S)') + lab(vx, dy - 8, 'Draufsicht (D)') +
      '</svg>';
  }
  SIMS.isoSVG = isoSVG; SIMS.dtpSVG = dtpSVG;

  SIMS.renderFigures = function (root) {
    var els = root.querySelectorAll('[data-iso],[data-dtp]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.getAttribute('data-done')) continue;
      var key = el.getAttribute('data-iso') || el.getAttribute('data-dtp');
      var sh = SHAPES[key];
      if (!sh) continue;
      el.innerHTML = el.hasAttribute('data-iso') ? isoSVG(sh, { arrow: el.getAttribute('data-arrow') === '1', scale: 22 }) : dtpSVG(sh, { cell: 22 });
      el.setAttribute('data-done', '1');
    }
  };

  /* ---------- Ansichten-Trainer ---------- */
  function randomShape() {
    for (var tries = 0; tries < 200; tries++) {
      var X = rnd(3, 4), Y = rnd(2, 3), rows = [], vals = {};
      for (var y = 0; y < Y; y++) {
        var r = [];
        for (var x = 0; x < X; x++) { var h = rnd(1, 3); r.push(h); vals[h] = 1; }
        rows.push(r);
      }
      if (Object.keys(vals).length < 2) continue;
      return shapeFromRows(rows);
    }
    return SHAPES.podest;
  }

  SIMS.ansichten = function (host) {
    var score = 0, total = 0;
    var NAMES = { front: 'Vorderansicht (Blick in Pfeilrichtung V)', left: 'Seitenansicht von links', top: 'Draufsicht (Blick von oben)' };
    function round() {
      var sh, type, opts, correctKey;
      for (var t = 0; t < 60; t++) {
        sh = randomShape();
        type = pick(['front', 'left', 'top']);
        var Vf = makeView(sh, 'front'), Vl = makeView(sh, 'left'), Vt = makeView(sh, 'top');
        var right = type === 'front' ? Vf : type === 'left' ? Vl : Vt;
        var mir = type === 'top' ? mirrorV(right) : mirrorH(right);
        var others = type === 'front' ? [Vl, Vt] : type === 'left' ? [Vf, Vt] : [Vf, Vl];
        opts = [{ v: right, ok: true }, { v: mir }, { v: others[0] }, { v: others[1] }];
        var keys = opts.map(function (x) { return viewKey(x.v.lines) + '#' + x.v.W + 'x' + x.v.H; });
        var uniq = keys.filter(function (k, i) { return keys.indexOf(k) === i; });
        if (uniq.length === 4) break;
      }
      opts = opts.sort(function () { return Math.random() - 0.5; });
      var maxDim = 0;
      opts.forEach(function (x) { maxDim = Math.max(maxDim, x.v.W, x.v.H); });
      var cell = Math.floor(120 / maxDim);

      host.innerHTML =
        '<div class="sim split">' +
          '<div><div class="sim-stage" style="display:grid;place-items:center;min-height:220px">' + isoSVG(sh, { arrow: true, scale: 30 }) + '</div>' +
          '<p class="note" style="margin-top:6px">Der Pfeil <b>V</b> zeigt die Blickrichtung der Vorderansicht. Verdeckte Kanten sind gestrichelt.</p></div>' +
          '<div class="card">' +
            '<div class="quiz-progress"><span>Richtig: ' + score + ' / ' + total + '</span></div>' +
            '<div class="quiz-q">Welches Bild ist die <b>' + NAMES[type] + '</b>?</div>' +
            '<div class="view-options">' + opts.map(function (x, i) {
              return '<button type="button" class="view-opt" data-i="' + i + '" aria-label="Möglichkeit ' + (i + 1) + '">' + viewSVG(x.v, { cell: cell, box: true }) + '</button>';
            }).join('') + '</div>' +
            '<div id="avFb"></div>' +
          '</div>' +
        '</div>';

      host.onclick = function (e) {
        if (e.target.closest('[data-next]')) { round(); return; }
        var b = e.target.closest('.view-opt');
        if (!b || b.disabled) return;
        var i = +b.getAttribute('data-i'), ok = opts[i].ok;
        total++; if (ok) score++;
        var all = host.querySelectorAll('.view-opt');
        for (var k = 0; k < all.length; k++) { all[k].disabled = true; if (opts[k].ok) all[k].classList.add('correct'); }
        if (!ok) b.classList.add('wrong');
        var hint = type === 'left'
          ? 'Tipp: Bei der Seitenansicht <b>von links</b> ist <b>vorne rechts</b>. Die gespiegelte Version wäre die Ansicht von rechts.'
          : type === 'top'
          ? 'Tipp: In der Draufsicht ist die <b>Vorderkante unten</b> (zur Vorderansicht hin).'
          : 'Tipp: Schau genau in Pfeilrichtung V. Die gespiegelte Version wäre die Rückansicht.';
        host.querySelector('#avFb').innerHTML =
          '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Richtig!' : '✗ Nicht ganz.') + '</b> ' + hint + '</div>' +
          '<p style="margin:12px 0 4px"><b>Die komplette Dreitafelprojektion:</b></p>' +
          '<div style="overflow-x:auto">' + dtpSVG(sh, { cell: 20 }) + '</div>' +
          '<div class="quiz-nav"><button type="button" class="btn primary" data-next>Nächster Körper →</button></div>';
      };
    }
    round();
  };

  /* ---------- Maßstab-Trainer ---------- */
  SIMS.massstab = function (host) {
    var score = 0, total = 0, cur;
    var scales = [[1, 2], [1, 5], [1, 10], [1, 20], [1, 50], [1, 100], [2, 1], [5, 1], [10, 1]];
    function gen() {
      var s = pick(scales), a = s[0], b = s[1], mode = pick(['zeichnung', 'original', 'massstab']);
      var orig = b > a ? pick([20, 40, 60, 80, 100, 150, 200, 250, 300, 500, 1000, 1500, 2000]) * (b >= 50 ? 10 : 1) : pick([2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25]);
      var zeich = orig * a / b;
      if (mode === 'zeichnung') return { q: 'Maßstab <b>' + a + ' : ' + b + '</b>. Das Original ist <b>' + fmt(orig) + ' mm</b> lang. Wie lang ist es in der Zeichnung?', ans: zeich, unit: 'mm', sol: fmt(orig) + ' · ' + a + ' / ' + b + ' = ' + fmt(zeich) + ' mm' };
      if (mode === 'original') return { q: 'Maßstab <b>' + a + ' : ' + b + '</b>. In der Zeichnung misst du <b>' + fmt(zeich) + ' mm</b>. Wie groß ist das Original (= Maßzahl)?', ans: orig, unit: 'mm', sol: fmt(zeich) + ' · ' + b + ' / ' + a + ' = ' + fmt(orig) + ' mm' };
      return { q: 'Zeichnung <b>' + fmt(zeich) + ' mm</b>, Original <b>' + fmt(orig) + ' mm</b>. Welcher Maßstab? Gib nur die Zahl ein, die <b>nicht 1</b> ist (z. B. 1 : 5 → 5, und 5 : 1 → auch 5). Bei 1 : 1 gib 1 ein.', ans: a === 1 ? b : a, unit: '', sol: fmt(zeich) + ' : ' + fmt(orig) + ' = ' + a + ' : ' + b + (a < b ? ' (Verkleinerung)' : a > b ? ' (Vergrößerung)' : '') };
    }
    function show() {
      cur = gen();
      host.innerHTML = '<div class="card" style="max-width:640px">' +
        '<div class="quiz-progress"><span>Richtig: ' + score + ' / ' + total + '</span></div>' +
        '<div class="formula" style="font-size:1rem">Maßstab = Zeichnung : Wirklichkeit</div>' +
        '<p class="quiz-q">' + cur.q + '</p>' +
        '<form class="answer-row" id="msForm"><input type="text" inputmode="decimal" id="msIn" placeholder="Antwort" autocomplete="off" aria-label="Antwort"> <span>' + cur.unit + '</span> <button class="btn primary" type="submit">Prüfen</button></form>' +
        '<div id="msFb"></div></div>';
      host.querySelector('#msForm').onsubmit = function (e) {
        e.preventDefault();
        var v = num(host.querySelector('#msIn').value);
        if (isNaN(v)) return;
        var ok = close(v, cur.ans);
        total++; if (ok) score++;
        host.querySelector('#msFb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Richtig!' : '✗ Leider falsch.') + '</b><div class="calc">' + cur.sol + '</div></div>' +
          '<div class="quiz-nav"><button type="button" class="btn primary" id="msNext">Nächste Aufgabe →</button></div>';
        host.querySelector('#msNext').onclick = show;
        host.querySelector('#msForm button').disabled = true;
      };
    }
    show();
  };

  /* =========================================================
     2) Hebel-Simulator
     ========================================================= */
  SIMS.hebel = function (host) {
    var st = { F1: 4, r1: 30, F2: 6, r2: 20 }, task = null;
    host.innerHTML =
      '<div class="sim split">' +
        '<div><div class="sim-stage"><svg id="hbSvg" viewBox="0 0 600 300" role="img" aria-label="Zweiseitiger Hebel"></svg></div>' +
        '<div class="readout" style="margin-top:10px">' +
          '<div><span>Drehmoment links M₁ = F₁ · r₁</span><b id="hbM1"></b></div>' +
          '<div><span>Drehmoment rechts M₂ = F₂ · r₂</span><b id="hbM2"></b></div>' +
        '</div><div id="hbStatus" class="status" style="margin-top:10px"></div></div>' +
        '<div class="card controls">' +
          '<h3 style="margin:0">Zweiseitiger Hebel (Wippe)</h3>' +
          ctl('F1', 'Kraft links F₁', 0.5, 10, 0.5, 'N') + ctl('r1', 'Hebelarm links r₁', 5, 50, 5, 'cm') +
          ctl('F2', 'Kraft rechts F₂', 0.5, 10, 0.5, 'N') + ctl('r2', 'Hebelarm rechts r₂', 5, 50, 5, 'cm') +
          '<div class="formula" style="font-size:1rem;margin:0">Gleichgewicht: F₁ · r₁ = F₂ · r₂</div>' +
          '<hr style="border:0;border-top:1px solid var(--border);width:100%">' +
          '<div><b>Rechen-Challenge</b><p class="small muted" style="margin:2px 0 8px">Ich gebe dir F₁, r₁ und r₂. Berechne F₂ für Gleichgewicht!</p>' +
          '<button type="button" class="btn small" id="hbNew">🎲 Neue Aufgabe</button><div id="hbTask" style="margin-top:8px"></div></div>' +
        '</div>' +
      '</div>';

    function ctl(id, label, min, max, step, unit) {
      return '<div class="control"><label for="hb_' + id + '">' + label + ' <output id="hbo_' + id + '"></output></label>' +
        '<input type="range" id="hb_' + id + '" min="' + min + '" max="' + max + '" step="' + step + '" data-k="' + id + '" data-u="' + unit + '"></div>';
    }
    var svg = host.querySelector('#hbSvg');
    ['F1', 'r1', 'F2', 'r2'].forEach(function (k) {
      var inp = host.querySelector('#hb_' + k);
      inp.value = st[k];
      inp.addEventListener('input', function () { st[k] = +inp.value; draw(); });
    });

    function draw() {
      ['F1', 'r1', 'F2', 'r2'].forEach(function (k) {
        var inp = host.querySelector('#hb_' + k);
        inp.value = st[k];
        host.querySelector('#hbo_' + k).textContent = fmt(st[k], 1) + ' ' + inp.getAttribute('data-u');
      });
      var M1 = st.F1 * st.r1 / 100, M2 = st.F2 * st.r2 / 100, diff = M2 - M1;
      var ang = Math.max(-11, Math.min(11, diff * 6));
      if (Math.abs(diff) < 1e-9) ang = 0;
      var cx = 300, cy = 120, k = 5;
      var rad = ang * Math.PI / 180;
      function onBeam(d) { return [cx + d * k * Math.cos(rad), cy + d * k * Math.sin(rad)]; }
      var holes = '';
      for (var d = -50; d <= 50; d += 5) {
        var p = onBeam(d);
        holes += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="2.2" class="hb-hole"/>';
      }
      function weight(dist, F, side) {
        var p = onBeam(dist), n = Math.max(1, Math.round(F * 2)), h = 6, w = 26;
        var top = p[1] + 34, g = '<line x1="' + p[0] + '" y1="' + p[1] + '" x2="' + p[0] + '" y2="' + top + '" class="hb-string"/>';
        for (var i = 0; i < n; i++) g += '<rect x="' + (p[0] - w / 2) + '" y="' + (top + i * (h + 1)) + '" width="' + w + '" height="' + h + '" rx="2" class="hb-disc"/>';
        var bottom = top + n * (h + 1);
        g += '<line x1="' + p[0] + '" y1="' + (bottom + 4) + '" x2="' + p[0] + '" y2="' + (bottom + 34) + '" class="hb-force" marker-end="url(#hbArr)"/>';
        g += '<text x="' + (p[0] + (side < 0 ? -10 : 10)) + '" y="' + (bottom + 28) + '" text-anchor="' + (side < 0 ? 'end' : 'start') + '" class="hb-txt">F' + (side < 0 ? '₁' : '₂') + ' = ' + fmt(F, 1) + ' N</text>';
        return g;
      }
      var l = onBeam(-50), r = onBeam(50);
      svg.innerHTML =
        '<defs><marker id="hbArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" class="hb-arrowhead"/></marker></defs>' +
        '<polygon points="300,128 280,175 320,175" class="hb-stand"/><rect x="250" y="175" width="100" height="10" rx="3" class="hb-stand"/>' +
        '<line x1="' + l[0] + '" y1="' + l[1] + '" x2="' + r[0] + '" y2="' + r[1] + '" class="hb-beam"/>' + holes +
        '<circle cx="300" cy="120" r="6" class="hb-pivot"/>' +
        // Hebelarm-Bemaßung
        '<line x1="' + (300 - st.r1 * 5) + '" y1="262" x2="300" y2="262" class="hb-dim"/><text x="' + (300 - st.r1 * 2.5) + '" y="256" text-anchor="middle" class="hb-txt">r₁ = ' + st.r1 + ' cm</text>' +
        '<line x1="300" y1="282" x2="' + (300 + st.r2 * 5) + '" y2="282" class="hb-dim"/><text x="' + (300 + st.r2 * 2.5) + '" y="276" text-anchor="middle" class="hb-txt">r₂ = ' + st.r2 + ' cm</text>' +
        '<text x="300" y="200" text-anchor="middle" class="hb-txt small-muted">Drehpunkt</text>' +
        weight(-st.r1, st.F1, -1) + weight(st.r2, st.F2, 1);
      host.querySelector('#hbM1').textContent = fmt(st.F1, 1) + ' N · ' + fmt(st.r1 / 100, 2) + ' m = ' + fmt(M1, 3) + ' Nm';
      host.querySelector('#hbM2').textContent = fmt(st.F2, 1) + ' N · ' + fmt(st.r2 / 100, 2) + ' m = ' + fmt(M2, 3) + ' Nm';
      var s = host.querySelector('#hbStatus');
      if (Math.abs(diff) < 1e-9) { s.className = 'status ok'; s.textContent = '⚖️ Gleichgewicht: M₁ = M₂'; }
      else { s.className = 'status no'; s.textContent = diff > 0 ? '↘ Rechts dreht stärker (M₂ > M₁), der Hebel kippt nach rechts' : '↙ Links dreht stärker (M₁ > M₂), der Hebel kippt nach links'; }
    }

    host.querySelector('#hbNew').onclick = function () {
      for (var t = 0; t < 500; t++) {
        var F1 = rnd(1, 20) / 2, r1 = rnd(1, 10) * 5, r2 = rnd(1, 10) * 5, F2 = F1 * r1 / r2;
        if (r1 !== r2 && F2 >= 0.5 && F2 <= 10 && Math.abs(F2 * 2 - Math.round(F2 * 2)) < 1e-9) { task = { F1: F1, r1: r1, r2: r2, F2: F2 }; break; }
      }
      st.F1 = task.F1; st.r1 = task.r1; st.r2 = task.r2; st.F2 = 0.5; draw();
      host.querySelector('#hbTask').innerHTML =
        '<p style="margin:0 0 6px">F₁ = <b>' + fmt(task.F1, 1) + ' N</b>, r₁ = <b>' + task.r1 + ' cm</b>, r₂ = <b>' + task.r2 + ' cm</b>. Wie groß muss F₂ sein?</p>' +
        '<form class="answer-row" id="hbForm"><input type="text" inputmode="decimal" id="hbIn" placeholder="F₂ in N" aria-label="F2 in Newton"><button class="btn primary small" type="submit">Prüfen</button></form><div id="hbFb"></div>';
      host.querySelector('#hbForm').onsubmit = function (e) {
        e.preventDefault();
        var v = num(host.querySelector('#hbIn').value);
        if (isNaN(v)) return;
        var ok = close(v, task.F2);
        host.querySelector('#hbFb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Richtig!' : '✗ Noch nicht.') + '</b>' +
          '<div class="calc">F₂ = F₁ · r₁ / r₂\n   = ' + fmt(task.F1, 1) + ' N · ' + task.r1 + ' cm / ' + task.r2 + ' cm\n   = ' + fmt(task.F2, 2) + ' N</div></div>';
        st.F2 = task.F2; draw();
      };
    };
    draw();
  };

  /* =========================================================
     3) Zahnrad-Simulator
     ========================================================= */
  function gearPath(z, r, m) {
    var ro = r + m, rr = r - 1.25 * m, p = 2 * Math.PI / z, d = '';
    for (var k = 0; k < z; k++) {
      var a = k * p, pts = [[rr, a - 0.27 * p], [ro, a - 0.13 * p], [ro, a + 0.13 * p], [rr, a + 0.27 * p]];
      pts.forEach(function (q, i) {
        var x = (q[0] * Math.cos(q[1])).toFixed(2), y = (q[0] * Math.sin(q[1])).toFixed(2);
        d += (k === 0 && i === 0 ? 'M' : 'L') + x + ',' + y;
      });
    }
    return d + 'Z';
  }

  SIMS.getriebe = function (host) {
    var st = { z1: 12, z2: 36, n1: 30 }, theta = 0, running = true, raf = 0, last = 0;
    host.innerHTML =
      '<div class="sim split">' +
        '<div><div class="sim-stage"><svg id="grSvg" viewBox="0 0 600 340" role="img" aria-label="Zwei Zahnräder"></svg></div>' +
        '<div class="readout" style="margin-top:10px">' +
          '<div><span>Übersetzung i = z₂ / z₁</span><b id="grI"></b></div>' +
          '<div><span>Drehzahl Abtrieb n₂</span><b id="grN2"></b></div>' +
          '<div><span>Drehmoment Abtrieb (ideal)</span><b id="grM"></b></div>' +
        '</div><div id="grInfo" class="status neutral" style="margin-top:10px"></div></div>' +
        '<div class="card controls">' +
          '<h3 style="margin:0">Zahnradgetriebe</h3>' +
          '<div class="control"><label for="gr_z1">Zähne Antrieb z₁ <output id="gro_z1"></output></label><input type="range" id="gr_z1" min="6" max="60" step="1"></div>' +
          '<div class="control"><label for="gr_z2">Zähne Abtrieb z₂ <output id="gro_z2"></output></label><input type="range" id="gr_z2" min="6" max="60" step="1"></div>' +
          '<div class="control"><label for="gr_n1">Drehzahl Antrieb n₁ <output id="gro_n1"></output></label><input type="range" id="gr_n1" min="6" max="60" step="1"></div>' +
          '<div class="formula" style="font-size:1rem;margin:0">i = n₁ / n₂ = z₂ / z₁ = d₂ / d₁</div>' +
          '<div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" class="btn small" id="grPause">⏸ Pause</button>' +
          '<button type="button" class="btn small" data-preset="60,15">Aufgabe 6 (60 → 15)</button><button type="button" class="btn small" data-preset="9,54">Aufgabe 7 (9 → 54)</button></div>' +
          '<p class="small muted" style="margin:0">Der rote Punkt zeigt, wie oft sich jedes Rad dreht. Bei zwei Zahnrädern dreht der Abtrieb immer <b>andersherum</b>.</p>' +
        '</div>' +
      '</div>';
    var svg = host.querySelector('#grSvg');
    var g1, g2;

    function build() {
      ['z1', 'z2', 'n1'].forEach(function (k) {
        host.querySelector('#gr_' + k).value = st[k];
        host.querySelector('#gro_' + k).textContent = st[k] + (k === 'n1' ? ' U/min' : '');
      });
      var z1 = st.z1, z2 = st.z2;
      var m = Math.min(540 / (z1 + z2 + 4), 300 / (Math.max(z1, z2) + 2.5));
      var r1 = m * z1 / 2, r2 = m * z2 / 2;
      var total = r1 + r2, cx1 = 300 - total / 2, cx2 = cx1 + total, cy = 170;
      svg.innerHTML =
        '<g transform="translate(' + cx1.toFixed(1) + ',' + cy + ')"><g id="g1"><path d="' + gearPath(z1, r1, m) + '" class="gear g-a"/>' +
          '<circle r="' + Math.max(4, r1 * 0.18).toFixed(1) + '" class="gear-hub"/><circle cx="' + (r1 * 0.6).toFixed(1) + '" r="' + Math.max(3, m * 0.6).toFixed(1) + '" class="gear-dot"/></g>' +
          '<text y="' + (-(r1 + m) - 10).toFixed(1) + '" text-anchor="middle" class="hb-txt">Antrieb z₁ = ' + z1 + '</text></g>' +
        '<g transform="translate(' + cx2.toFixed(1) + ',' + cy + ')"><g id="g2"><path d="' + gearPath(z2, r2, m) + '" class="gear g-b"/>' +
          '<circle r="' + Math.max(4, r2 * 0.18).toFixed(1) + '" class="gear-hub"/><circle cx="' + (-r2 * 0.6).toFixed(1) + '" r="' + Math.max(3, m * 0.6).toFixed(1) + '" class="gear-dot"/></g>' +
          '<text y="' + (-(r2 + m) - 10).toFixed(1) + '" text-anchor="middle" class="hb-txt">Abtrieb z₂ = ' + z2 + '</text></g>';
      g1 = svg.querySelector('#g1'); g2 = svg.querySelector('#g2');
      st.off2 = Math.PI + Math.PI / z2; // Zahnlücke greift in Zahn
      var i = z2 / z1, n2 = st.n1 / i;
      host.querySelector('#grI').textContent = fmt(i, 2) + (i > 1 ? ' (> 1)' : i < 1 ? ' (< 1)' : '');
      host.querySelector('#grN2').textContent = fmt(n2, 1) + ' U/min';
      host.querySelector('#grM').textContent = fmt(i, 2) + ' · M₁';
      var info = host.querySelector('#grInfo');
      if (i > 1) info.innerHTML = '🐢 <b>Übersetzung ins Langsame:</b> Der Abtrieb dreht langsamer, aber mit mehr Drehmoment (mehr Kraft). Das braucht man z. B. am Berg.';
      else if (i < 1) info.innerHTML = '🐇 <b>Übersetzung ins Schnelle:</b> Der Abtrieb dreht schneller, aber mit weniger Drehmoment. Pro Umdrehung von z₁ dreht z₂ sich ' + fmt(1 / i, 2) + '-mal.';
      else info.innerHTML = '⚖️ i = 1: gleiche Drehzahl, gleiches Drehmoment, nur die Drehrichtung kehrt sich um.';
      paint();
    }
    function paint() {
      var a1 = theta, a2 = -theta * st.z1 / st.z2 + st.off2;
      g1.setAttribute('transform', 'rotate(' + (a1 * 180 / Math.PI).toFixed(2) + ')');
      g2.setAttribute('transform', 'rotate(' + (a2 * 180 / Math.PI).toFixed(2) + ')');
    }
    function loop(t) {
      if (!last) last = t;
      var dt = Math.min(0.05, (t - last) / 1000); last = t;
      if (running) { theta += st.n1 / 60 * 2 * Math.PI * dt; paint(); }
      raf = requestAnimationFrame(loop);
    }
    ['z1', 'z2', 'n1'].forEach(function (k) {
      host.querySelector('#gr_' + k).addEventListener('input', function (e) { st[k] = +e.target.value; build(); });
    });
    host.querySelector('#grPause').onclick = function () { running = !running; this.textContent = running ? '⏸ Pause' : '▶ Weiter'; };
    host.addEventListener('click', function (e) {
      var b = e.target.closest('[data-preset]'); if (!b) return;
      var p = b.getAttribute('data-preset').split(','); st.z1 = +p[0]; st.z2 = +p[1]; theta = 0; build();
    });
    build();
    raf = requestAnimationFrame(loop);
    cleanups.push(function () { cancelAnimationFrame(raf); });
  };

  /* ---------- Übersetzungs-Rechentrainer ---------- */
  SIMS.uebersetzung = function (host) {
    var score = 0, total = 0, cur;
    function gen() {
      var type = rnd(0, 4);
      if (type === 0) {
        var z1 = pick([10, 12, 15, 20, 24, 30, 40, 48, 60]), z2 = pick([10, 12, 15, 20, 24, 30, 36, 40, 45, 60]);
        if (z1 === z2) z2 = z1 * 2;
        return { q: 'Das antreibende Zahnrad hat <b>z₁ = ' + z1 + '</b> Zähne, das angetriebene <b>z₂ = ' + z2 + '</b> Zähne. Berechne das Übersetzungsverhältnis i.', ans: z2 / z1, unit: '', sol: 'i = z₂ / z₁ = ' + z2 + ' / ' + z1 + ' = ' + fmt(z2 / z1, 2) };
      }
      if (type === 1) {
        var a = pick([30, 40, 48, 60]), b = pick([10, 12, 15, 20]);
        return { q: 'z₁ = ' + a + ' (Antrieb), z₂ = ' + b + '. Wie oft dreht sich z₂, wenn sich z₁ <b>einmal</b> dreht?', ans: a / b, unit: 'Umdrehungen', sol: 'n₂ = n₁ · z₁ / z₂ = 1 · ' + a + ' / ' + b + ' = ' + fmt(a / b, 2) };
      }
      if (type === 2) {
        var zz = pick([8, 9, 10, 12, 15]), i = pick([2, 3, 4, 5, 6]);
        return { q: 'Das antreibende Zahnrad hat <b>' + zz + '</b> Zähne. Das Übersetzungsverhältnis beträgt <b>i = ' + i + '</b>. Wie viele Zähne hat z₂?', ans: zz * i, unit: 'Zähne', sol: 'i = z₂ / z₁  →  z₂ = i · z₁ = ' + i + ' · ' + zz + ' = ' + (zz * i) };
      }
      if (type === 3) {
        var n1 = pick([1200, 1500, 2400, 3000, 3600]), i3 = pick([2, 3, 4, 5, 6]), d1 = pick([40, 50, 58, 60, 80]);
        return { q: 'Riementrieb: Antrieb <b>n₁ = ' + n1 + ' 1/min</b>, Durchmesser <b>d₁ = ' + d1 + ' mm</b>. Abtrieb <b>n₂ = ' + (n1 / i3) + ' 1/min</b>. Bestimme den Durchmesser d₂ des Abtriebsrades.', ans: d1 * i3, unit: 'mm', sol: 'i = n₁ / n₂ = ' + n1 + ' / ' + (n1 / i3) + ' = ' + i3 + '\ni = d₂ / d₁  →  d₂ = i · d₁ = ' + i3 + ' · ' + d1 + ' mm = ' + (d1 * i3) + ' mm' };
      }
      var n = pick([60, 90, 120, 300]), z1b = pick([12, 16, 20, 24]), z2b = pick([36, 48, 60]);
      return { q: 'Antrieb: z₁ = ' + z1b + ', n₁ = ' + n + ' U/min. Abtrieb: z₂ = ' + z2b + '. Wie groß ist die Drehzahl n₂?', ans: n * z1b / z2b, unit: 'U/min', sol: 'n₁ · z₁ = n₂ · z₂  →  n₂ = n₁ · z₁ / z₂ = ' + n + ' · ' + z1b + ' / ' + z2b + ' = ' + fmt(n * z1b / z2b, 2) + ' U/min' };
    }
    function show() {
      cur = gen();
      host.innerHTML = '<div class="card" style="max-width:680px">' +
        '<div class="quiz-progress"><span>Richtig: ' + score + ' / ' + total + '</span></div>' +
        '<div class="formula" style="font-size:1rem">i = n₁ / n₂ = z₂ / z₁ = d₂ / d₁</div>' +
        '<p class="quiz-q">' + cur.q + '</p>' +
        '<form class="answer-row" id="ueForm"><input type="text" inputmode="decimal" id="ueIn" placeholder="Antwort" autocomplete="off" aria-label="Antwort"> <span>' + cur.unit + '</span> <button class="btn primary" type="submit">Prüfen</button></form>' +
        '<div id="ueFb"></div></div>';
      host.querySelector('#ueForm').onsubmit = function (e) {
        e.preventDefault();
        var v = num(host.querySelector('#ueIn').value);
        if (isNaN(v)) return;
        var ok = close(v, cur.ans, 0.02);
        total++; if (ok) score++;
        host.querySelector('#ueFb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Richtig!' : '✗ Leider falsch.') + '</b><div class="calc">' + cur.sol + '</div></div>' +
          '<div class="quiz-nav"><button type="button" class="btn primary" id="ueNext">Nächste Aufgabe →</button></div>';
        host.querySelector('#ueNext').onclick = show;
        host.querySelector('#ueForm button').disabled = true;
      };
    }
    show();
  };

  /* ---------- Drehrichtungs-Trainer ---------- */
  SIMS.drehrichtung = function (host) {
    var score = 0, total = 0;
    var STEPS = [
      { t: '⚙️ Zahnrad greift in Zahnrad', flip: true, why: 'Zahnräder im Eingriff: Richtung kehrt sich um' },
      { t: '➰ offener Riemen', flip: false, why: 'offener Riemen: gleiche Richtung' },
      { t: '❎ gekreuzter Riemen', flip: true, why: 'gekreuzter Riemen: Richtung kehrt sich um' },
      { t: '⛓️ Kette', flip: false, why: 'Kette (wie offener Riemen): gleiche Richtung' },
      { t: '🔘 Reibrad', flip: true, why: 'Reibräder berühren sich außen: Richtung kehrt sich um' },
      { t: '🔩 Rad auf derselben Achse', flip: false, why: 'gleiche Achse: gleiche Richtung' }
    ];
    var CW = '↻ im Uhrzeigersinn', CCW = '↺ gegen den Uhrzeigersinn';
    function round() {
      var n = rnd(3, 5), chain = [], dir = Math.random() < 0.5 ? 1 : -1, start = dir, expl = [];
      for (var i = 0; i < n; i++) {
        var s = pick(STEPS); chain.push(s);
        if (s.flip) dir = -dir;
        expl.push(s.why + ' → ' + (dir === 1 ? '↻' : '↺'));
      }
      var load = Math.random() < 0.5, side = pick(['links', 'rechts']);
      var up = (dir === 1 && side === 'links') || (dir === -1 && side === 'rechts');
      var q = load
        ? 'Am Ende sitzt eine <b>Seiltrommel</b>. Das Seil hängt <b>' + side + '</b> an der Trommel herunter. Bewegt sich die Last nach <b>oben</b> oder <b>unten</b>?'
        : 'In welche Richtung dreht sich das <b>letzte Rad</b>?';
      host.innerHTML = '<div class="card" style="max-width:760px">' +
        '<div class="quiz-progress"><span>Richtig: ' + score + ' / ' + total + '</span></div>' +
        '<p style="margin:0">Das Antriebsrad dreht sich <b>' + (start === 1 ? CW : CCW) + '</b>. Dann folgt:</p>' +
        '<div class="chain"><span class="step"><b>Antrieb ' + (start === 1 ? '↻' : '↺') + '</b></span>' + chain.map(function (s) { return '<span class="arrow">→</span><span class="step">' + s.t + '</span>'; }).join('') + '</div>' +
        '<p class="quiz-q">' + q + '</p>' +
        '<div class="dir-btns">' + (load
          ? '<button type="button" class="btn" data-a="up">⬆ Last nach oben</button><button type="button" class="btn" data-a="down">⬇ Last nach unten</button>'
          : '<button type="button" class="btn" data-a="1">↻ Uhrzeigersinn</button><button type="button" class="btn" data-a="-1">↺ Gegen Uhrzeigersinn</button>') +
        '</div><div id="drFb"></div></div>';
      host.onclick = function (e) {
        if (e.target.closest('[data-next]')) { round(); return; }
        var b = e.target.closest('[data-a]'); if (!b || b.disabled) return;
        var a = b.getAttribute('data-a');
        var ok = load ? (a === 'up') === up : +a === dir;
        total++; if (ok) score++;
        var bs = host.querySelectorAll('[data-a]'); for (var i = 0; i < bs.length; i++) bs[i].disabled = true;
        var lastDir = dir === 1 ? '↻ Uhrzeigersinn' : '↺ gegen den Uhrzeigersinn';
        var extra = load ? '<br>Die Trommel dreht ' + lastDir + ', das Seil hängt ' + side + '. Die Trommelseite ' + side + ' bewegt sich nach ' +
          ((dir === 1) === (side === 'rechts') ? 'unten → Seil wird abgewickelt → <b>Last sinkt</b>.' : 'oben → Seil wird aufgewickelt → <b>Last steigt</b>.') : '';
        host.querySelector('#drFb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Richtig!' : '✗ Leider falsch.') + '</b><ol style="margin:6px 0 0">' +
          expl.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol>' + extra + '</div>' +
          '<div class="quiz-nav"><button type="button" class="btn primary" data-next>Nächste Aufgabe →</button></div>';
      };
    }
    round();
  };

  /* =========================================================
     4) Schaltungs-Simulator
     ========================================================= */
  var CIRCUITS = [
    { id: 'und', name: 'UND: Zweihand-Schaltung', load: 'Presse', task: 'Eine Presse darf nur laufen, wenn der Arbeiter <b>beide</b> Taster gleichzeitig drückt (beide Hände sind dann sicher weg).',
      net: { ser: [{ sw: 'NO', k: 'T', label: 'Taster links' }, { sw: 'NO', k: 'T', label: 'Taster rechts' }] },
      sol: '<b>Reihenschaltung</b> zweier <b>Schließer</b> = <b>UND-Schaltung</b>. Strom fließt nur, wenn S1 <b>und</b> S2 geschlossen sind.' },
    { id: 'oder', name: 'ODER: Klingel an zwei Türen', load: 'Klingel', task: 'Eine Klingel soll an der <b>Haustür oder</b> an der <b>Gartentür</b> ausgelöst werden können.',
      net: { par: [{ sw: 'NO', k: 'T', label: 'Haustür' }, { sw: 'NO', k: 'T', label: 'Gartentür' }] },
      sol: '<b>Parallelschaltung</b> zweier <b>Schließer</b> = <b>ODER-Schaltung</b>. Es reicht, wenn <b>einer</b> geschlossen ist.' },
    { id: 'bank', name: 'Bank-Alarm (4 Arbeitsplätze)', load: 'Alarm', task: 'Der Alarm in einer Bank kann durch Schalter an <b>jedem der 4 Arbeitsplätze</b> aktiviert werden.',
      net: { par: [{ sw: 'NO', k: 'S', label: 'Platz 1' }, { sw: 'NO', k: 'S', label: 'Platz 2' }, { sw: 'NO', k: 'S', label: 'Platz 3' }, { sw: 'NO', k: 'S', label: 'Platz 4' }] },
      sol: '4 <b>Schließer parallel</b> (ODER). Jeder einzelne Schalter kann den Alarm auslösen. Stellschalter (rastend) sind sinnvoll, damit der Alarm an bleibt.' },
    { id: 'kuehl', name: 'Kühlschrank-Licht', load: 'Lampe', task: 'Im Kühlschrank soll das Licht <b>ausgehen</b>, wenn die sich schließende Tür auf ein Schaltelement drückt. (Klick = Tür zu/auf)',
      net: { sw: 'NC', k: 'T', label: 'Tür', on: 'Tür zu', off: 'Tür offen', pressed: true },
      sol: 'Man braucht einen <b>Taster als Öffner</b>. Ist die Tür zu, wird der Taster gedrückt und <b>öffnet</b> den Stromkreis, das Licht ist aus. Geht die Tür auf, schließt der Öffner und das Licht geht an.' },
    { id: 'auto', name: 'Auto-Innenlicht', load: 'Lampe', task: 'Das Innenlicht geht an, wenn <b>eine</b> der Vordertüren <b>oder</b> die Heckklappe <b>nicht</b> richtig geschlossen ist. (Klick = auf/zu)',
      net: { par: [{ sw: 'NC', k: 'T', label: 'Fahrertür', on: 'zu', off: 'offen', pressed: true }, { sw: 'NC', k: 'T', label: 'Beifahrertür', on: 'zu', off: 'offen', pressed: true }, { sw: 'NC', k: 'T', label: 'Heckklappe', on: 'zu', off: 'offen', pressed: true }] },
      sol: '3 <b>Taster als Öffner</b>, <b>parallel</b> geschaltet. Geschlossene Türen drücken die Taster (offen = kein Strom). Öffnet sich eine Tür, schließt ihr Öffner und das Licht geht an (ODER).' },
    { id: 'notaus', name: 'Not-Aus im NwT-Raum', load: 'Steckdosen', task: 'Im NwT-Raum gibt es <b>3 Not-Aus-Schalter</b>. Wird <b>einer</b> betätigt, ist die Stromzufuhr zu allen Steckdosen unterbrochen.',
      net: { ser: [{ sw: 'NC', k: 'S', label: 'Not-Aus 1' }, { sw: 'NC', k: 'S', label: 'Not-Aus 2' }, { sw: 'NC', k: 'S', label: 'Not-Aus 3' }] },
      sol: '3 <b>Öffner in Reihe</b>. Normal sind alle geschlossen, also ist Strom da. Wird <b>einer</b> gedrückt, öffnet er und der ganze Stromkreis ist unterbrochen. Not-Aus-Schalter <b>rasten ein</b> (Stellschalter), damit der Strom nicht von allein wiederkommt.' },
    { id: 'wechsel', name: 'Wechselschaltung (Flur)', load: 'Lampe', task: 'Eine Flurlampe soll an <b>beiden Enden</b> des Flurs ein- und ausgeschaltet werden können.',
      wechsel: true,
      sol: 'Zwei <b>Wechsler</b> (Stellschalter-Wechsler), verbunden durch zwei Leitungen. Die Lampe leuchtet, wenn beide Wechsler auf <b>derselben</b> Leitung stehen. Jeder Schalter kann den Zustand umkehren.' }
  ];
  SIMS.CIRCUITS = CIRCUITS;

  SIMS.schaltung = function (host) {
    var cur = CIRCUITS[0], idCounter = 0, state = {};
    host.innerHTML =
      '<div class="seg sim-tabs" id="scTabs">' + CIRCUITS.map(function (c, i) { return '<button type="button" data-c="' + i + '">' + c.name + '</button>'; }).join('') + '</div>' +
      '<div class="sim split"><div><div class="sim-stage" id="scStage"></div><div id="scStatus" class="status" style="margin-top:10px"></div>' +
      '<p class="note">Tippe auf einen Schalter, um ihn zu betätigen. <b>T</b> = Taster (federt zurück), <b>S</b> = Stellschalter (rastet ein).</p></div>' +
      '<div class="card"><h3 id="scName" style="margin-top:0"></h3><p id="scTask"></p><details><summary class="btn small">Erklärung / Lösung</summary><div class="tip" id="scSol" style="margin-top:10px"></div></details></div></div>';

    function prep(n) {
      if (n.sw) { n.id = 'sw' + (idCounter++); state[n.id] = !!n.pressed; }
      (n.ser || n.par || []).forEach(prep);
    }
    function conducts(n) {
      if (n.sw) return n.sw === 'NO' ? state[n.id] : !state[n.id];
      if (n.ser) return n.ser.every(conducts);
      return n.par.some(conducts);
    }
    var SW_W = 100, SW_H = 84, SW_MID = 40;
    function measure(n) {
      if (n.sw) { n.w = SW_W; n.h = SW_H; n.mid = SW_MID; return; }
      if (n.ser) {
        n.ser.forEach(measure);
        n.w = 0; var up = 0, dn = 0;
        n.ser.forEach(function (c) { n.w += c.w; up = Math.max(up, c.mid); dn = Math.max(dn, c.h - c.mid); });
        n.mid = up; n.h = up + dn; return;
      }
      n.par.forEach(measure);
      var maxW = 0, h = 0;
      n.par.forEach(function (c, i) { maxW = Math.max(maxW, c.w); c._top = h; h += c.h + (i < n.par.length - 1 ? 6 : 0); });
      n.w = maxW + 40; n.h = h; n.mid = n.par[0]._top + n.par[0].mid;
    }
    function wire(x1, y1, x2, y2) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="wire"/>'; }
    function drawSw(n, x, y) {
      var pressed = state[n.id], cond = conducts(n), col = cond ? 'sc-on' : 'sc-off', g = '';
      g += '<g class="sw-hit" data-sw="' + n.id + '" role="button" tabindex="0" aria-label="' + n.label + ' betätigen">';
      g += '<rect x="' + x + '" y="' + (y - 40) + '" width="' + SW_W + '" height="' + (SW_H - 4) + '" rx="8" class="sw-bg"/>';
      g += wire(x, y, x + 28, y) + wire(x + 72, y, x + SW_W, y);
      g += '<circle cx="' + (x + 28) + '" cy="' + y + '" r="3" class="sc-dot"/>';
      var lx2, ly2;
      if (n.sw === 'NO') {
        if (pressed) { lx2 = x + 72; ly2 = y; } else { lx2 = x + 68; ly2 = y - 20; }
      } else {
        g += '<line x1="' + (x + 72) + '" y1="' + y + '" x2="' + (x + 72) + '" y2="' + (y - 13) + '" class="wire"/>';
        if (pressed) { lx2 = x + 64; ly2 = y - 28; } else { lx2 = x + 76; ly2 = y - 11; }
      }
      g += '<line x1="' + (x + 28) + '" y1="' + y + '" x2="' + lx2 + '" y2="' + ly2 + '" class="sc-lever ' + col + '"/>';
      // Betätigung
      var mx = x + 28 + (lx2 - x - 28) * 0.55, my = y + (ly2 - y) * 0.55;
      g += '<line x1="' + mx.toFixed(1) + '" y1="' + my.toFixed(1) + '" x2="' + mx.toFixed(1) + '" y2="' + (y - 34) + '" class="sc-act"/>';
      if (n.k === 'T') g += '<path d="M' + (mx - 7).toFixed(1) + ',' + (y - 34) + 'H' + (mx + 7).toFixed(1) + '" class="wire"/>';
      else g += '<path d="M' + (mx - 7).toFixed(1) + ',' + (y - 30) + 'V' + (y - 36) + 'H' + (mx + 7).toFixed(1) + 'V' + (y - 30) + '" class="wire"/>';
      g += '<text x="' + (x + 90) + '" y="' + (y - 26) + '" class="sc-k" text-anchor="end">' + n.k + '</text>';
      var stateTxt = n.on ? (pressed ? n.on : n.off) : (pressed ? 'betätigt' : 'nicht betätigt');
      g += '<text x="' + (x + SW_W / 2) + '" y="' + (y + 22) + '" text-anchor="middle" class="sc-lab">' + n.label + '</text>';
      g += '<text x="' + (x + SW_W / 2) + '" y="' + (y + 37) + '" text-anchor="middle" class="sc-state">' + (n.sw === 'NO' ? 'Schließer' : 'Öffner') + ' · ' + stateTxt + '</text>';
      return g + '</g>';
    }
    function draw(n, x, top) {
      if (n.sw) return drawSw(n, x, top + n.mid);
      var out = '';
      if (n.ser) {
        var cx = x;
        n.ser.forEach(function (c) { out += draw(c, cx, top + (n.mid - c.mid)); cx += c.w; });
        return out;
      }
      var first = null, lastY = null;
      n.par.forEach(function (c) {
        var ct = top + c._top, ly = ct + c.mid;
        out += draw(c, x + 20, ct);
        out += wire(x, ly, x + 20, ly);
        out += wire(x + 20 + c.w, ly, x + n.w, ly);
        if (first === null) first = ly; lastY = ly;
      });
      out += wire(x, first, x, lastY) + wire(x + n.w, first, x + n.w, lastY);
      out += '<circle cx="' + x + '" cy="' + first + '" r="3.5" class="sc-node"/><circle cx="' + (x + n.w) + '" cy="' + first + '" r="3.5" class="sc-node"/>';
      return out;
    }
    function lampSvg(x, y, on, label) {
      return (on ? '<circle cx="' + x + '" cy="' + y + '" r="30" class="lamp-halo"/>' : '') +
        '<circle cx="' + x + '" cy="' + y + '" r="16" class="lamp ' + (on ? 'on' : '') + '"/>' +
        '<path d="M' + (x - 11) + ',' + (y - 11) + 'L' + (x + 11) + ',' + (y + 11) + 'M' + (x + 11) + ',' + (y - 11) + 'L' + (x - 11) + ',' + (y + 11) + '" class="wire"/>' +
        '<text x="' + x + '" y="' + (y - 24) + '" text-anchor="middle" class="sc-lab">' + label + '</text>';
    }
    function battery(x, top, bottom) {
      var b = (top + bottom) / 2;
      return wire(x, top, x, b - 6) + wire(x, b + 6, x, bottom) +
        '<line x1="' + (x - 16) + '" y1="' + (b - 6) + '" x2="' + (x + 16) + '" y2="' + (b - 6) + '" class="wire"/>' +
        '<line x1="' + (x - 8) + '" y1="' + (b + 6) + '" x2="' + (x + 8) + '" y2="' + (b + 6) + '" class="wire" style="stroke-width:5"/>' +
        '<text x="' + (x + 20) + '" y="' + (b - 8) + '" class="sc-lab">+</text>';
    }
    function render() {
      var svgInner, W, H, on;
      if (cur.wechsel) {
        var a = state.wa, b = state.wb; on = a === b;
        var y1 = 70, y2 = 130, ly = 100, xL = 70, xR = 330;
        function wsw(x, up, mirror, id, label) {
          var cx = mirror ? x + 60 : x, tx = mirror ? x : x + 60;
          return '<g class="sw-hit" data-sw="' + id + '" role="button" tabindex="0" aria-label="' + label + ' umschalten"><rect x="' + (x - 6) + '" y="' + (y1 - 30) + '" width="72" height="' + (y2 - y1 + 70) + '" rx="8" class="sw-bg"/>' +
            '<circle cx="' + cx + '" cy="' + ly + '" r="3" class="sc-dot"/>' +
            '<line x1="' + cx + '" y1="' + ly + '" x2="' + tx + '" y2="' + (up ? y1 : y2) + '" class="sc-lever sc-on"/>' +
            '<text x="' + (x + 30) + '" y="' + (y2 + 32) + '" text-anchor="middle" class="sc-lab">' + label + '</text></g>';
        }
        svgInner =
          wire(30, ly, xL, ly) + wsw(xL, a, false, 'wa', 'Wechsler 1') +
          wire(xL + 60, y1, xR, y1) + wire(xL + 60, y2, xR, y2) +
          wsw(xR, b, true, 'wb', 'Wechsler 2') + wire(xR + 60, ly, 440, ly) + lampSvg(456, ly, on, 'Lampe') +
          wire(472, ly, 510, ly) + wire(510, ly, 510, 220) + wire(510, 220, 30, 220) + battery(30, ly, 220);
        W = 540; H = 245;
      } else {
        measure(cur.net);
        var x0 = 70, top = 46, lineY = top + cur.net.mid, xe = x0 + cur.net.w;
        on = conducts(cur.net);
        var lampX = xe + 60, R = lampX + 60, B = top + cur.net.h + 30;
        svgInner = wire(30, lineY, x0, lineY) + draw(cur.net, x0, top) + wire(xe, lineY, lampX - 16, lineY) + lampSvg(lampX, lineY, on, cur.load) +
          wire(lampX + 16, lineY, R, lineY) + wire(R, lineY, R, B) + wire(R, B, 30, B) + battery(30, lineY, B);
        W = R + 30; H = B + 20;
      }
      host.querySelector('#scStage').innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="svgc" role="img" aria-label="Schaltplan">' + svgInner + '</svg>';
      var st = host.querySelector('#scStatus');
      st.className = 'status ' + (on ? 'ok' : 'neutral');
      st.textContent = on ? '💡 ' + cur.load + ': AN (Stromkreis geschlossen)' : '⚫ ' + cur.load + ': AUS (Stromkreis unterbrochen)';
    }
    function select(i) {
      cur = CIRCUITS[i]; state = {}; idCounter = 0;
      if (cur.wechsel) { state.wa = true; state.wb = false; } else prep(cur.net);
      var bs = host.querySelectorAll('[data-c]'); for (var k = 0; k < bs.length; k++) bs[k].classList.toggle('active', +bs[k].getAttribute('data-c') === i);
      host.querySelector('#scName').textContent = cur.name;
      host.querySelector('#scTask').innerHTML = cur.task;
      host.querySelector('#scSol').innerHTML = cur.sol;
      render();
    }
    function toggle(id) { state[id] = !state[id]; render(); }
    host.addEventListener('click', function (e) {
      var c = e.target.closest('[data-c]'); if (c) { select(+c.getAttribute('data-c')); return; }
      var s = e.target.closest('[data-sw]'); if (s) toggle(s.getAttribute('data-sw'));
    });
    host.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var s = e.target.closest('[data-sw]'); if (s) { e.preventDefault(); toggle(s.getAttribute('data-sw')); }
    });
    select(0);
  };

  /* =========================================================
     5) Zugfestigkeit (Seile & Stäbe)
     ========================================================= */
  SIMS.zug = function (host) {
    var MAT = [
      { n: 'Buchenholz', R: 135 }, { n: 'Fichtenholz', R: 90 }, { n: 'Baustahl', R: 370 },
      { n: 'Aluminium', R: 150 }, { n: 'Kunststoff (Nylon)', R: 70 }
    ];
    var st = { m: 0, d: 5 };
    host.innerHTML = '<div class="sim split"><div class="card controls">' +
      '<h3 style="margin:0">Wie viel hält ein runder Stab / ein Seil auf Zug?</h3>' +
      '<div class="control"><label for="zgM">Material</label><select id="zgM" class="btn" style="width:100%;justify-content:flex-start">' + MAT.map(function (m, i) { return '<option value="' + i + '">' + m.n + ' (R ≈ ' + m.R + ' N/mm²)</option>'; }).join('') + '</select></div>' +
      '<div class="control"><label for="zgD">Durchmesser d <output id="zgDo"></output></label><input type="range" id="zgD" min="0.5" max="20" step="0.5"></div>' +
      '<p class="note">R = Zugfestigkeit: Kraft, die 1 mm² Querschnitt aushält. Die Werte sind ungefähre Werte. Buche 135 N/mm² stammt von deinem Arbeitsblatt.</p></div>' +
      '<div><div class="readout"><div><span>Querschnittsfläche A = π · (d/2)²</span><b id="zgA"></b></div><div><span>Belastbarkeit F = R · A</span><b id="zgF"></b></div><div><span>entspricht etwa einer Masse von</span><b id="zgKg"></b></div></div>' +
      '<div class="calc" id="zgCalc" style="margin-top:10px"></div>' +
      '<div class="tip">Doppelter Durchmesser → <b>4-fache</b> Fläche → 4-fache Belastbarkeit! Die <b>Länge</b> spielt bei Zug (fast) keine Rolle, bei Druck (Knicken) aber schon.</div></div></div>';
    var sel = host.querySelector('#zgM'), rng = host.querySelector('#zgD');
    rng.value = st.d;
    function upd() {
      var m = MAT[st.m], A = Math.PI * Math.pow(st.d / 2, 2), F = m.R * A;
      host.querySelector('#zgDo').textContent = fmt(st.d, 1) + ' mm';
      host.querySelector('#zgA').textContent = fmt(A, 2) + ' mm²';
      host.querySelector('#zgF').textContent = fmt(F, 0) + ' N';
      host.querySelector('#zgKg').textContent = 'ca. ' + fmt(F / 10, 0) + ' kg';
      host.querySelector('#zgCalc').textContent = 'A = π · (' + fmt(st.d, 1) + ' mm / 2)² = ' + fmt(A, 2) + ' mm²\nF = R · A = ' + m.R + ' N/mm² · ' + fmt(A, 2) + ' mm² ≈ ' + fmt(F, 0) + ' N\n(1 kg ≙ ca. 10 N  →  ca. ' + fmt(F / 10, 0) + ' kg)';
    }
    sel.onchange = function () { st.m = +sel.value; upd(); };
    rng.oninput = function () { st.d = +rng.value; upd(); };
    upd();
  };

  window.SIMS = SIMS;
})();
