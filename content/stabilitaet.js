window.TOPICS = window.TOPICS || [];
window.TOPICS.push({
  id: 'stabilitaet',
  order: 5,
  title: 'Stabilität',
  short: 'Belastungsarten, Seile & Stäbe, Knicken, Dreiecke & Streben',
  icon: '🏗️',
  color: '#2e8b57',
  ytSearch: 'Belastungsarten Zug Druck Biegung Schub einfach erklärt',
  sims: [{ id: 'zug', title: 'Zugfestigkeits-Rechner' }],

  learn: [
    {
      title: 'Bauteile unter Belastung',
      html: `
<p>Um stabil zu bauen, benutzt man Bauteile, die die Belastungen besonders gut aushalten. Auf Bauteile und Bauwerke wirken <b>Kräfte</b>: schon allein die <b>Eigenlast</b> (Gewichtskraft der Konstruktion), dazu <b>Nutzlasten</b>, Schneelasten, Windlasten usw.</p>
<div class="example">Pyramide: Steine auf Steinen, die Stabilität kommt vom Gewicht. Fachwerkhaus: Holzbalken bilden <b>Dreiecke</b>, die Füllung (Stroh, Lehm) trägt nicht. Fahrradrahmen: aus Rohren in <b>Dreiecksform</b>, leicht und stabil.</div>`
    },
    {
      title: 'Die vier Belastungsarten',
      html: `
<figure class="figure svgc">
<svg viewBox="0 0 560 150" role="img" aria-label="Belastungsarten">
  <defs><marker id="sA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#c0392b"/></marker></defs>
  <!-- Druck -->
  <rect x="45" y="45" width="40" height="55" class="soft stroke" stroke-width="2"/>
  <line x1="65" y1="8" x2="65" y2="40" stroke="#c0392b" stroke-width="3" marker-end="url(#sA)"/>
  <line x1="65" y1="137" x2="65" y2="105" stroke="#c0392b" stroke-width="3" marker-end="url(#sA)"/>
  <text x="65" y="148" font-size="0">.</text>
  <!-- Zug -->
  <rect x="185" y="45" width="40" height="55" class="soft stroke" stroke-width="2"/>
  <line x1="205" y1="42" x2="205" y2="10" stroke="#c0392b" stroke-width="3" marker-end="url(#sA)"/>
  <line x1="205" y1="103" x2="205" y2="135" stroke="#c0392b" stroke-width="3" marker-end="url(#sA)"/>
  <!-- Schub -->
  <path d="M320 45 h40 l10 0 v55 h-40 l-10 0 z" class="soft stroke" stroke-width="2"/>
  <line x1="300" y1="50" x2="330" y2="50" stroke="#c0392b" stroke-width="3" marker-end="url(#sA)"/>
  <line x1="390" y1="95" x2="360" y2="95" stroke="#c0392b" stroke-width="3" marker-end="url(#sA)"/>
  <!-- Biegung -->
  <path d="M440 60 Q 500 85 560 60 v14 Q 500 99 440 74 z" class="soft stroke" stroke-width="2"/>
  <line x1="500" y1="35" x2="500" y2="70" stroke="#c0392b" stroke-width="3" marker-end="url(#sA)"/>
  <polygon points="445,76 435,95 455,95" class="fill" opacity=".5"/><polygon points="555,76 545,95 565,95" class="fill" opacity=".5"/>
</svg>
</figure>
<div class="table-wrap"><table>
<tr><th>Belastung</th><th>Was passiert?</th><th>Beispiel</th></tr>
<tr><td><b>Druck</b></td><td>Kräfte <b>drücken</b> das Bauteil zusammen (man nennt das auch <b>Stauchen</b>).</td><td>Säulen, Tischbeine, Pfosten</td></tr>
<tr><td><b>Zug</b></td><td>Kräfte <b>ziehen</b> am Bauteil (man nennt das auch <b>Dehnung</b>).</td><td>Seile, Ketten einer Schaukel</td></tr>
<tr><td><b>Schub</b> (Scherung)</td><td>Kräfte wollen Ebenen des Bauteils <b>gegeneinander verschieben</b>.</td><td>Gerüst ohne Streben, Schraube zwischen zwei Platten</td></tr>
<tr><td><b>Biegung</b></td><td>Kräfte <b>verbiegen</b> das Bauteil (oben wird es gestaucht, unten gedehnt).</td><td>Brett, Balken, Regalboden, Sitzfläche</td></tr>
</table></div>`
    },
    {
      title: 'Seile & Stäbe: geeignet bei Zug',
      html: `
<p>Seile und Stäbe können <b>Zugbelastung</b> gut aufnehmen. Überall, wo in einer Konstruktion Zugkräfte wirken, kann man Seile oder Stäbe einbauen. Wichtig ist, dass das Bauteil die Belastung aushält, also <b>nicht überschritten</b> wird.</p>
<ul>
<li>Ein Seil kann <b>nur Zug</b> aufnehmen, keinen Druck. Unter Druck würde es einfach zusammenfallen.</li>
<li>Die Belastbarkeit hängt vom <b>Material</b> und von der <b>Querschnittsfläche A</b> ab, aber <b>nicht von der Länge</b>. Ein kurzes Seil ist also nicht stabiler als ein langes aus gleichem Material und gleichem Querschnitt.</li>
<li>Noch stabiler werden Seile, wenn man die einzelnen Fasern <b>verflicht</b>.</li>
</ul>
<div class="formula">F = R · A<small>R = Zugfestigkeit des Materials in N/mm² (Buchenholz: 135 N/mm²) · A = Querschnittsfläche in mm²</small></div>
<div class="formula">Kreis: A = π · r² = π · (d/2)²</div>
<div class="example">Buchenstab mit 1 mm²: F = 135 N/mm² · 1 mm² = 135 N → er hält ca. <b>13,5 kg</b>.<br>
Runder Buchenstab mit d = 5 mm: A = π · (2,5 mm)² ≈ 19,6 mm² → F = 135 · 19,6 ≈ <b>2650 N</b> (ca. 265 kg).</div>`
    },
    {
      title: 'Stützen & Stäbe: gut bei Druck',
      html: `
<p>Stellen, an denen Druckkräfte auftreten, werden durch <b>Stützen</b> gehalten: Stuhl- und Tischbeine, Säulen, Mittelpfeiler von Brücken. Bei Häusern übernehmen die tragenden Wände diese Funktion.</p>
<p>Sind die Bauteile <b>lang und schlank</b>, spricht man von <b>Stäben</b>. Anders als Stützen <b>knicken</b> Stäbe bei Druck häufig seitlich aus, statt gestaucht zu werden.</p>
<div class="merke">
<b>Knickstabilität:</b><br>
• Je <b>dicker</b> (größere Querschnittsfläche), desto stabiler gegen Knicken.<br>
• Je <b>länger</b>, desto leichter knickt der Stab.<br>
• Stäbe kann man durch <b>Querstäbe</b> stabilisieren. Diese verkürzen die freie Knicklänge (z. B. die Querstreben bei den Pfosten eines Wasserturms).
</div>
<h3>Lückentext (Aufgabe 8) – Lösung</h3>
<p><b>Seile</b> sind geeignet, um <u>Zugkräfte</u> aufzunehmen, <b>Stützen</b> für <u>Druckkräfte</u>. Ihre Belastbarkeit hängt jeweils von ihrer <u>Querschnittsfläche</u> (Dicke) und dem Material selbst ab. Bei <u>Zug</u> oder <u>Druck</u> kann man auch <b>Stäbe</b> einsetzen. Um ein Knicken unter Druckbelastung zu vermeiden, dürfen sie aber nicht zu <u>lang</u> und zu <u>dünn</u> sein. Oder sie müssen durch <u>Querstäbe</u> stabilisiert werden.</p>`
    },
    {
      title: 'Dreiecke & Scheiben: gut bei Schub',
      html: `
<figure class="figure svgc">
<svg viewBox="0 0 420 130" role="img" aria-label="Dreieck stabil, Viereck verschiebbar, Viereck mit Strebe stabil">
  <polygon points="20,110 120,110 70,20" class="stroke" stroke-width="4" fill="none"/>
  <text x="70" y="128" font-size="12" text-anchor="middle">Dreieck: stabil</text>
  <rect x="160" y="30" width="80" height="80" class="stroke" stroke-width="4" fill="none" opacity=".35"/>
  <polygon points="160,110 240,110 270,30 190,30" class="stroke" stroke-width="4" fill="none"/>
  <text x="215" y="128" font-size="12" text-anchor="middle">Viereck: verschiebbar</text>
  <rect x="310" y="30" width="80" height="80" class="stroke" stroke-width="4" fill="none"/>
  <line x1="310" y1="110" x2="390" y2="30" class="stroke acc" stroke-width="4"/>
  <text x="350" y="128" font-size="12" text-anchor="middle">mit Strebe: stabil</text>
</svg>
</figure>
<p>Bei viereckigen Konstruktionen aus Stäben können die <b>Winkel leicht verändert</b> werden, außer man baut sie in ein <b>Dreieck</b> ein. Denn bei einem Dreieck sind durch die drei Seitenlängen <b>auch die Winkel festgelegt</b>, beim Viereck nicht. Deshalb baut man Stabwerke mit diagonalen Stäben, am liebsten im <b>45°-Winkel</b>. Das sind die sogenannten <b>Streben</b>.</p>
<ul>
<li><b>Streben</b> (diagonal) machen aus einem Viereck zwei Dreiecke.</li>
<li><b>Scheiben</b> (feste Platten, z. B. Rückwand eines Regals) verhindern das Verschieben ebenfalls.</li>
<li><b>Seile als Kreuzverstrebung</b>: Weil Seile nur Zug aufnehmen, braucht man <b>zwei</b> gekreuzte Seile. Je nach Kipprichtung trägt immer das eine, das gerade gezogen wird. Ein <b>Stab</b> als Diagonale reicht allein, denn er hält Zug <b>und</b> Druck.</li>
</ul>
<div class="merke">Dreiecke sind <b>formstabil</b>. Deshalb bestehen Fachwerke, Kräne, Brücken und Fahrradrahmen aus Dreiecken.</div>`
    }
  ],

  videos: [
    { id: 'g7S1fr65e5I', title: 'Beanspruchungsarten: Übersicht', desc: 'Zug, Druck, Biegung, Schub im Überblick.' },
    { id: 'mQJ3-iElIPA', title: 'Die 5 Beanspruchungsarten', desc: 'Zug, Druck, Scherung, Biegung (und Torsion).' },
    { id: 'jSJoURLA1Tk', title: 'Belastungsarten in der Festigkeitslehre', desc: 'StudyHelp, etwas ausführlicher.' }
  ],

  tasks: [
    {
      title: 'Aufgabe 1: Die Schaukel',
      src: 'Stabilität – Aufgabe 1',
      html: `<p>Wie werden die Bauteile der Schaukel belastet: auf Druck, Zug, Schub oder Biegung?<br>a) die Ketten &nbsp; b) die Pfosten links und rechts &nbsp; c) der Balken ganz oben &nbsp; d) die Sitzfläche &nbsp; e) das Gerüst aus Pfosten und Balken</p>`,
      solution: `<ol type="a"><li>Ketten: <b>Zug</b></li><li>Pfosten: <b>Druck</b></li><li>Balken oben: <b>Biegung</b> (die Ketten hängen in der Mitte und ziehen ihn nach unten)</li><li>Sitzfläche: <b>Biegung</b></li><li>Gerüst: <b>Schub</b> (beim Schaukeln will sich das Rechteck verschieben, deshalb braucht es schräge Streben)</li></ol>`
    },
    {
      title: 'Aufgabe 2: Die Leiter',
      src: 'Stabilität – Aufgabe 2',
      html: `<p>Leitern bestehen aus Sprossen (Stufen) und Holmen (den Hölzern links und rechts). Wie werden Sprossen und Holme belastet, wenn man eine steil stehende Leiter hinaufsteigt? Was ändert sich, wenn die Leiter sehr schräg steht?</p>`,
      solution: `<p>Die <b>Sprossen</b> werden auf <b>Biegung</b> belastet (man steht in der Mitte). Die <b>Holme</b> werden bei steiler Leiter hauptsächlich auf <b>Druck</b> belastet.</p>
<p>Steht die Leiter <b>sehr schräg</b>, werden die Holme zusätzlich stark auf <b>Biegung</b> belastet (sie biegen sich durch). Die Leiter kann brechen, und sie rutscht leichter weg.</p>`
    },
    {
      title: 'Aufgabe 3: Zugkraft eines Fadens',
      src: 'Seile & Stäbe – Aufgabe 3',
      html: `<p>Bei welcher Zugkraft wird ein Heftfaden überschritten (reißt er)? Formuliere zuerst deine Erwartung: Hängt die Belastbarkeit von der <b>Länge</b> ab? Oder vom <b>Querschnitt</b>?</p>`,
      solution: `<p>Die Belastbarkeit hängt <b>nicht von der Länge</b> ab. Ein langer Faden reißt bei ungefähr der gleichen Kraft wie ein kurzer. Entscheidend sind <b>Material</b> und <b>Querschnittsfläche</b>: Ein doppelt genommener Faden hält etwa doppelt so viel.</p>
<p>Versuchsaufbau: Flasche (1,5 l) an den Faden hängen, auf Waage stellen, Waage tarieren und den Faden hochziehen, bis er reißt. Man misst <b>dreimal</b> und bildet den <b>Mittelwert</b>. Aus der Anzeige in g berechnet man die Kraft: 100 g ≙ 1 N.</p>`
    },
    {
      title: 'Aufgabe 4: Belastbarkeit eines Buchenstabs',
      src: 'Seile & Stäbe – Aufgabe 4',
      html: `<p>a) Ist ein kurzes Seil stabiler als ein langes bei gleichem Material und Querschnitt?<br>
b) Die Zugfestigkeit von Buchenholz beträgt 135 N/mm². An einen Buchenstab mit 1 mm² Querschnittsfläche kann man also eine Last von 135 N hängen (also einen 13,5 kg schweren Gegenstand). Berechne die Belastbarkeit eines runden Buchenholzstabs mit einem Durchmesser von d = 5 mm!</p>`,
      solution: `<p>a) <b>Nein.</b> Die Belastbarkeit auf Zug hängt nur von Material und Querschnitt ab, nicht von der Länge.</p>
<div class="calc">b) r = d / 2 = 2,5 mm
   A = π · r² = π · (2,5 mm)² ≈ 19,63 mm²
   F = R · A = 135 N/mm² · 19,63 mm² ≈ 2650 N</div>
<p class="answer">Der Stab hält ca. 2650 N, also etwa 265 kg.</p>`
    },
    {
      title: 'Aufgabe 5: Toastbrot-Versuch (Druck)',
      src: 'Stützen & Stäbe – Aufgabe 5',
      html: `<p>Mit getrocknetem Toastbrot wurde die Belastbarkeit unter Druck bestimmt. Überprüfe, ob sie a) von der Querschnittsfläche und b) von der Länge des belasteten Körpers abhängt.</p>`,
      solution: `<p>a) <b>Ja</b>: Doppelte Querschnittsfläche ergibt ungefähr <b>doppelte</b> Belastbarkeit. Die Belastbarkeit ist proportional zur Querschnittsfläche.</p>
<p>b) Bei kurzen, dicken Körpern (Stützen) hängt sie <b>kaum</b> von der Länge ab. Sind die Körper aber <b>lang und schlank</b>, knicken sie seitlich aus und halten <b>weniger</b>.</p>
<p class="note">Vergleiche immer nur Werte, bei denen sich <b>eine</b> Größe ändert und die andere gleich bleibt!</p>`
    },
    {
      title: 'Aufgabe 6: Knickstabilität',
      src: 'Stützen & Stäbe – Aufgabe 6',
      html: `<p>Ordne die Stäbe nach ihrer Knickstabilität (stabilster zuerst) und formuliere Regeln:<br>
① Ø = 2 mm, l = 15 cm &nbsp; ② Ø = 3 mm, l = 15 cm &nbsp; ③ Ø = 2 mm, l = 30 cm</p>`,
      solution: `<p>Reihenfolge: <b>② (dick, kurz) &gt; ① &gt; ③ (dünn, lang)</b></p>
<p><b>Regeln:</b> Je größer der Durchmesser (die Querschnittsfläche), desto knickstabiler. Je länger der Stab, desto leichter knickt er. Außerdem spielt die <b>Befestigung</b> eine Rolle: Ein in der Mitte befestigter Stab knickt schwerer.</p>`
    },
    {
      title: 'Aufgabe 7: Wasserturm',
      src: 'Stützen & Stäbe – Aufgabe 7',
      html: `<p>Erläutere den Versuch mit dem in der Mitte befestigten Stab und erkläre, welchen Einfluss die Querstäbe bei den vertikalen Pfosten des Wasserturms haben.</p>`,
      solution: `<p>Ein Stab, der in der <b>Mitte</b> befestigt ist, knickt viel schwerer. Seine freie <b>Knicklänge</b> ist nur noch halb so groß.</p>
<p>Die <b>Querstäbe</b> beim Wasserturm wirken genauso: Sie halten die langen, schlanken Pfosten in kurzen Abständen fest. Dadurch können die Pfosten nicht seitlich ausknicken und tragen eine viel größere Last.</p>`
    },
    {
      title: 'Aufgabe 8: Lückentext',
      src: 'Stützen & Stäbe – Aufgabe 8',
      html: `<p><b>Seile</b> sind geeignet, um ___(1)___ aufzunehmen, <b>Stützen</b> für ___(2)___. Ihre Belastbarkeit hängt jeweils von ihrer ___(3)___ (Dicke) und dem Material selbst ab. Bei ___(4)___ oder ___(5)___ kann man auch <b>Stäbe</b> einsetzen. Um ein Knicken unter Druckbelastung zu vermeiden, dürfen sie aber nicht zu ___(6)___ und zu ___(7)___ sein. Oder sie müssen durch ___(8)___ stabilisiert werden.</p>`,
      solution: `<p>(1) Zugkräfte · (2) Druckkräfte · (3) Querschnittsfläche · (4) Zug · (5) Druck · (6) lang · (7) dünn · (8) Querstäbe</p>`
    },
    {
      title: 'Aufgabe 9: Dreiecke und Vierecke',
      src: 'Dreiecke & Scheiben – Aufgabe 9/10',
      html: `<p>Du baust aus Stäben und Schrauben ein Dreieck, ein Viereck, ein Viereck mit Diagonale usw. Welche Formen sind formstabil? Leite Kriterien für die Stabilität von Stabwerken ab.</p>`,
      solution: `<p><b>Formstabil</b> sind das <b>Dreieck</b> und alle Formen, die aus Dreiecken zusammengesetzt sind (z. B. ein Viereck mit Diagonale). <b>Nicht stabil</b> sind Vierecke, Fünfecke usw. ohne Diagonalen. Man kann sie verschieben, weil sich die Winkel ändern können.</p>
<p><b>Kriterien:</b> 1. Ein Stabwerk ist stabil, wenn es vollständig in <b>Dreiecke</b> zerlegt ist. 2. Bei Dreiecken legen die drei Seitenlängen die Winkel fest. 3. Vierecke stabilisiert man mit <b>Streben</b> (Diagonalen, ideal 45°) oder <b>Scheiben</b> (Platten).</p>`
    },
    {
      title: 'Aufgabe 10: Regal stabilisieren',
      src: 'Dreiecke & Scheiben – Aufgabe 11',
      html: `<p>Das Regal soll stabilisiert werden. Sind bei einer Kreuzverstrebung Stäbe nötig, oder genügen Seile? Begründe! Wie wäre es bei nur einer diagonalen Verbindung?</p>`,
      solution: `<p>Bei einer <b>Kreuzverstrebung</b> (zwei Diagonalen) genügen <b>Seile</b>. Egal in welche Richtung das Regal kippen will, eine der beiden Diagonalen wird immer <b>gedehnt</b> (auf Zug belastet), und das hält ein Seil aus. Die andere Diagonale würde gestaucht, da hängt das Seil nur locker, das macht aber nichts.</p>
<p>Bei <b>nur einer</b> Diagonale braucht man einen <b>Stab</b>, denn er muss je nach Richtung Zug <b>und</b> Druck aufnehmen. Gummibänder müsste man <b>vorspannen</b>, sonst gibt die Konstruktion nach.</p>`
    },
    {
      title: 'Aufgabe 11: Würfel stabilisieren',
      src: 'Dreiecke & Scheiben – Aufgabe 12',
      html: `<p>Ein Würfel aus 12 Holzstäben (13 cm) ist an den Ecken mit Heißkleber verbunden. Er soll später mit Gewichten belastet werden. Wie kannst du ihn mit weiteren Stäben stabilisieren?</p>`,
      solution: `<p>Ein Würfel aus nur 12 Kanten besteht aus <b>Vierecken</b> und ist deshalb nicht formstabil. Er lässt sich verschieben. Man setzt in die Seitenflächen <b>diagonale Streben</b>, sodass jede Fläche in <b>Dreiecke</b> geteilt wird (mindestens die 4 Seitenflächen, besser alle). Alternativ klebt man <b>Platten (Scheiben)</b> auf. Auch die Ecken sollten gut verbunden sein.</p>`
    }
  ],

  quiz: [
    { q: 'Wie werden die <b>Ketten einer Schaukel</b> belastet?', a: ['Zug', 'Druck', 'Biegung', 'Schub'], c: 0, e: 'Das Gewicht zieht die Ketten lang.' },
    { q: 'Wie wird ein <b>Tischbein</b> belastet?', a: ['Druck', 'Zug', 'Biegung', 'Schub'], c: 0, e: 'Die Tischplatte drückt auf das Bein.' },
    { q: 'Wie wird ein <b>Regalboden</b> belastet?', a: ['Biegung', 'Zug', 'Druck', 'Schub'], c: 0, e: 'Er biegt sich in der Mitte durch.' },
    { q: 'Was bedeutet <b>Schub</b>?', a: ['Ebenen des Bauteils werden gegeneinander verschoben', 'Das Bauteil wird zusammengedrückt', 'Das Bauteil wird lang gezogen', 'Das Bauteil wird verdreht'], c: 0, e: 'Schub = Scherung.' },
    { q: 'Wovon hängt die Zug-Belastbarkeit eines Seils <b>nicht</b> ab?', a: ['Von der Länge', 'Vom Material', 'Von der Querschnittsfläche', 'Von der Dicke'], c: 0, e: 'Ein langes Seil hält genauso viel wie ein kurzes.' },
    { q: 'Wie lautet die Formel für die Zug-Belastbarkeit?', a: ['F = R · A', 'F = R / A', 'F = m · a', 'F = A / R'], c: 0, e: 'R = Zugfestigkeit (N/mm²), A = Querschnittsfläche (mm²).' },
    { q: 'Welcher Stab knickt am <b>leichtesten</b>?', a: ['Lang und dünn', 'Kurz und dick', 'Kurz und dünn', 'Lang und dick'], c: 0, e: 'Je länger und dünner, desto geringer die Knickstabilität.' },
    { q: 'Warum ist ein <b>Dreieck</b> formstabil?', a: ['Die drei Seitenlängen legen auch die Winkel fest', 'Es hat weniger Ecken', 'Es ist leichter', 'Weil es spitz ist'], c: 0, e: 'Beim Viereck können sich die Winkel trotz gleicher Seitenlängen ändern.' },
    { q: 'Was sind <b>Streben</b>?', a: ['Diagonale Stäbe, die Vierecke in Dreiecke teilen', 'Waagrechte Balken', 'Seile an einer Brücke', 'Senkrechte Pfosten'], c: 0, e: 'Am liebsten im 45°-Winkel eingebaut.' },
    { q: 'Kreuzverstrebung: Warum genügen <b>Seile</b>?', a: ['Je nach Kipprichtung ist immer ein Seil auf Zug belastet', 'Seile halten auch Druck aus', 'Seile sind schwerer', 'Weil sie biegsam sind'], c: 0, e: 'Seile tragen nur Zug, aber eine Diagonale wird immer gedehnt.' },
    { q: 'Ein Buchenstab (R = 135 N/mm²) hat A = 2 mm². Wie viel hält er?', a: ['270 N', '67,5 N', '137 N', '135 N'], c: 0, e: 'F = 135 · 2 = 270 N.' },
    { q: 'Wie kann man lange, schlanke Pfosten gegen Knicken sichern?', a: ['Mit Querstäben', 'Indem man sie länger macht', 'Mit Seilen in Längsrichtung', 'Gar nicht'], c: 0, e: 'Querstäbe verkürzen die freie Knicklänge (Wasserturm).' }
  ]
});
