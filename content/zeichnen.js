window.TOPICS = window.TOPICS || [];
window.TOPICS.push({
  id: 'zeichnen',
  order: 1,
  title: 'Technisches Zeichnen',
  short: 'Linienarten, Dreitafelprojektion, Bemaßung, Maßstab',
  icon: '📐',
  color: '#2f6f9f',
  ytSearch: 'Dreitafelprojektion technisches Zeichnen einfach erklärt',
  sims: [
    { id: 'ansichten', title: 'Ansichten-Trainer' },
    { id: 'massstab', title: 'Maßstab-Trainer' }
  ],

  learn: [
    {
      title: 'Wozu technische Zeichnungen?',
      html: `
<p>Am Anfang einer technischen Entwicklung steht eine <b>Idee</b>. Damit sie Wirklichkeit werden kann, muss das Bauteil <b>genau festgelegt</b> werden. Das geschieht mit einer <b>technischen Zeichnung</b>.</p>
<p>Technische Zeichnungen werden nach <b>festen Regeln (Normen)</b> gezeichnet. Diese Regeln gelten <b>international</b>. So versteht jeder auf der Welt die Zeichnung gleich, und sie ist <b>eindeutig</b>.</p>
<div class="merke">Eine technische Zeichnung muss <b>eindeutig</b>, <b>vollständig</b> und <b>verständlich</b> sein. Jeder muss das Bauteil danach bauen können.</div>`
    },
    {
      title: 'Linienarten',
      html: `
<p>Beim technischen Zeichnen benutzt man verschiedene Linienarten. Jede hat eine feste Bedeutung:</p>
<figure class="figure svgc">
<svg viewBox="0 0 520 250" role="img" aria-label="Die vier Linienarten">
  <line x1="20" y1="30" x2="200" y2="30" class="stroke" stroke-width="4"/>
  <text x="220" y="36" font-size="15"><tspan font-weight="700">Breite Volllinie</tspan> = sichtbare Kante</text>
  <line x1="20" y1="85" x2="200" y2="85" class="stroke" stroke-width="2" stroke-dasharray="12 6"/>
  <text x="220" y="91" font-size="15"><tspan font-weight="700">Strichlinie</tspan> = verdeckte Kante</text>
  <line x1="20" y1="140" x2="200" y2="140" class="stroke" stroke-width="1.5" stroke-dasharray="26 5 3 5"/>
  <text x="220" y="146" font-size="15"><tspan font-weight="700">Strichpunktlinie</tspan> = Mittel-/Symmetrielinie</text>
  <path d="M20 195 C 50 180, 70 210, 100 195 S 160 182, 200 196" class="stroke" stroke-width="1.5"/>
  <text x="220" y="201" font-size="15"><tspan font-weight="700">Freihandlinie</tspan> = Bruchkante</text>
  <line x1="20" y1="235" x2="200" y2="235" class="stroke" stroke-width="1.2"/>
  <text x="220" y="240" font-size="15"><tspan font-weight="700">Schmale Volllinie</tspan> = Maß- und Maßhilfslinien</text>
</svg>
</figure>
<div class="table-wrap"><table>
<tr><th>Linienart</th><th>Bedeutung</th></tr>
<tr><td>breite Volllinie</td><td><b>sichtbare Kanten</b> und Umrisse</td></tr>
<tr><td>Strichlinie (gestrichelt)</td><td><b>verdeckte Kanten</b>: Sie liegen <b>hinter</b> einer sichtbaren Fläche. Man zeichnet sie, wenn sie zum Verständnis wichtig sind.</td></tr>
<tr><td>Strichpunktlinie</td><td><b>Mittellinien / Symmetrieachsen</b>, z. B. bei Bohrungen. Sie wird ein wenig <b>über das Objekt bzw. das Loch hinaus</b> gezeichnet.</td></tr>
<tr><td>Freihandlinie</td><td><b>Bruchkante</b>: Die Zeichnung bricht hier ab, das Objekt geht aber noch weiter.</td></tr>
<tr><td>schmale Volllinie</td><td><b>Maßlinien</b> und <b>Maßhilfslinien</b></td></tr>
</table></div>`
    },
    {
      title: 'Dreitafelprojektion',
      html: `
<p>Ein räumliches Objekt wird in einer technischen Zeichnung aus <b>drei Richtungen</b> gezeichnet. Man stellt sich vor, man schaut genau <b>senkrecht</b> von vorne, von links und von oben darauf. Jede Ansicht ist <b>flach (2D)</b>, ohne Schrägen oder Perspektive.</p>
<div class="two-col">
<div>
<dl class="kv">
<dt>V</dt><dd><b>Vorderansicht</b>: Blick von vorne. Sie ist die wichtigste Ansicht und steht <b>oben links</b>.</dd>
<dt>S</dt><dd><b>Seitenansicht von links</b>: Blick von links. Sie steht <b>rechts neben</b> der Vorderansicht.</dd>
<dt>D</dt><dd><b>Draufsicht</b>: Blick von oben. Sie steht <b>unter</b> der Vorderansicht.</dd>
</dl>
<div class="merke">
<b>Anordnung:</b> V oben links, S rechts daneben, D darunter.<br>
<b>V und S sind gleich hoch</b> (gleiche Höhe).<br>
<b>V und D sind gleich breit</b> (gleiche Breite).<br>
<b>S und D sind gleich tief</b> (Tiefe).
</div>
</div>
<div>
<div class="figure" data-iso="winkel" data-arrow="1"></div>
<div class="figure" data-dtp="winkel"></div>
<p class="cap muted small" style="text-align:center">Beispiel: Winkel als Raumbild (oben) und in Dreitafelprojektion (unten). Die gestrichelte Linie in S ist die verdeckte Kante der unteren Platte.</p>
</div>
</div>

<h3>Schritt für Schritt</h3>
<ol>
<li>Lege fest, was <b>vorne</b> ist (meist zeigt ein Pfeil <b>V</b> die Blickrichtung).</li>
<li>Zeichne die <b>Vorderansicht</b> oben links mit den richtigen Maßen (Breite und Höhe).</li>
<li>Ziehe dünne <b>Hilfslinien waagrecht</b> nach rechts und zeichne die <b>Seitenansicht</b> (gleiche Höhe!).</li>
<li>Ziehe dünne <b>Hilfslinien senkrecht</b> nach unten und zeichne die <b>Draufsicht</b> (gleiche Breite!).</li>
<li>Prüfe jede Kante: <b>sichtbar</b> → breite Volllinie; <b>verdeckt</b> → Strichlinie. Bohrungen bekommen eine <b>Mittellinie</b>.</li>
</ol>
<div class="warn">Seitenansicht <b>links</b> neben die Vorderansicht zeichnen. Richtig ist: Die Seitenansicht <b>von links</b> steht <b>rechts</b> neben V. Außerdem gilt: In den Ansichten gibt es <b>keine schrägen Raumbild-Kanten</b>, alles ist genau von vorne, links bzw. oben gesehen.</div>
<div class="tip">Im <b>Trainer</b> („Ansichten-Trainer“) kannst du beliebig viele Körper üben. Dort siehst du immer das Raumbild und musst die richtige Ansicht finden.</div>`
    },
    {
      title: 'Bemaßung',
      html: `
<p>Die Zeichnung legt die <b>Gestalt</b> fest, die Bemaßung die <b>Größe</b>. Für Maße gibt es feste Regeln:</p>
<figure class="figure svgc">
<svg viewBox="0 0 420 230" role="img" aria-label="Beispiel einer Bemaßung">
  <defs><marker id="mpf" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="9" markerHeight="9" orient="auto-start-reverse"><path d="M0 2 L10 5 L0 8 z" class="fill"/></marker></defs>
  <rect x="90" y="40" width="200" height="110" class="stroke" stroke-width="3.5"/>
  <circle cx="230" cy="95" r="22" class="stroke" stroke-width="3.5"/>
  <line x1="196" y1="95" x2="264" y2="95" class="stroke" stroke-width="1" stroke-dasharray="14 4 2 4"/>
  <line x1="230" y1="61" x2="230" y2="129" class="stroke" stroke-width="1" stroke-dasharray="14 4 2 4"/>
  <!-- Maßhilfslinien unten -->
  <line x1="90" y1="154" x2="90" y2="196" class="stroke" stroke-width="1"/>
  <line x1="290" y1="154" x2="290" y2="196" class="stroke" stroke-width="1"/>
  <line x1="90" y1="190" x2="290" y2="190" class="stroke" stroke-width="1" marker-start="url(#mpf)" marker-end="url(#mpf)"/>
  <text x="190" y="184" font-size="15" text-anchor="middle">80</text>
  <!-- links -->
  <line x1="86" y1="40" x2="44" y2="40" class="stroke" stroke-width="1"/>
  <line x1="86" y1="150" x2="44" y2="150" class="stroke" stroke-width="1"/>
  <line x1="50" y1="40" x2="50" y2="150" class="stroke" stroke-width="1" marker-start="url(#mpf)" marker-end="url(#mpf)"/>
  <text x="44" y="100" font-size="15" text-anchor="middle" transform="rotate(-90 44 100)">45</text>
  <!-- Durchmesser -->
  <line x1="250" y1="80" x2="340" y2="30" class="stroke" stroke-width="1"/>
  <text x="344" y="30" font-size="15">Ø18</text>
  <text x="300" y="215" font-size="12" class="muted">Maße in mm (ohne Einheit)</text>
</svg>
</figure>
<ul>
<li>Alle Maße in <b>mm</b>. Die Einheit wird <b>nicht</b> hingeschrieben.</li>
<li>Die <b>Maßzahl</b> steht <b>über</b> der Maßlinie und muss von <b>unten</b> oder von <b>rechts</b> lesbar sein.</li>
<li><b>Maßlinien</b> sind schmale Volllinien mit <b>Maßpfeilen</b>, die genau an die Maßhilfslinien stoßen.</li>
<li><b>Maßhilfslinien</b> verlängern die Körperkante und ragen ca. <b>2 mm</b> über die Maßlinie hinaus.</li>
<li>Abstand Maßlinie zur Körperkante ca. <b>10 mm</b>, zwischen zwei Maßlinien ca. <b>7 mm</b>.</li>
<li>Jedes Maß wird <b>nur einmal</b> eingetragen, und zwar dort, wo man die Form <b>am besten</b> erkennt.</li>
<li><b>Keine Maße an verdeckte Kanten</b> (Strichlinien) setzen.</li>
<li>Kreise: <b>Ø</b> für Durchmesser, <b>R</b> für Radius. Die Lage einer Bohrung bemaßt man bis zur <b>Mittellinie</b>.</li>
<li>Maßlinien dürfen sich möglichst <b>nicht kreuzen</b>.</li>
</ul>
<div class="merke">Die <b>Maßzahl</b> ist immer das <b>wirkliche Maß</b> des Bauteils, egal in welchem Maßstab gezeichnet wurde!</div>`
    },
    {
      title: 'Maßstab',
      html: `
<p>Große Dinge (Haus, Brücke) kann man nicht in Originalgröße zeichnen, und kleine Dinge (Uhrenzahnrad) wären zu winzig. Darum zeichnet man im <b>Maßstab</b>.</p>
<div class="formula">Maßstab = Zeichnung : Wirklichkeit<small>M 1 : 5 bedeutet: 1 mm in der Zeichnung = 5 mm in Wirklichkeit</small></div>
<div class="table-wrap"><table>
<tr><th>Maßstab</th><th>Art</th><th>Beispiel</th></tr>
<tr><td>1 : 1</td><td>natürliche Größe</td><td>Zeichnung = Original</td></tr>
<tr><td>1 : 2, 1 : 5, 1 : 10, 1 : 50 …</td><td><b>Verkleinerung</b></td><td>1 : 5 → Zeichnung ist 5-mal kleiner</td></tr>
<tr><td>2 : 1, 5 : 1, 100 : 1 …</td><td><b>Vergrößerung</b></td><td>2 : 1 → Zeichnung ist 2-mal größer</td></tr>
</table></div>
<h3>So rechnest du</h3>
<p>Maßstab <b>a : b</b> (a = Zeichnung, b = Wirklichkeit):</p>
<div class="formula">Zeichnung = Original · a / b &nbsp;&nbsp;|&nbsp;&nbsp; Original = Zeichnung · b / a</div>
<div class="example">
<b>M 1 : 50</b>, Original 1500 mm → Zeichnung = 1500 · 1/50 = <b>30 mm</b><br>
<b>M 100 : 1</b>, Zeichnung 70 mm → Original = 70 · 1/100 = <b>0,7 mm</b><br>
Zeichnung 61,5 mm, Original 123 mm → 61,5 : 123 = <b>1 : 2</b>
</div>
<div class="warn">Bei <b>Verkleinerung</b> muss die Zeichnung <b>kleiner</b> als das Original sein. Überprüfe dein Ergebnis immer mit dieser Frage: „Ist die Zahl jetzt größer oder kleiner? Passt das?“</div>`
    },
    {
      title: 'Handzeichnen & Raumbild',
      html: `
<ul>
<li>Beim <b>Handzeichnen</b> (Skizze) zeichnet man ohne exakte Maße, aber <b>maßstäblich ungefähr richtig</b>. <b>Karopapier</b> hilft sehr.</li>
<li>Für <b>technische Zeichnungen</b> verwendet man Lineal, Geodreieck und <b>Blankopapier</b>.</li>
<li>Ein <b>Raumbild</b> zeigt das Objekt schräg von vorne/oben, damit man es sich gut vorstellen kann. Zum Bauen nutzt man aber die <b>Dreitafelprojektion</b>, weil man dort alle Maße unverzerrt ablesen kann.</li>
</ul>
<div class="tip">Frage dich bei jeder Kante: „Sehe ich sie von hier aus, oder ist sie verdeckt?“ Stell dir vor, du hältst das Objekt in der Hand und drehst es.</div>`
    }
  ],

  videos: [
    { id: 'ydO0Z0Mjt34', title: 'Dreitafelprojektion in zwei Schritten', desc: 'Kurz und anschaulich mit Übung.' },
    { id: 'xRE3cSaWgdE', title: 'Dreitafelprojektion – Technisches Zeichnen', desc: 'Zwei Beispiele einfacher Körper (mathe-physik-technik.de).' },
    { id: 'EiUgZzTZb40', title: 'Grundlagen Bemaßung einfach erklärt', desc: 'Maßpfeile, Bezugskanten, Kreise bemaßen.' },
    { id: 'NPBake4Cspc', title: 'Regeln für das Bemaßen', desc: 'Die wichtigsten Bemaßungsregeln an einem Beispiel.' }
  ],

  tasks: [
    {
      title: 'Aufgabe 1: Linienarten',
      src: 'Technisches Zeichnen 1',
      html: `<p>Ordne zu: Welche Linienart verwendet man für …</p>
<p>a) sichtbare Kanten &nbsp; b) verdeckte Kanten &nbsp; c) die Achse einer Bohrung &nbsp; d) ein Objekt, das in der Zeichnung abbricht, aber weitergeht &nbsp; e) Maßlinien</p>`,
      solution: `<p>a) <b>breite Volllinie</b><br>b) <b>Strichlinie</b> (gestrichelt)<br>c) <b>Strichpunktlinie</b> (Mittel-/Symmetrielinie, etwas über das Loch hinaus gezeichnet)<br>d) <b>Freihandlinie</b> (Bruchkante)<br>e) <b>schmale Volllinie</b></p>`
    },
    {
      title: 'Aufgabe 2: Maßstabs-Tabelle',
      src: 'Weitere Übungen – Aufgabe 5',
      html: `<p>Vervollständige die Tabelle.</p>
<div class="table-wrap"><table>
<tr><th>Größe in der Zeichnung (mm)</th><td>?</td><td>112</td><td>500</td><td>?</td><td>70</td><td>61,5</td></tr>
<tr><th>Gewählter Maßstab</th><td>M 1:2</td><td>M 1:1</td><td>?</td><td>M 1:50</td><td>M 100:1</td><td>?</td></tr>
<tr><th>Originalgröße (mm)</th><td>10</td><td>?</td><td>100</td><td>1 500</td><td>?</td><td>123</td></tr>
</table></div>`,
      solution: `<div class="table-wrap"><table>
<tr><th>Zeichnung (mm)</th><td><b>5</b></td><td>112</td><td>500</td><td><b>30</b></td><td>70</td><td>61,5</td></tr>
<tr><th>Maßstab</th><td>1:2</td><td>1:1</td><td><b>5:1</b></td><td>1:50</td><td>100:1</td><td><b>1:2</b></td></tr>
<tr><th>Original (mm)</th><td>10</td><td><b>112</b></td><td>100</td><td>1 500</td><td><b>0,7</b></td><td>123</td></tr>
</table></div>
<div class="calc">10 · 1/2 = 5 mm
1:1 → Original = Zeichnung = 112 mm
500 : 100 = 5 : 1  (Vergrößerung)
1500 · 1/50 = 30 mm
70 · 1/100 = 0,7 mm
61,5 : 123 = 1 : 2  (Verkleinerung)</div>`
    },
    {
      title: 'Aufgabe 3: Maßstab 1 : 5 – Maßzahlen ergänzen',
      src: 'Seifenblasenmaschine – Spannklotz b)',
      html: `<p>Der Spannklotz wurde im Maßstab <b>1 : 5</b> gezeichnet. Du misst in der Zeichnung mit dem Lineal folgende Strecken: <b>48 mm</b>, <b>30 mm</b>, <b>16 mm</b> und <b>9 mm</b>. Welche Maßzahlen schreibst du an die Maßlinien?</p>`,
      solution: `<p>Bei 1 : 5 ist das Original <b>5-mal so groß</b> wie die Zeichnung. Also: gemessene Länge · 5.</p>
<div class="calc">48 mm · 5 = 240     30 mm · 5 = 150
16 mm · 5 = 80      9 mm · 5 = 45</div>
<p>Man schreibt die <b>wirklichen Maße</b> (240, 150, 80, 45) an die Maßlinien, <b>ohne</b> „mm“.</p>
<div class="tip">So gehst du auf dem echten Blatt vor: Jede Maßlinie mit dem Lineal genau messen und mal 5 nehmen.</div>`
    },
    {
      title: 'Aufgabe 4: Dreitafelprojektion – Treppe',
      src: 'Technisches Handzeichnen – Aufgabe 5',
      html: `<p>Zeichne die Vorderansicht (Pfeil V), die Seitenansicht von links und die Draufsicht dieser Treppe in der richtigen Anordnung.</p><div class="figure" data-iso="treppe" data-arrow="1"></div>`,
      solution: `<div class="figure" data-dtp="treppe"></div>
<p>Die Stufen steigen nach <b>hinten</b> an. In <b>V</b> sieht man die drei senkrechten Stufenflächen übereinander, deshalb gibt es <b>waagrechte</b> Linien. In <b>S</b> (von links) sieht man das <b>Treppenprofil</b>, vorne ist rechts. In <b>D</b> sieht man die Stufenkanten ebenfalls als waagrechte Linien. Alle Kanten sind sichtbar, es gibt also keine Strichlinien.</p>`
    },
    {
      title: 'Aufgabe 5: Dreitafelprojektion – Klotz mit Aussparung',
      src: 'Übung',
      html: `<p>Der Klotz hat <b>hinten rechts</b> eine Aussparung, dafür ist er hinten links höher. Zeichne die Dreitafelprojektion. Achte auf <b>verdeckte Kanten</b>!</p><div class="figure" data-iso="podest" data-arrow="1"></div>`,
      solution: `<div class="figure" data-dtp="podest"></div>
<p>Die <b>Aussparung hinten rechts</b> ist von vorne <b>nicht</b> zu sehen, weil der vordere Teil davor ist. Deshalb zeichnet man sie in <b>V</b> mit <b>Strichlinien</b>. Den erhöhten Teil hinten links sieht man oben drüber, er bekommt Volllinien. In <b>S</b> (von links) ist die Aussparung ebenfalls verdeckt, also gibt es dort auch Strichlinien. In <b>D</b> sieht man alles direkt von oben, deshalb nur Volllinien.</p>`
    },
    {
      title: 'Aufgabe 6: Dreitafelprojektion – Nut',
      src: 'Übung',
      html: `<p>Der Klotz hat oben eine durchgehende <b>Nut</b> (Rille) von vorne nach hinten. Zeichne V, S und D.</p><div class="figure" data-iso="nut" data-arrow="1"></div>`,
      solution: `<div class="figure" data-dtp="nut"></div>
<p>In V sieht man die Nut als <b>U-Form</b>. In S (von links) ist die Nut <b>verdeckt</b>, weil die linke Wange davor ist. Deshalb zeichnet man den Nutgrund als <b>Strichlinie</b>. In D sieht man die beiden Nutkanten als durchgehende Linien.</p>`
    },
    {
      title: 'Aufgabe 7: Anordnung der Ansichten',
      src: 'Technisches Handzeichnen – Aufgabe 3/4',
      html: `<p>a) Wo steht in der Dreitafelprojektion die Seitenansicht, wo die Draufsicht?<br>b) Welche Maße haben Vorderansicht und Seitenansicht gemeinsam, welche Vorderansicht und Draufsicht?<br>c) Lisa zeichnet die Seitenansicht links neben die Vorderansicht. Was sagst du ihr?</p>`,
      solution: `<p>a) Die <b>Seitenansicht (von links)</b> steht <b>rechts neben</b> der Vorderansicht, die <b>Draufsicht</b> steht <b>unter</b> der Vorderansicht.<br>
b) V und S haben die gleiche <b>Höhe</b>. V und D haben die gleiche <b>Breite</b>. (S und D haben die gleiche Tiefe.)<br>
c) Das ist falsch: Die Ansicht <b>von links</b> wird <b>rechts</b> neben die Vorderansicht gezeichnet. Man „klappt“ sie nach rechts.</p>`
    },
    {
      title: 'Aufgabe 8: Bemaßungsfehler finden',
      src: 'Bemaßungen – Aufgabe 7',
      html: `<p>Bei dieser Bemaßung wurden Fehler gemacht. Finde sie und nenne die richtige Regel:</p>
<ol type="a">
<li>An der Maßlinie steht „60 mm“.</li>
<li>Die Breite 60 ist in der Vorderansicht <b>und</b> in der Draufsicht eingetragen.</li>
<li>Ein Maß ist an eine gestrichelte Kante gesetzt.</li>
<li>Die Maßzahl steht unter der Maßlinie und ist nur lesbar, wenn man das Blatt auf den Kopf dreht.</li>
<li>Die Bohrung ist mit „R 10“ beschriftet, gemeint ist aber der Durchmesser 10.</li>
</ol>`,
      solution: `<ol type="a">
<li>Maße stehen ohne Einheit da. Richtig ist <b>60</b>, denn alles ist in mm.</li>
<li>Jedes Maß wird <b>nur einmal</b> eingetragen.</li>
<li><b>Keine Maße an verdeckte Kanten</b>.</li>
<li>Die Maßzahl steht <b>über</b> der Maßlinie und muss <b>von unten oder rechts</b> lesbar sein.</li>
<li>Für den Durchmesser schreibt man <b>Ø10</b>, R steht für den Radius.</li>
</ol>`
    },
    {
      title: 'Aufgabe 9: Welcher Maßstab?',
      src: 'Bemaßungen – Aufgabe 6c',
      html: `<p>a) Ein Bauteil ist in Wirklichkeit 30 mm breit. In der Zeichnung ist es 60 mm breit. Welcher Maßstab?<br>
b) Eine Garage ist 6 m lang. Sie wird im Maßstab 1 : 50 gezeichnet. Wie lang ist sie in der Zeichnung?<br>
c) Ein Zahnrad hat in einer 5 : 1-Zeichnung einen Durchmesser von 45 mm. Wie groß ist es wirklich?</p>`,
      solution: `<div class="calc">a) 60 : 30 = 2 : 1  → Vergrößerung
b) 6 m = 6000 mm;  6000 · 1/50 = 120 mm
c) 45 · 1/5 = 9 mm</div>`
    }
  ],

  quiz: [
    { q: 'Welche Linienart zeigt eine <b>verdeckte</b> Kante?', a: ['Strichlinie', 'Breite Volllinie', 'Strichpunktlinie', 'Freihandlinie'], c: 0, e: 'Verdeckte Kanten werden gestrichelt gezeichnet.' },
    { q: 'Wofür steht die <b>Strichpunktlinie</b>?', a: ['Mittel- bzw. Symmetrielinie', 'Bruchkante', 'Sichtbare Kante', 'Maßhilfslinie'], c: 0, e: 'Strichpunkt = Mittellinie, z. B. durch eine Bohrung.' },
    { q: 'Wo steht die <b>Seitenansicht von links</b>?', a: ['Rechts neben der Vorderansicht', 'Links neben der Vorderansicht', 'Unter der Vorderansicht', 'Über der Vorderansicht'], c: 0, e: 'Die Ansicht von links wird nach rechts geklappt.' },
    { q: 'Wo steht die <b>Draufsicht</b>?', a: ['Unter der Vorderansicht', 'Über der Vorderansicht', 'Rechts neben der Seitenansicht', 'Links neben der Vorderansicht'], c: 0, e: 'D steht unter V, beide sind gleich breit.' },
    { q: 'Welche Maße haben <b>Vorderansicht und Seitenansicht</b> gemeinsam?', a: ['Die Höhe', 'Die Breite', 'Die Tiefe', 'Keine'], c: 0, e: 'V und S stehen nebeneinander, deshalb sind sie gleich hoch.' },
    { q: 'Im Maßstab <b>1 : 5</b> misst eine Strecke 12 mm. Welche Maßzahl schreibt man hin?', a: ['60', '12', '2,4', '17'], c: 0, e: 'Die Maßzahl ist immer das wirkliche Maß: 12 · 5 = 60.' },
    { q: 'Welcher Maßstab ist eine <b>Vergrößerung</b>?', a: ['5 : 1', '1 : 5', '1 : 1', '1 : 50'], c: 0, e: 'Bei a : b mit a > b ist die Zeichnung größer als das Original.' },
    { q: 'In welcher Einheit werden Maße in technischen Zeichnungen angegeben?', a: ['mm (ohne die Einheit hinzuschreiben)', 'cm', 'm', 'Es muss immer die Einheit dabeistehen'], c: 0, e: 'Alle Maße in Millimetern, die Einheit wird weggelassen.' },
    { q: 'Was bedeutet <b>Ø 20</b>?', a: ['Durchmesser 20 mm', 'Radius 20 mm', 'Winkel 20°', 'Tiefe 20 mm'], c: 0, e: 'Ø = Durchmesser, R = Radius.' },
    { q: 'Ein Teil ist 2 mm groß und wird 100 : 1 gezeichnet. Wie groß ist es in der Zeichnung?', a: ['200 mm', '0,02 mm', '20 mm', '102 mm'], c: 0, e: '2 · 100 = 200 mm.' },
    { q: 'Welche Regel stimmt <b>nicht</b>?', a: ['Maße dürfen an verdeckte Kanten gesetzt werden.', 'Jedes Maß wird nur einmal eingetragen.', 'Die Maßzahl steht über der Maßlinie.', 'Maßhilfslinien ragen etwas über die Maßlinie hinaus.'], c: 0, e: 'An verdeckte Kanten (Strichlinien) setzt man keine Maße.' },
    { q: 'Wozu dient eine <b>Freihandlinie</b>?', a: ['Sie zeigt eine Bruchkante: Das Objekt geht weiter.', 'Für Skizzen ohne Lineal', 'Für Mittellinien', 'Für verdeckte Kanten'], c: 0, e: 'Die Freihandlinie kennzeichnet, dass die Zeichnung hier abbricht.' }
  ]
});
