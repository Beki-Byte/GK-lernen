window.TOPICS = window.TOPICS || [];
(function () {
  // kleine Helfer für Schaltzeichen (horizontal, Anschluss links bei x, Linie bei y)
  function no(x, y, kind) { // Schließer
    return '<path d="M' + x + ',' + y + 'h24M' + (x + 66) + ',' + y + 'h24" class="stroke" stroke-width="2"/>' +
      '<path d="M' + (x + 24) + ',' + y + 'L' + (x + 62) + ',' + (y - 18) + '" class="stroke" stroke-width="2.4"/>' + act(x + 43, y - 9, y, kind);
  }
  function nc(x, y, kind) { // Öffner
    return '<path d="M' + x + ',' + y + 'h24M' + (x + 66) + ',' + y + 'h24M' + (x + 66) + ',' + y + 'v-12" class="stroke" stroke-width="2"/>' +
      '<path d="M' + (x + 24) + ',' + y + 'L' + (x + 70) + ',' + (y - 10) + '" class="stroke" stroke-width="2.4"/>' + act(x + 45, y - 5, y, kind);
  }
  function act(mx, my, y, kind) {
    var s = '<path d="M' + mx + ',' + my + 'V' + (y - 30) + '" class="stroke" stroke-width="1.2" stroke-dasharray="3 3"/>';
    if (kind === 'T') s += '<path d="M' + (mx - 7) + ',' + (y - 30) + 'h14" class="stroke" stroke-width="2"/>';
    else s += '<path d="M' + (mx - 7) + ',' + (y - 26) + 'v-6h14v6" class="stroke" stroke-width="2"/>';
    return s;
  }
  function lamp(x, y) {
    return '<circle cx="' + x + '" cy="' + y + '" r="13" class="stroke" stroke-width="2" fill="none"/>' +
      '<path d="M' + (x - 9) + ',' + (y - 9) + 'L' + (x + 9) + ',' + (y + 9) + 'M' + (x + 9) + ',' + (y - 9) + 'L' + (x - 9) + ',' + (y + 9) + '" class="stroke" stroke-width="2"/>';
  }
  function bat(x, y) { // vertikal, Mitte bei y
    return '<path d="M' + (x - 14) + ',' + (y - 5) + 'h28" class="stroke" stroke-width="2"/><path d="M' + (x - 7) + ',' + (y + 5) + 'h14" class="stroke" stroke-width="5"/>' +
      '<text x="' + (x + 18) + '" y="' + (y - 6) + '" font-size="13">+</text>';
  }
  function w(d) { return '<path d="' + d + '" class="stroke" stroke-width="2" fill="none"/>'; }
  function dot(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="3.5" class="fill"/>'; }

  var symbols =
    '<div class="fig-row svgc">' +
    fig('<svg viewBox="0 0 100 50">' + no(5, 38, 'T') + '</svg>', 'Taster – Schließer') +
    fig('<svg viewBox="0 0 100 50">' + nc(5, 38, 'T') + '</svg>', 'Taster – Öffner') +
    fig('<svg viewBox="0 0 100 50">' + no(5, 38, 'S') + '</svg>', 'Stellschalter – Schließer') +
    fig('<svg viewBox="0 0 100 50">' + nc(5, 38, 'S') + '</svg>', 'Stellschalter – Öffner') +
    '</div>';
  function fig(svg, cap) { return '<figure class="figure" style="margin:0">' + svg + '<figcaption>' + cap + '</figcaption></figure>'; }

  var wechsler = '<figure class="figure svgc"><svg viewBox="0 0 120 70" style="max-width:220px">' +
    w('M5,45h30M70,25h45M70,55h45') + dot(35, 45) +
    '<path d="M35,45L70,26" class="stroke" stroke-width="2.4"/>' +
    '<text x="2" y="62" font-size="10">gemeinsamer</text><text x="2" y="72" font-size="10">Anschluss (COM)</text>' +
    '</svg><figcaption>Wechsler: Der gemeinsame Anschluss ist immer verbunden, entweder mit dem oberen oder dem unteren Kontakt.</figcaption></figure>';

  var reihe = '<svg viewBox="0 0 330 150" style="max-width:330px">' +
    w('M30,40H50') + no(50, 40, 'T') + w('M140,40H150') + no(150, 40, 'T') + w('M240,40H262M288,40H310V120H30V85M30,75V40') + lamp(275, 40) + bat(30, 80) +
    '<text x="70" y="62" font-size="12">S1</text><text x="170" y="62" font-size="12">S2</text></svg>';
  var parallel = '<svg viewBox="0 0 330 170" style="max-width:330px">' +
    w('M30,40H70M70,40V100M70,40H90M70,100H90M180,40H200M180,100H200M200,40V100M200,40H262M288,40H310V150H30V105M30,95V40') +
    no(90, 40, 'T') + no(90, 100, 'T') + dot(70, 40) + dot(200, 40) + lamp(275, 40) + bat(30, 100) +
    '<text x="110" y="62" font-size="12">S1</text><text x="110" y="122" font-size="12">S2</text></svg>';

  window.TOPICS.push({
    id: 'schaltungen',
    order: 4,
    title: 'Schaltelemente & Schaltungen',
    short: 'Taster, Stellschalter, Schließer, Öffner, Wechsler, UND/ODER',
    icon: '💡',
    color: '#e0a100',
    ytSearch: 'UND ODER Schaltung Schalter Reihenschaltung Parallelschaltung erklärt',
    sims: [{ id: 'schaltung', title: 'Schaltungs-Simulator' }],

    learn: [
      {
        title: 'Schaltelemente',
        html: `
<p>Als <b>Schaltelement</b> bezeichnet man alle Bauteile, die <b>elektrische Verbindungen öffnen oder schließen</b>. Schaltelemente kann man in zwei Gruppen unterteilen:</p>
<div class="two-col">
<div class="example" style="margin:0"><b>Stellschalter</b> (rastend): Er <b>bleibt</b> in der Stellung, in die man ihn bringt.<br>Bsp.: Lichtschalter, Not-Aus-Schalter</div>
<div class="example" style="margin:0"><b>Tastschalter / Taster</b>: Er ist nur betätigt, <b>solange man drückt</b>, und federt dann zurück.<br>Bsp.: Klingel, Türkontakt im Kühlschrank, Computertaste</div>
</div>
<p style="margin-top:1em">Außerdem unterscheidet man, was beim <b>Betätigen</b> passiert:</p>
<div class="table-wrap"><table>
<tr><th>Art</th><th>nicht betätigt</th><th>betätigt</th></tr>
<tr><td><b>Schließer</b></td><td>offen → kein Strom</td><td><b>schließt</b> → Strom fließt</td></tr>
<tr><td><b>Öffner</b></td><td>geschlossen → Strom fließt</td><td><b>öffnet</b> → kein Strom</td></tr>
</table></div>
${symbols}
<p class="note">Schaltzeichen: Der Strich mit dem „T“ oben bedeutet Taster. Das kleine Rast-Zeichen bedeutet Stellschalter. Beim Öffner berührt der Hebel den Haken am Kontakt.</p>`
      },
      {
        title: 'Wechsler',
        html: `
<p>Stellschalter und Taster gibt es auch so, dass sie zwischen <b>zwei elektrischen Verbindungen hin- und herwechseln</b>. Dann heißen sie <b>„Wechsler“</b>.</p>
${wechsler}
<p>Den Anschluss, der <b>immer verbunden</b> ist, nennt man <b>gemeinsamen Anschluss</b> (engl. „common pin“, COM). In Katalogen heißen sie oft „Schalter, 1 × um“.</p>
<div class="merke">Ein Wechsler ist Schließer und Öffner in einem: Der eine Kontakt schließt, während der andere öffnet.</div>
<p><b>Wechselschaltung</b> (z. B. im Flur): Mit <b>zwei Wechslern</b> kann man eine Lampe von zwei Stellen aus ein- und ausschalten.</p>`
      },
      {
        title: 'UND- und ODER-Schaltung',
        html: `
<div class="two-col">
<div>
<h3>UND = Reihenschaltung</h3>
<figure class="figure svgc">${reihe}</figure>
<p>Die Lampe leuchtet nur, wenn S1 <b>UND</b> S2 geschlossen sind. Ist <b>einer</b> offen, ist der Stromkreis unterbrochen.</p>
<div class="table-wrap"><table><tr><th>S1</th><th>S2</th><th>Lampe</th></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td><b>1</b></td></tr></table></div>
</div>
<div>
<h3>ODER = Parallelschaltung</h3>
<figure class="figure svgc">${parallel}</figure>
<p>Die Lampe leuchtet, wenn S1 <b>ODER</b> S2 (oder beide) geschlossen sind. Der Strom hat <b>mehrere Wege</b>.</p>
<div class="table-wrap"><table><tr><th>S1</th><th>S2</th><th>Lampe</th></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td><b>1</b></td></tr><tr><td>0</td><td>1</td><td><b>1</b></td></tr><tr><td>1</td><td>1</td><td><b>1</b></td></tr></table></div>
</div>
</div>
<p class="note">1 = geschlossen / leuchtet, 0 = offen / aus. Ein Punkt (●) im Schaltplan ist ein Knotenpunkt, an dem sich Leitungen verbinden.</p>`
      },
      {
        title: 'So löst du Schaltungs-Aufgaben',
        html: `
<ol>
<li><b>Taster oder Stellschalter?</b> Soll der Schalter von selbst zurückgehen (Tür, Klingel), nimmst du einen Taster. Soll er in seiner Stellung bleiben (Licht, Not-Aus), einen Stellschalter.</li>
<li><b>Schließer oder Öffner?</b> Frage: „Was soll passieren, wenn der Schalter <b>betätigt / gedrückt</b> wird?“ Strom <b>an</b> → Schließer. Strom <b>aus</b> → Öffner.</li>
<li><b>Reihe oder parallel?</b> Müssen <b>alle</b> Bedingungen erfüllt sein, damit Strom fließt → <b>Reihe (UND)</b>. Reicht <b>eine</b> → <b>parallel (ODER)</b>.</li>
<li>Schaltplan zeichnen: Batterie (+), Schalter, Verbraucher (Lampe ⊗), rechtwinklige Leitungen, Knotenpunkte ●.</li>
</ol>
<div class="table-wrap"><table>
<tr><th>Aufgabe</th><th>Lösung</th></tr>
<tr><td>Kühlschrank: Licht geht <b>aus</b>, wenn die Tür auf den Schalter drückt</td><td><b>1 Taster-Öffner</b> in Reihe zur Lampe</td></tr>
<tr><td>Auto: Innenlicht an, wenn <b>eine</b> Tür oder die Heckklappe offen ist</td><td><b>3 Taster-Öffner parallel</b> (Tür zu = Taster gedrückt = offen)</td></tr>
<tr><td>Not-Aus: <b>ein</b> Schalter betätigt → Strom überall aus</td><td><b>3 Öffner in Reihe</b> (rastend, also Stellschalter)</td></tr>
<tr><td>Bankalarm: von <b>jedem</b> der 4 Plätze auslösbar</td><td><b>4 Schließer parallel</b></td></tr>
<tr><td>Zweihand-Sicherheitsschaltung: <b>beide</b> Hände</td><td><b>2 Schließer in Reihe</b></td></tr>
<tr><td>Flurlicht von zwei Stellen schalten</td><td><b>2 Wechsler</b> (Wechselschaltung)</td></tr>
</table></div>
<div class="warn">Not-Aus mit nur <b>einem</b> Schalter zeichnen, obwohl es 3 Not-Aus-Schalter gibt! Alle 3 müssen <b>in Reihe</b> geschaltet sein, und es müssen <b>Öffner</b> sein. Beim Betätigen soll der Strom ja <b>aus</b>gehen.</div>
<div class="tip">Probiere alle Beispiele im <b>Trainer</b> aus. Dort kannst du die Schalter anklicken und siehst sofort, ob die Lampe leuchtet.</div>`
      }
    ],

    videos: [
      { id: 'zNClsHj7dDU', title: 'UND-Schaltung und ODER-Schaltung', desc: 'Schaltungen mit mehreren Schaltern.' },
      { id: 'ehrhdSHDhO4', title: 'Schalter in Reihenschaltung & Parallelschaltung', desc: 'Gemischter Stromkreis mit Schaltern.' },
      { id: 'eMyhMGBpXWE', title: 'Reihenschaltung und Parallelschaltung', desc: 'Grundlagen der beiden Schaltungsarten.' }
    ],

    tasks: [
      {
        title: 'Aufgabe 1: Schaltelemente',
        src: 'Heft – Schaltelemente und Schaltungen',
        html: `<p>a) Was bezeichnet man als Schaltelement?<br>b) In welche zwei Gruppen kann man Schaltelemente unterteilen? Erkläre den Unterschied und nenne je ein Beispiel.<br>c) Was ist der Unterschied zwischen einem Schließer und einem Öffner?</p>`,
        solution: `<p>a) Als Schaltelement bezeichnet man alle Bauteile, die <b>elektrische Verbindungen öffnen oder schließen</b>.<br>
b) <b>Stellschalter</b> bleiben in ihrer Stellung (z. B. Lichtschalter). <b>Tastschalter</b> sind nur betätigt, solange man drückt, und federn zurück (z. B. Klingelknopf).<br>
c) Ein <b>Schließer</b> schließt den Stromkreis, wenn er betätigt wird. Ein <b>Öffner</b> öffnet (unterbricht) den Stromkreis, wenn er betätigt wird. Unbetätigt ist er geschlossen.</p>`
      },
      {
        title: 'Aufgabe 2: Wechsler',
        src: 'Heft – Wechsler bei Tast- und Stellschalter',
        html: `<p>a) Was ist ein Wechsler?<br>b) Wie nennt man den Anschluss, der immer verbunden ist?<br>c) Wofür braucht man eine Wechselschaltung?</p>`,
        solution: `<p>a) Ein Schalter (Stell- oder Tastschalter), der <b>zwischen zwei elektrischen Verbindungen hin- und herwechselt</b>.<br>
b) <b>Gemeinsamer Anschluss</b> (engl. common pin, COM).<br>
c) Um eine Lampe von <b>zwei Stellen</b> aus (z. B. an beiden Enden eines Flurs oder einer Treppe) ein- und ausschalten zu können.</p>`
      },
      {
        title: 'Aufgabe 3: Kühlschrank',
        src: 'Heft',
        html: `<p>In einem Kühlschrank soll das Licht ausgehen, wenn die sich schließende Türe auf ein Schaltelement drückt. Zeichne den Schaltplan zu deiner Lösung. Welches Schaltelement brauchst du?</p>`,
        solution: `<p>Man braucht einen <b>Taster als Öffner</b> (Tür zu → Taster gedrückt → Kontakt öffnet → Licht aus; Tür auf → Taster springt zurück → Kontakt geschlossen → Licht an).</p>
<p>Schaltplan: Batterie → <b>Taster-Öffner</b> → Lampe → zurück zur Batterie (alles in Reihe).</p>
<p><a href="#/t/schaltungen/trainer">→ Im Simulator ausprobieren („Kühlschrank-Licht“)</a></p>`
      },
      {
        title: 'Aufgabe 4: Auto-Innenlicht',
        src: 'Heft',
        html: `<p>Das Innenlicht des Autos geht an, wenn einer der Vordertüren oder die Heckklappe nicht richtig geschlossen ist. Zeichne einen Schaltplan unter Verwendung der Taster an den Türen und der Heckklappe.</p>`,
        solution: `<p><b>3 Taster</b> (Fahrertür, Beifahrertür, Heckklappe), und zwar als <b>Öffner</b>, <b>parallel</b> geschaltet, in Reihe mit der Lampe.</p>
<ul><li>Taster, weil die Tür sie nur drückt, solange sie zu ist.</li>
<li>Öffner, weil eine <b>geschlossene</b> Tür den Taster drückt und dann <b>kein</b> Licht sein soll.</li>
<li>Parallel (ODER), weil schon <b>eine</b> offene Tür reicht.</li></ul>
<p><a href="#/t/schaltungen/trainer">→ Im Simulator ausprobieren („Auto-Innenlicht“)</a></p>`
      },
      {
        title: 'Aufgabe 5: Not-Aus im NwT-Raum',
        src: 'Heft',
        html: `<p>Im NwT-Raum befinden sich 3 Not-Aus-Schalter. Wird einer dieser Schalter betätigt, ist die Stromzufuhr zu allen Steckdosen unterbrochen. Zeichne einen Plan für die Not-Aus-Schaltung.</p>`,
        solution: `<p><b>3 Öffner in Reihe</b> zwischen Batterie bzw. Netz und Steckdosen. Normal sind alle geschlossen, also haben die Steckdosen Strom. Wird <b>einer</b> betätigt, öffnet er und der gesamte Stromkreis ist unterbrochen.</p>
<p>Es sollten <b>Stellschalter</b> (rastend) sein, denn Not-Aus-Schalter bleiben gedrückt, bis man sie bewusst entriegelt.</p>
<div class="warn">Nur <b>einen</b> Schalter einzeichnen reicht nicht. Es sind 3 Not-Aus-Schalter, die alle in Reihe liegen müssen!</div>`
      },
      {
        title: 'Aufgabe 6: Bank-Alarm',
        src: 'Heft',
        html: `<p>Der Alarm in einer Bank kann durch Schalter an jedem der 4 Arbeitsplätze aktiviert werden. Zeichne den Schaltplan.</p>`,
        solution: `<p><b>4 Schließer parallel</b> (ODER-Schaltung), in Reihe mit dem Alarm (Hupe/Lampe) und der Batterie. Jeder einzelne Schalter schließt einen eigenen Stromweg → Alarm an.</p>
<p>Sinnvoll sind <b>Stellschalter</b>, damit der Alarm nicht sofort wieder ausgeht, wenn man loslässt.</p>`
      },
      {
        title: 'Aufgabe 7: Zweihand-Sicherheitsschaltung',
        src: 'Übung',
        html: `<p>Eine Presse darf nur arbeiten, wenn der Arbeiter mit <b>beiden Händen</b> je einen Taster drückt. Welche Schaltung und welche Schaltelemente brauchst du? Erstelle die Wahrheitstabelle.</p>`,
        solution: `<p><b>2 Taster-Schließer in Reihe</b> = UND-Schaltung.</p>
<div class="table-wrap"><table><tr><th>Taster links</th><th>Taster rechts</th><th>Presse</th></tr><tr><td>0</td><td>0</td><td>aus</td></tr><tr><td>1</td><td>0</td><td>aus</td></tr><tr><td>0</td><td>1</td><td>aus</td></tr><tr><td>1</td><td>1</td><td><b>an</b></td></tr></table></div>`
      },
      {
        title: 'Aufgabe 8: Was passiert?',
        src: 'Übung',
        html: `<ol type="a">
<li>Zwei Öffner sind in Reihe geschaltet. Einer wird betätigt. Leuchtet die Lampe?</li>
<li>Zwei Schließer sind parallel geschaltet. Keiner ist betätigt. Leuchtet die Lampe?</li>
<li>Ein Schließer und ein Öffner sind in Reihe. Beide werden betätigt. Leuchtet die Lampe?</li>
<li>Zwei Öffner sind parallel. Einer wird betätigt. Leuchtet die Lampe?</li></ol>`,
        solution: `<ol type="a">
<li><b>Nein</b>: Der betätigte Öffner unterbricht den einzigen Weg.</li>
<li><b>Nein</b>: Beide Schließer sind offen, also gibt es keinen Weg.</li>
<li><b>Nein</b>: Der Schließer ist zu, aber der Öffner ist offen. In Reihe müssen beide leiten.</li>
<li><b>Ja</b>: Der zweite (nicht betätigte) Öffner ist noch geschlossen und bildet einen Weg.</li></ol>`
      }
    ],

    quiz: [
      { q: 'Was ist ein <b>Schaltelement</b>?', a: ['Ein Bauteil, das elektrische Verbindungen öffnet oder schließt', 'Eine Stromquelle', 'Ein Verbraucher wie eine Lampe', 'Ein Kabel'], c: 0, e: 'Genau so steht es im Heft.' },
      { q: 'Was macht ein <b>Öffner</b>, wenn man ihn betätigt?', a: ['Er unterbricht den Stromkreis', 'Er schließt den Stromkreis', 'Er wechselt die Polung', 'Nichts'], c: 0, e: 'Unbetätigt geschlossen, betätigt offen.' },
      { q: 'Was ist ein <b>Taster</b>?', a: ['Ein Schalter, der nur betätigt ist, solange man drückt', 'Ein Schalter, der in seiner Stellung bleibt', 'Ein Schalter mit drei Anschlüssen', 'Ein Messgerät'], c: 0, e: 'Taster federn zurück, Stellschalter rasten ein.' },
      { q: 'Welche Schaltung ist eine <b>UND</b>-Schaltung?', a: ['Reihenschaltung von Schließern', 'Parallelschaltung von Schließern', 'Ein einzelner Öffner', 'Wechselschaltung'], c: 0, e: 'Nur wenn alle geschlossen sind, fließt Strom.' },
      { q: 'Welche Schaltung ist eine <b>ODER</b>-Schaltung?', a: ['Parallelschaltung von Schließern', 'Reihenschaltung von Schließern', 'Reihenschaltung von Öffnern', 'Eine einzelne Lampe'], c: 0, e: 'Ein geschlossener Zweig reicht.' },
      { q: 'Was brauchst du für das <b>Kühlschranklicht</b>?', a: ['Einen Taster als Öffner', 'Einen Taster als Schließer', 'Einen Stellschalter als Schließer', 'Einen Wechsler'], c: 0, e: 'Tür zu drückt den Taster → Kontakt öffnet → Licht aus.' },
      { q: 'Wie schaltet man <b>3 Not-Aus-Schalter</b> richtig?', a: ['3 Öffner in Reihe', '3 Schließer parallel', '3 Öffner parallel', '3 Schließer in Reihe'], c: 0, e: 'Einer betätigt → der Kreis ist unterbrochen. Das geht nur mit Öffnern in Reihe.' },
      { q: 'Was ist ein <b>Wechsler</b>?', a: ['Ein Schalter, der zwischen zwei Verbindungen hin- und herwechselt', 'Ein Schalter, der den Strom umpolt', 'Ein Taster ohne Feder', 'Ein Bauteil, das Wechselstrom erzeugt'], c: 0, e: 'Er hat einen gemeinsamen Anschluss (COM) und zwei Kontakte.' },
      { q: 'Wie heißt der Anschluss eines Wechslers, der immer verbunden ist?', a: ['Gemeinsamer Anschluss (common pin)', 'Pluspol', 'Erdung', 'Knotenpunkt'], c: 0, e: 'COM = common.' },
      { q: 'Auto-Innenlicht: Wie sind die Türtaster geschaltet?', a: ['Öffner, parallel', 'Schließer, in Reihe', 'Öffner, in Reihe', 'Schließer, parallel'], c: 0, e: 'Tür zu = gedrückt = offen. Eine offene Tür reicht (ODER).' },
      { q: 'Ein Lichtschalter im Zimmer ist ein …', a: ['Stellschalter', 'Taster', 'Öffner', 'Wechsler mit Feder'], c: 0, e: 'Er bleibt in seiner Stellung (rastet ein).' },
      { q: 'Womit kann man eine Flurlampe von <b>zwei Stellen</b> aus schalten?', a: ['Mit zwei Wechslern', 'Mit zwei Schließern in Reihe', 'Mit zwei Öffnern in Reihe', 'Mit einem Taster'], c: 0, e: 'Das ist die Wechselschaltung.' }
    ]
  });
})();
