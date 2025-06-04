import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Datenschutzerklärung
            </h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Verantwortlicher
                </h2>
                <div className="text-gray-700">
                  <p>Ali Qureshi</p>
                  <p>Leistikowweg 34</p>
                  <p>ali.qureshi.1998@outlook.de</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Erhebung und Verarbeitung personenbezogener Daten
                </h2>
                <p className="text-gray-700 mb-4">
                  Wenn du uns über das Kontaktformular auf dieser Website eine Nachricht sendest, werden folgende personenbezogene Daten erhoben:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Vorname und Name</li>
                  <li>E-Mail-Adresse</li>
                </ul>
                <p className="text-gray-700">
                  Diese Daten benötigen wir ausschließlich, um deine Anfrage zu bearbeiten und mit dir in Kontakt treten zu können.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Rechtsgrundlage der Verarbeitung
                </h2>
                <p className="text-gray-700">
                  Die Verarbeitung deiner Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen), da die Daten für die Bearbeitung deiner Anfrage erforderlich sind.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Speicherdauer
                </h2>
                <p className="text-gray-700">
                  Deine Daten werden nur so lange gespeichert, wie es zur Bearbeitung deiner Anfrage erforderlich ist oder gesetzliche Aufbewahrungspflichten dies verlangen. Nach Abschluss der Bearbeitung werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Weitergabe an Dritte
                </h2>
                <p className="text-gray-700">
                  Eine Weitergabe deiner Daten an Dritte findet nicht statt, es sei denn, wir sind gesetzlich dazu verpflichtet oder du hast ausdrücklich eingewilligt.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Deine Rechte
                </h2>
                <p className="text-gray-700">
                  Du hast das Recht, jederzeit Auskunft über die zu deiner Person gespeicherten Daten zu erhalten sowie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Außerdem kannst du der Verarbeitung deiner Daten widersprechen. Wende dich hierzu bitte an die oben genannten Kontaktdaten.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Sicherheit
                </h2>
                <p className="text-gray-700">
                  Wir verwenden technische und organisatorische Sicherheitsmaßnahmen, um deine Daten vor unbefugtem Zugriff zu schützen (z. B. TLS/SSL-Verschlüsselung auf der Website).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Widerspruch gegen Werbe-E-Mails
                </h2>
                <p className="text-gray-700">
                  Die Nutzung der im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung wird hiermit ausdrücklich widersprochen.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <a
                href="/"
                className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-200"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Zurück zur Startseite
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}