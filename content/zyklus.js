window.TOPICS = window.TOPICS || [];
(function () {
  function box(x, y, n, t1, t2) {
    return '<rect x="' + x + '" y="' + y + '" width="200" height="62" rx="10" class="soft stroke" stroke-width="2"/>' +
      '<text x="' + (x + 100) + '" y="' + (y + 26) + '" font-weight="700">(' + n + ') ' + t1 + '</text>' +
      '<text x="' + (x + 100) + '" y="' + (y + 46) + '" font-size="11.5">' + t2 + '</text>';
  }
  var zyklus = '<figure class="figure svgc wide"><svg viewBox="0 0 600 400" role="img" aria-label="Politikzyklus" style="max-width:600px">' +
    '<defs><marker id="zA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" class="steelf"/></marker></defs>' +
    '<g font-size="13.5" text-anchor="middle">' +
    box(200, 10, 1, 'Problem', 'Ein Jugendzentrum im Wohngebiet?') +
    box(390, 140, 2, 'Auseinandersetzung', 'BI / Jugendliche / Verwaltung / GR') +
    box(330, 300, 3, 'Entscheidung', 'des Gemeinderats: Schließung?') +
    box(70, 300, 4, 'Bewertung', 'der Entscheidung: Erleichterung? Protest?') +
    box(10, 140, 5, 'Reaktionen', 'Zufriedenheit? Erneuter Protest?') +
    '<text x="300" y="195" font-size="12.5" font-style="italic">Politik als endlose Kette</text>' +
    '<text x="300" y="213" font-size="12.5" font-style="italic">von Problemlösungen</text>' +
    '</g>' +
    '<g class="stroke steel" stroke-width="2.2" fill="none">' +
    '<path d="M400 41 C 470 45, 490 90, 490 136" marker-end="url(#zA)"/>' +
    '<path d="M490 202 L 450 296" marker-end="url(#zA)"/>' +
    '<path d="M330 331 L 274 331" marker-end="url(#zA)"/>' +
    '<path d="M150 300 L 112 206" marker-end="url(#zA)"/>' +
    '<path d="M110 140 C 110 90, 140 45, 196 41" marker-end="url(#zA)"/>' +
    '</g></svg><figcaption>Der Politikzyklus (Buch S. 92, M2) am Beispiel Jugendzentrum</figcaption></figure>';

  window.TOPICS.push({
    id: 'zyklus',
    order: 2,
    title: 'Der Politikzyklus',
    short: 'Problem → Auseinandersetzung → Entscheidung → Bewertung → Reaktion, Fall Jugendzentrum',
    icon: '🔄',
    color: '#2a56a5',
    ytSearch: 'Politikzyklus einfach erklärt Beispiel',
    sims: [
      { id: 'zyklus', title: 'Phasen ordnen' },
      { id: 'phasen', title: 'Phasen zuordnen' }
    ],

    learn: [
      {
        title: 'Was ist der Politikzyklus?',
        html: `
<p>Der <b>Politikzyklus</b> ist ein <b>Modell</b>, in dem Politik als <b>Kreislauf (Zyklus)</b> aus verschiedenen Schritten verstanden wird. Mithilfe des Politikzyklus lassen sich <b>alle politischen Prozesse analysieren</b>.</p>
<p>Modelle helfen uns, <b>komplexe Prozesse</b> besser zu verstehen. Das Modell des Politikzyklus hilft uns, politische Entscheidungen besser nachzuvollziehen.</p>
${zyklus}`
      },
      {
        title: 'Die fünf Phasen',
        html: `
<div class="table-wrap"><table>
<tr><th>Phase</th><th>Leitfragen</th><th>Fall Jugendzentrum</th></tr>
<tr><td><b>1. Problem</b></td><td>Worum geht es? Was ist das Problem? Warum muss die Politik handeln?</td><td>Ein Jugendzentrum im Wohngebiet: Lärm nach 22 Uhr, Müll, die Anwohner wollen Ruhe.</td></tr>
<tr><td><b>2. Auseinandersetzung</b></td><td>Wer ist beteiligt (Akteure)? Welche Interessen und Argumente gibt es? Welche Lösungen werden vorgeschlagen?</td><td>Bürgerinitiative der Anwohner, Jugendliche, Gemeindeverwaltung, Gemeinderat, Oberbürgermeisterin. Unterschriftensammlungen, Demo, Leserbriefe …</td></tr>
<tr><td><b>3. Entscheidung</b></td><td>Wer entscheidet? Wie wird entschieden? Was wird entschieden?</td><td>Der Gemeinderat entscheidet: Jugendzentrum erhalten oder schließen (oder Kompromiss, z. B. Ruhe ab 22 Uhr).</td></tr>
<tr><td><b>4. Bewertung der Entscheidung</b></td><td>Wie beurteilen die Betroffenen die Entscheidung?</td><td>Bei Erhalt: Jugendliche positiv, Anwohner negativ. Bei Schließung: umgekehrt, die Anwohner haben Ruhe.</td></tr>
<tr><td><b>5. Reaktion</b></td><td>Wie reagieren die Betroffenen? Ist das Problem gelöst oder entsteht ein neues?</td><td>Zufriedenheit oder erneuter Protest, Beschwerden, neue Initiative → neues Problem.</td></tr>
</table></div>
<div class="merke">Aus der Reaktion entsteht oft ein <b>neues Problem</b>, und der Zyklus beginnt von vorn. Deshalb versteht man Politik im Politikzyklus als eine <b>endlose Kette von Problemlösungen</b>.</div>`
      },
      {
        title: 'Fallbeispiel: Soll das Jugendzentrum geöffnet bleiben?',
        html: `
<p><b>M1 (Buch S. 92):</b> Liegt ein Jugendzentrum in einem Wohngebiet, kann es zu Konflikten zwischen <b>Jugendlichen</b> und <b>Anwohnern</b> kommen. Die einen schätzen das Jugendzentrum als Treffpunkt nachmittags und für Partys bis in die Nacht. Viele Anwohner möchten gerade abends ihre Ruhe haben. Oft lässt sich durch Rücksichtnahme und Gespräche ein <b>Kompromiss</b> finden (z. B. nach 22 Uhr leise, kein Müll). Manchmal scheitert das, und beide Seiten versuchen einseitig, ihre Interessen durchzusetzen. Betroffene Anwohner gründen dann eine <b>Bürgerinitiative</b>.</p>
<div class="two-col">
<div class="example" style="margin:0"><b>Argumente für den Erhalt</b> (Jugendliche)<br>• Treffpunkt zum Chillen und für Spaß und Sport<br>• Sinnvolle Freizeit, Jugendliche hängen nicht auf der Straße herum<br>• Betreuung durch Sozialarbeiter, weniger Probleme<br>• Gemeinschaft, Integration<br>• „An Jugendliche denkt man immer erst als Letztes“</div>
<div class="example" style="margin:0"><b>Argumente für die Schließung</b> (Anwohner/BI)<br>• Lärm, besonders abends und spät in der Nacht<br>• Müll in den Straßen<br>• Recht auf Nachtruhe<br>• Kosten für die Gemeinde<br>• Ein anderer Standort außerhalb des Wohngebiets wäre besser</div>
</div>
<h3>Mögliche Entscheidungen des Gemeinderats</h3>
<ul><li>Jugendzentrum <b>erhalten</b></li><li>Jugendzentrum <b>schließen</b></li><li><b>Kompromiss</b>: erhalten, aber Öffnungszeiten bis 22 Uhr, Müllkonzept, Lärmschutz, Ansprechpartner. Oder: <b>Umzug</b> an einen anderen Standort.</li></ul>
<h3>Bewertung und Reaktion</h3>
<div class="table-wrap"><table>
<tr><th></th><th>Erhalt</th><th>Schließung</th></tr>
<tr><td><b>Jugendliche</b></td><td>positiv → Zufriedenheit</td><td>negativ → Protest, Beschwerden</td></tr>
<tr><td><b>Anwohner</b></td><td>negativ → Protest, Beschwerden</td><td>positiv → Zufriedenheit, Ruhe</td></tr>
</table></div>`
      },
      {
        title: 'Analyse mit Kategorien',
        html: `
<p>Kommunalpolitische Sach- und Konfliktlagen untersucht man mit <b>sozialwissenschaftlichen Kategorien</b>:</p>
<div class="table-wrap"><table>
<tr><th>Kategorie</th><th>Leitfrage</th><th>Jugendzentrum</th></tr>
<tr><td><b>Problem</b></td><td>Worum geht es? Was ist strittig?</td><td>Soll das Jugendzentrum im Wohngebiet geöffnet bleiben? Lärm/Müll vs. Treffpunkt</td></tr>
<tr><td><b>Akteure</b></td><td>Wer ist beteiligt?</td><td>Jugendliche, Anwohner (Bürgerinitiative), Gemeinderat, OB, Verwaltung, Lokalpresse</td></tr>
<tr><td><b>Interessen</b></td><td>Was wollen die Beteiligten und warum?</td><td>Jugendliche: Treffpunkt, Freizeit. Anwohner: Ruhe, Sauberkeit. Gemeinde: Kosten, Frieden</td></tr>
<tr><td><b>Legitimation</b></td><td>Wer darf entscheiden, und warum?</td><td>Der Gemeinderat ist durch Wahl legitimiert. Verwaltung durch Ernennung. Bürger durch das Grundgesetz (Art. 20: „Alle Staatsgewalt geht vom Volke aus“)</td></tr>
<tr><td><b>Macht</b></td><td>Wer kann sich wie durchsetzen?</td><td>Gemeinderat (Beschluss), OB (Vorsitz, Verwaltung), BI (Unterschriften, Bürgerentscheid), Presse (öffentliche Meinung). Jugendliche unter 16 haben kein Wahlrecht, also weniger Macht</td></tr>
</table></div>
<div class="tip">Übe die Kategorien im Thema <b>Methoden → Trainer → „Kategorien“</b>.</div>`
      }
    ],

    videos: [
      { id: 'xBNGX6O09LE', title: 'Der Politikzyklus an einem Beispiel erklärt', desc: 'Die Phasen des Politikzyklus einfach erklärt.' },
      { id: 'mphO5CGymmw', title: 'Wie geht eigentlich Kommunalpolitik?', desc: 'Erklärvideo zur kommunalen Demokratie.' }
    ],

    tasks: [
      {
        title: 'Aufgabe 1: Konflikt mit dem Politikzyklus analysieren',
        src: 'AB Fallbeispiel Jugendzentrum / Buch S. 93, Aufg. 2',
        html: `<p><b>Analysiere</b> den Konflikt um das Jugendzentrum mithilfe des Politikzyklus. Sammle dabei mögliche Argumente von Jugendlichen und anderen Bürgern und trage diese in die Phase „Auseinandersetzung“ ein. Welche Entscheidungsoptionen hat die Gemeinde? Trage diese unter „Entscheidung“ ein.</p>`,
        solution: `<p><b>1. Problem:</b> Ein Jugendzentrum im Wohngebiet: Soll es geöffnet bleiben?</p>
<p><b>2. Auseinandersetzung:</b> Die <b>Jugendlichen</b> wollen es behalten, als Treffpunkt zum Chillen und für Spaß und Sport. Die <b>Anwohner</b> im Wohngebiet stört, dass es spät abends zu laut ist und Müll in den Straßen liegt. Sie gründen eine Bürgerinitiative. Weitere Akteure: Gemeindeverwaltung, Gemeinderat, Oberbürgermeisterin.</p>
<p><b>3. Entscheidung:</b> Der Gemeinderat kann das Jugendzentrum <b>erhalten</b> oder <b>schließen</b> (oder einen Kompromiss beschließen).</p>
<p><b>4. Bewertung:</b> <b>Erhalt:</b> positiv für die Jugendlichen, negativ für die Anwohner. <b>Schließung:</b> negativ für die Jugendlichen, positiv (Ruhe) für die Anwohner.</p>
<p><b>5. Reaktion:</b> <b>Erhalt:</b> Jugendliche zufrieden, Anwohner protestieren und beschweren sich. <b>Schließung:</b> Jugendliche protestieren und beschweren sich, Anwohner sind zufrieden und haben Ruhe. → Neues Problem, der Zyklus beginnt erneut.</p>`
      },
      {
        title: 'Aufgabe 2: Argumente sammeln',
        src: 'Buch S. 93, Aufg. 3',
        html: `<p>Sammle Argumente, die die Jugendlichen und die Bürgerinitiative in der Auseinandersetzung für bzw. gegen den Erhalt des Jugendzentrums einbringen könnten.</p>`,
        solution: `<div class="two-col"><div><b>Jugendliche (für Erhalt):</b><ul><li>Wir brauchen einen Treffpunkt, sonst sind wir auf der Straße.</li><li>Sinnvolle Freizeit, Sport, Partys an einem geschützten Ort</li><li>Betreuung durch Sozialarbeiter</li><li>Freibad und Skateanlage sind schon geschlossen worden, für uns bleibt nichts.</li><li>Wir halten uns an Regeln (ab 22 Uhr leise, Müll aufräumen).</li></ul></div>
<div><b>Bürgerinitiative (gegen Erhalt):</b><ul><li>Lärm stört die Nachtruhe.</li><li>Müll und Verschmutzung im Wohngebiet</li><li>Wohngebiete sind zum Wohnen da.</li><li>Wertverlust der Häuser</li><li>Das Jugendzentrum sollte an einen Standort ohne Nachbarn ziehen.</li></ul></div></div>`
      },
      {
        title: 'Aufgabe 3: Endlose Kette von Problemlösungen',
        src: 'Buch S. 93, Aufg. 4',
        html: `<p><b>Erläutere</b> ausgehend vom vorliegenden Beispiel, weshalb Politik im Politikzyklus als eine endlose Kette von Problemlösungen verstanden wird (M1–M3).</p>`,
        solution: `<p>Im Politikzyklus wird ein Problem (Jugendzentrum im Wohngebiet) durch Auseinandersetzung und Entscheidung des Gemeinderats bearbeitet. Eine Entscheidung stellt aber <b>selten alle zufrieden</b>, weil die Interessen gegensätzlich sind.</p>
<p><b>Beispiel:</b> Beschließt der Gemeinderat, das Jugendzentrum zu schließen, sind die Anwohner zufrieden. Die Jugendlichen protestieren aber und treffen sich vielleicht im Park, wo neue Lärmprobleme entstehen. Bleibt es geöffnet, beschweren sich die Anwohner weiter und starten z. B. einen Bürgerentscheid.</p>
<p>Die <b>Reaktionen</b> auf eine Entscheidung führen also zu einem <b>neuen Problem</b>, und der Zyklus beginnt von vorn. Außerdem ändern sich Bedingungen (Geld, Bevölkerung, Wünsche). Politik ist deshalb nie „fertig“, sondern eine <b>endlose Kette von Problemlösungen</b>.</p>`
      },
      {
        title: 'Aufgabe 4: Radweg im Politikzyklus',
        src: 'Übung (Buch S. 94/95)',
        html: `<p><b>Analysiere</b> den Entscheidungsprozess um den Radweg an der Albert-Schweitzer-Schule anhand des Politikzyklus.</p>`,
        solution: `<p><b>1. Problem:</b> Vor der Schule fehlt ein Radweg, Schüler müssen auf die gefährliche Straße ausweichen.<br>
<b>2. Auseinandersetzung:</b> Schulleiter, Schüler- und Elternvertreter wenden sich an den Bürgermeister und die Gemeinderäte. Strittig ist der Streckenverlauf. Der Gemeinderat und der Verkehrsausschuss diskutieren verschiedene Varianten.<br>
<b>3. Entscheidung:</b> Der Gemeinderat stimmt über den Verlauf ab (Vorsitz: Bürgermeister).<br>
<b>4. Bewertung:</b> Schüler und Eltern sind erleichtert. Anwohner, die z. B. Parkplätze verlieren, oder Bürger, denen er zu teuer ist, sehen ihn kritisch.<br>
<b>5. Reaktion:</b> Zufriedenheit oder neue Forderungen (z. B. Tempo 30), Beschwerden → neues Problem.</p>
<p class="note">Hinweis: Die Ausführung durch die Verwaltung (Bauamt) liegt zwischen Entscheidung und Bewertung.</p>`
      },
      {
        title: 'Aufgabe 5: Wer sollte mitsprechen?',
        src: 'Buch S. 93, Aufg. 1',
        html: `<p>Entscheide und begründe: Wer sollte im Konflikt um die Nutzung des Jugendzentrums ein Mitspracherecht haben? Alle Bürger/-innen? Nur die Anwohner? Nur die Jugendlichen? Der Bürgermeister? Der Gemeinderat? Nur ihre Eltern?</p>`,
        solution: `<p>Eine mögliche begründete Antwort: <b>Entscheiden</b> sollte der <b>Gemeinderat</b>, weil er von allen Bürgern gewählt und damit <b>legitimiert</b> ist und das Wohl der ganzen Gemeinde abwägen muss. <b>Mitsprechen</b> sollten aber vor allem die <b>Betroffenen</b>, also <b>Jugendliche und Anwohner</b>, z. B. in einer Einwohnerversammlung oder über einen Jugendgemeinderat. Nur die Jugendlichen oder nur die Anwohner entscheiden zu lassen, wäre einseitig.</p>
<p class="note">Hier gibt es mehrere richtige Antworten. Wichtig ist eine Begründung (Legitimation, Betroffenheit, Gemeinwohl).</p>`
      }
    ],

    quiz: [
      { q: 'Was ist der <b>Politikzyklus</b>?', a: ['Ein Modell, das Politik als Kreislauf aus verschiedenen Schritten darstellt', 'Ein Gesetz der Gemeindeordnung', 'Eine Wahl alle 5 Jahre', 'Eine Fahrradtour von Politikern'], c: 0, e: 'Mit ihm kann man alle politischen Prozesse analysieren.' },
      { q: 'Welche Phase kommt <b>nach</b> „Auseinandersetzung“?', a: ['Entscheidung', 'Problem', 'Reaktion', 'Bewertung'], c: 0, e: 'Problem → Auseinandersetzung → Entscheidung → Bewertung → Reaktion.' },
      { q: 'Welche Phase steht am <b>Anfang</b>?', a: ['Problem', 'Entscheidung', 'Reaktion', 'Auseinandersetzung'], c: 0, e: 'Zuerst muss ein Problem erkannt werden.' },
      { q: 'Wer entscheidet im Fall Jugendzentrum?', a: ['Der Gemeinderat', 'Die Bürgerinitiative', 'Die Jugendlichen', 'Die Lokalzeitung'], c: 0, e: '(3) Entscheidung des Gemeinderats.' },
      { q: 'Warum ist Politik eine „endlose Kette von Problemlösungen“?', a: ['Weil aus den Reaktionen auf eine Entscheidung oft neue Probleme entstehen', 'Weil Politiker nie entscheiden', 'Weil jede Wahl 8 Jahre dauert', 'Weil Probleme nie gelöst werden dürfen'], c: 0, e: 'Der Kreislauf beginnt immer wieder neu.' },
      { q: '„Anwohner sind erleichtert, Jugendliche finden die Schließung ungerecht.“ Welche Phase?', a: ['Bewertung der Entscheidung', 'Problem', 'Auseinandersetzung', 'Entscheidung'], c: 0, e: 'Die Betroffenen bewerten die Entscheidung.' },
      { q: 'Eine Bürgerinitiative sammelt Unterschriften. Welche Phase?', a: ['Auseinandersetzung', 'Entscheidung', 'Reaktion', 'Problem'], c: 0, e: 'Akteure versuchen, ihre Interessen durchzusetzen.' },
      { q: 'Was ist eine <b>Bürgerinitiative</b>?', a: ['Ein Zusammenschluss von Bürgern, die sich für ein bestimmtes, meist lokales Ziel einsetzen', 'Eine Partei', 'Ein Ausschuss des Gemeinderats', 'Ein Amt im Rathaus'], c: 0, e: 'Definition aus dem Buch (S. 92).' },
      { q: 'Welche Kategorie fragt: „Wer kann sich wie durchsetzen?“', a: ['Macht', 'Legitimation', 'Interessen', 'Akteure'], c: 0, e: 'Legitimation fragt: Wer darf entscheiden, und warum?' },
      { q: 'Welche Kategorie fragt: „Wer darf entscheiden und warum?“', a: ['Legitimation', 'Macht', 'Problem', 'Akteure'], c: 0, e: 'Z. B. durch Wahl oder Ernennung.' }
    ]
  });
})();
