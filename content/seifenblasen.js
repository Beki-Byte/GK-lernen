window.TOPICS = window.TOPICS || [];
(function () {
  var matchFig = '<figure class="figure svgc"><svg viewBox="0 0 320 90" style="max-width:360px" role="img" aria-label="Streichholzmodell eines Seifenteilchens">' +
    '<rect x="20" y="36" width="210" height="18" rx="9" class="soft stroke" stroke-width="2"/>' +
    '<circle cx="250" cy="45" r="22" class="stroke" stroke-width="2" fill="#f0a04b"/>' +
    '<text x="250" y="51" font-size="20" text-anchor="middle" font-weight="700">−</text>' +
    '<text x="110" y="78" font-size="12" text-anchor="middle">Schwanz: unpolar · hydrophob</text>' +
    '<text x="250" y="16" font-size="12" text-anchor="middle">Kopf: polar · hydrophil</text>' +
    '</svg><figcaption>Streichholzmodell: langer unpolarer Schwanz (Alkylrest) und kurzer, negativ geladener Kopf (Carboxylat-Gruppe)</figcaption></figure>';

  // Seifenblase: Kreis-Ring mit Molekülen innen und außen
  function bubble() {
    var s = '<figure class="figure svgc"><svg viewBox="0 0 260 260" style="max-width:300px" role="img" aria-label="Aufbau einer Seifenblase">';
    s += '<circle cx="130" cy="130" r="88" fill="#6fb0e0" opacity=".25"/><circle cx="130" cy="130" r="72" class="soft"/>';
    s += '<text x="130" y="135" font-size="14" text-anchor="middle">Luft</text>';
    for (var i = 0; i < 28; i++) {
      var a = i / 28 * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a);
      // außen: Kopf bei r=90 (am Wasser), Schwanz nach außen bis r=112
      s += '<line x1="' + (130 + c * 92).toFixed(1) + '" y1="' + (130 + sn * 92).toFixed(1) + '" x2="' + (130 + c * 112).toFixed(1) + '" y2="' + (130 + sn * 112).toFixed(1) + '" class="stroke" stroke-width="2.5"/>';
      s += '<circle cx="' + (130 + c * 90).toFixed(1) + '" cy="' + (130 + sn * 90).toFixed(1) + '" r="3.6" fill="#d9822b"/>';
      // innen: Kopf bei r=70, Schwanz nach innen bis r=50
      s += '<line x1="' + (130 + c * 68).toFixed(1) + '" y1="' + (130 + sn * 68).toFixed(1) + '" x2="' + (130 + c * 50).toFixed(1) + '" y2="' + (130 + sn * 50).toFixed(1) + '" class="stroke" stroke-width="2.5"/>';
      s += '<circle cx="' + (130 + c * 70).toFixed(1) + '" cy="' + (130 + sn * 70).toFixed(1) + '" r="3.6" fill="#d9822b"/>';
    }
    s += '<text x="130" y="254" font-size="12" text-anchor="middle">außen: Luft</text>';
    s += '<text x="232" y="40" font-size="11" text-anchor="middle">Wasserfilm</text><line x1="214" y1="46" x2="196" y2="66" class="stroke" stroke-width="1"/>';
    s += '</svg><figcaption>Der dünne Wasserfilm (blau) ist innen und außen von Seifenteilchen umgeben. Köpfe zum Wasser, Schwänze zur Luft.</figcaption></figure>';
    return s;
  }

  function micelle() {
    var s = '<figure class="figure svgc"><svg viewBox="0 0 200 200" style="max-width:220px" role="img" aria-label="Mizelle">';
    s += '<circle cx="100" cy="100" r="22" fill="#8b6b3e" opacity=".55"/><text x="100" y="104" font-size="10" text-anchor="middle">Schmutz</text>';
    for (var i = 0; i < 14; i++) {
      var a = i / 14 * Math.PI * 2, c = Math.cos(a), sn = Math.sin(a);
      s += '<line x1="' + (100 + c * 24).toFixed(1) + '" y1="' + (100 + sn * 24).toFixed(1) + '" x2="' + (100 + c * 70).toFixed(1) + '" y2="' + (100 + sn * 70).toFixed(1) + '" class="stroke" stroke-width="4" stroke-linecap="round" opacity=".55"/>';
      s += '<circle cx="' + (100 + c * 78).toFixed(1) + '" cy="' + (100 + sn * 78).toFixed(1) + '" r="8" fill="#d9822b" class="stroke" stroke-width="1"/>';
    }
    s += '</svg><figcaption>Mizelle: Schwänze nach innen (zum Schmutz/Öl), Köpfe nach außen (zum Wasser)</figcaption></figure>';
    return s;
  }

  var water = '<figure class="figure svgc"><svg viewBox="0 0 200 140" style="max-width:220px" role="img" aria-label="Wassermolekül">' +
    '<circle cx="100" cy="55" r="30" fill="#6fb0e0" opacity=".5" class="stroke" stroke-width="2"/><text x="100" y="62" font-size="22" text-anchor="middle" font-weight="700">O</text>' +
    '<line x1="80" y1="78" x2="55" y2="102" class="stroke" stroke-width="3"/><line x1="120" y1="78" x2="145" y2="102" class="stroke" stroke-width="3"/>' +
    '<circle cx="48" cy="110" r="16" class="soft stroke" stroke-width="2"/><text x="48" y="116" font-size="15" text-anchor="middle">H</text>' +
    '<circle cx="152" cy="110" r="16" class="soft stroke" stroke-width="2"/><text x="152" y="116" font-size="15" text-anchor="middle">H</text>' +
    '<text x="100" y="18" font-size="15" text-anchor="middle">δ−</text><text x="20" y="96" font-size="15">δ+</text><text x="168" y="96" font-size="15">δ+</text>' +
    '</svg><figcaption>Wassermolekül: Der Sauerstoff ist leicht negativ (δ−), die Wasserstoffatome sind leicht positiv (δ+). Das Molekül ist <b>polar</b>.</figcaption></figure>';

  window.TOPICS.push({
    id: 'seifenblasen',
    order: 6,
    title: 'Seifenblasen & Oberflächenspannung',
    short: 'Wassermoleküle, Oberflächenspannung, Seife, Mizellen, Seifenblase',
    icon: '🫧',
    color: '#d6457a',
    ytSearch: 'Oberflächenspannung Seife Tenside einfach erklärt',

    learn: [
      {
        title: 'Wasser: polare Moleküle',
        html: `
${water}
<p>Wasser besteht aus Wassermolekülen (H₂O). Sauerstoff zieht die Elektronen stärker an als Wasserstoff, er hat die höhere <b>Elektronegativität</b>. Deshalb trägt das <b>Sauerstoffatom eine negative Teilladung (δ−)</b>, die <b>Wasserstoffatome eine positive Teilladung (δ+)</b>.</p>
<p>Zwischen den Wassermolekülen wirken deshalb <b>Wasserstoffbrückenbindungen</b>: Das δ+ eines Moleküls zieht das δ− eines anderen an. So <b>ziehen sich die Wassermoleküle gegenseitig an</b>.</p>`
      },
      {
        title: 'Oberflächenspannung',
        html: `
<div class="two-col">
<div>
<p><b>Im Inneren</b> eines Wassertropfens wird ein Molekül von den umgebenden Teilchen <b>in alle Richtungen gleich stark</b> angezogen. Die Kräfte <b>heben sich gegenseitig auf</b>.</p>
<p><b>An der Oberfläche</b> hat ein Molekül <b>keine Nachbarn nach oben</b>. Es wird nur von der Seite und von unten (nach innen) angezogen. Die Kräfte gleichen sich <b>nicht</b> aus, und das Molekül wird <b>nach innen gezogen</b>.</p>
<p>Die Moleküle an der Oberfläche rücken dadurch <b>dichter zusammen</b>, die Anziehungskräfte wirken hier besonders stark. So entsteht die <b>Oberflächenspannung</b>: eine Art feste, elastische „Haut“ auf dem Wasser, ähnlich der Haut auf frisch gekochtem Pudding.</p>
</div>
<figure class="figure svgc"><svg viewBox="0 0 240 150" role="img" aria-label="Kräfte an der Oberfläche und im Inneren">
<defs><marker id="oA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="#c0392b"/></marker></defs>
<rect x="10" y="40" width="220" height="100" fill="#6fb0e0" opacity=".2"/>
<line x1="10" y1="40" x2="230" y2="40" class="stroke steel" stroke-width="2"/>
<circle cx="70" cy="44" r="9" class="soft stroke" stroke-width="1.5"/>
<line x1="70" y1="54" x2="70" y2="78" stroke="#c0392b" stroke-width="2.5" marker-end="url(#oA)"/>
<line x1="60" y1="44" x2="40" y2="44" stroke="#c0392b" stroke-width="2" marker-end="url(#oA)"/>
<line x1="80" y1="44" x2="100" y2="44" stroke="#c0392b" stroke-width="2" marker-end="url(#oA)"/>
<circle cx="170" cy="100" r="9" class="soft stroke" stroke-width="1.5"/>
<g stroke="#c0392b" stroke-width="2"><line x1="170" y1="90" x2="170" y2="72" marker-end="url(#oA)"/><line x1="170" y1="110" x2="170" y2="128" marker-end="url(#oA)"/><line x1="160" y1="100" x2="142" y2="100" marker-end="url(#oA)"/><line x1="180" y1="100" x2="198" y2="100" marker-end="url(#oA)"/></g>
<text x="70" y="24" font-size="11" text-anchor="middle">Oberfläche: Zug nach innen</text>
<text x="170" y="146" font-size="11" text-anchor="middle">Innen: Kräfte heben sich auf</text>
</svg></figure>
</div>
<div class="merke">
• Tropfen sind <b>kugelrund</b>: Alle äußeren Moleküle werden gleich stark nach innen gezogen. Die Kugel hat bei gegebenem Volumen die <b>kleinste Oberfläche</b>.<br>
• <b>Wasserberg</b>: Ein Glas kann man über den Rand hinaus füllen, weil die Oberflächenspannung das Wasser zusammenhält.<br>
• Ein Wasserläufer oder eine Büroklammer kann auf dem Wasser liegen.
</div>`
      },
      {
        title: 'Seifenteilchen: hydrophil und hydrophob',
        html: `
${matchFig}
<p>Ein Seifenteilchen besteht aus einem <b>langen, unpolaren</b> Teil und einem <b>kurzen, polaren</b> Teil:</p>
<div class="table-wrap"><table>
<tr><th></th><th>Kopf</th><th>Schwanz</th></tr>
<tr><td>Ladung</td><td><b>negativ geladen</b>, polar</td><td><b>ungeladen</b>, unpolar</td></tr>
<tr><td>Verhalten zu Wasser</td><td>löst sich gut in Wasser: <b>hydrophil</b> = wasserliebend</td><td>löst sich nicht in Wasser: <b>hydrophob</b> = wassermeidend</td></tr>
<tr><td>Chemischer Name</td><td>Carboxylat-Gruppe</td><td>Alkylrest</td></tr>
</table></div>
<p>Allein der Kopf sorgt dafür, dass sich das gesamte Seifenteilchen in Wasser löst.</p>
<div class="merke"><b>Löslichkeits-Regel:</b> Polare Stoffe lösen sich in polaren Stoffen, unpolare Stoffe in unpolaren. („Gleiches löst sich in Gleichem.“)</div>
<p>Gibt man Seife in Wasser, richtet sich der polare Kopf zum Wasser hin aus, der unpolare Schwanz wendet sich vom Wasser ab. Die Seifenteilchen stehen also <b>senkrecht nebeneinander</b> auf der Wasseroberfläche. Es bildet sich eine <b>monomolekulare Schicht</b> (eine Schicht, die nur ein Molekül dick ist).</p>`
      },
      {
        title: 'Seife senkt die Oberflächenspannung',
        html: `
<p>Gibt man Seife zu einem Wasserberg, bricht er <b>augenblicklich</b> zusammen. Warum?</p>
<p>Die Seifenteilchen <b>schieben sich zwischen die Wassermoleküle</b> an der Oberfläche. Dadurch werden die Abstände größer, und die Anziehungskräfte (<b>Wasserstoffbrückenbindungen</b>) der Wasserteilchen untereinander werden <b>schwächer</b>. Die <b>Oberflächenspannung sinkt</b>.</p>
<div class="example">Vergleich: Zwei Magnete ziehen sich weniger stark an, sobald man ihren Abstand vergrößert.</div>
<p>Die Oberflächenspannung von Seifenwasser ist nur etwa <b>ein Drittel</b> so groß wie die von reinem Wasser.</p>`
      },
      {
        title: 'Mizellen und Waschwirkung',
        html: `
<div class="two-col">
<div>
<p>Erst wenn die Seifenteilchen die <b>gesamte Wasseroberfläche</b> besetzt haben und dort kein Platz mehr ist, bilden sie im Wasser <b>Mizellen</b>. So nennt man die Anordnung von Seifenteilchen in <b>„Kugeln“</b>: Alle <b>unpolaren Schwänze zeigen nach innen</b>, alle <b>polaren Köpfe nach außen</b>. Die Mizelle ist also außen polar und damit <b>in Wasser löslich</b>.</p>
<h3>Waschen</h3>
<p><b>Öl ist nicht in Wasser löslich</b>, sonst könnte man ölige Finger einfach mit Wasser abwaschen. Öliger Schmutz ist nämlich <b>unpolar (hydrophob)</b>.</p>
<p>Nach der Löslichkeits-Regel lagert sich der <b>unpolare Schwanz</b> eines Seifenteilchens an den Schmutz an. Gleichzeitig ragt der <b>polare Kopf</b> in das Wasser. Viele Seifenteilchen umhüllen das Schmutzteilchen und geben ihm eine <b>neue polare Oberfläche</b>. So lösen sich auch unpolare Stoffe wie Schmutz in Wasser und werden weggespült.</p>
</div>
${micelle()}
</div>`
      },
      {
        title: 'Aufbau einer Seifenblase',
        html: `
<div class="two-col">
<div>
<p>Seifenblasen bestehen aus einem <b>dünnen Wasserfilm</b>, an dem sich <b>innen und außen</b> Seifenmoleküle anlagern. Die <b>hydrophile</b> Carboxylat-Gruppe (Kopf) ist dem Wasser <b>zugewandt</b>, der <b>hydrophobe</b> Alkylrest (Schwanz) ist dem Wasser <b>abgewandt</b> und zeigt zur Luft.</p>
<p>Der Aufbau ähnelt dem von <b>Zellmembranen</b>. Der Unterschied: Bei der Seifenblase befindet sich das <b>Wasser innerhalb</b> der Membran, nicht außerhalb.</p>
</div>
${bubble()}
</div>
<h3>Das Seifenblasen-Paradox</h3>
<p>Seifenblasen gibt es <b>wegen</b> der Oberflächenspannung: Sie sorgt für ein <b>elastisches Verhalten</b> der Oberfläche. Oft wird angenommen, dass Seife die Oberflächenspannung <b>erhöht</b>. Tatsächlich ist es <b>umgekehrt</b>: Seife <b>verringert</b> sie, hebt sie aber <b>nicht vollständig</b> auf.</p>
<ul>
<li>Mit <b>reinem Wasser</b> ist es schwierig, Seifenblasen herzustellen. Die Oberflächenspannung ist <b>zu hoch</b>, deshalb <b>platzt die Blase sofort</b>.</li>
<li>Die Seifenmoleküle <b>stabilisieren</b> den Wasserfilm auf beiden Seiten. Die verbleibende Oberflächenspannung reicht für eine elastische Haut.</li>
<li>Zusätzlich <b>verlangsamt die Seife die Verdunstung</b>, deshalb halten die Blasen länger.</li>
</ul>
<div class="merke">Die <b>Kugelform</b> der Seifenblase kommt ebenfalls von der Oberflächenspannung: Sie zwingt die Blase, ihre Oberfläche zu <b>minimieren</b>. Unter allen Formen hat die Kugel bei gegebenem Volumen die <b>kleinste Oberfläche</b>. Ohne Schwerkraft und Luftreibung wären alle Blasen ideale Kugeln.</div>`
      },
      {
        title: 'Tipps für Seifenblasen-Lauge',
        html: `
<ul>
<li><b>Oberflächenspannung verringern:</b> Spülmittel, Flüssigseife oder Babyshampoo. Reinere Spülmittel ohne Parfüm oder andere Zusatzstoffe funktionieren möglicherweise besser.</li>
<li><b>Mischung verdicken:</b> meistens mit <b>Glycerin</b> (Apotheke). Es macht die Blasen zusätzlich bunter. Zucker, Puderzucker, Maissirup oder sogar Zahnpasta haben einen ähnlichen Effekt (Zucker am besten in heißem Wasser auflösen). Aber <b>nicht zu viel</b>! Das Verdicken verhindert, dass das Wasser in der Blase zu schnell verdunstet und die Blasenhaut zu dünn wird. Zu dünne Blasen zeigen kaum Farben und platzen schnell.</li>
<li><b>Destilliertes Wasser:</b> Leitungswasser enthält <b>Kalk</b>, und Kalk bindet Seife. Deshalb ist destilliertes Wasser besser.</li>
</ul>`
      }
    ],

    videos: [
      { id: 'ZJ-CHoJc_UI', title: 'Oberflächenspannung des Wassers', desc: 'Vom Wassermolekül zur Oberflächenspannung.' },
      { id: 'Ogsqe99sWM8', title: 'Warum kann ein Wasserläufer auf dem Wasser laufen?', desc: 'Wasserstoffbrücken und Oberflächenspannung.' },
      { id: 'lO_NSF1PeVI', title: 'Was sind Wasserstoffbrückenbindungen? (musstewissen Chemie)', desc: 'Polare Moleküle, δ+ und δ−.' },
      { id: '48qhX2J7gUE', title: 'Seifen und Tenside: Struktur und Eigenschaften', desc: 'Hydrophil, hydrophob, Mizellen.' },
      { id: 'qhC2JmiIpXQ', title: 'Tenside in 5 Minuten', desc: 'Warum Seife Fett löst (Waschwirkung).' }
    ],

    tasks: [
      {
        title: 'Frage 1: Aufbau eines Seifenteilchens',
        src: '10 Fragen – 1',
        html: `<p>Erkläre den Aufbau eines Seifenteilchens und seine besondere Eigenschaft in Bezug auf Wasser.</p>`,
        solution: `<p>Ein Seifenteilchen besteht aus einem <b>langen, ungeladenen, unpolaren Schwanz</b> (Alkylrest) und einem <b>kurzen, negativ geladenen, polaren Kopf</b> (Carboxylat-Gruppe), wie ein Streichholz. Der Schwanz löst sich nicht in Wasser, er ist <b>hydrophob</b> (wassermeidend). Der Kopf löst sich gut in Wasser, er ist <b>hydrophil</b> (wasserliebend). Das Besondere: Ein Seifenteilchen hat also <b>beide</b> Eigenschaften. Es kann sich mit Wasser <b>und</b> mit unpolaren Stoffen wie Fett verbinden.</p>`
      },
      {
        title: 'Frage 2: Öl und Seife',
        src: '10 Fragen – 2',
        html: `<p>Erkläre, warum sich Öl nicht einfach in Wasser löst, aber mithilfe von Seife doch entfernt werden kann.</p>`,
        solution: `<p>Öl ist <b>unpolar</b> (hydrophob), Wasser ist <b>polar</b>. Nach der Löslichkeits-Regel lösen sich polare Stoffe nur in polaren und unpolare nur in unpolaren. Deshalb löst sich Öl nicht in Wasser.</p>
<p>Gibt man Seife dazu, lagern sich die <b>unpolaren Schwänze</b> der Seifenteilchen an das Öl an, während die <b>polaren Köpfe</b> ins Wasser ragen. Viele Seifenteilchen umhüllen das Öltröpfchen und überziehen es mit einer <b>neuen, polaren Oberfläche</b>. So kann es sich im Wasser lösen und wird weggespült.</p>`
      },
      {
        title: 'Frage 3: Mizellen',
        src: '10 Fragen – 3',
        html: `<p>Beschreibe, wie Mizellen entstehen und welche Rolle sie beim Waschvorgang spielen.</p>`,
        solution: `<p>Gibt man Seife ins Wasser, besetzen die Seifenteilchen zuerst die <b>Wasseroberfläche</b> (Köpfe ins Wasser, Schwänze nach oben). Ist die gesamte Oberfläche besetzt und dort kein Platz mehr, lagern sich die Seifenteilchen im Wasser zu <b>Kugeln</b> zusammen, den <b>Mizellen</b>. Dabei zeigen die <b>unpolaren Schwänze nach innen</b> und die <b>polaren Köpfe nach außen</b>. Die Mizelle ist außen polar und daher wasserlöslich.</p>
<p>Beim Waschen schließen die Mizellen <b>Schmutz- und Fettteilchen in ihrem unpolaren Inneren ein</b>. Durch die polare Außenseite können sie im Wasser gelöst und weggespült werden.</p>`
      },
      {
        title: 'Frage 4: Moleküle an der Oberfläche',
        src: '10 Fragen – 4',
        html: `<p>Erkläre, warum Wassermoleküle an der Oberfläche eines Tropfens anderen Kräften ausgesetzt sind als im Inneren.</p>`,
        solution: `<p>Ein Wassermolekül <b>im Inneren</b> wird von allen umgebenden Molekülen <b>in alle Richtungen gleich stark</b> angezogen. Die Kräfte heben sich gegenseitig auf.</p>
<p>Ein Molekül <b>an der Oberfläche</b> hat <b>keine Nachbarn nach oben (außen)</b>. Es wird nur von den seitlichen und den darunterliegenden Molekülen angezogen. Die Kräfte gleichen sich nicht aus, und es wirkt eine Kraft <b>nach innen</b>.</p>`
      },
      {
        title: 'Frage 5: Kräfte und Oberflächenspannung',
        src: '10 Fragen – 5',
        html: `<p>Beschreibe, wie die Kräfte zwischen Wassermolekülen für die Oberflächenspannung sorgen.</p>`,
        solution: `<p>Wassermoleküle sind <b>polar</b> (O: δ−, H: δ+). Zwischen ihnen wirken <b>Wasserstoffbrückenbindungen</b>, die die Moleküle gegenseitig anziehen. An der Oberfläche werden die Moleküle nach innen gezogen und <b>rücken dichter zusammen</b>, sodass die Anziehungskräfte dort besonders stark wirken. Dadurch entsteht eine Art elastische <b>„Haut“</b> auf dem Wasser. Das ist die <b>Oberflächenspannung</b>.</p>`
      },
      {
        title: 'Frage 6: Der Wasserberg',
        src: '10 Fragen – 6',
        html: `<p>Erkläre, warum ein mit Wasser gefülltes Glas über den Rand hinaus einen Wasserberg bilden kann, dieser aber durch Seife zusammenbricht.</p>`,
        solution: `<p>Durch die <b>Oberflächenspannung</b> halten die Wassermoleküle an der Oberfläche stark zusammen (Wasserstoffbrückenbindungen). Diese „Haut“ hält das Wasser über den Rand hinaus als <b>gewölbte Oberfläche</b> zusammen.</p>
<p>Gibt man Seife dazu, <b>schieben sich die Seifenteilchen zwischen die Wassermoleküle</b> an der Oberfläche. Der Abstand wird größer, die Wasserstoffbrückenbindungen werden <b>schwächer</b>, und die <b>Oberflächenspannung sinkt</b>. Die „Haut“ kann das Wasser nicht mehr halten, und der Wasserberg bricht zusammen.</p>`
      },
      {
        title: 'Frage 7: Polar und unpolar verbinden',
        src: '10 Fragen – 7',
        html: `<p>Beschreibe, warum Seife sowohl polare als auch unpolare Stoffe miteinander verbinden kann.</p>`,
        solution: `<p>Seifenteilchen besitzen <b>beide</b> Teile: einen <b>polaren, hydrophilen Kopf</b>, der sich nach der Löslichkeits-Regel mit polarem <b>Wasser</b> verbindet, und einen <b>unpolaren, hydrophoben Schwanz</b>, der sich mit unpolaren Stoffen wie <b>Fett oder Öl</b> verbindet. So bilden sie eine „Brücke“ zwischen Wasser und Fett.</p>`
      },
      {
        title: 'Frage 8: Seife und Wassermoleküle',
        src: '10 Fragen – 8',
        html: `<p>Erkläre, wie die Seife die Anordnung der Wassermoleküle verändert und dadurch die Oberflächenspannung beeinflusst.</p>`,
        solution: `<p>Die Seifenteilchen lagern sich an der Wasseroberfläche an und <b>schieben sich zwischen die Wassermoleküle</b>. Die Wassermoleküle sind dadurch <b>weiter voneinander entfernt</b>, und die <b>Wasserstoffbrückenbindungen</b> zwischen ihnen werden unterbrochen bzw. geschwächt (wie bei zwei Magneten, die man auseinanderzieht). Die Anziehungskräfte an der Oberfläche werden kleiner, und die <b>Oberflächenspannung sinkt</b> (auf etwa ein Drittel).</p>`
      },
      {
        title: 'Frage 9: Waschen und Oberflächenspannung',
        src: '10 Fragen – 9',
        html: `<p>Beschreibe den Zusammenhang zwischen der Wirkung von Seife beim Waschen und ihrer Auswirkung auf die Oberflächenspannung.</p>`,
        solution: `<p>Beide Effekte beruhen darauf, dass Seifenteilchen <b>polare und unpolare Eigenschaften</b> haben. Mit dem polaren Kopf zum Wasser und dem unpolaren Schwanz weg vom Wasser lagern sie sich an der Oberfläche an. Sie schieben sich zwischen die Wassermoleküle und <b>senken so die Oberflächenspannung</b>. Dadurch kann das Wasser die Wäsche besser benetzen und in die Fasern eindringen. Gleichzeitig lagern sich die unpolaren Schwänze an <b>Fett und Schmutz</b> an, umhüllen ihn (Mizellen) und machen ihn so <b>wasserlöslich</b>.</p>`
      },
      {
        title: 'Frage 10: Kugelrunde Tropfen',
        src: '10 Fragen – 10',
        html: `<p>Erkläre, warum ein Wassertropfen eine kugelrunde Form hat.</p>`,
        solution: `<p>Durch die <b>Oberflächenspannung</b> werden alle Wassermoleküle an der Oberfläche <b>gleich stark nach innen gezogen</b>. Der Tropfen versucht deshalb, eine <b>möglichst kleine Oberfläche</b> zu bilden. Von allen Formen hat die <b>Kugel</b> bei gleichem Volumen die kleinste Oberfläche, deshalb ist der Tropfen kugelrund.</p>`
      },
      {
        title: 'Aufgabe: Wie kann eine Seifenblase existieren?',
        src: 'Heft – Seifenblasen, ein Paradox?',
        html: `<p>Erkläre, wie eine Seifenblase existieren kann, wenn Seife doch die Oberflächenspannung „bricht“.</p>`,
        solution: `<p>Seife <b>verringert</b> die Oberflächenspannung von Wasser, hebt sie aber <b>nicht vollständig auf</b>. Bei reinem Wasser wäre die Oberflächenspannung <b>zu hoch</b>, und eine Blase würde sofort platzen.</p>
<p>Die Seifenmoleküle lagern sich <b>auf beiden Seiten</b> des dünnen Wasserfilms an: Die hydrophilen Köpfe zeigen zum Wasser, die hydrophoben Schwänze nach außen zur Luft. Dadurch wird der Film <b>stabilisiert</b> und elastisch, und die Seife <b>verlangsamt die Verdunstung</b>. Die verbleibende Oberflächenspannung zieht die Blase zusammen, sodass sie <b>kugelförmig</b> wird.</p>`
      },
      {
        title: 'Aufgabe: Seifenblasen-Lauge',
        src: 'Aufbau einer Seifenblase – Tipps',
        html: `<p>Du sollst für die Seifenblasenmaschine eine gute Lauge herstellen. Welche drei Tipps beachtest du? Begründe jeweils.</p>`,
        solution: `<ol><li><b>Spülmittel/Seife</b> zugeben → verringert die Oberflächenspannung, sonst platzen die Blasen sofort.</li>
<li><b>Glycerin</b> (oder Zucker) in Maßen → verdickt die Lauge. Das Wasser verdunstet langsamer, die Haut wird nicht zu dünn, und die Blasen werden bunter und halten länger. Nicht zu viel, sonst wird die Lauge zu dick.</li>
<li><b>Destilliertes Wasser</b> → Leitungswasser enthält Kalk, und Kalk bindet Seife.</li></ol>`
      }
    ],

    quiz: [
      { q: 'Welcher Teil eines Seifenteilchens ist <b>hydrophil</b>?', a: ['Der polare, negativ geladene Kopf', 'Der unpolare Schwanz', 'Beide', 'Keiner'], c: 0, e: 'hydrophil = wasserliebend = Kopf (Carboxylat-Gruppe).' },
      { q: 'Was bedeutet <b>hydrophob</b>?', a: ['wassermeidend', 'wasserliebend', 'fettmeidend', 'elektrisch geladen'], c: 0, e: 'hydro = Wasser, phob = Angst/meidend.' },
      { q: 'Wie lautet die <b>Löslichkeits-Regel</b>?', a: ['Polare Stoffe lösen sich in polaren, unpolare in unpolaren', 'Alles löst sich in Wasser', 'Polare Stoffe lösen sich in unpolaren', 'Nur Salze lösen sich'], c: 0, e: '„Gleiches löst sich in Gleichem.“' },
      { q: 'Was macht Seife mit der <b>Oberflächenspannung</b> von Wasser?', a: ['Sie verringert sie (auf ca. ein Drittel)', 'Sie erhöht sie', 'Sie hebt sie vollständig auf', 'Gar nichts'], c: 0, e: 'Ein häufiger Irrtum ist, dass Seife sie erhöht. Tatsächlich verringert sie sie, aber nicht vollständig.' },
      { q: 'Warum platzt eine Blase aus <b>reinem Wasser</b> sofort?', a: ['Die Oberflächenspannung ist zu hoch', 'Die Oberflächenspannung ist zu niedrig', 'Wasser ist zu schwer', 'Es fehlt Luft'], c: 0, e: 'So steht es auf dem Blatt: Bei reinem Wasser ist die Oberflächenspannung zu hoch.' },
      { q: 'Wie sind die Seifenteilchen in einer <b>Seifenblase</b> angeordnet?', a: ['Köpfe zum Wasserfilm, Schwänze zur Luft (innen und außen)', 'Schwänze zum Wasser, Köpfe zur Luft', 'Nur außen', 'Als Mizellen im Inneren'], c: 0, e: 'Der Wasserfilm liegt zwischen zwei Seifenschichten. Anders als bei der Zellmembran ist hier das Wasser innen.' },
      { q: 'Wo zeigen die Schwänze in einer <b>Mizelle</b> hin?', a: ['Nach innen', 'Nach außen', 'Zur Wasseroberfläche', 'In alle Richtungen'], c: 0, e: 'Innen unpolar (Platz für Schmutz), außen polar (wasserlöslich).' },
      { q: 'Welche Ladung hat das <b>Sauerstoffatom</b> im Wassermolekül?', a: ['Negative Teilladung δ−', 'Positive Teilladung δ+', 'Keine Ladung', 'Volle negative Ladung'], c: 0, e: 'Sauerstoff hat die höhere Elektronegativität.' },
      { q: 'Welche Bindungen wirken zwischen Wassermolekülen?', a: ['Wasserstoffbrückenbindungen', 'Metallbindungen', 'Ionenbindungen', 'Magnetkräfte'], c: 0, e: 'Sie sorgen für die Anziehung der Moleküle untereinander.' },
      { q: 'Warum sind Tropfen und Seifenblasen <b>kugelförmig</b>?', a: ['Die Kugel hat bei gleichem Volumen die kleinste Oberfläche', 'Wegen der Schwerkraft', 'Wegen des Glycerins', 'Zufall'], c: 0, e: 'Die Oberflächenspannung minimiert die Oberfläche.' },
      { q: 'Warum ist <b>destilliertes Wasser</b> besser für Seifenblasen?', a: ['Leitungswasser enthält Kalk, und Kalk bindet Seife', 'Es ist schwerer', 'Es hat mehr Oberflächenspannung', 'Es ist wärmer'], c: 0, e: 'Kalk „verbraucht“ Seife.' },
      { q: 'Wofür gibt man <b>Glycerin</b> in die Lauge?', a: ['Zum Verdicken: Die Blase verdunstet langsamer und wird bunter', 'Damit die Oberflächenspannung steigt', 'Damit es besser riecht', 'Als Ersatz für Seife'], c: 0, e: 'Aber nicht zu viel, sonst wird die Lauge zu dick.' },
      { q: 'Ein Wassermolekül an der Oberfläche wird …', a: ['… nach innen gezogen, weil oben Nachbarn fehlen', '… nach oben gezogen', '… in alle Richtungen gleich gezogen', '… gar nicht angezogen'], c: 0, e: 'Die Kräfte gleichen sich nur im Inneren aus.' },
      { q: 'Was bedeutet <b>monomolekulare Schicht</b>?', a: ['Eine Schicht, die nur ein Molekül dick ist', 'Eine Schicht aus Mizellen', 'Eine Schicht aus Öl', 'Eine dicke Schaumschicht'], c: 0, e: 'Die Seifenteilchen stehen senkrecht nebeneinander auf dem Wasser.' }
    ]
  });
})();
