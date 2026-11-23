/* ===========================================================
   GK KA-Training – Interaktive Trainer
   =========================================================== */
(function () {
  'use strict';

  var SIMS = {};
  SIMS._cleanup = function () {};
  SIMS.renderFigures = function () {};

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  /* ---------- Generischer Zuordnungs-Trainer ---------- */
  function classifier(host, cfg) {
    var items = cfg.keepOrder ? cfg.items.slice() : shuffle(cfg.items);
    var idx = 0, score = 0, answers = [];
    function show() {
      if (idx >= items.length) return finish();
      var it = items[idx];
      var choices = it.choices || cfg.choices;
      if (it.shuffleChoices) choices = shuffle(choices);
      host.innerHTML = '<div class="card fade-in" style="max-width:760px">' +
        (cfg.intro ? '<p class="muted small" style="margin-top:0">' + cfg.intro + '</p>' : '') +
        '<div class="quiz-progress"><span>' + (idx + 1) + ' von ' + items.length + '</span><span>✓ ' + score + '</span></div>' +
        '<div class="progress-bar" style="margin:0 0 14px"><span style="width:' + Math.round(idx / items.length * 100) + '%"></span></div>' +
        '<div class="cls-item">' + (it.label ? '<small>' + it.label + '</small>' : '') + it.t + '</div>' +
        '<p style="margin:0 0 8px;font-weight:600">' + (it.q || cfg.question) + '</p>' +
        '<div class="' + (cfg.long ? 'options' : 'choice-grid') + '">' + choices.map(function (c) {
          return '<button type="button" class="option" data-c="' + encodeURIComponent(c) + '">' + c + '</button>';
        }).join('') + '</div><div id="clsFb"></div></div>';
    }
    function finish() {
      host.innerHTML = '<div class="card fade-in" style="max-width:760px;text-align:center">' +
        '<div class="score-big">' + score + '/' + items.length + '</div>' +
        '<p style="font-size:1.05rem;margin-top:10px">' + (score === items.length ? 'Perfekt! 🏆' : score >= items.length * 0.7 ? 'Gut gemacht! 👍' : 'Schau dir die Erklärungen nochmal an. 💪') + '</p>' +
        (cfg.summary ? '<div style="text-align:left">' + cfg.summary(answers) + '</div>' : '') +
        '<button type="button" class="btn primary" data-restart>🔄 Nochmal</button></div>';
    }
    host.onclick = function (e) {
      if (e.target.closest('[data-restart]')) { classifier(host, cfg); return; }
      if (e.target.closest('[data-next]')) { idx++; show(); return; }
      var b = e.target.closest('.option');
      if (!b || b.disabled) return;
      var it = items[idx], chosen = decodeURIComponent(b.getAttribute('data-c')), ok = chosen === it.a;
      if (ok) score++;
      answers.push({ it: it, chosen: chosen, ok: ok });
      var bs = host.querySelectorAll('.option');
      for (var i = 0; i < bs.length; i++) {
        bs[i].disabled = true;
        if (decodeURIComponent(bs[i].getAttribute('data-c')) === it.a) bs[i].classList.add('correct');
      }
      if (!ok) b.classList.add('wrong');
      host.querySelector('#clsFb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Richtig!' : '✗ Richtig wäre: ' + it.a) + '</b> ' + (it.e || '') + '</div>' +
        '<div class="quiz-nav"><button type="button" class="btn primary" data-next>' + (idx + 1 < items.length ? 'Weiter →' : 'Ergebnis') + '</button></div>';
    };
    show();
  }

  /* ---------- 1) Wer macht was in der Gemeinde? ---------- */
  var ORG = ['Gemeinderat', 'Bürgermeister/-in', 'Verwaltung', 'Bürger/-innen'];
  SIMS.organe = function (host) {
    classifier(host, {
      choices: ORG,
      question: 'Wer ist gemeint?',
      intro: 'Ordne jede Aussage dem richtigen Organ (bzw. den Bürgerinnen und Bürgern) zu.',
      items: [
        { t: 'wird alle 5 Jahre von den Bürgerinnen und Bürgern gewählt', a: 'Gemeinderat', e: 'Der Gemeinderat wird für 5 Jahre gewählt (M1).' },
        { t: 'wird alle 8 Jahre direkt von den Bürgerinnen und Bürgern gewählt', a: 'Bürgermeister/-in', e: 'Direktwahl für 8 Jahre, unabhängig von der Gemeinderatswahl (M2).' },
        { t: 'beschließt den Haushaltsplan (wofür gibt die Gemeinde Geld aus?)', a: 'Gemeinderat', e: 'Aufstellung/Beschluss des Haushalts ist Aufgabe des Gemeinderats.' },
        { t: 'kontrolliert, ob sich der Bürgermeister an die Regeln hält', a: 'Gemeinderat', e: 'Kontrolle des Bürgermeisters (und der Verwaltung) ist eine Hauptaufgabe des Gemeinderats.' },
        { t: 'besetzt die Ausschüsse (z. B. für Sport, Schule, Verkehr)', a: 'Gemeinderat', e: 'Ausschüsse sind Gruppen von Gemeinderäten.' },
        { t: 'ist Chef der Verwaltung (Rathaus)', a: 'Bürgermeister/-in', e: 'Eine der drei Hauptfunktionen des Bürgermeisters.' },
        { t: 'vertritt die Gemeinde nach außen', a: 'Bürgermeister/-in', e: 'Repräsentant und Rechtsvertreter der Gemeinde.' },
        { t: 'ist stimmberechtigter Vorsitzender des Gemeinderats und aller Ausschüsse', a: 'Bürgermeister/-in', e: 'Er leitet die Sitzungen und darf mit abstimmen.' },
        { t: 'führt die Beschlüsse aus (Ausführung)', a: 'Verwaltung', e: 'Für die Ausführung der Beschlüsse ist die Verwaltung zuständig (M3).' },
        { t: 'ihre Mitarbeiter werden ernannt, eingestellt und entlassen', a: 'Verwaltung', e: 'Legitimation durch Ernennung (vom Gemeinderat im Einvernehmen mit dem Bürgermeister).' },
        { t: 'kann in dringenden Fällen eine Eilentscheidung anstelle des Gemeinderats treffen', a: 'Bürgermeister/-in', e: 'Steht im AB „Was macht eigentlich ein (Ober-)Bürgermeister?“.' },
        { t: 'wählen den Gemeinderat und den Bürgermeister', a: 'Bürger/-innen', e: 'Sie sind die Grundlage der Legitimation durch Wahl.' },
        { t: 'können durch einen Bürgerentscheid selbst über eine Sachfrage entscheiden', a: 'Bürger/-innen', e: 'Form der direkten Demokratie.' },
        { t: 'Das Bauamt schreibt den Auftrag zum Bau des Radwegs aus.', a: 'Verwaltung', e: 'Das Bauamt ist Teil der Verwaltung → Ausführung.' },
        { t: 'ist laut Gemeindeordnung das „Hauptorgan der Gemeinde“', a: 'Gemeinderat', e: 'Formal ist der Gemeinderat das Hauptorgan, in der Wirklichkeit ist aber oft der Bürgermeister der zentrale Akteur (M5).' },
        { t: 'wird in Baden-Württemberg oft „kleines Herrgöttle“ genannt', a: 'Bürgermeister/-in', e: 'Wegen seiner starken Stellung (M5).' },
        { t: 'ist Dienstvorgesetzter aller städtischen Mitarbeiter', a: 'Bürgermeister/-in', e: 'Als Chef der Verwaltung.' },
        { t: 'erlässt Rechtsvorschriften (Satzungen) für die Gemeinde', a: 'Gemeinderat', e: 'Steht im OB-AB: Der Gemeinderat erlässt Rechtsvorschriften.' },
        { t: 'ist als Einziger an allen drei Phasen beteiligt: Vorbereitung, Entscheidung und Umsetzung', a: 'Bürgermeister/-in', e: 'Das macht seine Stellung so stark.' },
        { t: 'ist in Stuttgart Vorsitzender des Aufsichtsrats der Tochterunternehmen (z. B. SSB)', a: 'Bürgermeister/-in', e: 'Der Oberbürgermeister (OB-AB).' }
      ]
    });
  };

  /* ---------- 2) Radweg-Karten (Buch S. 95, M4) ---------- */
  var RADWEG = [
    { k: 'G', t: 'Der Schulleiter zeigt dem Bürgermeister die Mängel im bestehenden Radwegeplan.', a: 'Initiative', e: 'Der Anstoß kommt von außen: Das Problem wird ins Rathaus getragen.' },
    { k: 'D', t: 'Schüler- und Elternvertreter sprechen mit dem Bürgermeister und den Gemeinderäten über die Notwendigkeit des Radwegs.', a: 'Initiative', e: 'Betroffene bringen das Anliegen ein.' },
    { k: 'F', t: 'Der Gemeinderat diskutiert in einer ersten Sitzung die Streckenverläufe.', a: 'Entscheidung', e: 'Beratung im Gemeinderat = Teil der Entscheidungsphase.' },
    { k: 'B', t: 'Verschiedene Streckenverläufe werden im Verkehrsausschuss diskutiert.', a: 'Entscheidung', e: 'Der Ausschuss bereitet die Entscheidung des Gemeinderats vor.' },
    { k: 'C', t: 'Der Gemeinderat stimmt über den Verlauf des Radwegs ab.', a: 'Entscheidung', e: 'Der eigentliche Beschluss.' },
    { k: 'A', t: 'Das Bauamt schreibt den Auftrag zum Bau des Radwegs aus.', a: 'Ausführung', e: 'Die Verwaltung setzt den Beschluss um.' },
    { k: 'E', t: 'Das Bauamt kontrolliert die ordnungsgemäße Anlage des Radwegs.', a: 'Ausführung', e: 'Letzter Schritt der Umsetzung durch die Verwaltung.' }
  ];
  SIMS.radweg = function (host) {
    classifier(host, {
      choices: ['Initiative', 'Entscheidung', 'Ausführung'],
      question: 'Zu welcher Phase gehört diese Karte?',
      intro: 'Buch S. 95, M4: Ordne die Karten A–G den Phasen Initiative, Entscheidung und Ausführung zu.',
      items: RADWEG.map(function (r) { return { label: 'Karte ' + r.k, t: r.t, a: r.a, e: r.e }; }),
      summary: function () {
        return '<h3 style="margin-top:16px">Richtige Reihenfolge</h3><ol>' + RADWEG.map(function (r) {
          return '<li><b>' + r.k + '</b> (' + r.a + '): ' + r.t + '</li>';
        }).join('') + '</ol><p class="note">G und D kann man auch umgekehrt ordnen. Wichtig ist: Initiative → Entscheidung → Ausführung.</p>';
      }
    });
  };

  /* ---------- 3) Politikzyklus ordnen ---------- */
  var PHASES = ['Problem', 'Auseinandersetzung', 'Entscheidung', 'Bewertung der Entscheidung', 'Reaktion'];
  var PHASE_DESC = {
    'Problem': 'Ein Problem wird erkannt, z. B. Ein Jugendzentrum im Wohngebiet?',
    'Auseinandersetzung': 'Akteure streiten mit Argumenten: Bürgerinitiative, Jugendliche, Verwaltung, Gemeinderat …',
    'Entscheidung': 'Der Gemeinderat entscheidet, z. B. Schließung des Jugendzentrums?',
    'Bewertung der Entscheidung': 'Die Betroffenen bewerten: Erleichterung? Protest?',
    'Reaktion': 'Zufriedenheit? Erneuter Protest? → evtl. neues Problem, der Kreislauf beginnt von vorn.'
  };
  SIMS.zyklus = function (host) {
    var picked = [];
    var pool = shuffle(PHASES);
    function render(checked) {
      host.innerHTML = '<div class="card" style="max-width:760px">' +
        '<h3 style="margin-top:0">Bring die 5 Phasen des Politikzyklus in die richtige Reihenfolge</h3>' +
        '<p class="muted small">Tippe die Phasen der Reihe nach an. Start ist immer das <b>Problem</b>. Tippe ein gewähltes Feld an, um es zu entfernen.</p>' +
        '<div class="zy-pool">' + pool.filter(function (p) { return picked.indexOf(p) < 0; }).map(function (p) {
          return '<button type="button" class="btn" data-p="' + p + '">' + p + '</button>';
        }).join('') + '</div>' +
        '<div class="zy-slots">' + PHASES.map(function (_, i) {
          var p = picked[i], cls = 'zy-slot' + (p ? ' filled' : '');
          if (checked && p) cls += p === PHASES[i] ? ' ok' : ' no';
          return '<div class="' + cls + '" ' + (p && !checked ? 'data-rm="' + i + '" role="button" tabindex="0"' : '') + '>' + (p ? '<b>' + p + '</b>' : '<span class="muted">…</span>') + '</div>';
        }).join('') + '</div>' +
        '<div id="zyFb" style="margin-top:12px"></div></div>';
      if (picked.length === PHASES.length && !checked) render(true);
      if (checked) {
        var ok = picked.every(function (p, i) { return p === PHASES[i]; });
        host.querySelector('#zyFb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? '✓ Perfekt!' : '✗ Nicht ganz. So ist es richtig:') + '</b><ol style="margin:6px 0 0">' +
          PHASES.map(function (p) { return '<li><b>' + p + ':</b> ' + PHASE_DESC[p] + '</li>'; }).join('') + '</ol>' +
          '<p style="margin:8px 0 0">Danach beginnt der Zyklus wieder von vorn: Politik ist eine <b>endlose Kette von Problemlösungen</b>.</p></div>' +
          '<div class="quiz-nav"><button type="button" class="btn primary" data-again>🔄 Nochmal</button></div>';
      }
    }
    host.onclick = function (e) {
      if (e.target.closest('[data-again]')) { SIMS.zyklus(host); return; }
      var b = e.target.closest('[data-p]');
      if (b) { picked.push(b.getAttribute('data-p')); render(false); return; }
      var r = e.target.closest('[data-rm]');
      if (r) { picked.splice(+r.getAttribute('data-rm'), 1); render(false); }
    };
    render(false);
  };

  /* ---------- 4) Phasen zuordnen ---------- */
  SIMS.phasen = function (host) {
    classifier(host, {
      choices: PHASES,
      question: 'In welche Phase des Politikzyklus gehört das?',
      intro: 'Drei Fälle: Jugendzentrum, Radweg, Freibad.',
      items: [
        { label: 'Jugendzentrum', t: 'Anwohner beschweren sich über Lärm und Müll vor dem Jugendzentrum nach 22 Uhr.', a: 'Problem', e: 'Hier wird das Problem sichtbar.' },
        { label: 'Jugendzentrum', t: 'Eine Bürgerinitiative sammelt Unterschriften für die Schließung, Jugendliche sammeln für den Erhalt.', a: 'Auseinandersetzung', e: 'Die Akteure versuchen, ihre Interessen durchzusetzen.' },
        { label: 'Jugendzentrum', t: 'Jugendliche demonstrieren vor dem Rathaus, in der Lokalzeitung erscheinen Leserbriefe.', a: 'Auseinandersetzung', e: 'Beteiligungsformen gehören zur Auseinandersetzung.' },
        { label: 'Jugendzentrum', t: 'Der Gemeinderat beschließt: Das Jugendzentrum bleibt, muss aber um 22 Uhr schließen.', a: 'Entscheidung', e: 'Der Gemeinderat entscheidet (hier ein Kompromiss).' },
        { label: 'Jugendzentrum', t: 'Die Anwohner sind erleichtert, die Jugendlichen finden die Uhrzeit ungerecht.', a: 'Bewertung der Entscheidung', e: 'Die Betroffenen beurteilen die Entscheidung.' },
        { label: 'Jugendzentrum', t: 'Die Jugendlichen treffen sich jetzt abends im Park, dort gibt es neuen Ärger.', a: 'Reaktion', e: 'Aus der Reaktion entsteht ein neues Problem, der Kreislauf beginnt neu.' },
        { label: 'Radweg', t: 'Vor der Albert-Schweitzer-Schule fehlt ein Radweg, Schüler müssen auf die Straße ausweichen.', a: 'Problem', e: 'Ausgangslage.' },
        { label: 'Radweg', t: 'Eltern- und Schülervertreter sprechen mit dem Bürgermeister; im Verkehrsausschuss wird über Strecken gestritten.', a: 'Auseinandersetzung', e: 'Akteure bringen Argumente und Interessen ein.' },
        { label: 'Radweg', t: 'Der Gemeinderat stimmt über den Verlauf des Radwegs ab.', a: 'Entscheidung', e: 'Beschluss des Gemeinderats.' },
        { label: 'Radweg', t: 'Die Lokalzeitung kommentiert: „Endlich sicher – aber viel zu teuer!“', a: 'Bewertung der Entscheidung', e: 'Eine Beurteilung der Entscheidung.' },
        { label: 'Radweg', t: 'Weil jetzt mehr Kinder Rad fahren, fordern Eltern zusätzlich Tempo 30 vor der Schule.', a: 'Reaktion', e: 'Neue Forderung → neuer Zyklus.' },
        { label: 'Freibad', t: 'Das Freibad soll geschlossen werden, weil die Gemeinde sparen muss.', a: 'Problem', e: 'Ausgangsproblem.' },
        { label: 'Freibad', t: 'In der Einwohnerversammlung streiten Befürworter und Gegner der Schließung.', a: 'Auseinandersetzung', e: 'Austausch von Argumenten.' },
        { label: 'Freibad', t: 'Bei einem Bürgerentscheid stimmen 60 % für den Erhalt des Freibads.', a: 'Entscheidung', e: 'Hier entscheiden die Bürger direkt.' },
        { label: 'Freibad', t: 'Ein Förderverein gründet sich, um das Freibad mitzufinanzieren.', a: 'Reaktion', e: 'Eine Reaktion auf die Entscheidung.' }
      ]
    });
  };

  /* ---------- 5) Kategorien ---------- */
  SIMS.kategorien = function (host) {
    classifier(host, {
      choices: ['Problem', 'Akteure', 'Interessen', 'Legitimation', 'Macht'],
      question: 'Welche Analyse-Kategorie passt?',
      intro: 'Sozialwissenschaftliche Kategorien: Problem – Akteure – Interessen – Legitimation – Macht.',
      items: [
        { label: 'Jugendzentrum', t: 'Jugendliche sind nach 22 Uhr laut, Müll liegt herum, die Anwohner finden keine Ruhe.', a: 'Problem', e: 'Worum geht es? Was ist strittig?' },
        { label: 'Jugendzentrum', t: 'Beteiligt sind Jugendliche, Anwohner, eine Bürgerinitiative, die Oberbürgermeisterin und der Gemeinderat.', a: 'Akteure', e: 'Wer ist beteiligt?' },
        { label: 'Jugendzentrum', t: 'Die Anwohner wollen abends Ruhe, die Jugendlichen einen Treffpunkt zum Chillen und für Partys.', a: 'Interessen', e: 'Was wollen die Beteiligten?' },
        { label: 'Jugendzentrum', t: 'Der Gemeinderat darf entscheiden, weil er von den Bürgern gewählt wurde.', a: 'Legitimation', e: 'Wodurch ist jemand berechtigt zu handeln? (Wahl, Ernennung, Gesetz)' },
        { label: 'Jugendzentrum', t: 'Die Bürgerinitiative hat 2000 Unterschriften und kann einen Bürgerentscheid erzwingen.', a: 'Macht', e: 'Wer kann sich wie durchsetzen? Welche Mittel hat er?' },
        { label: 'Radweg', t: 'Der Bürgermeister leitet als Vorsitzender die Sitzung und ist Chef des Bauamts.', a: 'Macht', e: 'Er hat viel Einfluss auf alle Phasen.' },
        { label: 'Radweg', t: 'Die Leiterin des Bauamts wurde ernannt und darf deshalb den Bau beauftragen.', a: 'Legitimation', e: 'Legitimation durch Ernennung.' },
        { label: 'Radweg', t: 'Die Eltern wollen einen sicheren Schulweg, die Anwohner wollen ihre Parkplätze behalten.', a: 'Interessen', e: 'Unterschiedliche Ziele.' },
        { label: 'Radweg', t: 'Schüler, Eltern, Schulleiter, Gemeinderäte, Verkehrsausschuss, Bauamt', a: 'Akteure', e: 'Alle Beteiligten.' },
        { label: 'Radweg', t: 'Ohne Radweg müssen Schüler auf die gefährliche Straße ausweichen.', a: 'Problem', e: 'Ausgangslage.' },
        { label: 'allgemein', t: 'Der Bürgermeister wird direkt von den Bürgern für 8 Jahre gewählt.', a: 'Legitimation', e: 'Legitimation durch (Direkt-)Wahl.' },
        { label: 'allgemein', t: 'Die Lokalzeitung berichtet täglich und beeinflusst so die öffentliche Meinung.', a: 'Macht', e: 'Medien haben Einfluss (Macht) – „vierte Gewalt“.' }
      ]
    });
  };

  /* ---------- 6) Operatoren ---------- */
  SIMS.operatoren = function (host) {
    var OPS = window.OPERATOREN || [];
    var items = [];
    shuffle(OPS).forEach(function (o, i) {
      if (i % 2 === 0) {
        var wrong = shuffle(OPS.filter(function (x) { return x.op !== o.op; })).slice(0, 3).map(function (x) { return x.d; });
        items.push({ label: 'Was bedeutet …', t: o.op, q: 'Welche Beschreibung passt?', a: o.d, choices: shuffle([o.d].concat(wrong)), e: 'Anforderungsbereich ' + o.afb + '.' });
      } else {
        items.push({ label: 'Anforderungsbereich?', t: o.op, q: 'Zu welchem Anforderungsbereich (AFB) gehört der Operator?', a: 'AFB ' + o.afb,
          choices: ['AFB I', 'AFB II', 'AFB III'], e: o.op + ': ' + o.d });
      }
    });
    classifier(host, {
      items: items.slice(0, 14),
      keepOrder: true,
      long: true,
      intro: 'AFB I = wiedergeben · AFB II = anwenden/erklären · AFB III = beurteilen/bewerten/erörtern'
    });
  };

  window.SIMS = SIMS;
})();
