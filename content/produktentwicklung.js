window.TOPICS = window.TOPICS || [];
window.TOPICS.push({
  id: 'produktentwicklung',
  order: 7,
  title: 'Produktentwicklung',
  short: 'Die 4 Schritte: Bedürfnis → Anforderungen → Funktionen → Lösungskonzept',
  icon: '🧩',
  color: '#0f8b8d',
  ytSearch: 'Produktentwicklung Anforderungsliste Funktionsanalyse Schule',

  learn: [
    {
      title: 'Worum geht es?',
      html: `
<p>Die Entwicklung technischer Produkte erfolgt in der Regel <b>nicht zufällig</b>, sondern folgt einem <b>strukturierten Prozess</b>. Er stellt sicher, dass ein Produkt nicht nur <b>funktioniert</b>, sondern auch den <b>Bedürfnissen der Gesellschaft</b> entspricht und bestimmte <b>Qualitätskriterien</b> erfüllt. Dabei greifen mehrere <b>aufeinander aufbauende Schritte</b> ineinander. Sie beschreiben den Weg von einer ersten Idee bis zu einem realisierbaren Konzept.</p>
<figure class="figure svgc">
<svg viewBox="0 0 640 110" role="img" aria-label="Die vier Schritte der Produktentwicklung">
  <defs><marker id="pA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="accf"/></marker></defs>
  <g font-size="13" text-anchor="middle">
    <rect x="5" y="20" width="135" height="64" rx="12" class="soft stroke" stroke-width="2"/><text x="72" y="46" font-weight="700">1. Gesellschaftl.</text><text x="72" y="64" font-weight="700">Bedürfnis</text>
    <rect x="168" y="20" width="135" height="64" rx="12" class="soft stroke" stroke-width="2"/><text x="235" y="46" font-weight="700">2. Anforderungen</text><text x="235" y="64" font-weight="700">festlegen</text>
    <rect x="331" y="20" width="135" height="64" rx="12" class="soft stroke" stroke-width="2"/><text x="398" y="46" font-weight="700">3. Funktionen</text><text x="398" y="64" font-weight="700">bestimmen</text>
    <rect x="494" y="20" width="140" height="64" rx="12" class="soft stroke" stroke-width="2"/><text x="564" y="46" font-weight="700">4. Lösungskonzept</text><text x="564" y="64" font-weight="700">entwickeln</text>
  </g>
  <line x1="140" y1="52" x2="164" y2="52" class="stroke acc" stroke-width="3" marker-end="url(#pA)"/>
  <line x1="303" y1="52" x2="327" y2="52" class="stroke acc" stroke-width="3" marker-end="url(#pA)"/>
  <line x1="466" y1="52" x2="490" y2="52" class="stroke acc" stroke-width="3" marker-end="url(#pA)"/>
  <path d="M564 86 C 564 106, 72 106, 72 88" class="stroke" stroke-width="1.5" stroke-dasharray="5 4" fill="none" marker-end="url(#pA)"/>
  <text x="320" y="104" font-size="11" text-anchor="middle">nicht streng linear: Schritte werden wiederholt / angepasst</text>
</svg>
</figure>`
    },
    {
      title: 'Schritt 1: Gesellschaftliches Bedürfnis',
      html: `
<p>Der <b>Ausgangspunkt</b> jeder Produktentwicklung ist ein <b>gesellschaftliches Bedürfnis</b>. Darunter versteht man einen <b>wahrgenommenen Mangel oder ein Problem</b>, das von Einzelnen oder Gruppen in der Gesellschaft erkannt wird.</p>
<p>Solche Bedürfnisse können sehr unterschiedlich entstehen: durch <b>veränderte Lebensgewohnheiten</b>, <b>technische Innovationen</b> oder <b>ökologische und ökonomische Herausforderungen</b>. Das gesellschaftliche Bedürfnis ist die <b>zentrale Motivation</b> für die Entwicklung eines neuen Produkts oder die Verbesserung eines bestehenden.</p>
<div class="merke"><b>Definition:</b> Ein gesellschaftliches Bedürfnis ist ein von Menschen wahrgenommener Mangel oder ein Problem. Es ist der Anlass für die Entwicklung eines sinnvollen technischen Produkts, denn technische Produkte sollen dem Wohl der Menschen dienen.</div>`
    },
    {
      title: 'Schritt 2: Anforderungen festlegen',
      html: `
<p>Auf dieser Grundlage werden im nächsten Schritt <b>konkrete Anforderungen</b> festgelegt (<b>Anforderungsliste</b>). Dieser Schritt ist entscheidend, weil hier die <b>Rahmenbedingungen</b> definiert werden, die das Produkt erfüllen muss.</p>
<p>Anforderungen können <b>funktionaler, technischer, wirtschaftlicher oder ökologischer</b> Art sein, z. B. Vorgaben zur <b>Belastbarkeit</b>, zur <b>Energieeffizienz</b>, zu den <b>Herstellungskosten</b> oder zur <b>Benutzerfreundlichkeit</b>.</p>
<p>Häufig stehen einzelne Anforderungen in einem <b>Spannungsverhältnis</b> zueinander (z. B. „sehr stabil“ und „sehr billig“), sodass eine sorgfältige <b>Abwägung</b> notwendig ist. Die Anforderungen dienen später als <b>Maßstab zur Bewertung</b> verschiedener Lösungsansätze.</p>
<div class="merke"><b>Definition:</b> Anforderungen sind die konkreten Bedingungen (funktional, technisch, wirtschaftlich, ökologisch), die ein Produkt erfüllen muss. Später bewertet man die Lösungen daran.</div>`
    },
    {
      title: 'Schritt 3: Funktionen bestimmen',
      html: `
<p>Im Anschluss erfolgt die <b>systematische Bestimmung der Funktionen</b> des Produkts (<b>Funktionsanalyse</b>). Eine <b>Funktion</b> beschreibt die grundlegende <b>Aufgabe oder Wirkung</b> eines Produkts, <b>unabhängig von seiner konkreten technischen Umsetzung</b>.</p>
<p>Ziel ist es, das Produkt auf seine <b>wesentlichen Wirkprinzipien</b> zu reduzieren. Komplexe Produkte lassen sich in mehrere <b>Teilfunktionen</b> zerlegen, die zusammen das Gesamtsystem bilden.</p>
<ul>
<li><b>Hauptfunktion</b>: die wichtigste Aufgabe (z. B. „Seifenblasen erzeugen“)</li>
<li><b>Teilfunktionen / Unterfunktionen</b>: präzisieren, wie die Hauptfunktion erfüllt wird</li>
<li>Sie werden nacheinander in einer <b>Funktionsstruktur</b> angeordnet.</li>
</ul>
<p>Diese funktionale Analyse erleichtert es, geeignete Lösungswege zu entwickeln und verschiedene Ansätze zu vergleichen.</p>
<div class="merke"><b>Definition:</b> In der Funktionsanalyse bestimmt man die Hauptfunktion und die Teilfunktionen eines Produkts, also was es tun muss, unabhängig davon, wie es technisch umgesetzt wird.</div>`
    },
    {
      title: 'Schritt 4: Lösungskonzept entwickeln',
      html: `
<p>Erst im <b>letzten Schritt</b> wird ein <b>konkretes Lösungskonzept</b> entwickelt. Auf Grundlage der zuvor definierten Anforderungen und Funktionen werden mögliche <b>Umsetzungen</b> erarbeitet, in Form von <b>Skizzen, Modellen oder ersten technischen Entwürfen</b>.</p>
<p>Man wählt die <b>Funktionsträger</b> aus, die die Funktionen bewirken. Das können <b>elektrische und mechanische Bauteile</b> sein (z. B. Motor, Seil, Lautsprecher, Getriebe) oder auch <b>Kontrollstrukturen in einem Programmablauf</b>. Anschließend werden sie <b>logisch kombiniert und angeordnet</b>.</p>
<p>Unterschiedliche Lösungsansätze werden miteinander <b>verglichen</b> und daraufhin <b>bewertet</b>, wie umsetzbar sie sind und wie gut sie die Anforderungen erfüllen. Ziel ist ein möglichst geeignetes Konzept als Grundlage für die weitere Ausarbeitung und die spätere Produktion.</p>
<div class="merke"><b>Definition:</b> Das Lösungskonzept ist die konkrete technische Umsetzung. Man wählt Funktionsträger (Bauteile) aus, kombiniert sie und bewertet verschiedene Lösungen anhand der Anforderungen.</div>`
    },
    {
      title: 'Warum diese Reihenfolge?',
      html: `
<ul>
<li>Jeder Schritt <b>baut auf dem vorherigen auf</b>: Ohne Bedürfnis gibt es keinen Grund für das Produkt. Ohne Anforderungen weiß man nicht, was es können muss. Ohne Funktionen weiß man nicht, welche Bauteile nötig sind.</li>
<li>Man legt sich <b>nicht zu früh auf eine Lösung fest</b>. Erst wird geklärt, <b>was</b> gebraucht wird, dann <b>wie</b> es umgesetzt wird. So findet man oft bessere Lösungen.</li>
<li>Die <b>Anforderungen</b> sind am Ende der <b>Maßstab</b>, um die Lösungskonzepte zu bewerten.</li>
<li>Der Prozess ist <b>nicht immer streng linear</b>: Bei neuen Erkenntnissen oder geänderten Anforderungen werden Schritte <b>wiederholt oder angepasst</b>.</li>
</ul>`
    },
    {
      title: 'Beispiel: Seifenblasenmaschine',
      html: `
<div class="table-wrap"><table>
<tr><th>Schritt</th><th>Seifenblasenmaschine</th></tr>
<tr><td>1. Bedürfnis</td><td>Bei Kinderfesten sollen viele Seifenblasen entstehen, ohne dass jemand die ganze Zeit pusten muss.</td></tr>
<tr><td>2. Anforderungen</td><td>erzeugt viele Blasen; sicher für Kinder (Batterie, keine scharfen Kanten); stabil; kostengünstig; Lauge leicht nachfüllbar; leise; energiesparend</td></tr>
<tr><td>3. Funktionen</td><td><b>Hauptfunktion:</b> Seifenblasen erzeugen. <b>Teilfunktionen:</b> Lauge bereitstellen → Seifenfilm bilden → Luft hindurchblasen → ein- und ausschalten</td></tr>
<tr><td>4. Lösungskonzept</td><td>Wanne mit Lauge; ein Rad mit Ringen dreht sich durch die Lauge (Motor + <b>Getriebe</b> ins Langsame); ein Lüfter mit Motor bläst durch die Ringe; ein <b>Schalter</b> schaltet beides; ein stabiles Gestell (<b>Dreiecke/Streben</b>)</td></tr>
</table></div>
<div class="tip">Hier hängen alle KA-Themen zusammen: Getriebe, Drehmoment, Schaltungen, Stabilität, technische Zeichnung und Seifenlauge!</div>`
    }
  ],

  videos: [
    { id: 'bbChQzgP__A', title: 'Anforderungsliste', desc: 'Wie man Anforderungen formuliert und einteilt.' }
  ],

  tasks: [
    {
      title: 'Aufgabe 1: Die vier Schritte',
      src: 'Produktentwicklung – Arbeitsauftrag 2/3',
      html: `<p>Arbeite die vier zentralen Schritte der Produktentwicklung heraus. Notiere zu jedem Schritt eine präzise <b>Fachbezeichnung</b> und eine knappe, fachsprachliche <b>Definition</b> (1–2 Sätze).</p>`,
      solution: `<ol>
<li><b>Gesellschaftliches Bedürfnis</b>: Ein von Menschen wahrgenommener Mangel oder ein Problem in der Gesellschaft. Es ist der Anlass und die zentrale Motivation für die Entwicklung eines neuen oder verbesserten Produkts.</li>
<li><b>Anforderungen festlegen (Anforderungsliste)</b>: Man legt die konkreten funktionalen, technischen, wirtschaftlichen und ökologischen Rahmenbedingungen fest, die das Produkt erfüllen muss. Sie dienen später als Maßstab zur Bewertung.</li>
<li><b>Funktionen bestimmen (Funktionsanalyse)</b>: Man bestimmt die Hauptfunktion und die Teilfunktionen des Produkts, unabhängig von der technischen Umsetzung, und ordnet sie in einer Funktionsstruktur an.</li>
<li><b>Lösungskonzept entwickeln</b>: Man wählt Funktionsträger (Bauteile) aus, kombiniert sie zu Skizzen, Modellen oder Entwürfen und bewertet verschiedene Lösungen anhand der Anforderungen.</li>
</ol>`
    },
    {
      title: 'Aufgabe 2: Warum ist die Reihenfolge sinnvoll?',
      src: 'Produktentwicklung – Arbeitsauftrag 4',
      html: `<p>Erkläre, warum die Reihenfolge der Schritte sinnvoll ist.</p>`,
      solution: `<p>Die Schritte <b>bauen aufeinander auf</b>. Zuerst muss klar sein, <b>welches Problem</b> gelöst werden soll (Bedürfnis). Daraus ergeben sich die <b>Anforderungen</b>. Erst wenn man weiß, was das Produkt leisten muss, kann man seine <b>Funktionen</b> bestimmen. Und erst wenn die Funktionen klar sind, kann man passende <b>Bauteile</b> für ein Lösungskonzept auswählen.</p>
<p>So legt man sich <b>nicht zu früh auf eine Lösung</b> fest. Die Anforderungen dienen am Ende als <b>Maßstab</b>, um die Lösungen zu bewerten. Der Prozess ist aber nicht streng linear: Bei neuen Erkenntnissen werden Schritte <b>wiederholt oder angepasst</b>.</p>`
    },
    {
      title: 'Aufgabe 3: Anforderungen sortieren',
      src: 'Übung',
      html: `<p>Ordne die Anforderungen an eine Seifenblasenmaschine den Arten <b>funktional, technisch, wirtschaftlich, ökologisch</b> zu:<br>a) Sie soll mindestens 20 Blasen pro Minute erzeugen. b) Die Herstellungskosten sollen unter 15 € liegen. c) Sie soll mit Akku statt Einwegbatterien betrieben werden. d) Das Gestell soll 2 kg Belastung aushalten. e) Sie soll einfach zu bedienen sein (ein Schalter).</p>`,
      solution: `<p>a) funktional · b) wirtschaftlich · c) ökologisch · d) technisch (Belastbarkeit) · e) funktional (Benutzerfreundlichkeit)</p>
<p class="note">Manche Anforderungen kann man auch anders begründen. Wichtig ist eine sinnvolle Begründung.</p>`
    },
    {
      title: 'Aufgabe 4: Funktionsanalyse',
      src: 'Übung',
      html: `<p>Führe eine Funktionsanalyse für eine <b>automatische Teebeutelmaschine</b> durch (Teebeutel wird nach 6 Minuten aus der Tasse gehoben). Nenne die Hauptfunktion und mindestens drei Teilfunktionen. Nenne dann mögliche Funktionsträger.</p>`,
      solution: `<p><b>Hauptfunktion:</b> Teebeutel nach einer bestimmten Zeit aus der Tasse heben.</p>
<p><b>Teilfunktionen:</b> Zeit messen → Signal geben → Drehbewegung erzeugen → Drehmoment verstärken / langsamer machen → Teebeutel anheben → Teebeutel oben halten.</p>
<p><b>Funktionsträger (Lösungskonzept):</b> Elektronik/Mikrocontroller (Zeit), Elektromotor (Drehung), <b>Schneckengetriebe</b> (Übersetzung ins Langsame, selbsthemmend → hält den Beutel oben), Stange als Hebelarm, Faden.</p>`
    },
    {
      title: 'Aufgabe 5: Gesellschaftliches Bedürfnis erkennen',
      src: 'Übung',
      html: `<p>Nenne für die folgenden Produkte ein mögliches gesellschaftliches Bedürfnis und ordne es zu (veränderte Lebensgewohnheiten, technische Innovation, ökologische/ökonomische Herausforderung):<br>a) E-Bike &nbsp; b) Smartphone-Ladegerät mit Solarzelle &nbsp; c) Lieferdienst-App</p>`,
      solution: `<p>a) E-Bike: Viele möchten umweltfreundlich auch längere/bergige Strecken pendeln → ökologische Herausforderung + technische Innovation (Akkus).<br>
b) Solar-Ladegerät: Strom unterwegs ohne Steckdose, Energie sparen → ökologische Herausforderung.<br>
c) Lieferdienst-App: Menschen haben weniger Zeit, kaufen online → veränderte Lebensgewohnheiten.</p>`
    }
  ],

  quiz: [
    { q: 'Was ist der <b>erste</b> Schritt der Produktentwicklung?', a: ['Gesellschaftliches Bedürfnis', 'Lösungskonzept', 'Anforderungen festlegen', 'Funktionen bestimmen'], c: 0, e: 'Ausgangspunkt ist immer ein Mangel oder Problem.' },
    { q: 'In welcher Reihenfolge laufen die Schritte ab?', a: ['Bedürfnis → Anforderungen → Funktionen → Lösungskonzept', 'Lösungskonzept → Funktionen → Anforderungen → Bedürfnis', 'Funktionen → Bedürfnis → Lösungskonzept → Anforderungen', 'Anforderungen → Bedürfnis → Funktionen → Lösungskonzept'], c: 0, e: 'Erst was, dann wie.' },
    { q: 'Was ist ein <b>gesellschaftliches Bedürfnis</b>?', a: ['Ein wahrgenommener Mangel oder ein Problem in der Gesellschaft', 'Ein fertiges Produkt', 'Eine technische Zeichnung', 'Eine Liste mit Bauteilen'], c: 0, e: 'Es ist die zentrale Motivation für ein neues Produkt.' },
    { q: 'Was beschreibt eine <b>Funktion</b>?', a: ['Die Aufgabe/Wirkung eines Produkts, unabhängig von der technischen Umsetzung', 'Das Bauteil, das etwas bewirkt', 'Den Preis des Produkts', 'Die Farbe des Produkts'], c: 0, e: 'Das Bauteil ist der Funktionsträger.' },
    { q: 'Was sind <b>Funktionsträger</b>?', a: ['Bauteile oder Programmteile, die eine Funktion bewirken', 'Die Kunden', 'Die Anforderungen', 'Die Hauptfunktion'], c: 0, e: 'Z. B. Motor, Seil, Lautsprecher, Kontrollstrukturen im Programm.' },
    { q: 'Wozu dienen die <b>Anforderungen</b> später?', a: ['Als Maßstab zur Bewertung der Lösungsansätze', 'Als Bauanleitung', 'Als Werbung', 'Gar nicht mehr'], c: 0, e: 'Man prüft, welche Lösung die Anforderungen am besten erfüllt.' },
    { q: 'Welche Art von Anforderung ist „Herstellungskosten unter 20 €“?', a: ['wirtschaftlich', 'ökologisch', 'funktional', 'technisch'], c: 0, e: 'Kosten = wirtschaftlich (ökonomisch).' },
    { q: 'Ist der Entwicklungsprozess immer streng linear?', a: ['Nein, Schritte werden oft wiederholt oder angepasst', 'Ja, immer genau einmal nacheinander', 'Nein, die Reihenfolge ist egal', 'Ja, sonst ist es falsch'], c: 0, e: 'Neue Erkenntnisse führen zu Anpassungen.' },
    { q: 'Was macht man in der <b>Funktionsanalyse</b>?', a: ['Hauptfunktion und Teilfunktionen bestimmen und in einer Funktionsstruktur ordnen', 'Das Produkt verkaufen', 'Die Kosten berechnen', 'Ein Modell bauen'], c: 0, e: 'Man reduziert das Produkt auf seine Wirkprinzipien.' },
    { q: 'Wie wird ein Lösungskonzept dargestellt?', a: ['Als Skizzen, Modelle oder erste technische Entwürfe', 'Nur als Text', 'Als Rechnung', 'Gar nicht'], c: 0, e: 'Verschiedene Ansätze werden verglichen und bewertet.' }
  ]
});
