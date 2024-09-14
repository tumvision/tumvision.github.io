import React from "react";
import Container from "@/app/components/Container";
import Headline from "@/app/components/Headline";
import Text from "@/app/components/Text";
export default function PrivacyPolicy() {
  return (
    <Container>
      <Headline>Privacy Policy</Headline>
      <Text className="mt-2">
        Note: since we are based in germany the privacy notice will be provided
        in german language only.
      </Text>
      <Headline className="mt-5 text-xl">
        Datenschutzerklärung Einleitung und Überblick
      </Headline>
      <Text className="mt-2">
        Wir haben diese Datenschutzerklärung (Fassung 05.11.2023-312665174)
        verfasst, um Ihnen gemäß der Vorgaben der{" "}
        <a
          className="text-logo_main"
          href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=312665174#d1e2269-1-1"
        >
          Datenschutz-Grundverordnung (EU) 2016/679
        </a>{" "}
        und anwendbaren nationalen Gesetzen zu erklären, welche
        personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und die
        von uns beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten,
        zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie
        haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.
        Kurz gesagt: Wir informieren Sie umfassend über Daten, die wir über Sie
        verarbeiten.
      </Text>
      <Text className="mt-2">
        Datenschutzerklärungen klingen für gewöhnlich sehr technisch und
        verwenden juristische Fachbegriffe. Diese Datenschutzerklärung soll
        Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie
        möglich beschreiben. Soweit es der Transparenz förderlich ist, werden
        technische Begriffe leserfreundlich erklärt, Links zu weiterführenden
        Informationen geboten und Grafiken zum Einsatz gebracht. Wir informieren
        damit in klarer und einfacher Sprache, dass wir im Rahmen unserer
        Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn
        eine entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher
        nicht möglich, wenn man möglichst knappe, unklare und
        juristisch-technische Erklärungen abgibt, so wie sie im Internet oft
        Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die
        folgenden Erläuterungen interessant und informativ und vielleicht ist
        die eine oder andere Information dabei, die Sie noch nicht kannten. Wenn
        trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw.
        im Impressum genannte verantwortliche Stelle zu wenden, den vorhandenen
        Links zu folgen und sich weitere Informationen auf Drittseiten
        anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch im
        Impressum.
      </Text>
      <Headline className="mt-5 text-xl">Anwendungsbereich</Headline>
      <Text className="mt-2">
        Diese Datenschutzerklärung gilt für alle von uns im Unternehmen
        verarbeiteten personenbezogenen Daten und für alle personenbezogenen
        Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten.
        Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4
        Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische
        Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt
        dafür, dass wir unsere Dienstleistungen und Produkte anbieten und
        abrechnen können, sei es online oder offline. Der Anwendungsbereich
        dieser Datenschutzerklärung umfasst:
      </Text>
      <ul className="text-sm font-light text-logo_txt list-disc pl-8">
        <li>
          alle Onlineauftritte (Websites, Onlineshops), die wir betreiben Social
        </li>
        <li>Media Auftritte und E-Mail-Kommunikation </li>
        <li>mobile Apps für Smartphones und andere Geräte</li>
      </ul>
      <Text className="mt-2">
        Kurz gesagt: Die Datenschutzerklärung gilt für alle Bereiche, in denen
        personenbezogene Daten im Unternehmen über die genannten Kanäle
        strukturiert verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit
        Ihnen in Rechtsbeziehungen eintreten, werden wir Sie gegebenenfalls
        gesondert informieren.
      </Text>
      <Headline className="mt-5 text-xl">Rechtsgrundlagen</Headline>
      <Text className="mt-2">
        Datenschutzerklärung geben wir Ihnen transparente Informationen zu den
        rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der
        Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten
        zu verarbeiten. Was das EU-Recht betrifft, beziehen wir uns auf die
        VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom
        27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie
        selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht, unter
        https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679
        nachlesen.
      </Text>
      <Text className="mt-2">
        In der folgenden Wir verarbeiten Ihre Daten nur, wenn mindestens eine
        der folgenden Bedingungen zutrifft:
      </Text>
      <ol className="text-sm font-light text-logo_txt list-decimal pl-8">
        <li>
          Einwilligung (Artikel 6 Absatz 1 lit. a DSGVO): Sie haben uns Ihre
          Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten.
          Ein Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines
          Kontaktformulars.
        </li>
        <li>
          Vertrag (Artikel 6 Absatz 1 lit. b DSGVO): Um einen Vertrag oder
          vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir
          Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen
          abschließen, benötigen wir vorab personenbezogene Informationen.
        </li>
        <li>
          Rechtliche Verpflichtung (Artikel 6 Absatz 1 lit. c DSGVO): Wenn wir
          einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre
          Daten. Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen für
          die Buchhaltung aufzuheben. Diese enthalten in der Regel
          personenbezogene Daten.
        </li>
        <li>
          Berechtigte Interessen (Artikel 6 Absatz 1 lit. f DSGVO): Im Falle
          berechtigter Interessen, die Ihre Grundrechte nicht einschränken,
          behalten wir uns die Verarbeitung personenbezogener Daten vor. Wir
          müssen zum Beispiel gewisse Daten verarbeiten, um unsere Website
          sicher und wirtschaftlich effizient betreiben zu können. Diese
          Verarbeitung ist somit ein berechtigtes Interesse.
        </li>
      </ol>
      <Text className="mt-2">
        Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen
        Interesse und Ausübung öffentlicher Gewalt sowie dem Schutz
        lebenswichtiger Interessen treten bei uns in der Regel nicht auf. Soweit
        eine solche Rechtsgrundlage doch einschlägig sein sollte, wird diese an
        der entsprechenden Stelle ausgewiesen.
      </Text>
      <Text className="mt-2">
        Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:
      </Text>
      <ul className="text-sm font-light text-logo_txt list-disc pl-8">
        <li>
          In Österreich ist dies das Bundesgesetz zum Schutz natürlicher
          Personen bei der Verarbeitung personenbezogener Daten
          (Datenschutzgesetz), kurz DSG.
        </li>
        <li>In Deutschland gilt das Bundesdatenschutzgesetz, kurz BDSG.</li>
      </ul>
      <Text className="mt-2">
        Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen,
        informieren wir Sie in den folgenden Abschnitten darüber.{" "}
      </Text>
      <Headline className="mt-5 text-xl">
        Kontaktdaten des Verantwortlichen
      </Headline>
      <Text className="mt-2">
        Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung
        personenbezogener Daten haben, finden Sie nachfolgend die Kontaktdaten
        der verantwortlichen Person bzw. Stelle:
      </Text>
      <Text className="mt-2">
        Robin Borth Zenettistraße 28 80337 München, Deutschalnd
      </Text>
      <Text className="mt-2">Vertretungsberechtigt: Robin Borth</Text>
      <Text className="mt-2">
        Email:&nbsp;
        <a className="text-logo_main" href="mailto:robin@tumvision.club">
          robin@tumvision.club
        </a>
      </Text>
      <Text className="mt-2">Telefon: +49 152 25611147</Text>
      <Text className="mt-2">
        Impressum:&nbsp;
        <a className="text-logo_main" href="www.tumvision.club/imprint">
          www.tumvision.club/imprint
        </a>
      </Text>
      <Headline className="mt-5 text-xl">Speicherdauer</Headline>
      <Text className="mt-2">
        Dass wir personenbezogene Daten nur so lange speichern, wie es für die
        Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig
        ist, gilt als generelles Kriterium bei uns. Das bedeutet, dass wir
        personenbezogene Daten löschen, sobald der Grund für die
        Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir
        gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall des
        ursprüngliches Zwecks zu speichern, zum Beispiel zu Zwecken der
        Buchführung.
      </Text>
      <Text className="mt-2">
        Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur
        Datenverarbeitung widerrufen, werden die Daten so rasch wie möglich und
        soweit keine Pflicht zur Speicherung besteht, gelöscht.
      </Text>
      <Text className="mt-2">
        Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir
        Sie weiter unten, sofern wir weitere Informationen dazu haben.
      </Text>
      <Headline className="mt-5 text-xl">
        Rechte laut Datenschutz-Grundverordnung
      </Headline>
      <Text className="mt-2">
        Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden
        Rechte, die Ihnen zustehen, damit es zu einer fairen und transparenten
        Verarbeitung von Daten kommt:
      </Text>
      <ul className="text-sm font-light text-logo_txt list-disc pl-8">
        <li>
          Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir
          Daten von Ihnen verarbeiten. Sollte das zutreffen, haben Sie Recht
          darauf eine Kopie der Daten zu erhalten und die folgenden
          Informationen zu erfahren:
          <ul className="text-sm font-light text-logo_txt list-disc pl-8">
            <li>zu welchem Zweck wir die Verarbeitung durchführen;</li>
            <li>
              die Kategorien, also die Arten von Daten, die verarbeitet werden;
            </li>
            <li>
              wer diese Daten erhält und wenn die Daten an Drittländer
              übermittelt werden, wie die Sicherheit garantiert werden kann;
            </li>
            <li>wie lange die Daten gespeichert werden;</li>
            <li>
              das Bestehen des Rechts auf Berichtigung, Löschung oder
              Einschränkung der Verarbeitung und dem Widerspruchsrecht gegen die
              Verarbeitung;
            </li>
            <li>
              dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links
              zu diesen Behörden finden Sie weiter unten);
            </li>
            <li>
              die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben
              haben;
            </li>
            <li>
              ob Profiling durchgeführt wird, ob also Daten automatisch
              ausgewertet werden, um zu einem persönlichen Profil von Ihnen zu
              gelangen.
            </li>
          </ul>
        </li>
        <li>
          Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten,
          was bedeutet, dass wir Daten richtig stellen müssen, falls Sie Fehler
          finden.
        </li>
        <li>
          Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf
          Vergessenwerden“), was konkret bedeutet, dass Sie die Löschung Ihrer
          Daten verlangen dürfen.
        </li>
        <li>
          Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der
          Verarbeitung, was bedeutet, dass wir die Daten nur mehr speichern
          dürfen aber nicht weiter verwenden.
        </li>
        <li>
          Sie haben laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit,
          was bedeutet, dass wir Ihnen auf Anfrage Ihre Daten in einem gängigen
          Format zur Verfügung stellen.
        </li>
        <li>
          Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach
          Durchsetzung eine Änderung der Verarbeitung mit sich bringt.
          <ul className="text-sm font-light text-logo_txt list-disc pl-8">
            <li>
              Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e
              (öffentliches Interesse, Ausübung öffentlicher Gewalt) oder
              Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, können
              Sie gegen die Verarbeitung Widerspruch einlegen. Wir prüfen danach
              so rasch wie möglich, ob wir diesem Widerspruch rechtlich
              nachkommen können.
            </li>
            <li>
              Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie
              jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir
              dürfen Ihre Daten danach nicht mehr für Direktmarketing verwenden.
            </li>
            <li>
              Werden Daten verwendet, um Profiling zu betreiben, können Sie
              jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir
              dürfen Ihre Daten danach nicht mehr für Profiling verwenden.
            </li>
          </ul>
        </li>
        <li>
          Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer
          ausschließlich auf einer automatisierten Verarbeitung (zum Beispiel
          Profiling) beruhenden Entscheidung unterworfen zu werden.
        </li>
        <li>
          Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt,
          Sie können sich jederzeit bei der Datenschutzbehörde beschweren, wenn
          Sie der Meinung sind, dass die Datenverarbeitung von personenbezogenen
          Daten gegen die DSGVO verstößt.
        </li>
      </ul>
      <Text className="mt-2">
        Kurz gesagt: Sie haben Rechte - zögern Sie nicht, die oben gelistete
        verantwortliche Stelle bei uns zu kontaktieren!
      </Text>
      <Text className="mt-2">
        Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
        Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche in
        sonst einer Weise verletzt worden sind, können Sie sich bei der
        Aufsichtsbehörde beschweren. Diese ist für Österreich die
        Datenschutzbehörde, deren Website Sie unter https://www.dsb.gv.at/
        finden. In Deutschland gibt es für jedes Bundesland einen
        Datenschutzbeauftragten. Für nähere Informationen können Sie sich an die{" "}
        <a
          className="text-logo_main"
          href="https://www.bfdi.bund.de/DE/Home/home_node.html"
        >
          Bundesbeauftragte für den Datenschutz und die Informationsfreiheit
          (BfDI)
        </a>{" "}
        wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde
        zuständig:
      </Text>
      <Headline className="mt-5 text-xl">
        GitHub Pages Datenschutzerklärung
      </Headline>
      <Text className="mt-2">
        Wir verwenden für unsere Website den Webhosting-Dienst GitHub Pages.
        Dienstanbieter ist das amerikanische Unternehmen GitHub Inc., 88 Colin
        P. Kelly Jr. St.,San Francisco, CA 94107, USA.
      </Text>
      <Text className="mt-2">
        GitHub verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen
        darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein
        angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies
        kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der
        Datenverarbeitung einhergehen.
      </Text>
      <Text className="mt-2">
        Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in
        Drittstaaten (außerhalb der Europäischen Union, Island, Liechtenstein,
        Norwegen, also insbesondere in den USA) oder einer Datenweitergabe
        dorthin verwendet GitHub sogenannte Standardvertragsklauseln (= Art. 46.
        Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual
        Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen
        und sollen sicherstellen, dass Ihre Daten auch dann den europäischen
        Datenschutzstandards entsprechen, wenn diese in Drittländer (wie
        beispielsweise in die USA) überliefert und dort gespeichert werden.
        Durch diese Klauseln verpflichtet sich GitHub, bei der Verarbeitung
        Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten,
        selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet
        werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der
        EU-Kommission. Sie finden den Beschluss und die entsprechenden
        Standardvertragsklauseln u.a. hier:
        https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
      </Text>
      <Text className="mt-2">
        Die GitHub Datenverarbeitungsbedingungen (Processing Terms), welche den
        Standardvertragsklauseln entsprechen, finden Sie unter
        https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement.
      </Text>
      <Text className="mt-2">
        Mehr über die Daten, die durch die Verwendung von GitHub verarbeitet
        werden, erfahren Sie in der Privacy Policy auf
        https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement.
      </Text>
      <Text className="mt-2">Alle Texte sind urheberrechtlich geschützt.</Text>
      <Text className="mt-2">
        Quelle: Erstellt mit dem{" "}
        <a
          className="text-logo_main"
          href="https://www.adsimple.de/datenschutz-generator/"
        >
          Datenschutz Generator
        </a>{" "}
        von AdSimple
      </Text>
    </Container>
  );
}
