window.OPERATOREN = [
  { op: 'nennen', afb: 'I', d: 'Sachverhalte in knapper Form anführen' },
  { op: 'beschreiben', afb: 'I', d: 'Sachverhalte schlüssig wiedergeben' },
  { op: 'bezeichnen', afb: 'I', d: 'Sachverhalte (insbesondere bei nichtlinearen Texten wie Tabellen, Schaubildern, Diagrammen oder Karten) begrifflich präzise formulieren' },
  { op: 'analysieren', afb: 'II', d: 'Materialien oder Sachverhalte systematisch untersuchen und auswerten' },
  { op: 'begründen', afb: 'II', d: 'Aussagen (z. B. eine Behauptung, eine Position) durch Argumente stützen, die durch Beispiele oder andere Belege untermauert werden' },
  { op: 'charakterisieren', afb: 'II', d: 'Sachverhalte mit ihren typischen Merkmalen und in ihren Grundzügen bestimmen' },
  { op: 'darstellen', afb: 'II', d: 'Sachverhalte strukturiert und zusammenhängend verdeutlichen' },
  { op: 'ein-, zuordnen', afb: 'II', d: 'Sachverhalte schlüssig in einen vorgegebenen Zusammenhang stellen' },
  { op: 'erklären', afb: 'II', d: 'Sachverhalte schlüssig aus Kenntnissen in einen Zusammenhang stellen (z. B. Theorie, Modell, Gesetz, Regel, Funktions-, Entwicklungs- und/oder Kausalzusammenhang)' },
  { op: 'erläutern', afb: 'II', d: 'Sachverhalte mit Beispielen oder Belegen veranschaulichen' },
  { op: 'erstellen', afb: 'II', d: 'Sachverhalte (insbesondere in grafischer Form) unter Verwendung fachsprachlicher Begriffe strukturiert aufzeigen' },
  { op: 'herausarbeiten', afb: 'II', d: 'Sachverhalte unter bestimmten Gesichtspunkten aus vorgegebenem Material entnehmen, wiedergeben und/oder gegebenenfalls berechnen' },
  { op: 'vergleichen', afb: 'II', d: 'Vergleichskriterien festlegen, Gemeinsamkeiten und Unterschiede gewichtend einander gegenüberstellen sowie ein Ergebnis formulieren' },
  { op: 'beurteilen', afb: 'III', d: 'Aussagen, Vorschläge oder Maßnahmen untersuchen, die dabei zugrunde gelegten Kriterien benennen und ein begründetes Sachurteil formulieren' },
  { op: 'bewerten', afb: 'III', d: 'Aussagen, Vorschläge oder Maßnahmen beurteilen, ein begründetes Werturteil formulieren und die dabei zugrunde gelegten Wertmaßstäbe offenlegen' },
  { op: 'entwickeln', afb: 'III', d: 'zu einer vorgegebenen oder selbst entworfenen Problemstellung einen begründeten Lösungsvorschlag entwerfen' },
  { op: 'erörtern', afb: 'III', d: 'zu einer vorgegebenen These oder Problemstellung durch Abwägen von Pro- und Kontra-Argumenten ein begründetes Ergebnis formulieren' },
  { op: 'gestalten', afb: 'III', d: 'zu einer vorgegebenen oder selbst entworfenen Problemstellung ein Produkt rollen- bzw. adressatenorientiert herstellen' },
  { op: 'überprüfen', afb: 'III', d: 'Aussagen, Vorschläge oder Maßnahmen an Sachverhalten auf ihre sachliche Richtigkeit hin untersuchen und ein begründetes Ergebnis formulieren' }
];

window.TOPICS = window.TOPICS || [];
(function () {
  var opTable = '<div class="table-wrap"><table class="op-table"><tr><th>Operator</th><th>Beschreibung</th><th>AFB</th></tr>' +
    window.OPERATOREN.map(function (o) {
      return '<tr><td>' + o.op + '</td><td>' + o.d + '</td><td><span class="afb afb' + o.afb.length + '">' + o.afb + '</span></td></tr>';
    }).join('') + '</table></div>';

  window.TOPICS.push({
    id: 'methoden',
    order: 6,
    title: 'Methoden & Operatoren',
    short: 'Operatoren und Anforderungsbereiche, Kategorien-Analyse, Texte auswerten, Urteilen',
    icon: '🧭',
    color: '#0f8b8d',
    ytSearch: 'Operatoren Anforderungsbereich erklären erläutern beurteilen bewerten',
    sims: [
      { id: 'operatoren', title: 'Operatoren-Trainer' },
      { id: 'kategorien', title: 'Kategorien' }
    ],

    learn: [
      {
        title: 'Anforderungsbereiche (AFB)',
        html: `
<p>Jede Aufgabe beginnt mit einem <b>Operator</b> (Arbeitsanweisung). Er sagt dir genau, <b>was</b> und <b>wie viel</b> du schreiben musst. Die Operatoren sind drei <b>Anforderungsbereichen</b> zugeordnet:</p>
<div class="table-wrap"><table>
<tr><th>AFB</th><th>Was wird verlangt?</th><th>Typische Operatoren</th></tr>
<tr><td><span class="afb afb1">I</span> Reproduktion</td><td>Wiedergeben von Inhalten und Materialien: Man beschreibt Sachverhalte oder entnimmt sie dem Material.</td><td>nennen, beschreiben, bezeichnen</td></tr>
<tr><td><span class="afb afb2">II</span> Reorganisation & Transfer</td><td>Erklären und Ordnen bekannter Sachverhalte, Übertragen auf andere Sachverhalte. Zusammenhänge selbstständig erklären und auf neue Beispiele anwenden.</td><td>analysieren, darstellen, erklären, erläutern, herausarbeiten, vergleichen, erstellen, begründen</td></tr>
<tr><td><span class="afb afb3">III</span> Reflexion & Problemlösung</td><td>Sich mit Aussagen und Methoden auseinandersetzen, durch Abwägen von Argumenten zu einem <b>eigenen Urteil</b> kommen.</td><td>beurteilen, bewerten, erörtern, überprüfen, entwickeln, gestalten</td></tr>
</table></div>
<div class="warn">Häufigster Fehler: Bei „<b>erläutern</b>“ ohne <b>Beispiel</b> schreiben, oder bei „<b>bewerten</b>“ kein eigenes Urteil fällen. Lies den Operator genau!</div>`
      },
      {
        title: 'Alle Operatoren (Buch)',
        html: opTable + `
<h3>Die wichtigsten Unterschiede</h3>
<ul>
<li><b>nennen</b> = Stichpunkte reichen. <b>beschreiben</b> = in ganzen Sätzen wiedergeben, ohne zu erklären.</li>
<li><b>erklären</b> = Warum ist das so? (Ursache, Zusammenhang). <b>erläutern</b> = erklären <b>+ Beispiel/Beleg</b>.</li>
<li><b>beurteilen</b> = <b>Sachurteil</b> (Ist es sinnvoll, wirksam, richtig?). <b>bewerten</b> = <b>Werturteil</b> mit eigenen <b>Wertmaßstäben</b> (Ist es gerecht, gut? Was ist mir wichtig?).</li>
<li><b>erörtern</b> = Pro und Contra abwägen, dann begründetes Ergebnis.</li>
</ul>`
      },
      {
        title: 'Konflikte mit Kategorien untersuchen',
        html: `
<p>Kommunalpolitische Sach- und Konfliktlagen untersucht man anhand <b>sozialwissenschaftlicher Kategorien</b>:</p>
<div class="table-wrap"><table>
<tr><th>Kategorie</th><th>Leitfragen</th></tr>
<tr><td><b>Problem</b></td><td>Worum geht es? Was ist strittig? Warum ist es ein politisches Problem?</td></tr>
<tr><td><b>Akteure</b></td><td>Wer ist beteiligt oder betroffen? (Bürger, Bürgerinitiative, Gemeinderat, Bürgermeister, Verwaltung, Medien …)</td></tr>
<tr><td><b>Interessen</b></td><td>Was wollen die Akteure? Warum? Welche Argumente haben sie?</td></tr>
<tr><td><b>Legitimation</b></td><td>Wer ist berechtigt zu entscheiden oder zu handeln, und wodurch? (Wahl, Ernennung, Gesetz/Gemeindeordnung, Grundgesetz)</td></tr>
<tr><td><b>Macht</b></td><td>Wer hat welche Mittel, um sich durchzusetzen? (Abstimmung, Vorsitz, Informationen, Öffentlichkeit, Unterschriften, Geld)</td></tr>
</table></div>
<div class="tip">Die Kategorien passen gut zum Politikzyklus: <b>Problem</b> → Phase 1, <b>Akteure & Interessen</b> → Phase 2 (Auseinandersetzung), <b>Legitimation & Macht</b> → Phase 3 (Entscheidung).</div>`
      },
      {
        title: 'Texte auswerten',
        html: `
<ol>
<li><b>Überblick:</b> Wer hat den Text geschrieben (Autor, Quelle)? Wann? Welche Textart (Bericht, Kommentar, Sachtext, Interview)?</li>
<li><b>Lesen und markieren:</b> Unbekannte Wörter klären, <b>Schlüsselbegriffe</b> markieren.</li>
<li><b>Gliedern:</b> Sinnabschnitte bilden, für jeden Abschnitt eine Überschrift finden.</li>
<li><b>Kernaussagen</b> herausarbeiten: Was ist die Hauptaussage? Welche Argumente oder Belege werden genannt?</li>
<li><b>Einordnen und bewerten:</b> Ist der Text sachlich oder meinungsbetont? Welche Absicht hat der Autor? Was fehlt?</li>
</ol>
<div class="tip">In der KA: Belege deine Aussagen mit <b>Zeilenangaben</b> (z. B. „vgl. Z. 5–7“) oder Material-Angaben (M1, M2 …).</div>
<h3>Karikaturen auswerten</h3>
<ol><li><b>Beschreiben:</b> Was ist zu sehen (Personen, Gegenstände, Text)?</li><li><b>Deuten:</b> Wofür stehen die Figuren? Was ist die Aussage des Zeichners?</li><li><b>Beurteilen:</b> Trifft die Aussage zu? Ist die Kritik berechtigt?</li></ol>`
      },
      {
        title: 'So schreibst du eine Erörterung / ein Urteil (AFB III)',
        html: `
<ol>
<li><b>Einleitung:</b> Thema bzw. These nennen, kurz erklären, warum sie umstritten ist.</li>
<li><b>Pro-Argumente:</b> Behauptung → Begründung → <b>Beispiel</b> (am besten aus dem Material oder dem Unterricht).</li>
<li><b>Contra-Argumente:</b> genauso aufbauen.</li>
<li><b>Fazit / eigenes Urteil:</b> Abwägen („Zwar …, aber …“), klar Stellung nehmen, begründen. Bei <b>bewerten</b>: den <b>Wertmaßstab</b> nennen (z. B. Gerechtigkeit, Demokratie, Effizienz, Sicherheit, Freiheit).</li>
</ol>
<div class="example">„Zwar führt die starke Stellung des Bürgermeisters zu schnellen Entscheidungen, allerdings wird dadurch die Kontrolle durch den Gemeinderat geschwächt. Da mir eine demokratische Machtkontrolle wichtiger ist als Schnelligkeit, bewerte ich …“</div>
<div class="tip"><b>Nützliche Satzanfänge:</b> „Dafür spricht …“, „Ein weiteres Argument ist …“, „Dagegen lässt sich einwenden …“, „Abschließend komme ich zu dem Ergebnis …“, „Ausschlaggebend ist für mich …“</div>`
      }
    ],

    videos: [
      { id: '4tmKdkbZH3c', title: 'Operatoren einfach erklärt – Liste & Übersicht', desc: 'Überblick über die wichtigsten Operatoren.' },
      { id: 'du2KXmApPmY', title: 'Operatoren: Anforderungsbereich I und II', desc: 'Nennen, beschreiben, erklären, erläutern …' },
      { id: 'vjh54u6ZgEo', title: 'Beurteilen – Bewerten – Erörtern (AFB III)', desc: 'Der Unterschied und wie man eine Erörterung schreibt.' }
    ],

    tasks: [
      {
        title: 'Aufgabe 1: Operatoren zuordnen',
        src: 'Operatoren-Liste (Buch)',
        html: `<p>Ordne die Operatoren der Checkliste dem richtigen Anforderungsbereich zu: <i>beschreiben, darstellen, analysieren, bewerten, erläutern, untersuchen (analysieren), auswerten</i>. Was musst du jeweils tun?</p>`,
        solution: `<ul><li><span class="afb afb1">I</span> <b>beschreiben</b>: Sachverhalte schlüssig wiedergeben.</li>
<li><span class="afb afb2">II</span> <b>darstellen</b>: Sachverhalte strukturiert und zusammenhängend verdeutlichen.</li>
<li><span class="afb afb2">II</span> <b>analysieren / untersuchen / auswerten</b>: Materialien oder Sachverhalte systematisch untersuchen und auswerten.</li>
<li><span class="afb afb2">II</span> <b>erläutern</b>: Sachverhalte mit Beispielen oder Belegen veranschaulichen.</li>
<li><span class="afb afb3">III</span> <b>bewerten</b>: begründetes Werturteil mit offengelegten Wertmaßstäben.</li></ul>`
      },
      {
        title: 'Aufgabe 2: Den Radweg-Konflikt mit Kategorien untersuchen',
        src: 'Checkliste Methoden',
        html: `<p><b>Untersuche</b> den Konflikt um den Radweg an der Albert-Schweitzer-Schule (Buch S. 94/95) anhand der Kategorien Problem, Akteure, Interessen, Legitimation und Macht.</p>`,
        solution: `<p><b>Problem:</b> Vor der Schule fehlt ein Radweg, Schüler müssen auf die Straße ausweichen. Strittig ist der genaue <b>Streckenverlauf</b>.</p>
<p><b>Akteure:</b> Schüler, Eltern(vertreter), Schulleiter, Bürgermeister, Gemeinderat, Verkehrsausschuss, Bauamt (Verwaltung), evtl. Anwohner.</p>
<p><b>Interessen:</b> Schüler und Eltern wollen einen sicheren Schulweg. Anwohner wollen evtl. keine Parkplätze verlieren. Die Gemeinde will eine bezahlbare Lösung und Radfahren als umweltfreundliche Alternative fördern (Radwegeplan).</p>
<p><b>Legitimation:</b> Gemeinderat und Bürgermeister sind durch <b>Wahl</b> legitimiert, die Entscheidung zu treffen. Die Bauamtsleiterin ist durch <b>Ernennung</b> legitimiert, den Bau umzusetzen.</p>
<p><b>Macht:</b> Der <b>Gemeinderat</b> entscheidet per Abstimmung. Der <b>Bürgermeister</b> hat großen Einfluss als Vorsitzender und Chef der Verwaltung (an allen 3 Phasen beteiligt). Schüler und Eltern haben nur indirekt Macht (Gespräche, Öffentlichkeit, Wahlen).</p>`
      },
      {
        title: 'Aufgabe 3: erklären oder erläutern?',
        src: 'Übung',
        html: `<p>Beantworte beide Aufgaben kurz und achte auf den Unterschied:<br>a) <b>Erkläre</b>, warum der Bürgermeister eine starke Stellung hat.<br>b) <b>Erläutere</b>, warum der Bürgermeister eine starke Stellung hat.</p>`,
        solution: `<p>a) <b>Erklären:</b> Der Bürgermeister hat eine starke Stellung, weil er direkt gewählt wird und deshalb unabhängig vom Gemeinderat ist. Außerdem ist er gleichzeitig Vorsitzender des Gemeinderats, Chef der Verwaltung und Vertreter der Gemeinde.</p>
<p>b) <b>Erläutern</b> = erklären <b>+ Beispiel</b>: „… Das zeigt sich z. B. beim Radweg: Der Schulleiter wendet sich zuerst an ihn, er leitet die Sitzung, in der abgestimmt wird, und das Bauamt, das den Radweg baut, untersteht ihm.“</p>`
      },
      {
        title: 'Aufgabe 4: beurteilen oder bewerten?',
        src: 'Übung',
        html: `<p>Worin unterscheiden sich „beurteilen“ und „bewerten“? Formuliere zu „Ein Bürgerentscheid über das Jugendzentrum“ je einen Urteilssatz.</p>`,
        solution: `<p><b>Beurteilen</b> = <b>Sachurteil</b>: Ist etwas sachlich sinnvoll, wirksam, umsetzbar? Kriterien nennen.<br><i>„Ein Bürgerentscheid ist ein wirksames Mittel, weil sein Ergebnis verbindlich ist. Er ist aber sehr aufwendig.“</i></p>
<p><b>Bewerten</b> = <b>Werturteil</b>: Ist etwas gut, gerecht, wünschenswert? Eigene <b>Wertmaßstäbe</b> offenlegen.<br><i>„Ich finde einen Bürgerentscheid gut, weil mir die direkte Beteiligung aller Bürger (Demokratie) wichtiger ist als eine schnelle Entscheidung. Allerdings ist es ungerecht, dass die betroffenen Jugendlichen unter 16 nicht abstimmen dürfen.“</i></p>`
      }
    ],

    quiz: [
      { q: 'Zu welchem AFB gehört „<b>nennen</b>“?', a: ['I', 'II', 'III', 'keinem'], c: 0, e: 'Sachverhalte in knapper Form anführen.' },
      { q: 'Was bedeutet „<b>erläutern</b>“?', a: ['Sachverhalte mit Beispielen oder Belegen veranschaulichen', 'Sachverhalte in knapper Form anführen', 'Ein Werturteil fällen', 'Pro und Contra abwägen'], c: 0, e: 'Erläutern = erklären + Beispiel.' },
      { q: 'Was unterscheidet „<b>bewerten</b>“ von „beurteilen“?', a: ['Beim Bewerten legt man seine Wertmaßstäbe offen (Werturteil)', 'Bewerten ist AFB I', 'Beim Bewerten braucht man keine Begründung', 'Es gibt keinen Unterschied'], c: 0, e: 'Beurteilen = Sachurteil, bewerten = Werturteil.' },
      { q: 'Was verlangt „<b>erörtern</b>“?', a: ['Pro- und Kontra-Argumente abwägen und ein begründetes Ergebnis formulieren', 'Eine Grafik erstellen', 'Stichpunkte nennen', 'Einen Text abschreiben'], c: 0, e: 'AFB III.' },
      { q: 'Zu welchem AFB gehört „<b>analysieren</b>“?', a: ['II', 'I', 'III', 'keinem'], c: 0, e: 'Materialien systematisch untersuchen und auswerten.' },
      { q: 'Welche Kategorie fragt: „Was wollen die Beteiligten?“', a: ['Interessen', 'Akteure', 'Macht', 'Problem'], c: 0, e: 'Akteure = Wer? Interessen = Was wollen sie?' },
      { q: 'Was ist der erste Schritt beim Auswerten einer Karikatur?', a: ['Beschreiben, was zu sehen ist', 'Beurteilen', 'Den Zeichner googeln', 'Deuten'], c: 0, e: 'Beschreiben → Deuten → Beurteilen.' },
      { q: 'Was gehört in das <b>Fazit</b> einer Erörterung?', a: ['Ein abgewogenes, begründetes eigenes Urteil', 'Neue Argumente', 'Nur eine Wiederholung der Einleitung', 'Nichts, es ist optional'], c: 0, e: '„Zwar …, aber … Deshalb komme ich zu dem Ergebnis …“' },
      { q: 'Was verlangt „<b>darstellen</b>“?', a: ['Sachverhalte strukturiert und zusammenhängend verdeutlichen', 'Ein Bild malen', 'Eine Meinung äußern', 'Nur Stichpunkte'], c: 0, e: 'AFB II.' },
      { q: 'Was verlangt „<b>gestalten</b>“?', a: ['Ein Produkt rollen- bzw. adressatenorientiert herstellen (z. B. Flyer, Tweet)', 'Sachverhalte beschreiben', 'Ein Werturteil fällen', 'Ein Diagramm beschriften'], c: 0, e: 'AFB III, z. B. Flyer zum Bürgermeister.' }
    ]
  });
})();
