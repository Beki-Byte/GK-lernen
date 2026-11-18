window.TOPICS = window.TOPICS || [];
window.TOPICS.push({
  id: 'hebel',
  order: 2,
  title: 'Hebel & Drehmoment',
  short: 'Hebelgesetz, Drehmoment M = F · r, Kraftwandler',
  icon: '⚖️',
  color: '#d9822b',
  ytSearch: 'Hebelgesetz Drehmoment einfach erklärt Physik',
  sims: [{ id: 'hebel', title: 'Hebel-Simulator' }],

  learn: [
    {
      title: 'Kraft und Gewichtskraft',
      html: `
<p>Die <b>Masse m</b> eines Körpers misst man mit einer Waage in <b>kg</b> oder <b>g</b>. Die <b>Kraft F</b> misst man mit dem <b>Federkraftmesser</b> in <b>Newton (N)</b>.</p>
<p>Auf der Erde wird jede Masse nach unten gezogen. Das ist die <b>Gewichtskraft F<sub>G</sub></b>:</p>
<div class="formula">1 kg ≙ ca. 10 N &nbsp;&nbsp;|&nbsp;&nbsp; 100 g ≙ ca. 1 N &nbsp;&nbsp;|&nbsp;&nbsp; 10 g ≙ ca. 0,1 N</div>
<div class="example">Eine Karosseriescheibe (10 g) hat eine Gewichtskraft von ca. <b>0,1 N</b>. Ein Schwein mit 120 kg hat ca. <b>1200 N</b>.</div>`
    },
    {
      title: 'Der Hebel',
      html: `
<p>Ein Hebel ist ein starrer Körper (z. B. eine Stange), der sich um einen <b>Drehpunkt</b> drehen kann. Er ist ein <b>Kraftwandler</b>: Er ändert den <b>Betrag</b> einer Kraft (aus wenig Kraft wird viel Kraft), manchmal auch ihre <b>Richtung</b>.</p>
<ul>
<li><b>Drehpunkt</b>: Punkt, um den sich der Hebel dreht.</li>
<li><b>Hebelarm r</b>: Abstand vom Drehpunkt bis zur Stelle, an der die Kraft angreift. Die Kraft muss dabei <b>senkrecht</b> zum Hebel wirken.</li>
<li><b>Kraftarm</b>: dort, wo du drückst. <b>Lastarm</b>: dort, wo die Last angreift.</li>
</ul>
<div class="fig-row svgc">
<figure class="figure">
<svg viewBox="0 0 300 150" role="img" aria-label="Zweiseitiger Hebel">
  <defs><marker id="hA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#c0392b"/></marker></defs>
  <line x1="20" y1="60" x2="280" y2="60" class="stroke steel" stroke-width="8" stroke-linecap="round"/>
  <polygon points="150,64 135,96 165,96" class="fill" opacity=".5"/>
  <circle cx="150" cy="60" r="5" class="accf"/>
  <line x1="40" y1="66" x2="40" y2="110" stroke="#c0392b" stroke-width="3" marker-end="url(#hA)"/>
  <line x1="240" y1="66" x2="240" y2="110" stroke="#c0392b" stroke-width="3" marker-end="url(#hA)"/>
  <text x="46" y="105" font-size="14">F₁</text><text x="246" y="105" font-size="14">F₂</text>
  <line x1="40" y1="30" x2="150" y2="30" class="stroke" stroke-width="1"/><text x="95" y="24" font-size="13" text-anchor="middle">r₁</text>
  <line x1="150" y1="30" x2="240" y2="30" class="stroke" stroke-width="1"/><text x="195" y="24" font-size="13" text-anchor="middle">r₂</text>
  <text x="150" y="128" font-size="12" text-anchor="middle">Drehpunkt in der Mitte</text>
</svg>
<figcaption><b>Zweiseitiger Hebel</b>: Die Kräfte greifen auf <b>beiden Seiten</b> des Drehpunkts an. Beispiele: Wippe, Zange, Schere, Balkenwaage.</figcaption>
</figure>
<figure class="figure">
<svg viewBox="0 0 300 150" role="img" aria-label="Einseitiger Hebel">
  <defs><marker id="hB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#c0392b"/></marker></defs>
  <line x1="30" y1="70" x2="280" y2="70" class="stroke steel" stroke-width="8" stroke-linecap="round"/>
  <circle cx="30" cy="70" r="7" class="accf"/>
  <polygon points="30,76 16,104 44,104" class="fill" opacity=".5"/>
  <line x1="110" y1="76" x2="110" y2="118" stroke="#c0392b" stroke-width="3" marker-end="url(#hB)"/>
  <line x1="265" y1="64" x2="265" y2="22" stroke="#2e8b57" stroke-width="3" marker-end="url(#hB)"/>
  <text x="116" y="114" font-size="14">F₁ (Last)</text><text x="210" y="30" font-size="14">F₂</text>
  <line x1="30" y1="132" x2="110" y2="132" class="stroke" stroke-width="1"/><text x="70" y="146" font-size="13" text-anchor="middle">r₁</text>
  <line x1="30" y1="50" x2="265" y2="50" class="stroke" stroke-width="1" opacity=".6"/><text x="150" y="44" font-size="13" text-anchor="middle">r₂</text>
</svg>
<figcaption><b>Einseitiger Hebel</b>: Beide Kräfte greifen auf <b>derselben Seite</b> an. Sie zeigen in <b>entgegengesetzte</b> Richtungen. Beispiele: Nussknacker, Schubkarre, Unterarm, Flaschenöffner.</figcaption>
</figure>
</div>`
    },
    {
      title: 'Das Hebelgesetz',
      html: `
<p>Ein Hebel ist im <b>Gleichgewicht</b>, wenn die Drehwirkung links genauso groß ist wie rechts:</p>
<div class="formula">F₁ · r₁ = F₂ · r₂<small>Kraft · Kraftarm = Last · Lastarm (gilt für einseitige und zweiseitige Hebel)</small></div>
<div class="merke"><b>Doppelter Hebelarm → halbe Kraft.</b> Je länger der Hebelarm, desto weniger Kraft brauchst du. Dafür musst du einen <b>längeren Weg</b> zurücklegen („Was man an Kraft spart, muss man an Weg zusetzen.“)</div>
<h3>Umstellen</h3>
<div class="formula">F₂ = F₁ · r₁ / r₂ &nbsp;&nbsp;|&nbsp;&nbsp; r₂ = F₁ · r₁ / F₂</div>
<h3>Richtung der Kraft</h3>
<ul>
<li>Beim <b>zweiseitigen</b> Hebel zeigen beide Kräfte in <b>die gleiche Richtung</b> (z. B. beide nach unten).</li>
<li>Beim <b>einseitigen</b> Hebel zeigen sie in <b>entgegengesetzte</b> Richtungen (z. B. Last nach unten, Haltekraft nach oben).</li>
</ul>
<h3>Mehrere Kräfte</h3>
<p>Greifen mehrere Kräfte an, addiert man die Drehmomente jeder Seite:</p>
<div class="formula">F₁ · r₁ + F₂ · r₂ = F₃ · r₃ + F₄ · r₄ + …</div>
<div class="tip">Auch das <b>Eigengewicht</b> eines Hebels (z. B. einer Wippe) zählt mit. Es greift im <b>Schwerpunkt</b> an, bei einem gleichmäßigen Brett also in der Mitte.</div>`
    },
    {
      title: 'Das Drehmoment',
      html: `
<p>Das Produkt aus Kraft und Hebelarm heißt <b>Drehmoment M</b>. Es beschreibt die <b>Drehwirkung</b> („Drehkräftigkeit“) einer Kraft.</p>
<div class="formula">M = F · r<small>Einheit: 1 Nm (Newtonmeter). Die Kraft muss <b>senkrecht</b> zum Hebelarm wirken!</small></div>
<div class="table-wrap"><table>
<tr><th>Größe</th><th>Zeichen</th><th>Einheit</th></tr>
<tr><td>Drehmoment</td><td>M</td><td>Nm</td></tr>
<tr><td>Kraft</td><td>F</td><td>N</td></tr>
<tr><td>Hebelarm (Radius)</td><td>r</td><td>m</td></tr>
</table></div>
<div class="warn"><b>Einheiten!</b> Für Nm musst du den Hebelarm in <b>Meter</b> umrechnen: 20 cm = 0,2 m; 60 cm = 0,6 m; 1,5 cm = 0,015 m.</div>
<p>Mit dem Hebelgesetz kann man sagen: Ein Hebel ist im Gleichgewicht, wenn das <b>linksdrehende</b> Drehmoment gleich dem <b>rechtsdrehenden</b> ist: <b>M₁ = M₂</b>.</p>
<div class="example">Schraubenschlüssel mit r = 0,2 m, Kraft F = 70 N → M = 70 N · 0,2 m = <b>14 Nm</b>.<br>Mit Verlängerung auf 0,65 m und gleicher Kraft: M = 70 N · 0,65 m = <b>45,5 Nm</b>.</div>`
    },
    {
      title: 'Drehmoment messen',
      html: `
<p><b>Stangen-Methode:</b> An der Motorwelle befestigt man eine Stange. Daran hängt man senkrecht einen Federkraftmesser. An welcher Stelle man misst, ist egal, denn das Produkt F · r bleibt gleich:</p>
<div class="example">An Stelle A (20 cm) misst man die kleinste Kraft. Bei halbem Abstand (10 cm) ist die Kraft <b>doppelt</b> so groß, bei einem Viertel (5 cm) <b>viermal</b> so groß. Für das „offizielle“ Drehmoment rechnet man auf <b>1 m</b> um: M = F · r.</div>
<p><b>Schnurmethode</b> (für kleine Drehmomente von Elektromotoren): Man wickelt eine Schnur auf die Motorwelle und misst die Haltekraft mit einem Federkraftmesser. Der Hebelarm ist dann der <b>Radius der Welle</b>.</p>
<div class="formula">M = F · r<sub>Welle</sub> &nbsp;&nbsp; (r = Durchmesser / 2)</div>
<div class="tip">Bei Schnurmethode-Aufgaben stehen oft <b>überflüssige Angaben</b> (Schnurlänge, Radius des Federkraftmessers). Du brauchst nur die <b>Kraft</b> und den <b>Radius der Welle</b>!</div>`
    },
    {
      title: 'Rechenaufgaben richtig aufschreiben',
      html: `
<ol>
<li><b>Gegeben:</b> alle Werte mit Einheiten (cm → m umrechnen, wenn Nm gefragt ist)</li>
<li><b>Gesucht:</b> was ist gefragt?</li>
<li><b>Formel:</b> F₁ · r₁ = F₂ · r₂ bzw. M = F · r, dann <b>umstellen</b></li>
<li><b>Rechnung</b> mit Einheiten</li>
<li><b>Antwortsatz</b> (bei Kräften auch die <b>Richtung</b> angeben!)</li>
</ol>
<div class="example">
<b>Gegeben:</b> M = 38 Nm; r = 60 cm = 0,6 m<br>
<b>Gesucht:</b> F<br>
<b>Formel:</b> M = F · r → F = M / r<br>
<b>Rechnung:</b> F = 38 Nm / 0,6 m ≈ 63,3 N<br>
<b>Antwort:</b> Man braucht eine Kraft von ca. 63,3 N.
</div>`
    }
  ],

  videos: [
    { id: 'xah1JS0WGEU', title: 'Hebelgesetz und Hebelwirkung – einfach erklärt', desc: 'Grundlagen: Drehpunkt, Kraftarm, Lastarm.' },
    { id: 'TgQNI-oVnoc', title: 'Drehmoment berechnen + Hebelgesetz', desc: 'Formeln mit Rechenbeispielen.' },
    { id: '_4B83kDJiKg', title: 'Hebelgesetz – Kräfte am einseitigen Hebel', desc: 'Einseitiger Hebel im Experiment.' },
    { id: 'PgpE1S3_ZWs', title: 'Hebelgesetz: zweiseitiger Hebel', desc: 'Gleichgewicht am zweiseitigen Hebel.' }
  ],

  tasks: [
    {
      title: 'Aufgabe 1: Einseitiger Hebel',
      src: 'Weitere Übungen Mechanik – Aufgabe 1',
      html: `<p>An einem waagrechten <b>einseitigen</b> Hebel greift im Abstand von 0,75 m vom Drehpunkt eine Kraft von 62 N senkrecht nach unten an. Berechne die <b>Größe und Richtung</b> der Kraft, die in 1,2 m Abstand vom Drehpunkt den Hebel im Gleichgewicht hält.</p>`,
      solution: `<p><b>Geg.:</b> F₁ = 62 N; r₁ = 0,75 m; r₂ = 1,2 m &nbsp; <b>Ges.:</b> F₂</p>
<div class="calc">F₁ · r₁ = F₂ · r₂
F₂ = F₁ · r₁ / r₂ = 62 N · 0,75 m / 1,2 m = 38,75 N</div>
<p class="answer">Die Kraft beträgt 38,75 N und zeigt senkrecht nach <b>oben</b>. Beim einseitigen Hebel zeigen die Kräfte in entgegengesetzte Richtungen.</p>`
    },
    {
      title: 'Aufgabe 2: Schraubenschlüssel',
      src: 'Weitere Übungen Mechanik – Aufgabe 2',
      html: `<p>Mit einem Schraubenschlüssel mit einem Hebelarm von 20 cm kann ein Mechaniker ein Drehmoment von 14 Nm ausüben. Berechne die Kraft, die er benötigt.</p>`,
      solution: `<p><b>Geg.:</b> M = 14 Nm; r = 20 cm = 0,2 m &nbsp; <b>Ges.:</b> F</p>
<div class="calc">M = F · r  →  F = M / r = 14 Nm / 0,2 m = 70 N</div>
<p class="answer">Er benötigt eine Kraft von 70 N.</p>`
    },
    {
      title: 'Aufgabe 3: Schraubenschlüssel mit Verlängerung',
      src: 'Weitere Übungen Mechanik – Aufgabe 3',
      html: `<p>Nun bringt er am Schraubenschlüssel eine Verlängerung von b = 45 cm an. Berechne das Drehmoment, das der Mechaniker jetzt ausüben kann, wenn er auf das Ende des verlängerten Schraubenschlüssels die gleiche Kraft F ausübt wie vorher.</p>`,
      solution: `<p><b>Geg.:</b> F = 70 N (aus Aufgabe 2); r = 20 cm + 45 cm = 65 cm = 0,65 m</p>
<div class="calc">M = F · r = 70 N · 0,65 m = 45,5 Nm</div>
<p class="answer">Er kann jetzt ein Drehmoment von 45,5 Nm ausüben, also mehr als dreimal so viel.</p>`
    },
    {
      title: 'Aufgabe 4: Schraube festziehen',
      src: 'Das Drehmoment – Aufgabe 1',
      html: `<p>Eine Schraube soll mit einem Drehmoment von 38 Nm festgezogen werden.<br>a) Berechne die Kraft, die bei einem 60 cm langen Schlüssel dafür nötig ist.<br>b) Berechne, welches Drehmoment man mit demselben Schlüssel durch die Kraft 150 N erhält.</p>`,
      solution: `<div class="calc">a) F = M / r = 38 Nm / 0,6 m ≈ 63,3 N
b) M = F · r = 150 N · 0,6 m = 90 Nm</div>
<p class="answer">a) Man braucht ca. 63,3 N. b) Man erhält ein Drehmoment von 90 Nm.</p>`
    },
    {
      title: 'Aufgabe 5: Zange',
      src: 'Das Drehmoment – Aufgabe 2',
      html: `<p>Berechne die Kraft am Hebelarm r₁ = 1,5 cm der Zange, wenn du an den Griffen (Länge r₂ = 12 cm) mit der Kraft F₂ = 10 N drückst.</p>`,
      solution: `<div class="calc">F₁ · r₁ = F₂ · r₂
F₁ = F₂ · r₂ / r₁ = 10 N · 12 cm / 1,5 cm = 80 N</div>
<p class="answer">An der Schneide wirkt eine Kraft von 80 N, also 8-mal so viel.</p>
<div class="tip">Hier darfst du in cm rechnen, weil sich die Einheit cm wegkürzt. Beide Hebelarme müssen aber dieselbe Einheit haben.</div>`
    },
    {
      title: 'Aufgabe 6: Zange und Nussknacker',
      src: 'Anwendungen des Hebelgesetzes – Aufgabe 11',
      html: `<p>a) Die Zange ist ein zweiseitiger Hebel. Angenommen, du drückst an r₂ = 14 cm mit einer Kraft F₂ = 10 N. Wie groß ist dann die Kraft an r₁ = 1,5 cm?<br>b) Der Nussknacker ist ein einseitiger Hebel. Du drückst an r₂ = 14 cm mit F₂ = 10 N. Wie groß ist die Kraft an r₁ = 1,5 cm?<br>c) Was ist der Unterschied zwischen einseitigem und zweiseitigem Hebel?</p>`,
      solution: `<div class="calc">a) F₁ = 10 N · 14 cm / 1,5 cm ≈ 93,3 N
b) F₁ = 10 N · 14 cm / 1,5 cm ≈ 93,3 N</div>
<p>c) Für beide gilt dasselbe Hebelgesetz. Beim <b>zweiseitigen</b> Hebel wirken die Kräfte auf <b>beiden Seiten</b> des Drehpunkts (gleiche Richtung). Beim <b>einseitigen</b> Hebel wirken sie auf <b>derselben Seite</b> (entgegengesetzte Richtung).</p>
<div class="tip">Nussknacker: Drücke möglichst <b>weit außen</b> (großer Hebelarm) und lege die Nuss möglichst <b>nah</b> an den Drehpunkt.</div>`
    },
    {
      title: 'Aufgabe 7: Gleichgewicht an der Wippe',
      src: 'Anwendungen des Hebelgesetzes – Aufgabe 8',
      html: `<p>Berechne mit dem Hebelgesetz eine Ausgleichsmöglichkeit für r₂ = 16 cm und F₂ = 0,1 N (eine Karosseriescheibe) an der Stelle r₁ = 4 cm. Wie viele Scheiben musst du anhängen?</p>`,
      solution: `<div class="calc">F₁ = F₂ · r₂ / r₁ = 0,1 N · 16 cm / 4 cm = 0,4 N</div>
<p class="answer">Man braucht 0,4 N, also <b>4 Karosseriescheiben</b> bei r₁ = 4 cm. (Ein Viertel des Abstands → vierfache Kraft.)</p>`
    },
    {
      title: 'Aufgabe 8: Maus und Schwein',
      src: 'Anwendungen des Hebelgesetzes – Aufgabe 9',
      html: `<p>Ein Schwein (1200 N) sitzt 0,8 m vom Drehpunkt einer Wippe entfernt. Eine Maus bringt 30 g auf die Waage, also eine Gewichtskraft von 0,3 N. Wie weit vom Drehpunkt entfernt müsste sie sitzen?</p>`,
      solution: `<div class="calc">r_Maus = F_Schwein · r_Schwein / F_Maus
       = 1200 N · 0,8 m / 0,3 N = 3200 m</div>
<p class="answer">Die Maus müsste 3200 m, also 3,2 km, vom Drehpunkt entfernt sitzen. Theoretisch geht es, praktisch nicht: Die Wippe müsste 3,2 km lang sein und dürfte selbst nichts wiegen.</p>`
    },
    {
      title: 'Aufgabe 9: Mehrere Kräfte',
      src: 'Anwendungen des Hebelgesetzes – Aufgabe 12',
      html: `<p>Links vom Drehpunkt hängen 2 Scheiben (0,2 N) bei 10 cm und 1 Scheibe (0,1 N) bei 15 cm. Rechts soll bei 5 cm ausgeglichen werden. Welche Kraft ist nötig? Wie viele Scheiben sind das?</p>`,
      solution: `<div class="calc">F₁ · r₁ + F₂ · r₂ = F₃ · r₃
0,2 N · 10 cm + 0,1 N · 15 cm = F₃ · 5 cm
2 Ncm + 1,5 Ncm = F₃ · 5 cm
F₃ = 3,5 Ncm / 5 cm = 0,7 N</div>
<p class="answer">Man braucht 0,7 N, also 7 Scheiben bei 5 cm.</p>`
    },
    {
      title: 'Aufgabe 10: Wippe mit Eigengewicht',
      src: 'Hebel mit mehreren Kräften – Aufgabe 13',
      html: `<p>Eine 3 m lange Wippe (Eigengewicht F = 500 N) liegt so auf, dass der Drehpunkt 2 m vom linken und 1 m vom rechten Ende entfernt ist. Ihr Schwerpunkt liegt in der Mitte, also 0,5 m links vom Drehpunkt. Anna (160 N) sitzt links bei r = 1,8 m. Kann ihr Vater (800 N) das auf der rechten Seite noch ausgleichen? Wo müsste er sitzen?</p>`,
      solution: `<div class="calc">Links: M = 160 N · 1,8 m + 500 N · 0,5 m = 288 Nm + 250 Nm = 538 Nm
Rechts: Vater, höchstens r = 1 m → M_max = 800 N · 1 m = 800 Nm</div>
<p>800 Nm > 538 Nm, er kann also ausgleichen.</p>
<div class="calc">r = 538 Nm / 800 N ≈ 0,67 m</div>
<p class="answer">Der Vater muss ca. 0,67 m rechts vom Drehpunkt sitzen.</p>
<p class="note">Auf deinem Blatt sind die Maße evtl. etwas anders. Der Rechenweg ist aber genau so: Eigengewicht im Schwerpunkt mitrechnen!</p>`
    },
    {
      title: 'Aufgabe 11: Unterarm',
      src: 'Hebel – Aufgabe 15',
      html: `<p>Der menschliche Unterarm ist ein einseitiger Hebel. Der Bizepsmuskel greift ca. 4 cm vom Ellbogengelenk (Drehpunkt) an. In der Hand, 30 cm vom Drehpunkt entfernt, liegt eine Masse von 20 kg (200 N). Welche Kraft muss der Bizeps aufbringen, damit er die Masse hält?</p>`,
      solution: `<div class="calc">F_Muskel · 4 cm = 200 N · 30 cm
F_Muskel = 200 N · 30 cm / 4 cm = 1500 N</div>
<p class="answer">Der Bizeps muss ca. 1500 N aufbringen, das ist 7,5-mal so viel wie die Last! Dafür reicht eine kleine Muskelbewegung für eine große Handbewegung.</p>
<p class="note">Nimm den Abstand, der auf deinem Blatt steht. Der Rechenweg bleibt gleich.</p>`
    },
    {
      title: 'Aufgabe 12: Drehkräftigkeit umrechnen',
      src: 'Drehkräftigkeit messen – Aufgabe 4/5',
      html: `<p>a) Die gemessene Kraft an einer 5 cm langen Stange beträgt 0,7 N. Wie groß wäre die Kraft bei einer 1 m langen Stange?<br>b) Welche Formel gibt für das Drehmoment Sinn: M = F/r, M = F/r², M = F · r oder M = r/F?</p>`,
      solution: `<div class="calc">a) M = 0,7 N · 0,05 m = 0,035 Nm
   F(1 m) = 0,035 Nm / 1 m = 0,035 N</div>
<p>b) <b>M = F · r</b>, denn je größer Kraft <b>und</b> Hebelarm, desto größer die Drehwirkung.</p>`
    },
    {
      title: 'Aufgabe 13: Schnurmethode',
      src: 'Übungsaufgaben – Aufgabe 7',
      html: `<p>Daten aus der Messung eines Elektromotors mit der Schnurmethode: Durchmesser der Motorwelle 3 mm, Länge der Schnur 60 cm, Radius des Federkraftmessers 0,8 cm, abgelesene Kraft 1,5 N. Berechne das Drehmoment. Welche Angaben sind unnötig?</p>`,
      solution: `<div class="calc">r = 3 mm / 2 = 1,5 mm = 0,0015 m
M = F · r = 1,5 N · 0,0015 m = 0,00225 Nm  (= 2,25 Nmm)</div>
<p class="answer">Das Drehmoment beträgt 0,00225 Nm. Unnötig sind die <b>Schnurlänge</b> und der <b>Radius des Federkraftmessers</b>.</p>`
    },
    {
      title: 'Aufgabe 14: Wasserrad',
      src: 'Übungsaufgaben – Aufgabe 8',
      html: `<p>Tom hat ein Wasserrad mit 12 cm Durchmesser und einer Achse mit 8 mm Durchmesser. An eine Schnur auf der Achse hängt er ein Tütchen mit Sand, bis das Wasserrad still steht. Das Tütchen wiegt 16 g. Welches Drehmoment liefert das Wasserrad?</p>`,
      solution: `<div class="calc">F = 16 g ≙ 0,16 N
r = 8 mm / 2 = 4 mm = 0,004 m   (Schnur an der Achse!)
M = F · r = 0,16 N · 0,004 m = 0,00064 Nm</div>
<p class="answer">Das Wasserrad liefert ca. 0,00064 Nm (= 0,64 Nmm). Der Raddurchmesser 12 cm ist unnötig.</p>`
    }
  ],

  quiz: [
    { q: 'Wie lautet das Hebelgesetz?', a: ['F₁ · r₁ = F₂ · r₂', 'F₁ + r₁ = F₂ + r₂', 'F₁ / r₁ = F₂ / r₂', 'F₁ · F₂ = r₁ · r₂'], c: 0, e: 'Kraft mal Kraftarm = Last mal Lastarm.' },
    { q: 'Was ist die Einheit des Drehmoments?', a: ['Nm (Newtonmeter)', 'N', 'N/m', 'kg · m'], c: 0, e: 'M = F · r → N · m = Nm.' },
    { q: 'Ein Hebelarm wird <b>verdoppelt</b>. Was passiert mit der nötigen Kraft?', a: ['Sie halbiert sich', 'Sie verdoppelt sich', 'Sie bleibt gleich', 'Sie vervierfacht sich'], c: 0, e: 'F · r bleibt gleich: doppeltes r → halbe F.' },
    { q: 'Welches Beispiel ist ein <b>einseitiger</b> Hebel?', a: ['Nussknacker', 'Wippe', 'Schere', 'Balkenwaage'], c: 0, e: 'Beim Nussknacker sitzen Drehpunkt, Nuss und Hand alle auf einer Seite hintereinander.' },
    { q: 'Welches Beispiel ist ein <b>zweiseitiger</b> Hebel?', a: ['Zange', 'Schubkarre', 'Unterarm', 'Flaschenöffner'], c: 0, e: 'Bei der Zange liegt der Drehpunkt zwischen Griff und Schneide.' },
    { q: 'Wie viel Newton entsprechen ungefähr 100 g?', a: ['1 N', '10 N', '0,1 N', '100 N'], c: 0, e: '1 kg ≙ ca. 10 N, also 100 g ≙ ca. 1 N.' },
    { q: 'Ein Schraubenschlüssel ist 0,25 m lang, du drückst mit 40 N. Wie groß ist M?', a: ['10 Nm', '160 Nm', '1,6 Nm', '40,25 Nm'], c: 0, e: 'M = 40 N · 0,25 m = 10 Nm.' },
    { q: 'Bei einem einseitigen Hebel zieht die Last nach unten. In welche Richtung muss die Haltekraft wirken?', a: ['Nach oben', 'Nach unten', 'Zur Seite', 'Egal'], c: 0, e: 'Beim einseitigen Hebel sind die Kräfte entgegengesetzt gerichtet.' },
    { q: 'Wie muss die Kraft für M = F · r zum Hebelarm wirken?', a: ['Senkrecht', 'Parallel', 'Im 45°-Winkel', 'Egal'], c: 0, e: 'Nur der senkrechte Anteil erzeugt die volle Drehwirkung.' },
    { q: 'Was ist bei der <b>Schnurmethode</b> der Hebelarm?', a: ['Der Radius der Motorwelle', 'Die Länge der Schnur', 'Der Radius des Federkraftmessers', 'Der Durchmesser der Welle'], c: 0, e: 'Die Schnur wickelt sich auf der Welle ab. Der Hebelarm ist der Wellenradius (Durchmesser ÷ 2).' },
    { q: 'Was ist ein <b>Kraftwandler</b>?', a: ['Eine mechanische Vorrichtung, die Betrag und/oder Richtung einer Kraft verändert', 'Ein Gerät zum Messen von Kräften', 'Ein Elektromotor', 'Eine Feder'], c: 0, e: 'Hebel, Getriebe, Flaschenzug … sind Kraftwandler.' },
    { q: '20 cm sind wie viel Meter?', a: ['0,2 m', '2 m', '0,02 m', '20 m'], c: 0, e: '100 cm = 1 m → 20 cm = 0,2 m.' },
    { q: 'Du willst eine Nuss mit wenig Kraft knacken. Was machst du?', a: ['Weit außen drücken, Nuss nah am Drehpunkt', 'Nah am Drehpunkt drücken, Nuss weit außen', 'Beides in die Mitte', 'Das ist egal'], c: 0, e: 'Großer Kraftarm, kleiner Lastarm → große Kraft an der Nuss.' }
  ]
});
