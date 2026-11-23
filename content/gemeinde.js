window.TOPICS = window.TOPICS || [];
(function () {
  var schema = '<figure class="figure svgc wide"><svg viewBox="0 0 560 360" role="img" aria-label="Aufbau der Ratsverfassung in Baden-Württemberg" style="max-width:560px">' +
    '<defs><marker id="rA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="fill"/></marker></defs>' +
    '<g font-size="13" text-anchor="middle">' +
    // Ausschüsse
    [40, 95, 150, 205].map(function (x) { return '<ellipse cx="' + x + '" cy="45" rx="27" ry="22" class="soft stroke" stroke-width="1.5"/>'; }).join('') +
    '<text x="122" y="15" font-weight="700">Ausschüsse</text>' +
    // Verwaltung
    '<rect x="350" y="20" width="190" height="50" rx="14" class="soft stroke" stroke-width="2"/><text x="445" y="42" font-weight="700">Verwaltung</text><text x="445" y="60" font-size="11">(Rathaus, Ämter)</text>' +
    // Gemeinderat
    '<rect x="30" y="160" width="190" height="52" rx="8" class="soft stroke" stroke-width="2"/><text x="125" y="183" font-weight="700">Gemeinderat</text><text x="125" y="201" font-size="11">„Hauptorgan“</text>' +
    // Bürgermeister
    '<rect x="340" y="160" width="200" height="52" rx="8" class="soft stroke" stroke-width="2"/><text x="440" y="183" font-weight="700">Bürgermeister/-in</text><text x="440" y="201" font-size="11">(in großen Städten: OB)</text>' +
    // Bürger
    '<rect x="160" y="300" width="240" height="46" rx="8" class="soft stroke" stroke-width="2"/><text x="280" y="328" font-weight="700">Bürgerinnen und Bürger</text>' +
    '</g>' +
    // Pfeile
    '<g class="stroke" stroke-width="1.8" fill="none">' +
    '<path d="M215 300 C 160 280, 125 250, 125 216" marker-end="url(#rA)"/>' +
    '<path d="M345 300 C 400 280, 440 250, 440 216" marker-end="url(#rA)"/>' +
    '<path d="M125 160 L 122 72" marker-end="url(#rA)"/>' +
    '<path d="M222 186 L 336 186" marker-end="url(#rA)"/>' +
    '<path d="M460 160 L 460 74" marker-end="url(#rA)"/>' +
    '<path d="M380 160 C 360 120, 300 70, 236 50" marker-end="url(#rA)" stroke-dasharray="5 4"/>' +
    '<path d="M340 205 L 224 205" marker-end="url(#rA)" stroke-dasharray="5 4"/>' +
    '</g>' +
    '<g font-size="12" font-weight="600">' +
    '<text x="60" y="272">wählen (5 J.)</text>' +
    '<text x="410" y="272">wählen direkt (8 J.)</text>' +
    '<text x="130" y="120">besetzt</text>' +
    '<text x="250" y="180">kontrolliert</text>' +
    '<text x="468" y="120">leitet</text>' +
    '<text x="290" y="105" font-weight="400">Vorsitz</text>' +
    '<text x="250" y="222" font-weight="400">Vorsitz</text>' +
    '</g></svg><figcaption>Aufbau der Ratsverfassung in Baden-Württemberg (wie auf dem AB „Wer hat die Macht in der Gemeinde?“). Gestrichelt: Der Bürgermeister ist Vorsitzender von Gemeinderat und Ausschüssen.</figcaption></figure>';

  window.TOPICS.push({
    id: 'gemeinde',
    order: 1,
    title: 'Die Gemeinde und ihre Organe',
    short: 'Gemeinderat, Bürgermeister, Verwaltung, Initiative – Entscheidung – Ausführung, Legitimation',
    icon: '🏛️',
    color: '#c8372d',
    ytSearch: 'Gemeinderat Bürgermeister Baden-Württemberg einfach erklärt',
    sims: [
      { id: 'organe', title: 'Wer macht was?' },
      { id: 'radweg', title: 'Radweg-Karten A–G' }
    ],

    learn: [
      {
        title: 'Kommunalpolitik – was geht mich das an?',
        html: `
<p>Politik ist nicht nur die „große Bühne“ in Berlin. Bekommt eure Gemeinde ein neues Schwimmbad, ein Jugendzentrum, eine bessere Busverbindung? Das alles ist <b>Kommunalpolitik</b>, also Politik in der <b>Gemeinde (Kommune)</b>: direkt vor Ort, ganz nah dran an euch.</p>
<div class="merke"><b>Kommune</b> kommt von lateinisch <i>communis</i> = allgemein, gemeinschaftlich. <b>kommunal</b> = die Gemeinde betreffend.</div>
<p>Deutschland ist <b>föderalistisch</b> aufgebaut: <b>Bund – Länder (16) – Kommunen</b>. Jede Ebene hat eigene politische Aufgaben. (Gegenteil: zentralistisch)</p>
<h3>Die Aufgaben der Gemeinde (Buch S. 91, M2)</h3>
<div class="table-wrap"><table>
<tr><th>Pflichtaufgaben</th><th>Freiwillige Aufgaben</th><th>Weisungsaufgaben</th></tr>
<tr><td>Aufgaben, die die Gemeinde erfüllen <b>muss</b>.</td><td>Aufgaben, die die Gemeinde erfüllen <b>kann</b>, aber nicht muss.</td><td>Aufgaben, die die Gemeinde <b>im Auftrag von Bund oder Land</b> erfüllen <b>muss</b>.</td></tr>
<tr><td>Schulen, Straßenbau, Feuerwehr, Wasser- und Stromversorgung</td><td>Sportanlagen, Theater, Jugendzentrum, Freibad</td><td>Meldewesen (Personalausweis), Standesamt</td></tr>
</table></div>
<div class="tip">Wenn das Geld knapp ist, wird meist bei den <b>freiwilligen Aufgaben</b> gespart, z. B. bei Freibad, Skateanlage oder Jugendzentrum. Deshalb gibt es gerade dort oft Konflikte (Ballonspiel, M3).</div>`
      },
      {
        title: 'Der Gemeinderat (M1)',
        html: `
<ul>
<li>Wird <b>alle 5 Jahre</b> von den Bürgerinnen und Bürgern gewählt (Gemeinde- bzw. Stadträte).</li>
<li>Trifft <b>zusammen mit dem Bürgermeister</b> wichtige kommunalpolitische Entscheidungen, z. B. wo ein Radweg gebaut wird.</li>
<li>Ist laut Gemeindeordnung das <b>Hauptorgan</b> der Gemeinde.</li>
</ul>
<h3>Aufgaben des Gemeinderats</h3>
<ul>
<li><b>Entscheidungen treffen</b> und <b>Rechtsvorschriften</b> (Satzungen) erlassen</li>
<li><b>Kontrolle des Bürgermeisters</b> (und der Verwaltung): Hält er sich an die Regeln (Gemeindeordnung BW, Satzung)?</li>
<li><b>Besetzung von Ausschüssen</b>: Gruppen von Gemeinderäten, die sich mit einem bestimmten Themengebiet befassen, z. B. Sport, Schule, Verkehr. Sie <b>bereiten Entscheidungen vor</b>.</li>
<li><b>Aufstellung des Haushaltsplans</b>: Wofür gibt die Gemeinde ihre Einnahmen aus?</li>
</ul>
<h3>Wer darf für den Gemeinderat kandidieren? (AB, Aufgabe 2)</h3>
<ul>
<li>vollendetes <b>18. Lebensjahr</b></li>
<li><b>deutsche Staatsbürgerschaft oder Bürger der EU</b></li>
<li><b>Hauptwohnsitz seit mindestens drei Monaten</b> in der Gemeinde, in der man kandidiert</li>
</ul>
<p class="note">Hinweis: Baden-Württemberg hat 2023 das Kommunalwahlrecht geändert, seitdem kann man schon ab 16 in den Gemeinderat gewählt werden. <b>Wählen</b> darf man bei Kommunalwahlen in BW ab <b>16</b>. In der KA gilt, was ihr im Unterricht besprochen habt. Frag im Zweifel deine Lehrkraft.</p>`
      },
      {
        title: 'Der Bürgermeister (M2 + AB OB)',
        html: `
<ul>
<li>Wird <b>alle 8 Jahre direkt</b> von den Bürgerinnen und Bürgern gewählt. In größeren Städten (Stadtkreise, große Kreisstädte über 20 000 Einwohner) heißt er <b>Oberbürgermeister (OB)</b>.</li>
<li><b>Wahl:</b> Alle Wahlberechtigten ab 16 haben eine Stimme. Wer <b>mehr als die Hälfte</b> der gültigen Stimmen bekommt, ist gewählt (<b>absolute Mehrheit</b>). Schafft das niemand, gibt es eine <b>Neuwahl</b> (frühestens 2, spätestens 4 Wochen später). Dann reichen die <b>meisten Stimmen</b> (<b>relative Mehrheit</b>). Bei Stimmengleichheit entscheidet das Los.</li>
<li>Die Wahl ist <b>allgemein, unmittelbar, frei, gleich und geheim</b>.</li>
<li>Die Direktwahl findet <b>unabhängig von der Gemeinderatswahl</b> statt und verleiht ihm eine <b>starke Stellung</b>.</li>
</ul>
<div class="merke"><b>Die drei Hauptfunktionen des Bürgermeisters:</b><br>
1. <b>stimmberechtigter Vorsitzender</b> des Gemeinderats und aller Ausschüsse, leitet deren Sitzungen<br>
2. <b>Chef der Verwaltung</b> (Rathaus), Dienstvorgesetzter aller Mitarbeiter<br>
3. <b>Vertreter der Gemeinde nach außen</b> (Repräsentant und Rechtsvertreter)</div>
<h3>Weitere Infos aus dem AB „Was macht eigentlich ein (Ober-)Bürgermeister?“</h3>
<ul>
<li>Regelungen in der <b>Gemeindeordnung BW</b> (§§ 42–55), „süddeutsche Ratsverfassung“.</li>
<li>In dringenden Fällen kann er eine <b>Eilentscheidung</b> anstelle des Gemeinderats treffen.</li>
<li>Er ist als <b>Einziger an allen drei Phasen</b> beteiligt: Vorbereitung, Entscheidung im Gemeinderat und Umsetzung durch die Verwaltung.</li>
<li>In Gemeinden über 2000 Einwohnern arbeitet er <b>hauptamtlich</b>.</li>
<li>In Stuttgart gibt es zusätzlich <b>sieben Bürgermeister (Beigeordnete)</b> für Geschäftsbereiche. Sie werden vom <b>Gemeinderat</b> gewählt, der OB dagegen direkt von den Bürgern. Bei Tochterunternehmen (z. B. SSB) ist der OB Vorsitzender des Aufsichtsrats.</li>
<li><b>Voraussetzungen für die Wahl (laut AB):</b> Deutsche und EU-Bürger, Alter laut AB ab 25, Höchstalter 68 am Wahltag, keine bestimmte Ausbildung vorgeschrieben. Sie müssen für die freiheitlich-demokratische Grundordnung eintreten, und die Bewerbung braucht Unterschriften von Wahlberechtigten (in Stuttgart 250).</li>
<li>Es gibt sehr wenige Bürgermeisterinnen: Laut Buch waren es knapp 7,5 % (2017). Laut AB gab es 2020 in den 1101 Gemeinden 97 OB und 6 OBinnen sowie 911 Bürgermeister und 86 Bürgermeisterinnen.</li>
</ul>
<p class="note">Die Altersgrenzen wurden 2023 geändert, seitdem kann man schon ab 18 Bürgermeister werden. In der KA gilt der Stand aus dem Unterricht.</p>`
      },
      {
        title: 'Die Verwaltung (M3) und Legitimation',
        html: `
<p>Gemeinderat und Bürgermeister treffen politische Entscheidungen. Wer setzt sie um? Für die <b>Ausführung der Beschlüsse</b> ist die <b>Verwaltung</b> der Gemeinde zuständig. Sie sitzt im <b>Rathaus</b> (z. B. Bauamt, Ordnungsamt, Bürgeramt). Ihr <b>Chef ist der Bürgermeister</b>.</p>
<p>Die Gemeindebediensteten werden vom <b>Gemeinderat im Einvernehmen mit dem Bürgermeister ernannt</b>, eingestellt und entlassen.</p>
<div class="table-wrap"><table>
<tr><th>Organ</th><th>Legitimation (Berechtigung) durch …</th></tr>
<tr><td>Gemeinderat</td><td><b>Wahl</b> durch die Bürger (5 Jahre)</td></tr>
<tr><td>Bürgermeister</td><td><b>Direktwahl</b> durch die Bürger (8 Jahre) + anschließend offizielle <b>Ernennung</b></td></tr>
<tr><td>Verwaltung (z. B. Bauamtsleiterin)</td><td><b>Ernennung</b> (durch Gemeinderat im Einvernehmen mit dem Bürgermeister)</td></tr>
</table></div>
<div class="merke"><b>Ernennung</b> = Bestimmung einer Person zur Wahrnehmung einer Funktion als Amtsträger. Mit der Ernennung ist die Person <b>legitimiert</b> (berechtigt), das Amt auszuüben. Auch der Bürgermeister wird nach seiner Wahl noch offiziell ernannt. Ohne vorausgehende Legitimation per Wahl kann er aber nicht ernannt werden.</div>`
      },
      {
        title: 'Zusammenwirken: Initiative – Entscheidung – Ausführung',
        html: `
${schema}
<p>Am Beispiel <b>Radweg an der Albert-Schweitzer-Schule</b> (M4): Dass ein Radweg nötig ist, ist klar. Strittig ist der genaue <b>Streckenverlauf</b>. Bis der Radweg eingeweiht werden kann, durchläuft er einen Prozess:</p>
<div class="table-wrap"><table>
<tr><th>Phase</th><th>Was passiert?</th><th>Karten (M4)</th></tr>
<tr><td><b>1. Initiative</b></td><td>Jemand bringt ein Anliegen ein (Bürger, Schule, Gemeinderäte, Bürgermeister, Verwaltung).</td><td><b>G</b>: Schulleiter zeigt dem BM die Mängel im Radwegeplan.<br><b>D</b>: Schüler- und Elternvertreter sprechen mit BM und Gemeinderäten.</td></tr>
<tr><td><b>2. Entscheidung</b></td><td>Beratung im Gemeinderat und in den Ausschüssen, dann <b>Beschluss</b> des Gemeinderats (Vorsitz: BM).</td><td><b>F</b>: Gemeinderat diskutiert in einer ersten Sitzung.<br><b>B</b>: Verkehrsausschuss diskutiert Streckenverläufe.<br><b>C</b>: Gemeinderat stimmt ab.</td></tr>
<tr><td><b>3. Ausführung</b></td><td>Die <b>Verwaltung</b> setzt den Beschluss um (Chef: BM).</td><td><b>A</b>: Bauamt schreibt den Auftrag aus.<br><b>E</b>: Bauamt kontrolliert die Anlage.</td></tr>
</table></div>
<div class="tip">Probier es im <b>Trainer → „Radweg-Karten A–G“</b> aus!</div>`
      },
      {
        title: 'Der Bürgermeister – ein „kleines Herrgöttle“? (M5)',
        html: `
<div class="quote">„Eigentlich ist der … gewählte Gemeinderat ‚Hauptorgan der Gemeinde‘. […] Doch die kommunale Wirklichkeit sieht zumeist anders aus: Zentraler Akteur auf der kommunalpolitischen Bühne ist der Bürgermeister.“ Die Baden-Württemberger nennen ihn deshalb oft „kleines Herrgöttle“.</div>
<h3>Warum hat der Bürgermeister eine so starke Position?</h3>
<ul>
<li><b>Direktwahl</b> durch das Volk: Er hat eine eigene, starke Legitimation und ist unabhängig vom Gemeinderat (plebiszitäres Element).</li>
<li><b>Lange Amtszeit</b>: 8 Jahre statt 5 Jahre beim Gemeinderat, die Amtszeiten sind unabhängig voneinander.</li>
<li><b>Ämterhäufung</b>: Er ist Vorsitzender des Gemeinderats <b>und</b> der Ausschüsse (mit Stimmrecht), Chef der Verwaltung und Vertreter nach außen.</li>
<li><b>An allen 3 Phasen beteiligt</b>: Er bereitet Entscheidungen vor (die Verwaltung liefert die Informationen), stimmt mit ab und setzt sie um.</li>
<li><b>Informationsvorsprung</b>: Die Verwaltung arbeitet ihm zu, Gemeinderäte sind meist <b>ehrenamtlich</b> tätig.</li>
<li><b>Eilentscheidungen</b> in dringenden Fällen.</li>
</ul>
<h3>Bewertung (Pro und Contra)</h3>
<div class="two-col">
<div class="tip" style="margin:0"><b>Vorteile</b><br>• Schnelle, klare Entscheidungen, die Gemeinde ist handlungsfähig<br>• Bürger wissen, wer verantwortlich ist<br>• Direkt vom Volk legitimiert, also bürgernah<br>• Er kann langfristig planen (8 Jahre)<br>• Er ist unabhängiger von Parteien</div>
<div class="warn" style="margin:0"><b>Nachteile / Gefahren</b><br>• Machtkonzentration in einer Person<br>• Die Kontrolle durch den Gemeinderat wird schwächer, weil der BM selbst den Vorsitz hat<br>• Gemeinderat (eigentlich Hauptorgan) wird geschwächt<br>• 8 Jahre ohne Abwahlmöglichkeit<br>• Viel hängt von der Person ab</div>
</div>
<p class="note">Bei „Bewerte“ musst du am Ende ein eigenes, <b>begründetes Urteil</b> fällen und deinen Maßstab nennen (z. B. Effizienz oder Machtkontrolle).</p>`
      }
    ],

    videos: [
      { id: 'wMhzPne9bvk', title: 'Kommunalpolitik kurz erklärt: Die Arbeit im Gemeinderat', desc: 'Gemeinderat, Ausschüsse, Fraktionen.' },
      { id: '0yJyj8yDhFg', title: 'Bürgermeister (Baden-Württemberg)', desc: 'Das Amt des Bürgermeisters in BW.' },
      { id: 'd8JlZ6eFnAE', title: 'So laufen die Kommunalwahlen in Baden-Württemberg ab', desc: 'Wer darf wählen, welche Gremien gibt es?' },
      { id: 'r2s23lLHIVk', title: 'Kommunalpolitik – was ist das?', desc: 'Zuständigkeiten und politische Ebenen.' }
    ],

    tasks: [
      {
        title: 'Aufgabe 1: Schaubild erstellen',
        src: 'Buch S. 95, Aufg. 1 / AB „Wer hat die Macht?“',
        html: `<p><b>Erstelle</b> ein Schaubild, welches das Zusammenwirken von Gemeinderat, Bürgermeister und Verwaltung veranschaulicht (M1–M3). Fülle dafür die Lücken: <i>Bürgerinnen und Bürger · wählen · Gemeinderat · Bürgermeister/-in · Ausschüsse · besetzt · kontrolliert · leitet · Verwaltung</i></p>`,
        solution: `${schema}
<ul><li>Die <b>Bürgerinnen und Bürger wählen</b> den <b>Gemeinderat</b> (5 Jahre) und die <b>Bürgermeisterin/den Bürgermeister</b> (direkt, 8 Jahre).</li>
<li>Der Gemeinderat <b>besetzt</b> die <b>Ausschüsse</b> und <b>kontrolliert</b> den Bürgermeister.</li>
<li>Der Bürgermeister <b>leitet</b> die <b>Verwaltung</b> und ist Vorsitzender von Gemeinderat und Ausschüssen.</li></ul>`
      },
      {
        title: 'Aufgabe 2: Wer darf für den Gemeinderat kandidieren?',
        src: 'AB Kopiervorlage 5.2, Aufg. 2',
        html: `<p>Kreuze die drei richtigen Merkmale an:</p>
<p>☐ vollendetes 16. Lebensjahr ☐ vollendetes 18. Lebensjahr ☐ vollendetes 25. Lebensjahr ☐ deutsche oder Schweizer Staatsbürgerschaft ☐ deutsche Staatsbürgerschaft oder Bürger der EU ☐ in BW geboren ☐ Hauptwohnsitz seit 6 Monaten in der EU ☐ Hauptwohnsitz seit mindestens drei Monaten in der Gemeinde ☐ kein Hauptwohnsitz, nur Parteimitgliedschaft</p>`,
        solution: `<p>☒ <b>vollendetes 18. Lebensjahr</b><br>☒ <b>deutsche Staatsbürgerschaft oder Bürger der Europäischen Union</b><br>☒ <b>Hauptwohnsitz seit mindestens drei Monaten in der Gemeinde, in der man kandidiert</b></p>
<p class="note">So steht es auf dem AB. Seit der Reform 2023 ist man in BW schon ab 16 wählbar. Frag im Zweifel nach, was deine Lehrkraft erwartet.</p>`
      },
      {
        title: 'Aufgabe 3: Zusammenwirken beim Radweg darstellen',
        src: 'Buch S. 95, Aufg. 2',
        html: `<p><b>Stelle dar</b>, wie die Organe der Gemeinde im Entscheidungsprozess um den Radweg zusammenwirken (M1–M4). Ordne dabei die Karten A–G den Phasen Initiative, Entscheidung und Ausführung zu.</p>`,
        solution: `<p><b>Initiative:</b> Der Anstoß kommt von außen. Der <b>Schulleiter</b> zeigt dem Bürgermeister die Mängel im Radwegeplan (G). <b>Schüler- und Elternvertreter</b> sprechen mit dem Bürgermeister und den Gemeinderäten über die Notwendigkeit (D).</p>
<p><b>Entscheidung:</b> Der <b>Gemeinderat</b> diskutiert in einer ersten Sitzung die Streckenverläufe (F). Die Details werden im <b>Verkehrsausschuss</b> beraten, der die Entscheidung vorbereitet (B). Schließlich <b>stimmt der Gemeinderat</b> unter dem Vorsitz des Bürgermeisters über den Verlauf ab (C).</p>
<p><b>Ausführung:</b> Die <b>Verwaltung</b> (Bauamt) setzt den Beschluss um: Sie schreibt den Auftrag aus (A) und kontrolliert die ordnungsgemäße Anlage (E). Chef der Verwaltung ist der Bürgermeister.</p>
<p><b>Fazit:</b> Alle drei Organe wirken zusammen. Der Bürgermeister ist als Einziger an allen drei Phasen beteiligt.</p>`
      },
      {
        title: 'Aufgabe 4: Die „starke Position“ erläutern',
        src: 'Buch S. 95, Aufg. 3a',
        html: `<p><b>Erläutere</b>, inwiefern der Bürgermeister eine „starke Position“ (M5) in der Gemeinde hat (M1–M5).</p>`,
        solution: `<p>Der Bürgermeister hat eine starke Position, weil er <b>direkt von den Bürgern gewählt</b> wird. Dadurch hat er eine eigene, starke Legitimation und ist nicht vom Gemeinderat abhängig. Seine <b>Amtszeit von 8 Jahren</b> ist länger als die des Gemeinderats (5 Jahre). So kann er langfristig planen und überdauert eine Gemeinderatsperiode.</p>
<p>Außerdem vereinigt er <b>mehrere wichtige Funktionen in einer Person</b>: Er ist <b>stimmberechtigter Vorsitzender</b> des Gemeinderats und aller Ausschüsse, leitet also die Sitzungen und bestimmt mit, worüber gesprochen wird. Er ist <b>Chef der Verwaltung</b> und damit Vorgesetzter aller Mitarbeiter. Er <b>vertritt die Gemeinde nach außen</b>.</p>
<p>Ein Beispiel ist der Radweg: Der Schulleiter wendet sich zuerst an ihn (Initiative). Er leitet die Sitzung, in der abgestimmt wird (Entscheidung), und das Bauamt, das den Radweg baut, untersteht ihm (Ausführung). Als <b>Einziger an allen drei Phasen beteiligt</b> hat er großen Einfluss. Deshalb nennt man ihn in BW auch „kleines Herrgöttle“, obwohl formal der Gemeinderat das Hauptorgan ist.</p>`
      },
      {
        title: 'Aufgabe 5: Die starke Stellung bewerten',
        src: 'Buch S. 95, Aufg. 3b',
        html: `<p><b>Bewerte</b> die starke Stellung des Bürgermeisters (M1–M5).</p>`,
        solution: `<p><b>Einleitung:</b> Der Bürgermeister in Baden-Württemberg hat durch Direktwahl, lange Amtszeit und seine Ämterfülle eine sehr starke Stellung. Ob das gut ist, hängt davon ab, wie man <b>Handlungsfähigkeit</b> und <b>Machtkontrolle</b> gewichtet.</p>
<p><b>Pro:</b> Die Gemeinde ist <b>handlungsfähig</b>, weil Entscheidungen schnell getroffen und umgesetzt werden können. Die Bürger wissen genau, <b>wer verantwortlich</b> ist, und können ihn direkt wählen oder abwählen. Er ist <b>direkt legitimiert</b> und weniger von Parteien abhängig.</p>
<p><b>Contra:</b> Es gibt eine <b>Machtkonzentration</b> in einer Person. Der Gemeinderat soll ihn kontrollieren, doch der Bürgermeister leitet selbst die Sitzungen und hat durch die Verwaltung einen <b>Informationsvorsprung</b>, die Kontrolle ist also schwächer. Acht Jahre sind lang, und viel hängt von der Person ab.</p>
<p><b>Urteil (Beispiel):</b> Ich halte die starke Stellung insgesamt für <b>sinnvoll</b>, weil eine Gemeinde schnell handeln muss und der Bürgermeister durch die Direktwahl demokratisch legitimiert ist. Wichtig ist aber, dass der Gemeinderat seine Kontrollfunktion ernst nimmt und die Bürger sich beteiligen. <i>Mein Maßstab: Effizienz bei gleichzeitiger demokratischer Kontrolle.</i></p>
<p class="note">Bei „bewerten“ gibt es kein „richtig“ oder „falsch“, aber du brauchst Argumente auf beiden Seiten, ein eigenes Urteil und deinen <b>Wertmaßstab</b>.</p>`
      },
      {
        title: 'Aufgabe 6: Flyer zum Amt des (Ober-)Bürgermeisters',
        src: 'AB „Was macht eigentlich ein (Ober-)Bürgermeister?“',
        html: `<p><b>Gestalte</b> mithilfe des Materials einen Flyer, der interessierte Bürger*innen über das Amt des (Ober-)Bürgermeisters und dessen Aufgaben informiert. Welche Inhalte gehören hinein? Wie gehst du vor?</p>`,
        solution: `<p><b>Vorgehen (Methode Flyer):</b> Zielgruppe klären (z. B. Jugendliche, Erstwähler ab 16) → wenige <b>Kernaussagen</b> präzise und knapp formulieren → <b>ein</b> zentrales Symbol statt vieler kleiner Grafiken → sachlicher Ton → Bildrechte beachten. Aufbau: Titelseite, Inhaltsseiten, Rückseite (Kontakt, weitere Infos).</p>
<p><b>Inhalte:</b></p><ul>
<li><b>Wahl:</b> direkt von den Bürgern, alle 8 Jahre, allgemein, unmittelbar, frei, gleich, geheim; absolute Mehrheit bzw. Neuwahl mit relativer Mehrheit</li>
<li><b>Aufgaben:</b> Vorsitzender von Gemeinderat und Ausschüssen (mit Stimmrecht), Chef der Verwaltung, Vertreter der Stadt nach außen, Eilentscheidungen, Aufsichtsratsvorsitz bei Tochterunternehmen</li>
<li><b>Stellung:</b> sehr stark, an allen 3 Phasen beteiligt, „kleines Herrgöttle“</li>
<li><b>Voraussetzungen:</b> Deutsche/EU-Bürger, Altersgrenzen, Unterstützungsunterschriften, Eintreten für die freiheitlich-demokratische Grundordnung</li>
<li>Bezeichnung: OB in Städten über 20 000 Einwohnern (große Kreisstädte, Stadtkreise)</li></ul>`
      },
      {
        title: 'Aufgabe 7: Aufgaben der Gemeinde',
        src: 'Buch S. 90/91, Aufg. 2/3',
        html: `<p>Pascal wünscht sich Skateanlage, Freibad und Angebote für Jugendliche. Sein Vater will eine bessere Auffahrt zur Bundesstraße, gute Schulen (Tablets) und denkt an die Firmen (Verkehrsanbindung).<br>a) <b>Ordne</b> die Interessen den Aufgaben der Gemeinde zu (Pflicht, freiwillig, Weisung).<br>b) <b>Begründe</b>, welche Interessen sich im Zweifel schwerer durchsetzen lassen.</p>`,
        solution: `<p>a) <b>Pascal:</b> Skateanlage, Freibad, Grillplatz, Beachvolleyball, Jugendzentrum → <b>freiwillige Aufgaben</b>. <b>Vater:</b> Straßenbau / Auffahrt, Schulen (Tablets) → <b>Pflichtaufgaben</b>. Verkehrsanbindung für Firmen → Straßenbau, <b>Pflichtaufgabe</b>.</p>
<p>b) Pascals Interessen lassen sich schwerer durchsetzen, weil es <b>freiwillige Aufgaben</b> sind. Wenn das Geld knapp ist, muss die Gemeinde zuerst die Pflicht- und Weisungsaufgaben erfüllen, weil sie dazu gesetzlich verpflichtet ist. Bei freiwilligen Aufgaben kann sie sparen. Außerdem dürfen Jugendliche erst ab 16 wählen und haben weniger Einfluss als z. B. Firmen, die Arbeitsplätze und Steuern bringen.</p>`
      },
      {
        title: 'Aufgabe 8: Ballonspiel – kritisch?',
        src: 'Buch S. 91, Aufg. 4b',
        html: `<p><b>Erörtere</b>, inwiefern es kritisch ist, bei Aufgaben der Gemeinde von „Ballast abwerfen“ zu sprechen.</p>`,
        solution: `<p><b>Kritisch</b>, weil „Ballast“ nach etwas Unnötigem klingt. Hinter jeder Aufgabe stehen aber <b>Menschen mit Interessen</b>: Für Jugendliche ist das Jugendzentrum kein Ballast, für Familien das Freibad auch nicht. Freiwillige Aufgaben machen eine Gemeinde lebenswert. Außerdem darf man Pflicht- und Weisungsaufgaben gar nicht „abwerfen“.</p>
<p><b>Andererseits</b> zeigt das Bild gut, dass eine Gemeinde <b>nur begrenzt Geld</b> hat und Politik heißt, <b>Prioritäten</b> zu setzen und Entscheidungen zu treffen, die nicht allen gefallen.</p>
<p><b>Fazit:</b> Das Bild ist als Veranschaulichung nützlich, der Begriff „Ballast“ ist aber abwertend und blendet die Betroffenen aus.</p>`
      }
    ],

    quiz: [
      { q: 'Für wie viele Jahre wird der <b>Gemeinderat</b> in BW gewählt?', a: ['5 Jahre', '8 Jahre', '4 Jahre', '6 Jahre'], c: 0, e: 'Gemeinderat 5 Jahre, Bürgermeister 8 Jahre.' },
      { q: 'Für wie viele Jahre wird der <b>Bürgermeister</b> in BW gewählt?', a: ['8 Jahre', '5 Jahre', '4 Jahre', '10 Jahre'], c: 0, e: 'Direktwahl für 8 Jahre.' },
      { q: 'Wer wählt den Bürgermeister in BW?', a: ['Die Bürgerinnen und Bürger direkt', 'Der Gemeinderat', 'Der Landtag', 'Die Verwaltung'], c: 0, e: 'Direktwahl, unabhängig von der Gemeinderatswahl.' },
      { q: 'Welche ist <b>keine</b> der drei Hauptfunktionen des Bürgermeisters?', a: ['Kontrolle des Gemeinderats', 'Vorsitzender des Gemeinderats und der Ausschüsse', 'Chef der Verwaltung', 'Vertreter der Gemeinde nach außen'], c: 0, e: 'Umgekehrt: Der Gemeinderat kontrolliert den Bürgermeister.' },
      { q: 'Wer ist für die <b>Ausführung</b> der Beschlüsse zuständig?', a: ['Die Verwaltung', 'Der Gemeinderat', 'Die Ausschüsse', 'Die Bürger'], c: 0, e: 'Die Verwaltung im Rathaus (M3).' },
      { q: 'Was sind <b>Ausschüsse</b>?', a: ['Gruppen von Gemeinderäten zu einem Themengebiet', 'Abteilungen der Verwaltung', 'Bürgerinitiativen', 'Parteien'], c: 0, e: 'Z. B. für Sport, Schule, Verkehr. Sie bereiten Entscheidungen vor.' },
      { q: 'Wodurch ist die Leiterin des Bauamts legitimiert?', a: ['Durch Ernennung', 'Durch Wahl', 'Durch Bürgerentscheid', 'Durch ein Los'], c: 0, e: 'Verwaltungsmitarbeiter werden ernannt.' },
      { q: 'Wer ist laut Gemeindeordnung das <b>Hauptorgan</b> der Gemeinde?', a: ['Der Gemeinderat', 'Der Bürgermeister', 'Die Verwaltung', 'Der Landrat'], c: 0, e: 'Formal der Gemeinderat. In der Wirklichkeit ist oft der Bürgermeister zentral.' },
      { q: 'Was bedeutet <b>absolute Mehrheit</b>?', a: ['Mehr als die Hälfte der gültigen Stimmen', 'Die meisten Stimmen', 'Alle Stimmen', 'Zwei Drittel der Stimmen'], c: 0, e: 'Relative Mehrheit = die meisten Stimmen (2. Wahlgang/Neuwahl).' },
      { q: 'Was ist eine <b>freiwillige Aufgabe</b> der Gemeinde?', a: ['Jugendzentrum', 'Feuerwehr', 'Standesamt', 'Schulen'], c: 0, e: 'Freiwillig: Sportanlagen, Theater, Jugendzentrum.' },
      { q: 'Was ist eine <b>Weisungsaufgabe</b>?', a: ['Meldewesen (Personalausweis)', 'Straßenbau', 'Theater', 'Freibad'], c: 0, e: 'Im Auftrag von Bund oder Land: Meldewesen, Standesamt.' },
      { q: 'In welcher Phase ist der Bürgermeister beteiligt?', a: ['In allen drei: Initiative, Entscheidung, Ausführung', 'Nur in der Ausführung', 'Nur in der Entscheidung', 'Nur in der Initiative'], c: 0, e: 'Das macht seine Stellung so stark.' },
      { q: 'Wie nennt man den Bürgermeister in BW wegen seiner Macht scherzhaft?', a: ['„Kleines Herrgöttle“', '„Schultes-König“', '„Landesvater“', '„Rathaus-Chef“'], c: 0, e: 'Buch S. 95, M5.' },
      { q: 'Ab wann heißt der Bürgermeister <b>Oberbürgermeister</b>?', a: ['In Stadtkreisen und großen Kreisstädten (über 20 000 Einwohner)', 'Ab 2000 Einwohnern', 'Ab 100 000 Einwohnern', 'Nach der zweiten Amtszeit'], c: 0, e: 'Ab 2000 Einwohnern arbeitet er hauptamtlich.' }
    ]
  });
})();
