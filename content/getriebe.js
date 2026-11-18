window.TOPICS = window.TOPICS || [];
window.TOPICS.push({
  id: 'getriebe',
  order: 3,
  title: 'Getriebe',
  short: 'Getriebearten, Drehrichtung, Übersetzung, Fahrrad, Lager',
  icon: '⚙️',
  color: '#7a5af5',
  ytSearch: 'Übersetzungsverhältnis Zahnräder einfach erklärt',
  sims: [
    { id: 'getriebe', title: 'Zahnrad-Simulator' },
    { id: 'uebersetzung', title: 'Übersetzung rechnen' },
    { id: 'drehrichtung', title: 'Drehrichtung & Last' }
  ],

  learn: [
    {
      title: 'Wozu Getriebe?',
      html: `
<p>Getriebe <b>übertragen Bewegungen</b>, meistens Drehbewegungen (<b>Rotation</b>), manchmal auch Längsbewegungen (<b>Translation</b>). Die Bewegung kommt vom <b>Antrieb</b> (z. B. Tretkurbel, Elektromotor) und geht zum <b>Abtrieb</b> (z. B. Hinterrad, Rührstäbe).</p>
<p>Getriebe können dabei Folgendes ändern:</p>
<ul><li>die <b>Drehzahl</b> (schneller / langsamer)</li><li>das <b>Drehmoment</b> (mehr / weniger Kraft)</li><li>die <b>Drehrichtung</b></li><li>die <b>Lage der Achse</b> (z. B. um 90° gedreht)</li><li>die <b>Bewegungsart</b> (Drehung ↔ Längsbewegung)</li></ul>
<div class="example"><b>Fahrrad:</b> Ein <b>Kettengetriebe</b> überträgt die Tretbewegung auf das Hinterrad. <b>Küchenmixer:</b> Ein <b>Zahnradgetriebe</b> überträgt die Drehung des Motors so auf zwei Rührstäbe, dass diese sich <b>gegenläufig</b> drehen.</div>`
    },
    {
      title: 'Getriebearten',
      html: `
<div class="table-wrap"><table>
<tr><th>Getriebeart</th><th>So funktioniert es</th><th>Besonderheit / Beispiel</th></tr>
<tr><td><b>Stirnradgetriebe</b></td><td>Zwei Zahnräder mit parallelen Achsen greifen ineinander.</td><td>Häufigstes Getriebe. Drehrichtung kehrt sich um. Bsp.: Uhr, Mixer</td></tr>
<tr><td><b>Kegelradgetriebe</b></td><td>Kegelförmige Zahnräder</td><td>Achsen um <b>90°</b> versetzt. Bsp.: Handbohrer, Akkuschrauber-Winkelaufsatz</td></tr>
<tr><td><b>Schneckengetriebe</b></td><td>Eine <b>Schnecke</b> (Schraube) treibt ein <b>Schneckenrad</b> an.</td><td>Achsen um 90° versetzt, <b>sehr große Übersetzung</b> (1 Umdrehung der Schnecke = 1 Zahn weiter). <b>Selbsthemmend</b>: Das Rad kann die Schnecke nicht zurückdrehen.</td></tr>
<tr><td><b>Zahnstangengetriebe</b></td><td>Ein Zahnrad läuft auf einer geraden Zahnstange.</td><td>Wandelt <b>Drehung in Längsbewegung</b> um (und umgekehrt). Bsp.: Lenkung, Bohrmaschinenständer</td></tr>
<tr><td><b>Riemengetriebe</b></td><td>Ein Riemen läuft über zwei Riemenscheiben.</td><td>Überbrückt <b>große Abstände</b>. Kann <b>durchrutschen</b> (Überlastschutz). Gekreuzter Riemen kehrt die Drehrichtung um. Bsp.: Bohrmaschine</td></tr>
<tr><td><b>Kettengetriebe</b></td><td>Eine Kette läuft über zwei Kettenräder.</td><td>Große Abstände, <b>rutscht nicht</b>. Bsp.: Fahrrad</td></tr>
<tr><td><b>Reibradgetriebe</b></td><td>Zwei Räder drücken aufeinander und übertragen die Drehung durch <b>Reibung</b>.</td><td>Einfach, kann aber <b>durchrutschen</b>. Drehrichtung kehrt sich um.</td></tr>
</table></div>
<div class="merke"><b>Formschlüssig</b> (rutscht nicht): Zahnräder, Kette, Zahnriemen.<br><b>Kraftschlüssig</b> (kann rutschen, „hat Schlupf“): Reibrad, Flachriemen.</div>`
    },
    {
      title: 'Drehrichtung bestimmen',
      html: `
<div class="table-wrap"><table>
<tr><th>Verbindung</th><th>Drehrichtung des nächsten Rades</th></tr>
<tr><td>Zahnrad greift in Zahnrad (außen)</td><td><b>umgekehrt</b> ↻ → ↺</td></tr>
<tr><td>Reibrad (außen)</td><td><b>umgekehrt</b></td></tr>
<tr><td>Offener Riemen / Kette</td><td><b>gleich</b> ↻ → ↻</td></tr>
<tr><td>Gekreuzter Riemen</td><td><b>umgekehrt</b></td></tr>
<tr><td>Räder auf <b>derselben Achse</b></td><td><b>gleich</b> (sie sind fest verbunden)</td></tr>
</table></div>
<div class="tip">Bei einer <b>Zahnradkette</b> gilt: Jedes weitere Zahnrad kehrt die Richtung um. 1. Rad ↻, 2. ↺, 3. ↻ … Ungerade Nummern drehen also wie das erste Rad.</div>
<h3>Bewegt sich die Last hoch oder runter?</h3>
<p>Am Ende sitzt oft eine <b>Seiltrommel</b>. Schau, auf welcher Seite das Seil herunterhängt:</p>
<ul>
<li>Seil hängt <b>rechts</b>, Trommel dreht ↻ (Uhrzeigersinn): Die rechte Seite bewegt sich nach unten → Seil wird <b>abgewickelt</b> → Last <b>sinkt</b>.</li>
<li>Seil hängt <b>links</b>, Trommel dreht ↻: Die linke Seite bewegt sich nach oben → Seil wird <b>aufgewickelt</b> → Last <b>steigt</b>.</li>
</ul>
<div class="example">Vorgehen: Zeichne bei <b>jedem</b> Rad einen Pfeil ein, Schritt für Schritt vom Antrieb bis zur Last. Rate nicht, sondern gehe jede Verbindung einzeln durch!</div>`
    },
    {
      title: 'Übersetzungsverhältnis',
      html: `
<p>Das <b>Übersetzungsverhältnis i</b> gibt an, wie oft sich der <b>Antrieb</b> drehen muss, damit sich der <b>Abtrieb einmal</b> dreht.</p>
<div class="formula">i = n<sub>an</sub> / n<sub>ab</sub> = d<sub>ab</sub> / d<sub>an</sub> = z<sub>ab</sub> / z<sub>an</sub> = M<sub>ab</sub> / M<sub>an</sub>
<small>n = Drehzahl (U/min), d = Durchmesser, z = Zähnezahl, M = Drehmoment · Index 1 / an = Antrieb, 2 / ab = Abtrieb</small></div>
<div class="table-wrap"><table>
<tr><th>i</th><th>Name</th><th>Abtrieb dreht …</th><th>Drehmoment am Abtrieb</th></tr>
<tr><td><b>i &gt; 1</b> (z. B. 10 : 1)</td><td>Übersetzung <b>ins Langsame</b></td><td>langsamer</td><td><b>größer</b> (mehr Kraft)</td></tr>
<tr><td><b>i = 1</b></td><td>–</td><td>gleich schnell</td><td>gleich</td></tr>
<tr><td><b>i &lt; 1</b> (z. B. 1 : 2)</td><td>Übersetzung <b>ins Schnelle</b></td><td>schneller</td><td><b>kleiner</b></td></tr>
</table></div>
<div class="merke"><b>Was man an Drehzahl gewinnt, verliert man an Drehmoment (und umgekehrt).</b> Ein kleines Rad, das ein großes antreibt, macht langsam und kräftig. Ein großes Rad, das ein kleines antreibt, macht schnell, aber schwach.</div>
<div class="example">z₁ = 60 (Antrieb), z₂ = 15 → i = 15 / 60 = 0,25 (= 1 : 4). Dreht sich z₁ einmal, dreht sich z₂ <b>4-mal</b>.<br>
z₁ = 9, i = 6 → z₂ = i · z₁ = 54 Zähne.<br>
n₁ = 3000 1/min, n₂ = 750 1/min, d₁ = 58 mm → i = 3000 / 750 = 4 → d₂ = 4 · 58 mm = 232 mm.</div>
<h3>Mehrstufige Getriebe</h3>
<div class="formula">i<sub>gesamt</sub> = i₁ · i₂ · i₃ · …</div>
<div class="tip">Merkhilfe für Zähne: <b>n₁ · z₁ = n₂ · z₂</b>. Gleich viele Zähne „laufen durch“ auf beiden Seiten. Daraus kannst du alles umstellen.</div>`
    },
    {
      title: 'Achsabstand, Teilkreis & Modul',
      html: `
<p>Damit Zahnräder gut ineinander greifen, muss der <b>Achsabstand</b> genau stimmen. Man rechnet mit dem <b>Teilkreisdurchmesser d</b>. Er liegt zwischen dem größten (<b>Kopfkreis</b>) und dem kleinsten Durchmesser (<b>Fußkreis</b>) und wird als Strichpunktlinie gezeichnet. Zwei Stirnräder laufen perfekt, wenn sich ihre Teilkreise berühren:</p>
<div class="formula">a = (d₁ + d₂) / 2 = r₁ + r₂</div>
<p>Der <b>Modul m</b> beschreibt die Größe der Zähne. Es greifen nur Zahnräder mit <b>gleichem Modul</b> ineinander!</p>
<div class="formula">d = m · z &nbsp;&nbsp;→&nbsp;&nbsp; m = d / z</div>
<div class="example">d₁ = 20 mm, d₂ = 40 mm → a = (20 + 40) / 2 = <b>30 mm</b>. Bei 22 mm und 43 mm → a = <b>32,5 mm</b>.<br>
Modul 0,5 und 30 Zähne → d = 0,5 · 30 = <b>15 mm</b>.</div>`
    },
    {
      title: 'Getriebe planen (mit Verlusten)',
      html: `
<p>In Wirklichkeit geht durch <b>Reibung</b> ein Teil des Drehmoments verloren. Man multipliziert deshalb mit einem <b>Faktor</b>:</p>
<div class="table-wrap"><table>
<tr><th>Art</th><th>Verlust</th><th>Faktor</th></tr>
<tr><td>Schneckengetriebe</td><td>40 %</td><td>0,6</td></tr>
<tr><td>Stirnradgetriebe</td><td>15 %</td><td>0,85</td></tr>
<tr><td>Riemengetriebe</td><td>20 %</td><td>0,8</td></tr>
<tr><th colspan="3">Zusätzlich durch Lagerung:</th></tr>
<tr><td>Metallachsen direkt in Holz</td><td>20 %</td><td>0,8</td></tr>
<tr><td>Metallachsen in Gleitlager</td><td>10 %</td><td>0,9</td></tr>
</table></div>
<div class="formula">M<sub>ab</sub> = M<sub>an</sub> · i · Faktor<sub>Getriebe</sub> · Faktor<sub>Lager</sub></div>
<div class="example">Stirnradgetriebe 6 : 1 mit Gleitlagern, M<sub>an</sub> = 0,2 Nm: ideal 0,2 · 6 = 1,2 Nm. Wirklich: 0,2 Nm · 6 · 0,85 · 0,9 ≈ <b>0,9 Nm</b>.</div>`
    },
    {
      title: 'Lager',
      html: `
<p>Damit ein Getriebe gut funktioniert, müssen sich die Achsen <b>leicht drehen</b>, dürfen sich aber weder <b>radial</b> noch <b>axial</b> verschieben.</p>
<ul>
<li><b>radial</b> = quer zur Achse (in Richtung des Radius)</li>
<li><b>axial</b> = in Richtung der Achse (längs)</li>
</ul>
<p>Gegen radiales Verschieben stützt man die Achse an <b>zwei Stellen</b> ab (2 Lager). Bohrlöcher in Holz gehen, besser sind <b>Gleitlagerbuchsen</b> (wenig Reibung) oder teurere <b>Kugellager</b>.</p>
<p>Gegen axiales Verschieben setzt man <b>Stellringe</b>. Sie sitzen an <b>einem</b> Lager auf beiden Seiten. Dieses Lager heißt <b>Festlager</b> (fixiert radial + axial), das andere <b>Loslager</b> (nur radial). <b>Unterlegscheiben</b> verringern die Reibung der Stellringe an der Wand.</p>
<div class="merke">Pro Achse nur <b>ein Festlager</b>! Zwei Festlager würden die Achse verspannen: Kleine Maßfehler oder Wärmeausdehnung führen zum Klemmen.</div>`
    },
    {
      title: 'Das Fahrrad',
      html: `
<ul>
<li><b>Kettenblatt</b> (vorne): das <b>große</b> Zahnrad. Es wird durch die <b>Pedale</b> angetrieben (Antrieb).</li>
<li><b>Ritzel</b> (hinten): das <b>kleine</b> Zahnrad am Hinterrad (Abtrieb).</li>
</ul>
<p>Dreht man das große Kettenblatt <b>einmal</b>, dreht sich das kleine Ritzel <b>mehr als einmal</b>. Bei 44 und 11 Zähnen dreht es sich z. B. 44 / 11 = <b>4-mal</b>.</p>
<h3>Kräfte und Drehmomente</h3>
<ol>
<li>Der Fuß drückt mit der Kraft F auf das Pedal. Mit der Kurbellänge entsteht ein <b>Drehmoment</b>: M = F<sub>Fuß</sub> · r<sub>Kurbel</sub>.</li>
<li>Am Kettenblatt erzeugt dieses Drehmoment eine <b>Kettenkraft</b>: F<sub>Kette</sub> = M / r<sub>Kettenblatt</sub>.</li>
<li>Die Kette zieht am Ritzel. Das Drehmoment am Hinterrad ist M<sub>hinten</sub> = F<sub>Kette</sub> · r<sub>Ritzel</sub>.</li>
<li>Am Reifen entsteht daraus die <b>Antriebskraft</b> auf die Straße.</li>
</ol>
<h3>Hoher und niedriger Gang</h3>
<div class="table-wrap"><table>
<tr><th></th><th>Niedriger („leichter“) Gang</th><th>Hoher („schwerer“) Gang</th></tr>
<tr><td>Kombination</td><td><b>kleines</b> Kettenblatt vorne, <b>großes</b> Ritzel hinten</td><td><b>großes</b> Kettenblatt vorne, <b>kleines</b> Ritzel hinten</td></tr>
<tr><td>Treten</td><td>leicht (wenig Kraft)</td><td>schwer (viel Kraft)</td></tr>
<tr><td>Weg pro Pedalumdrehung</td><td>kurz → langsam</td><td>weit → schnell</td></tr>
<tr><td>sinnvoll bei</td><td>Bergfahrt, Anfahren, schweres Gepäck bergauf</td><td>schnelles Fahren auf ebener Strecke, bergab</td></tr>
</table></div>
<h3>Warum wird Treten im hohen Gang schwerer?</h3>
<p>Im hohen Gang ist das <b>Ritzel klein</b>. Der Hebelarm am Hinterrad (Radius des Ritzels) ist also kurz. Die Kette erzeugt damit nur ein <b>kleines Drehmoment</b> am Hinterrad. Um trotzdem genug Antriebskraft zu bekommen, muss die <b>Kettenkraft größer</b> sein, und damit auch die Kraft auf das Pedal. Dafür dreht sich das Hinterrad pro Pedalumdrehung <b>öfter</b>: Man fährt pro Umdrehung weiter und ist schneller. Hier gilt die „goldene Regel“ andersherum: Was man an Weg (Geschwindigkeit) gewinnt, muss man an Kraft zusetzen.</p>`
    }
  ],

  videos: [
    { id: 'sw4NQd-Y5hI', title: 'Wie funktioniert ein Getriebe?', desc: 'Übersetzungsverhältnis, Drehzahl, Drehmoment.' },
    { id: '7529yjFAXcI', title: 'Getriebe Teil 1: Was ist ein Getriebe?', desc: 'Mit fischertechnik-Modellen erklärt (Dirk Fox).' },
    { id: 'g7wDg-Kpt1c', title: 'Getriebe Teil 3: Zahnradgetriebe', desc: 'Zahnradgetriebe anschaulich (Dirk Fox).' },
    { id: 'ATZEbiXMRTs', title: 'Zahnradtrieb aus 2 Stirnrädern berechnen', desc: 'Übersetzungsverhältnis und Drehzahl rechnen.' }
  ],

  tasks: [
    {
      title: 'Aufgabe 1: Getriebearten benennen',
      src: 'Getriebe – Aufgabe 1a / Getriebe 1',
      html: `<p>Benenne die Getriebeart:</p><ol type="a">
<li>Zwei Räder drücken aufeinander und drehen sich durch Reibung.</li>
<li>Eine Schraube treibt ein Zahnrad an, die Achsen stehen senkrecht zueinander.</li>
<li>Zwei kegelförmige Zahnräder, die Achsen sind um 90° versetzt.</li>
<li>Ein Zahnrad bewegt eine gerade Stange mit Zähnen hin und her.</li>
<li>Überträgt beim Fahrrad die Tretbewegung auf das Hinterrad.</li>
<li>Ein Gummiband läuft über zwei Scheiben.</li>
<li>Zwei Zahnräder mit parallelen Achsen greifen ineinander.</li></ol>`,
      solution: `<ol type="a"><li>Reibradgetriebe</li><li>Schneckengetriebe</li><li>Kegelradgetriebe</li><li>Zahnstangengetriebe</li><li>Kettengetriebe</li><li>Riemengetriebe</li><li>Stirnradgetriebe</li></ol>`
    },
    {
      title: 'Aufgabe 2: Übersetzungsverhältnis',
      src: 'Seifenblasenmaschine – Aufgabe 6',
      html: `<p>Ein Zahnradgetriebe setzt sich aus den Zahnrädern z₁ und z₂ zusammen. Das antreibende Zahnrad z₁ besitzt 60 Zähne, das angetriebene Zahnrad z₂ besitzt 15 Zähne.<br>a) Berechne das Übersetzungsverhältnis der beiden Zahnräder.<br>b) Wie viel Mal dreht sich das Zahnrad z₂, wenn sich z₁ einmal gedreht hat?</p>`,
      solution: `<div class="calc">a) i = z₂ / z₁ = 15 / 60 = 0,25   (= 1 : 4)
b) n₂ = n₁ · z₁ / z₂ = 1 · 60 / 15 = 4</div>
<p class="answer">a) i = 0,25 → Übersetzung ins Schnelle. b) z₂ dreht sich 4-mal.</p>`
    },
    {
      title: 'Aufgabe 3: Zähnezahl berechnen',
      src: 'Seifenblasenmaschine – Aufgabe 7',
      html: `<p>Das antreibende Zahnrad z₁ besitzt 9 Zähne. Das Übersetzungsverhältnis der beiden Zahnräder beträgt i = 6. Wie viele Zähne besitzt das Zahnrad z₂?</p>`,
      solution: `<div class="calc">i = z₂ / z₁  →  z₂ = i · z₁ = 6 · 9 = 54</div>
<p class="answer">Das Zahnrad z₂ hat 54 Zähne (Übersetzung ins Langsame).</p>`
    },
    {
      title: 'Aufgabe 4: Riementrieb der Bohrmaschine',
      src: 'Seifenblasenmaschine – Aufgabe 8',
      html: `<p>Der Riementrieb einer Bohrmaschine dreht am Antriebsrad mit einer Drehzahl von 3000 1/min und hat einen Durchmesser von 58 mm. Das Abtriebsrad dreht mit einer Drehzahl von 750 1/min. Bestimme den Durchmesser des Abtriebsrades und das Übersetzungsverhältnis i.</p>`,
      solution: `<p><b>Geg.:</b> n₁ = 3000 1/min; d₁ = 58 mm; n₂ = 750 1/min &nbsp; <b>Ges.:</b> i, d₂</p>
<div class="calc">i = n₁ / n₂ = 3000 / 750 = 4
i = d₂ / d₁  →  d₂ = i · d₁ = 4 · 58 mm = 232 mm</div>
<p class="answer">Das Übersetzungsverhältnis ist i = 4 (4 : 1). Das Abtriebsrad hat einen Durchmesser von 232 mm.</p>`
    },
    {
      title: 'Aufgabe 5: Fahrrad – Zahnräder',
      src: 'Vertretung – Aufgabe 3.1 / 3.2',
      html: `<p>3.1: 1. Welches Zahnrad ist größer? 2. Welches ist kleiner? 3. Welches Zahnrad wird durch die Pedale angetrieben?</p>
<p>3.2: Die Pedale drehen das große Kettenrad einmal vollständig. Was passiert mit dem kleinen Ritzel hinten? Kreuze an und begründe.<br>☐ weniger als einmal &nbsp; ☐ ungefähr genauso oft &nbsp; ☐ mehr als einmal</p>`,
      solution: `<p>3.1: 1. Das <b>Kettenblatt</b> (vorne) ist größer. 2. Das <b>Ritzel</b> (hinten) ist kleiner. 3. Das <b>Kettenblatt</b> wird durch die Pedale angetrieben.</p>
<p>3.2: ☒ <b>Es dreht sich mehr als einmal.</b> Begründung: Die Kette bewegt pro Umdrehung des Kettenblatts so viele Glieder weiter, wie das Kettenblatt Zähne hat. Das Ritzel hat weniger Zähne, deshalb muss es sich öfter drehen. Beispiel: 44 Zähne vorne, 11 hinten → 44 / 11 = 4 Umdrehungen.</p>`
    },
    {
      title: 'Aufgabe 6: Kräfte und Drehmomente am Fahrrad',
      src: 'Vertretung – Aufgabe 3.3',
      html: `<p>Zeichne alle wirkenden Kräfte und Drehmomente am Fahrrad ein (Pedal, Kettenblatt, Kette, Ritzel, Hinterrad). Beschreibe sie.</p>`,
      solution: `<ol>
<li><b>Fußkraft F<sub>Fuß</sub></b> am Pedal, senkrecht zur Kurbel. Hebelarm = Kurbellänge → <b>Drehmoment M₁ = F<sub>Fuß</sub> · r<sub>Kurbel</sub></b> (gleiche Drehrichtung wie die Kurbel).</li>
<li>Das Kettenblatt sitzt auf derselben Achse wie die Kurbel und hat dasselbe Drehmoment M₁. Am Rand erzeugt es die <b>Kettenkraft F<sub>Kette</sub> = M₁ / r<sub>Kettenblatt</sub></b> im oberen Kettentrum (Zugkraft nach vorne).</li>
<li>Die Kette zieht am Ritzel → <b>Drehmoment M₂ = F<sub>Kette</sub> · r<sub>Ritzel</sub></b> am Hinterrad.</li>
<li>Am Reifen wirkt die <b>Antriebskraft</b> F<sub>Antrieb</sub> = M₂ / r<sub>Rad</sub>. Der Reifen drückt nach hinten gegen die Straße, und das Fahrrad wird nach vorne geschoben.</li>
</ol>
<p class="note">Zeichne Kräfte als Pfeile und Drehmomente als gebogene Pfeile um die Achse.</p>`
    },
    {
      title: 'Aufgabe 7: Kleineres Ritzel – schneller, aber schwerer',
      src: 'Vertretung – Aufgabe 3.4',
      html: `<p>Nutze dein Wissen über das Hebelgesetz und das Drehmoment: Warum kann man mit einem kleineren Ritzel hinten schneller fahren, obwohl das Treten schwerer wird? Begründe.</p>`,
      solution: `<p><b>Schneller:</b> Ein kleineres Ritzel hat weniger Zähne. Pro Kurbelumdrehung dreht sich das Hinterrad deshalb <b>öfter</b> (Übersetzung ins Schnelle). Man legt pro Pedalumdrehung einen <b>längeren Weg</b> zurück.</p>
<p><b>Schwerer:</b> Der Radius des kleinen Ritzels ist der <b>Hebelarm</b>, an dem die Kettenkraft angreift. Ein kleiner Hebelarm ergibt nach M = F · r bei gleicher Kettenkraft ein <b>kleineres Drehmoment</b> am Hinterrad. Um die nötige Antriebskraft (gegen Luftwiderstand, Reibung, Steigung) zu erreichen, muss die Kettenkraft und damit die Kraft am Pedal <b>größer</b> sein.</p>
<p>Insgesamt: Was man an Weg bzw. Geschwindigkeit gewinnt, muss man an Kraft zusetzen.</p>`
    },
    {
      title: 'Aufgabe 8: Welcher Gang wann?',
      src: 'Vertretung – Aufgabe 3.5',
      html: `<p>Entscheide und begründe, wann ein niedriger bzw. hoher Gang sinnvoll ist: Bergfahrt, Anfahren, schnelles Fahren auf ebener Strecke, schweres Gepäck bergauf.</p>`,
      solution: `<div class="table-wrap"><table>
<tr><th>Situation</th><th>Gang</th><th>Begründung</th></tr>
<tr><td>Bergfahrt</td><td><b>niedrig</b></td><td>großes Drehmoment am Hinterrad nötig, leichtes Treten; langsamer ist okay</td></tr>
<tr><td>Anfahren</td><td><b>niedrig</b></td><td>Fahrrad muss erst beschleunigt werden, das braucht viel Kraft; leichtes Treten</td></tr>
<tr><td>schnell auf ebener Strecke</td><td><b>hoch</b></td><td>wenig Widerstand, man kommt pro Pedalumdrehung weit → hohe Geschwindigkeit</td></tr>
<tr><td>schweres Gepäck bergauf</td><td><b>niedrig</b> (am besten der niedrigste)</td><td>noch mehr Kraft nötig → größtmögliches Drehmoment am Hinterrad</td></tr>
</table></div>`
    },
    {
      title: 'Aufgabe 9: Warum wird das Treten schwerer?',
      src: 'Vertretung – Aufgabe 3.6 / Drehmoment Aufgabe 3',
      html: `<p>Du fährst auf einer ebenen Straße zunächst in einem niedrigen Gang, das Treten fällt leicht. Anschließend schaltest du in einen höheren Gang und das Treten wird deutlich schwerer. Erkläre in vollständigen Sätzen, warum das so ist.</p>`,
      solution: `<p>Beim Schalten in einen höheren Gang wird die Kette hinten auf ein <b>kleineres Ritzel</b> (bzw. vorne auf ein größeres Kettenblatt) gelegt. Der Radius des Ritzels ist der <b>Hebelarm</b>, an dem die Kettenkraft das Hinterrad dreht. Ist dieser Hebelarm kleiner, erzeugt dieselbe Kettenkraft nach M = F · r ein <b>kleineres Drehmoment</b> am Hinterrad. Damit das Fahrrad trotzdem genug Antriebskraft bekommt, muss die Kettenkraft größer werden. Deshalb muss ich stärker in die Pedale treten. Dafür dreht sich das Hinterrad pro Pedalumdrehung öfter, und ich fahre schneller.</p>`
    },
    {
      title: 'Aufgabe 10: Riemen und Gangkombinationen',
      src: 'Vertretung – Aufgabe 3 a–c',
      html: `<p>a) Ein Antriebsrad treibt über Riemen ein Abtriebsrad X an. Wie bestimmst du Richtung und Geschwindigkeit von X?<br>b) Bei einem Stufenscheiben-Riemengetriebe (drei Scheiben pro Achse): Auf welche Scheiben muss der Riemen gelegt werden, damit die untere (angetriebene) Achse schneller läuft als die obere?<br>c) Mit welcher Kombination aus Kettenblatt und Ritzel fährt man am besten einen steilen Berg hoch?</p>`,
      solution: `<p>a) <b>Richtung:</b> Offener Riemen → gleiche Drehrichtung, gekreuzter Riemen → entgegengesetzt, Zahnrad/Reibrad im Kontakt → entgegengesetzt. <b>Geschwindigkeit:</b> Ist das Abtriebsrad <b>kleiner</b> als das Antriebsrad, dreht es <b>schneller</b>. Ist es größer, dreht es langsamer (n₂ = n₁ · d₁ / d₂).</p>
<p>b) Oben (Antrieb) auf die <b>größte</b> Scheibe und unten (Abtrieb) auf die <b>kleinste</b> Scheibe. Großes Rad treibt kleines Rad an → Übersetzung ins Schnelle.</p>
<p>c) <b>Kleines Kettenblatt vorne und großes Ritzel hinten</b>. Das ergibt eine Übersetzung ins Langsame → großes Drehmoment am Hinterrad → leichtes Treten am Berg.</p>`
    },
    {
      title: 'Aufgabe 11: Achsabstand und Modul',
      src: 'Zahnradgetriebe – Aufgaben 4–6',
      html: `<p>a) Die Teilkreisdurchmesser zweier Stirnräder betragen 20 mm und 40 mm. Welchen Abstand müssen die Mittelpunkte haben? Wie wäre es bei 22 mm und 43 mm?<br>
b) Welchen Teilkreisdurchmesser hat ein Stirnrad mit Modul 0,5 und 30 Zähnen?<br>
c) Passt ein Stirnrad mit 30 mm Teilkreisdurchmesser und 20 Zähnen zu einem Stirnrad mit 20 mm Teilkreisdurchmesser und 30 Zähnen?</p>`,
      solution: `<div class="calc">a) a = (d₁ + d₂) / 2 = (20 + 40) / 2 = 30 mm
   a = (22 + 43) / 2 = 32,5 mm
b) d = m · z = 0,5 · 30 = 15 mm
c) m₁ = 30 / 20 = 1,5      m₂ = 20 / 30 ≈ 0,67</div>
<p class="answer">c) Nein! Die Module sind verschieden, die Zähne sind unterschiedlich groß und passen nicht ineinander.</p>`
    },
    {
      title: 'Aufgabe 12: Getriebe planen – Motor',
      src: 'Getriebe planen – Aufgabe 9',
      html: `<p>Bei einer Messung ergibt sich, dass das Drehmoment eines Motors ohne Getriebe 0,02 Nm beträgt. Mit Getriebe beträgt es 0,4 Nm. Was ist das Übersetzungsverhältnis des Getriebes? Um welchen Faktor wird die Drehzahl größer bzw. kleiner?</p>`,
      solution: `<div class="calc">i = M_ab / M_an = 0,4 Nm / 0,02 Nm = 20</div>
<p class="answer">Das Übersetzungsverhältnis ist 20 : 1 (ins Langsame). Die Drehzahl wird um den Faktor 20 <b>kleiner</b>.</p>`
    },
    {
      title: 'Aufgabe 13: Teebeutelmaschine',
      src: 'Getriebe planen – Aufgabe 10',
      html: `<p>Anne und Yara planen eine Teebeutelmaschine. Der Teebeutel ist (feucht) 50 g schwer, also 0,5 N. Er hängt an einer 10 cm langen Stange und soll aus dem Tee gehoben werden. Der Elektromotor hat nur 0,01 Nm.<br>a) Wie stark müsste der Motor ohne Getriebe sein?<br>b) Welche Übersetzung würdest du empfehlen?<br>c) Welche Getriebeart wäre geeignet, damit der Teebeutel bei ausgeschaltetem Motor nicht wieder ins Wasser fällt?</p>`,
      solution: `<div class="calc">a) M = F · r = 0,5 N · 0,1 m = 0,05 Nm
b) ideal: i = 0,05 Nm / 0,01 Nm = 5
   mit Verlusten, z. B. Schnecke + Gleitlager:
   i = 0,05 / (0,01 · 0,6 · 0,9) ≈ 9,3  → i = 10 : 1 oder mehr</div>
<p>a) Der Motor müsste 0,05 Nm haben (5-mal so stark).<br>b) Mindestens 5 : 1. Wegen der Reibungsverluste besser etwas mehr, z. B. <b>10 : 1</b>.<br>c) Ein <b>Schneckengetriebe</b>: Es ist <b>selbsthemmend</b>. Das Schneckenrad kann die Schnecke nicht zurückdrehen, deshalb bleibt der Teebeutel oben.</p>`
    },
    {
      title: 'Aufgabe 14: Stirnrad oder Schnecke?',
      src: 'Getriebe planen – Aufgabe 11',
      html: `<p>Ein Stirnradgetriebe mit Gleitlagern hat ein Antriebsdrehmoment von 0,2 Nm und eine Übersetzung von 6 : 1. Ideal erwartet man 1,2 Nm, mit Verlusten aber nur 0,2 Nm · 6 · 0,85 · 0,9 ≈ 0,9 Nm. Wäre ein holzgelagertes Schneckengetriebe mit einer Übersetzung von 30 : 1 besser?</p>`,
      solution: `<div class="calc">M_ab = 0,2 Nm · 30 · 0,6 · 0,8 = 2,88 Nm</div>
<p class="answer">Ja, beim Drehmoment ist es besser: 2,88 Nm statt 0,9 Nm, trotz der hohen Verluste. Der Abtrieb dreht aber 5-mal langsamer (30 : 1 statt 6 : 1).</p>`
    },
    {
      title: 'Aufgabe 15: Zahnradgetriebe untersuchen',
      src: 'Zahnradgetriebe – Aufgaben 2/3',
      html: `<p>a) Bei welchen Getrieben kann man Antrieb und Abtrieb <b>nicht</b> vertauschen?<br>b) Welches Getriebe ermöglicht, dass die Kraftverbindung durchrutscht?<br>c) Nach welcher Regel ist die Abtriebsdrehzahl höher als die Antriebsdrehzahl?<br>d) Welche Getriebe kommen in Frage, wenn die Abtriebsachse senkrecht zur Antriebsachse stehen muss? Welche für große Abstände? Welche für Längsbewegungen?</p>`,
      solution: `<p>a) Beim <b>Schneckengetriebe</b>. Es ist selbsthemmend, das Schneckenrad kann die Schnecke nicht antreiben.<br>
b) <b>Reibradgetriebe</b> und <b>Riemengetriebe</b> (Flachriemen).<br>
c) Wenn das <b>Antriebsrad größer</b> ist (mehr Zähne) als das Abtriebsrad (i &lt; 1).<br>
d) Senkrecht: <b>Kegelradgetriebe</b>, <b>Schneckengetriebe</b> (beim Riemen auch mit verdrehtem Riemen). Große Abstände: <b>Riemen-</b> und <b>Kettengetriebe</b>. Längsbewegung: <b>Zahnstangengetriebe</b> (auch Schnecke + Zahnstange, Gewindespindel).</p>`
    },
    {
      title: 'Aufgabe 16: Lager',
      src: 'Das Getriebegestell – Aufgabe 7',
      html: `<p>a) Was bedeuten „radial“ und „axial“?<br>b) Was ist der Unterschied zwischen Festlager und Loslager?<br>c) Schwierig: Warum setzt man immer nur ein Festlager pro Achse ein, und warum möglichst alle Festlager auf der gleichen Seite?</p>`,
      solution: `<p>a) <b>Radial</b> = quer zur Achse (in Richtung des Radius). <b>Axial</b> = in Richtung der Achse.<br>
b) Das <b>Festlager</b> sichert die Achse radial <b>und</b> axial (mit Stellringen auf beiden Seiten). Das <b>Loslager</b> sichert nur radial, axial darf sich die Achse dort bewegen.<br>
c) Mit zwei Festlagern wäre die Achse <b>überbestimmt</b>: Kleinste Maßungenauigkeiten oder Wärmeausdehnung würden sie verspannen, und sie klemmt. Liegen alle Festlager auf <b>derselben Seite</b> (gleiche Gestellwand), sind alle Zahnräder von derselben Bezugsseite aus ausgerichtet. Verschiebungen wirken dann bei allen Achsen gleich, und die Zahnräder bleiben genau im Eingriff.</p>`
    },
    {
      title: 'Aufgabe 17: Drehrichtung der Zahnstange / Last',
      src: 'Getriebe – Aufgabe 1b und 2',
      html: `<p>Wie bestimmst du bei einer langen Getriebekette (Kurbel → Stirnräder → Kette → Riemen → Reibrad → … → Zahnstange bzw. Last), in welche Richtung sich das Ende bewegt? Übe danach im <b>Trainer → „Drehrichtung & Last“</b>.</p>`,
      solution: `<ol>
<li>Pfeil am Antrieb (Kurbel) einzeichnen.</li>
<li>Jede Verbindung einzeln: <b>Zahnrad/Reibrad → umkehren</b>, <b>offener Riemen/Kette → gleich</b>, <b>gekreuzter Riemen → umkehren</b>, <b>gleiche Achse → gleich</b>.</li>
<li>An jedes Rad einen Drehpfeil zeichnen.</li>
<li>Am Ende: <b>Zahnstange</b> bewegt sich in die Richtung, in die sich der Zahnradrand an der Kontaktstelle bewegt. <b>Seiltrommel</b>: Schau, ob die Seite mit dem Seil nach oben (aufwickeln → Last steigt) oder nach unten (abwickeln → Last sinkt) dreht.</li>
</ol>`
    }
  ],

  quiz: [
    { q: 'Wie lautet die Formel für das Übersetzungsverhältnis mit Zähnezahlen?', a: ['i = z₂ / z₁ (Abtrieb / Antrieb)', 'i = z₁ / z₂', 'i = z₁ · z₂', 'i = z₁ + z₂'], c: 0, e: 'i = n₁/n₂ = z₂/z₁ = d₂/d₁.' },
    { q: 'Antrieb z₁ = 10, Abtrieb z₂ = 40. Was gilt?', a: ['i = 4, ins Langsame, mehr Drehmoment', 'i = 0,25, ins Schnelle', 'i = 4, ins Schnelle', 'i = 30'], c: 0, e: 'Kleines Rad treibt großes an → langsamer, aber kräftiger.' },
    { q: 'Zwei Zahnräder greifen ineinander. Das erste dreht ↻. Wie dreht das zweite?', a: ['↺ entgegengesetzt', '↻ gleich', 'gar nicht', 'abwechselnd'], c: 0, e: 'Zahnräder im Eingriff kehren die Drehrichtung um.' },
    { q: 'Wie dreht sich ein Rad, das über einen <b>offenen Riemen</b> angetrieben wird?', a: ['In dieselbe Richtung', 'Entgegengesetzt', 'Kommt auf die Größe an', 'Gar nicht'], c: 0, e: 'Offener Riemen und Kette: gleiche Richtung. Gekreuzt: entgegengesetzt.' },
    { q: 'Welches Getriebe ist <b>selbsthemmend</b>?', a: ['Schneckengetriebe', 'Stirnradgetriebe', 'Riemengetriebe', 'Kettengetriebe'], c: 0, e: 'Das Schneckenrad kann die Schnecke nicht zurückdrehen.' },
    { q: 'Welches Getriebe wandelt eine Drehung in eine <b>Längsbewegung</b>?', a: ['Zahnstangengetriebe', 'Kegelradgetriebe', 'Reibradgetriebe', 'Kettengetriebe'], c: 0, e: 'Zahnrad + Zahnstange → Translation.' },
    { q: 'Welches Getriebe nutzt man, wenn die Achsen im <b>90°-Winkel</b> stehen?', a: ['Kegelradgetriebe', 'Stirnradgetriebe', 'Kettengetriebe', 'Zahnstangengetriebe'], c: 0, e: 'Kegelrad (und Schnecke) verbinden senkrechte Achsen.' },
    { q: 'Welches Getriebe kann <b>durchrutschen</b>?', a: ['Reibradgetriebe', 'Kettengetriebe', 'Zahnradgetriebe', 'Zahnstangengetriebe'], c: 0, e: 'Reibrad und Flachriemen übertragen über Reibung (kraftschlüssig).' },
    { q: 'Welcher Gang ist am <b>Berg</b> sinnvoll?', a: ['Niedriger Gang: kleines Kettenblatt, großes Ritzel', 'Hoher Gang: großes Kettenblatt, kleines Ritzel', 'Egal', 'Großes Kettenblatt, großes Ritzel'], c: 0, e: 'Ins Langsame → großes Drehmoment am Hinterrad → leicht treten.' },
    { q: 'Was ist am Fahrrad das <b>Ritzel</b>?', a: ['Das kleine Zahnrad hinten am Hinterrad', 'Das große Zahnrad an den Pedalen', 'Die Kette', 'Der Schalthebel'], c: 0, e: 'Kettenblatt vorne (groß), Ritzel hinten (klein).' },
    { q: 'n₁ = 3000 1/min, n₂ = 750 1/min. Wie groß ist i?', a: ['4', '0,25', '2250', '3750'], c: 0, e: 'i = n₁ / n₂ = 3000 / 750 = 4.' },
    { q: 'Welcher Achsabstand passt zu d₁ = 20 mm und d₂ = 40 mm?', a: ['30 mm', '60 mm', '20 mm', '40 mm'], c: 0, e: 'a = (d₁ + d₂) / 2 = 30 mm.' },
    { q: 'Welche Zahnräder greifen gut ineinander?', a: ['Zahnräder mit gleichem Modul', 'Zahnräder mit gleicher Zähnezahl', 'Zahnräder mit gleichem Durchmesser', 'Alle'], c: 0, e: 'Nur bei gleichem Modul sind die Zähne gleich groß.' },
    { q: 'Was bedeutet <b>axial</b>?', a: ['In Richtung der Achse', 'Quer zur Achse', 'Um die Achse herum', 'Schräg zur Achse'], c: 0, e: 'Axial = längs der Achse, radial = quer (in Richtung Radius).' },
    { q: 'Wofür sind <b>Stellringe</b>?', a: ['Sie verhindern axiales Verschieben der Achse', 'Sie verringern die Drehzahl', 'Sie verbinden zwei Zahnräder', 'Sie spannen den Riemen'], c: 0, e: 'Stellringe auf beiden Seiten eines Lagers → Festlager.' },
    { q: 'Wie groß ist das Drehmoment mit Verlusten? M_an = 0,2 Nm, i = 6, Stirnrad (0,85), Gleitlager (0,9)', a: ['ca. 0,92 Nm', '1,2 Nm', '0,2 Nm', '7,2 Nm'], c: 0, e: '0,2 · 6 · 0,85 · 0,9 ≈ 0,92 Nm.' }
  ]
});
