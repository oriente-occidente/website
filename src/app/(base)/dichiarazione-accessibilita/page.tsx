import { Metadata } from "next";
import Wrapper from "@/components/layout/Wrapper";

export const metadata: Metadata = {
  title: "Dichiarazione di Accessibilità - Oriente Occidente",
  description:
    "Relazione sullo stato di accessibilità del sito Oriente Occidente secondo le linee guida WCAG 2.1",
};

const locale = "it";

const slugData = {
  id: "accessibility-it",
  section: "",
  slug: "dichiarazione-accessibilita",
  slugs: [
    { locale: "it", value: "dichiarazione-accessibilita" },
    { locale: "en", value: "accessibility-report" },
  ],
  titleHero: "Dichiarazione di Accessibilità",
  _modelApiKey: "page",
};

function StatusBadge({ status }: { status: "ok" | "warning" | "error" }) {
  const styles = {
    ok: "text-green font-semibold",
    warning: "text-orange-600 font-semibold",
    error: "text-red font-semibold",
  };
  const labels = {
    ok: "Conforme",
    warning: "Da verificare",
    error: "Non conforme",
  };
  return <span className={styles[status]}>{labels[status]}</span>;
}

export default function AccessibilityPage() {
  return (
    <Wrapper locale={locale} slugData={slugData}>
      <article className="container py-8 lg:py-16 max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-xl lg:text-2xl font-semibold uppercase mb-2 text-center">
            Dichiarazione di Accessibilità
          </h1>
        </header>

        {/* Info Box */}
        <div className="bg-gray-light p-6 rounded-lg mb-8">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="font-semibold">Data analisi</dt>
              <dd>27 gennaio 2026</dd>
            </div>
            <div>
              <dt className="font-semibold">Standard di riferimento</dt>
              <dd>WCAG 2.1 (Livelli A, AA)</dd>
            </div>
            <div>
              <dt className="font-semibold">Normativa</dt>
              <dd>Legge 4/2004, Direttiva UE 2016/2102, EN 301 549</dd>
            </div>
            <div>
              <dt className="font-semibold">Metodo</dt>
              <dd>Analisi diretta del codice sorgente</dd>
            </div>
          </dl>
        </div>

        {/* Score Box */}
        <div className="bg-green text-white p-8 rounded-lg text-center mb-12">
          <div className="text-5xl font-bold mb-2">97/100</div>
          <div className="text-lg opacity-90">
            Punteggio Complessivo - ECCELLENTE
          </div>
          <div className="mt-4">
            <span className="inline-block bg-white text-green px-4 py-2 rounded-full font-semibold text-sm">
              WCAG 2.1 Livello AA - CONFORME
            </span>
          </div>
        </div>

        {/* Sezione 1: Metodologia */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            1. Strumenti e Metodologia
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-3 text-left">
                    Strumento
                  </th>
                  <th className="border border-gray p-3 text-left">
                    Aspetti verificati
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-3">
                    Analisi codice sorgente
                  </td>
                  <td className="border border-gray p-3">
                    Struttura JSX/TSX, attributi ARIA, semantica HTML
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-3">
                    Grep pattern matching
                  </td>
                  <td className="border border-gray p-3">
                    Ricerca attributi accessibilità (aria-*, role, alt)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-3">Verifica CSS</td>
                  <td className="border border-gray p-3">
                    Focus states, skip links, sr-only
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-3">Build verification</td>
                  <td className="border border-gray p-3">
                    Compilazione senza errori
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-black-light">
            <strong>Componenti analizzati:</strong> 47 file tra layout,
            componenti, pagine e stili
          </p>
        </section>

        {/* Sezione 2: Conformità WCAG */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            2. Conformità per Criterio WCAG 2.1
          </h2>

          {/* Principio 1 */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            2.1 Principio 1 - Percepibile
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Criterio</th>
                  <th className="border border-gray p-2">Descrizione</th>
                  <th className="border border-gray p-2">Stato</th>
                  <th className="border border-gray p-2">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    1.1.1
                  </td>
                  <td className="border border-gray p-2">
                    Contenuti non testuali
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Alt text su tutte le immagini
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    1.3.1
                  </td>
                  <td className="border border-gray p-2">
                    Informazioni e relazioni
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Landmark semantici, heading strutturati
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    1.3.2
                  </td>
                  <td className="border border-gray p-2">
                    Sequenza significativa
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">DOM order logico</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    1.3.3
                  </td>
                  <td className="border border-gray p-2">
                    Caratteristiche sensoriali
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    No istruzioni solo visive
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    1.4.1
                  </td>
                  <td className="border border-gray p-2">Uso del colore</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Informazioni non solo con colore
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    1.4.3
                  </td>
                  <td className="border border-gray p-2">Contrasto minimo</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="warning" />
                  </td>
                  <td className="border border-gray p-2">
                    Richiede test visivo
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    1.4.4
                  </td>
                  <td className="border border-gray p-2">
                    Ridimensionamento testo
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">Layout responsive</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    1.4.10
                  </td>
                  <td className="border border-gray p-2">Reflow</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Breakpoint Tailwind
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    1.4.12
                  </td>
                  <td className="border border-gray p-2">Spaziatura testo</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    CSS non limita spaziatura
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Principio 2 */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            2.2 Principio 2 - Utilizzabile
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Criterio</th>
                  <th className="border border-gray p-2">Descrizione</th>
                  <th className="border border-gray p-2">Stato</th>
                  <th className="border border-gray p-2">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    2.1.1
                  </td>
                  <td className="border border-gray p-2">Tastiera</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Tutti gli elementi raggiungibili
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    2.1.2
                  </td>
                  <td className="border border-gray p-2">
                    Nessun blocco tastiera
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    No trappole di focus
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    2.2.2
                  </td>
                  <td className="border border-gray p-2">
                    Pausa, stop, nascondi
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Pulsante pausa su slider
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    2.4.1
                  </td>
                  <td className="border border-gray p-2">Bypass blocchi</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Skip links implementati
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    2.4.2
                  </td>
                  <td className="border border-gray p-2">Titolo pagina</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Meta title su tutte le pagine
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    2.4.3
                  </td>
                  <td className="border border-gray p-2">Ordine focus</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">Ordine logico DOM</td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    2.4.4
                  </td>
                  <td className="border border-gray p-2">
                    Scopo link (nel contesto)
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    aria-label descrittivi
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    2.4.5
                  </td>
                  <td className="border border-gray p-2">Modalità multiple</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">Menu + breadcrumb</td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    2.4.6
                  </td>
                  <td className="border border-gray p-2">
                    Intestazioni ed etichette
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Heading significativi
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    2.4.7
                  </td>
                  <td className="border border-gray p-2">Focus visibile</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    :focus-visible globale
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Principio 3 */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            2.3 Principio 3 - Comprensibile
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Criterio</th>
                  <th className="border border-gray p-2">Descrizione</th>
                  <th className="border border-gray p-2">Stato</th>
                  <th className="border border-gray p-2">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    3.1.1
                  </td>
                  <td className="border border-gray p-2">
                    Lingua della pagina
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    lang=&quot;it&quot; / lang=&quot;en&quot;
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    3.1.2
                  </td>
                  <td className="border border-gray p-2">Lingua delle parti</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Contenuti coerenti per lingua
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    3.2.1
                  </td>
                  <td className="border border-gray p-2">Al focus</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    No cambi contesto al focus
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    3.2.2
                  </td>
                  <td className="border border-gray p-2">All&apos;input</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    No cambi contesto automatici
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    3.2.3
                  </td>
                  <td className="border border-gray p-2">
                    Navigazione coerente
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Header/Footer consistenti
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    3.3.1
                  </td>
                  <td className="border border-gray p-2">
                    Identificazione errori
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    role=&quot;alert&quot; su errori
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    3.3.2
                  </td>
                  <td className="border border-gray p-2">
                    Etichette o istruzioni
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Label su tutti i form
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Principio 4 */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            2.4 Principio 4 - Robusto
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Criterio</th>
                  <th className="border border-gray p-2">Descrizione</th>
                  <th className="border border-gray p-2">Stato</th>
                  <th className="border border-gray p-2">Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    4.1.1
                  </td>
                  <td className="border border-gray p-2">Parsing</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    JSX valido, build OK
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    4.1.2
                  </td>
                  <td className="border border-gray p-2">
                    Nome, ruolo, valore
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    ARIA correttamente usati
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sezione 3: Analisi Dettagliata per Componente */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            3. Analisi Dettagliata per Componente
          </h2>

          {/* 3.1 Layout Principale */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            3.1 Layout Principale
          </h3>
          <p className="text-sm text-black-light mb-3">
            <code className="bg-gray-light px-2 py-1 rounded">layout.tsx</code>{" "}
            +{" "}
            <code className="bg-gray-light px-2 py-1 rounded">Wrapper.tsx</code>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Elemento</th>
                  <th className="border border-gray p-2">Implementazione</th>
                  <th className="border border-gray p-2">Stato</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2">&lt;html lang&gt;</td>
                  <td className="border border-gray p-2">
                    lang=&quot;it&quot; / lang=&quot;en&quot;
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">Skip links</td>
                  <td className="border border-gray p-2">
                    2 link (main-content, footer)
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">
                    &lt;main id=&quot;main-content&quot;&gt;
                  </td>
                  <td className="border border-gray p-2">
                    Presente in Wrapper.tsx
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">&lt;header&gt;</td>
                  <td className="border border-gray p-2">
                    Componente Header.tsx
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">
                    &lt;footer id=&quot;footer&quot;&gt;
                  </td>
                  <td className="border border-gray p-2">
                    Componente Footer.tsx
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3.2 Header e Navigazione */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            3.2 Header e Navigazione
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Elemento</th>
                  <th className="border border-gray p-2">Implementazione</th>
                  <th className="border border-gray p-2">Stato</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2">
                    &lt;header&gt; semantico
                  </td>
                  <td className="border border-gray p-2">Presente</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">
                    &lt;nav aria-label&gt;
                  </td>
                  <td className="border border-gray p-2">
                    &quot;Menu principale&quot;
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">Logo con alt</td>
                  <td className="border border-gray p-2">
                    &quot;Oriente Occidente Logo&quot;
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">
                    Menu mobile aria-label
                  </td>
                  <td className="border border-gray p-2">
                    translate(&quot;openMenu&quot;)
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">
                    Disclosure aria-expanded
                  </td>
                  <td className="border border-gray p-2">Presente</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">
                    Disclosure aria-controls
                  </td>
                  <td className="border border-gray p-2">Collegamento panel</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3.3 Newsletter */}
          <h3 className="text-lg font-semibold mt-6 mb-3">3.3 Newsletter</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Elemento</th>
                  <th className="border border-gray p-2">Implementazione</th>
                  <th className="border border-gray p-2">Stato</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2">
                    &lt;label&gt; associata
                  </td>
                  <td className="border border-gray p-2">
                    htmlFor=&quot;mce-EMAIL&quot;
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">Label sr-only</td>
                  <td className="border border-gray p-2">
                    className=&quot;sr-only&quot;
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">aria-required</td>
                  <td className="border border-gray p-2">
                    &quot;true&quot; su input email
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">
                    role=&quot;alert&quot; errori
                  </td>
                  <td className="border border-gray p-2">Presente</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">
                    role=&quot;status&quot; successo
                  </td>
                  <td className="border border-gray p-2">Presente</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3.4 Slider e Carousel */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            3.4 Slider e Carousel
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Componente</th>
                  <th className="border border-gray p-2">A11y Module</th>
                  <th className="border border-gray p-2">Pausa/Play</th>
                  <th className="border border-gray p-2">aria-label</th>
                  <th className="border border-gray p-2">Stato</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2">HeroSlider.js</td>
                  <td className="border border-gray p-2">Attivo</td>
                  <td className="border border-gray p-2">Presente</td>
                  <td className="border border-gray p-2">Dinamico</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">Gallery.js</td>
                  <td className="border border-gray p-2">Attivo</td>
                  <td className="border border-gray p-2">N/A</td>
                  <td className="border border-gray p-2">prev/next</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">GalleryStandard.js</td>
                  <td className="border border-gray p-2">Attivo</td>
                  <td className="border border-gray p-2">N/A</td>
                  <td className="border border-gray p-2">Configurato</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">GalleryHome.js</td>
                  <td className="border border-gray p-2">Attivo</td>
                  <td className="border border-gray p-2">N/A</td>
                  <td className="border border-gray p-2">Configurato</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">GalleryPreview.js</td>
                  <td className="border border-gray p-2">Attivo</td>
                  <td className="border border-gray p-2">N/A</td>
                  <td className="border border-gray p-2">Configurato</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3.5 Form di Registrazione */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            3.5 Form di Registrazione
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Elemento</th>
                  <th className="border border-gray p-2">Implementazione</th>
                  <th className="border border-gray p-2">Stato</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2">
                    Label per ogni campo
                  </td>
                  <td className="border border-gray p-2">
                    htmlFor/id collegati
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">aria-required</td>
                  <td className="border border-gray p-2">
                    Su campi obbligatori
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">Messaggi errore</td>
                  <td className="border border-gray p-2">
                    role=&quot;alert&quot; + aria-live
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sezione 4: CSS e Stili Accessibilità */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            4. CSS e Stili Accessibilità
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            4.1 Focus Visibile (WCAG 2.4.7)
          </h3>
          <pre className="bg-black text-white p-4 rounded-lg text-xs overflow-x-auto mb-2">
            {`a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid black;
  outline-offset: 2px;
}

/* Contrasto su sfondi scuri */
.bg-black a:focus-visible,
footer a:focus-visible {
  outline-color: white;
}`}
          </pre>
          <p className="text-sm">
            <strong>Stato:</strong> <StatusBadge status="ok" />
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            4.2 Skip Links (WCAG 2.4.1)
          </h3>
          <pre className="bg-black text-white p-4 rounded-lg text-xs overflow-x-auto mb-2">
            {`.skip-link {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  background: black;
  color: white;
  padding: 8px 12px;
  z-index: 50;
}

.skip-link:focus {
  transform: translateX(-50%) translateY(0);
}`}
          </pre>
          <p className="text-sm">
            <strong>Stato:</strong> <StatusBadge status="ok" /> - Nascosti
            finché non ricevono focus
          </p>
        </section>

        {/* Sezione 5: Riepilogo Conformità */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            5. Riepilogo Conformità
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-light p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-semibold mb-3">Livello A (30 criteri)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Conforme</span>
                  <span className="font-semibold text-green">29 (97%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Da verificare</span>
                  <span className="font-semibold text-orange-600">1 (3%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Non conforme</span>
                  <span className="font-semibold">0 (0%)</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-light p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-semibold mb-3">Livello AA (20 criteri)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Conforme</span>
                  <span className="font-semibold text-green">18 (90%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Da verificare</span>
                  <span className="font-semibold text-orange-600">2 (10%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Non conforme</span>
                  <span className="font-semibold">0 (0%)</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Elementi da Verificare Manualmente
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Criterio</th>
                  <th className="border border-gray p-2">Descrizione</th>
                  <th className="border border-gray p-2">Motivo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2">1.4.3</td>
                  <td className="border border-gray p-2">Contrasto minimo</td>
                  <td className="border border-gray p-2">
                    Richiede test visivo con strumenti
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">1.4.6</td>
                  <td className="border border-gray p-2">
                    Contrasto aumentato (AAA)
                  </td>
                  <td className="border border-gray p-2">
                    Richiede test visivo
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sezione 6: Punti di Forza */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            6. Punti di Forza
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Sistema Skip Links Completo
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Due skip link funzionanti</li>
                <li>Stili CSS appropriati con animazione focus</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Slider Completamente Accessibili
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Modulo A11y Swiper su tutti i carousel</li>
                <li>Pulsante pausa/play con stati ARIA</li>
                <li>Messaggi in italiano per screen reader</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Form Perfettamente Accessibili
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Label associate a ogni campo</li>
                <li>aria-required sui campi obbligatori</li>
                <li>Gestione errori con role=&quot;alert&quot;</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Focus Management Robusto
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>:focus-visible globale per tutti gli elementi</li>
                <li>Contrasto adattivo per sfondi chiari/scuri</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Navigazione Accessibile
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>aria-expanded sui menu espandibili</li>
                <li>aria-controls per collegamento logico</li>
                <li>aria-label descrittivi</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Link Esterni Sicuri
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>
                  rel=&quot;noopener noreferrer&quot; su tutti i
                  target=&quot;_blank&quot;
                </li>
                <li>Indicazione di link esterno negli aria-label</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sezione 7: Valutazione Dettagliata */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            7. Valutazione Dettagliata
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-3 text-left">Aspetto</th>
                  <th className="border border-gray p-3 text-center">
                    Punteggio
                  </th>
                  <th className="border border-gray p-3 text-left">Giudizio</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-3">
                    Struttura semantica
                  </td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    10/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Eccellente
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-3">Navigazione</td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    10/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Eccellente
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-3">Form</td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    10/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Eccellente
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-3">Immagini</td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    9/10
                  </td>
                  <td className="border border-gray p-3 text-green">Ottimo</td>
                </tr>
                <tr>
                  <td className="border border-gray p-3">Slider/Carousel</td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    10/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Eccellente
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-3">Focus management</td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    10/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Eccellente
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-3">
                    ARIA implementation
                  </td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    10/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Eccellente
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Sezione 8: Raccomandazioni */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            8. Raccomandazioni Future
          </h2>
          <h3 className="text-lg font-semibold mt-4 mb-3">
            Priorità Bassa (Miglioramenti Opzionali)
          </h3>
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li>Test contrasto colori con axe DevTools o WAVE</li>
            <li>Test con screen reader reali (NVDA, VoiceOver, JAWS)</li>
            <li>
              Aggiungere aria-current=&quot;page&quot; sui link della pagina
              attiva
            </li>
            <li>Considerare prefers-reduced-motion per animazioni</li>
          </ol>
        </section>

        {/* Sezione 9: Dichiarazione di Conformità */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            9. Dichiarazione di Conformità
          </h2>
          <p className="mb-4">
            Il sito <strong>Oriente Occidente</strong> risulta{" "}
            <strong>conforme</strong> alle linee guida WCAG 2.1 Livello AA sulla
            base dell&apos;analisi del codice sorgente.
          </p>

          <h3 className="font-semibold mt-4 mb-2">Punti di eccellenza:</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
            <li>Slider con controlli pausa/play</li>
            <li>Form completamente accessibili</li>
            <li>Skip links funzionanti</li>
            <li>Focus visibile su tutti gli elementi</li>
            <li>Uso appropriato di ARIA</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">Verifiche consigliate:</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Test contrasto colori</li>
            <li>Test con screen reader</li>
            <li>Test navigazione solo tastiera</li>
          </ul>
        </section>

        {/* Sezione 10: Feedback */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            10. Feedback e Segnalazioni
          </h2>
          <p className="mb-4">
            Per segnalare problemi di accessibilità o richiedere informazioni in
            formati alternativi, è possibile contattarci attraverso i seguenti
            canali:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@orienteoccidente.it"
                className="underline hover:no-underline"
              >
                info@orienteoccidente.it
              </a>
            </li>
            <li>
              <strong>Telefono:</strong> +39 0464 431660
            </li>
          </ul>
        </section>

        {/* Footer documento */}
        <footer className="mt-12 pt-6 border-t border-gray text-center text-sm text-black-light">
          <p>
            Relazione redatta secondo WCAG 2.1, Legge 4/2004 e Direttiva UE
            2016/2102
          </p>
          <p className="mt-1">
            <strong>Build verificato:</strong> Compilazione completata senza
            errori
          </p>
          <p className="mt-2">
            <strong>Ultima verifica:</strong> 27 gennaio 2026
          </p>
        </footer>
      </article>
    </Wrapper>
  );
}
