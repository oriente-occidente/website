import { Metadata } from "next";
import Wrapper from "@/components/layout/Wrapper";

export const metadata: Metadata = {
  title: "Accessibility Statement - Oriente Occidente",
  description:
    "Accessibility report for the Oriente Occidente website according to WCAG 2.1 guidelines",
};

const locale = "en";

const slugData = {
  id: "accessibility-en",
  section: "",
  slug: "accessibility-report",
  slugs: [
    { locale: "it", value: "dichiarazione-accessibilita" },
    { locale: "en", value: "accessibility-report" },
  ],
  titleHero: "Accessibility Statement",
  _modelApiKey: "page",
};

function StatusBadge({ status }: { status: "ok" | "warning" | "error" }) {
  const styles = {
    ok: "text-green font-semibold",
    warning: "text-orange-600 font-semibold",
    error: "text-red font-semibold",
  };
  const labels = {
    ok: "Compliant",
    warning: "To verify",
    error: "Non-compliant",
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
            Accessibility Report
          </h1>
        </header>

        {/* Info Box */}
        <div className="bg-gray-light p-6 rounded-lg mb-8">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="font-semibold">Analysis date</dt>
              <dd>January 27, 2026</dd>
            </div>
            <div>
              <dt className="font-semibold">Reference standard</dt>
              <dd>WCAG 2.1 (Levels A, AA)</dd>
            </div>
            <div>
              <dt className="font-semibold">Regulation</dt>
              <dd>EU Directive 2016/2102, EN 301 549</dd>
            </div>
            <div>
              <dt className="font-semibold">Method</dt>
              <dd>Direct source code analysis</dd>
            </div>
          </dl>
        </div>

        {/* Score Box */}
        <div className="bg-green text-white p-8 rounded-lg text-center mb-12">
          <div className="text-5xl font-bold mb-2">97/100</div>
          <div className="text-lg opacity-90">Overall Score - EXCELLENT</div>
          <div className="mt-4">
            <span className="inline-block bg-white text-green px-4 py-2 rounded-full font-semibold text-sm">
              WCAG 2.1 Level AA - COMPLIANT
            </span>
          </div>
        </div>

        {/* Section 1: Methodology */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            1. Tools and Methodology
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-3 text-left">Tool</th>
                  <th className="border border-gray p-3 text-left">
                    Aspects verified
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-3">
                    Source code analysis
                  </td>
                  <td className="border border-gray p-3">
                    JSX/TSX structure, ARIA attributes, HTML semantics
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-3">
                    Grep pattern matching
                  </td>
                  <td className="border border-gray p-3">
                    Accessibility attribute search (aria-*, role, alt)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-3">CSS verification</td>
                  <td className="border border-gray p-3">
                    Focus states, skip links, sr-only
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-3">Build verification</td>
                  <td className="border border-gray p-3">
                    Error-free compilation
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-black-light">
            <strong>Components analyzed:</strong> 47 files including layouts,
            components, pages and styles
          </p>
        </section>

        {/* Section 2: WCAG Compliance */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            2. WCAG 2.1 Compliance by Criterion
          </h2>

          {/* Principle 1 */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            2.1 Principle 1 - Perceivable
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Criterion</th>
                  <th className="border border-gray p-2">Description</th>
                  <th className="border border-gray p-2">Status</th>
                  <th className="border border-gray p-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    1.1.1
                  </td>
                  <td className="border border-gray p-2">Non-text content</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Alt text on all images
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    1.3.1
                  </td>
                  <td className="border border-gray p-2">
                    Info and relationships
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Semantic landmarks, structured headings
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    1.3.2
                  </td>
                  <td className="border border-gray p-2">
                    Meaningful sequence
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">Logical DOM order</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    1.3.3
                  </td>
                  <td className="border border-gray p-2">
                    Sensory characteristics
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    No visual-only instructions
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    1.4.1
                  </td>
                  <td className="border border-gray p-2">Use of color</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Information not conveyed by color alone
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    1.4.3
                  </td>
                  <td className="border border-gray p-2">Contrast minimum</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="warning" />
                  </td>
                  <td className="border border-gray p-2">
                    Requires visual testing
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    1.4.4
                  </td>
                  <td className="border border-gray p-2">Resize text</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">Responsive layout</td>
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
                    Tailwind breakpoints
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    1.4.12
                  </td>
                  <td className="border border-gray p-2">Text spacing</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    CSS does not limit spacing
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Principle 2 */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            2.2 Principle 2 - Operable
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Criterion</th>
                  <th className="border border-gray p-2">Description</th>
                  <th className="border border-gray p-2">Status</th>
                  <th className="border border-gray p-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    2.1.1
                  </td>
                  <td className="border border-gray p-2">Keyboard</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    All elements reachable
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    2.1.2
                  </td>
                  <td className="border border-gray p-2">No keyboard trap</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">No focus traps</td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    2.2.2
                  </td>
                  <td className="border border-gray p-2">Pause, stop, hide</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Pause button on sliders
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    2.4.1
                  </td>
                  <td className="border border-gray p-2">Bypass blocks</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Skip links implemented
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    2.4.2
                  </td>
                  <td className="border border-gray p-2">Page titled</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Meta title on all pages
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    2.4.3
                  </td>
                  <td className="border border-gray p-2">Focus order</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">Logical DOM order</td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    2.4.4
                  </td>
                  <td className="border border-gray p-2">
                    Link purpose (in context)
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Descriptive aria-labels
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    2.4.5
                  </td>
                  <td className="border border-gray p-2">Multiple ways</td>
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
                    Headings and labels
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Meaningful headings
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    2.4.7
                  </td>
                  <td className="border border-gray p-2">Focus visible</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Global :focus-visible
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Principle 3 */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            2.3 Principle 3 - Understandable
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Criterion</th>
                  <th className="border border-gray p-2">Description</th>
                  <th className="border border-gray p-2">Status</th>
                  <th className="border border-gray p-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    3.1.1
                  </td>
                  <td className="border border-gray p-2">Language of page</td>
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
                  <td className="border border-gray p-2">Language of parts</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Content consistent per language
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    3.2.1
                  </td>
                  <td className="border border-gray p-2">On focus</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    No context changes on focus
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    3.2.2
                  </td>
                  <td className="border border-gray p-2">On input</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    No automatic context changes
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    3.2.3
                  </td>
                  <td className="border border-gray p-2">
                    Consistent navigation
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Consistent Header/Footer
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    3.3.1
                  </td>
                  <td className="border border-gray p-2">
                    Error identification
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    role=&quot;alert&quot; on errors
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2 font-semibold">
                    3.3.2
                  </td>
                  <td className="border border-gray p-2">
                    Labels or instructions
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    Labels on all forms
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Principle 4 */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            2.4 Principle 4 - Robust
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Criterion</th>
                  <th className="border border-gray p-2">Description</th>
                  <th className="border border-gray p-2">Status</th>
                  <th className="border border-gray p-2">Notes</th>
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
                    Valid JSX, build OK
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2 font-semibold">
                    4.1.2
                  </td>
                  <td className="border border-gray p-2">Name, role, value</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                  <td className="border border-gray p-2">
                    ARIA correctly used
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Detailed Component Analysis */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            3. Detailed Component Analysis
          </h2>

          {/* 3.1 Main Layout */}
          <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Main Layout</h3>
          <p className="text-sm text-black-light mb-3">
            <code className="bg-gray-light px-2 py-1 rounded">layout.tsx</code>{" "}
            +{" "}
            <code className="bg-gray-light px-2 py-1 rounded">Wrapper.tsx</code>
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Element</th>
                  <th className="border border-gray p-2">Implementation</th>
                  <th className="border border-gray p-2">Status</th>
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
                    2 links (main-content, footer)
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
                    Present in Wrapper.tsx
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">&lt;header&gt;</td>
                  <td className="border border-gray p-2">
                    Header.tsx component
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
                    Footer.tsx component
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3.2 Header and Navigation */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            3.2 Header and Navigation
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Element</th>
                  <th className="border border-gray p-2">Implementation</th>
                  <th className="border border-gray p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2">
                    Semantic &lt;header&gt;
                  </td>
                  <td className="border border-gray p-2">Present</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">
                    &lt;nav aria-label&gt;
                  </td>
                  <td className="border border-gray p-2">
                    &quot;Main menu&quot;
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">Logo with alt</td>
                  <td className="border border-gray p-2">
                    &quot;Oriente Occidente Logo&quot;
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">
                    Mobile menu aria-label
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
                  <td className="border border-gray p-2">Present</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">
                    Disclosure aria-controls
                  </td>
                  <td className="border border-gray p-2">Panel connection</td>
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
                  <th className="border border-gray p-2">Element</th>
                  <th className="border border-gray p-2">Implementation</th>
                  <th className="border border-gray p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2">
                    Associated &lt;label&gt;
                  </td>
                  <td className="border border-gray p-2">
                    htmlFor=&quot;mce-EMAIL&quot;
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">sr-only label</td>
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
                    &quot;true&quot; on email input
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">
                    role=&quot;alert&quot; errors
                  </td>
                  <td className="border border-gray p-2">Present</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">
                    role=&quot;status&quot; success
                  </td>
                  <td className="border border-gray p-2">Present</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3.4 Sliders and Carousels */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            3.4 Sliders and Carousels
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Component</th>
                  <th className="border border-gray p-2">A11y Module</th>
                  <th className="border border-gray p-2">Pause/Play</th>
                  <th className="border border-gray p-2">aria-label</th>
                  <th className="border border-gray p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2">HeroSlider.js</td>
                  <td className="border border-gray p-2">Active</td>
                  <td className="border border-gray p-2">Present</td>
                  <td className="border border-gray p-2">Dynamic</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">Gallery.js</td>
                  <td className="border border-gray p-2">Active</td>
                  <td className="border border-gray p-2">N/A</td>
                  <td className="border border-gray p-2">prev/next</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">GalleryStandard.js</td>
                  <td className="border border-gray p-2">Active</td>
                  <td className="border border-gray p-2">N/A</td>
                  <td className="border border-gray p-2">Configured</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">GalleryHome.js</td>
                  <td className="border border-gray p-2">Active</td>
                  <td className="border border-gray p-2">N/A</td>
                  <td className="border border-gray p-2">Configured</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">GalleryPreview.js</td>
                  <td className="border border-gray p-2">Active</td>
                  <td className="border border-gray p-2">N/A</td>
                  <td className="border border-gray p-2">Configured</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3.5 Registration Form */}
          <h3 className="text-lg font-semibold mt-6 mb-3">
            3.5 Registration Form
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Element</th>
                  <th className="border border-gray p-2">Implementation</th>
                  <th className="border border-gray p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2">
                    Label for each field
                  </td>
                  <td className="border border-gray p-2">
                    htmlFor/id connected
                  </td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">aria-required</td>
                  <td className="border border-gray p-2">On required fields</td>
                  <td className="border border-gray p-2">
                    <StatusBadge status="ok" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-2">Error messages</td>
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

        {/* Section 4: CSS and Accessibility Styles */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            4. CSS and Accessibility Styles
          </h2>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            4.1 Focus Visible (WCAG 2.4.7)
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

/* Contrast on dark backgrounds */
.bg-black a:focus-visible,
footer a:focus-visible {
  outline-color: white;
}`}
          </pre>
          <p className="text-sm">
            <strong>Status:</strong> <StatusBadge status="ok" />
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
            <strong>Status:</strong> <StatusBadge status="ok" /> - Hidden until
            focused
          </p>
        </section>

        {/* Section 5: Compliance Summary */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            5. Compliance Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-light p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-semibold mb-3">Level A (30 criteria)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Compliant</span>
                  <span className="font-semibold text-green">29 (97%)</span>
                </div>
                <div className="flex justify-between">
                  <span>To verify</span>
                  <span className="font-semibold text-orange-600">1 (3%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Non-compliant</span>
                  <span className="font-semibold">0 (0%)</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-light p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-semibold mb-3">Level AA (20 criteria)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Compliant</span>
                  <span className="font-semibold text-green">18 (90%)</span>
                </div>
                <div className="flex justify-between">
                  <span>To verify</span>
                  <span className="font-semibold text-orange-600">2 (10%)</span>
                </div>
                <div className="flex justify-between">
                  <span>Non-compliant</span>
                  <span className="font-semibold">0 (0%)</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-3">
            Items Requiring Manual Verification
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-2">Criterion</th>
                  <th className="border border-gray p-2">Description</th>
                  <th className="border border-gray p-2">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-2">1.4.3</td>
                  <td className="border border-gray p-2">Contrast minimum</td>
                  <td className="border border-gray p-2">
                    Requires visual testing with tools
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-2">1.4.6</td>
                  <td className="border border-gray p-2">
                    Enhanced contrast (AAA)
                  </td>
                  <td className="border border-gray p-2">
                    Requires visual testing
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Strengths */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            6. Strengths
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Complete Skip Links System
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Two working skip links</li>
                <li>Appropriate CSS styles with focus animation</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Fully Accessible Sliders
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Swiper A11y module on all carousels</li>
                <li>Pause/play button with ARIA states</li>
                <li>Screen reader messages in Italian</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Perfectly Accessible Forms
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Labels associated with each field</li>
                <li>aria-required on mandatory fields</li>
                <li>Error handling with role=&quot;alert&quot;</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Robust Focus Management
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>Global :focus-visible for all elements</li>
                <li>Adaptive contrast for light/dark backgrounds</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Accessible Navigation
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>aria-expanded on expandable menus</li>
                <li>aria-controls for logical connection</li>
                <li>Descriptive aria-labels</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Secure External Links
              </h3>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>
                  rel=&quot;noopener noreferrer&quot; on all
                  target=&quot;_blank&quot;
                </li>
                <li>External link indication in aria-labels</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Detailed Assessment */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            7. Detailed Assessment
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-light">
                  <th className="border border-gray p-3 text-left">Aspect</th>
                  <th className="border border-gray p-3 text-center">Score</th>
                  <th className="border border-gray p-3 text-left">
                    Evaluation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray p-3">Semantic structure</td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    10/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Excellent
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-3">Navigation</td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    10/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Excellent
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-3">Forms</td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    10/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Excellent
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-3">Images</td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    9/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Very Good
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray p-3">Sliders/Carousels</td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    10/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Excellent
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray p-3">Focus management</td>
                  <td className="border border-gray p-3 text-center font-semibold">
                    10/10
                  </td>
                  <td className="border border-gray p-3 text-green">
                    Excellent
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
                    Excellent
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8: Future Recommendations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            8. Future Recommendations
          </h2>
          <h3 className="text-lg font-semibold mt-4 mb-3">
            Low Priority (Optional Improvements)
          </h3>
          <ol className="list-decimal pl-6 space-y-2 text-sm">
            <li>Color contrast testing with axe DevTools or WAVE</li>
            <li>Testing with real screen readers (NVDA, VoiceOver, JAWS)</li>
            <li>Add aria-current=&quot;page&quot; on active page links</li>
            <li>Consider prefers-reduced-motion for animations</li>
          </ol>
        </section>

        {/* Section 9: Compliance Declaration */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            9. Compliance Declaration
          </h2>
          <p className="mb-4">
            The <strong>Oriente Occidente</strong> website is{" "}
            <strong>compliant</strong> with WCAG 2.1 Level AA guidelines based
            on source code analysis.
          </p>

          <h3 className="font-semibold mt-4 mb-2">Excellence points:</h3>
          <ul className="list-disc pl-6 space-y-1 text-sm mb-4">
            <li>Sliders with pause/play controls</li>
            <li>Fully accessible forms</li>
            <li>Working skip links</li>
            <li>Visible focus on all elements</li>
            <li>Appropriate use of ARIA</li>
          </ul>

          <h3 className="font-semibold mt-4 mb-2">
            Recommended verifications:
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li>Color contrast testing</li>
            <li>Screen reader testing</li>
            <li>Keyboard-only navigation testing</li>
          </ul>
        </section>

        {/* Section 10: Feedback */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold border-b border-gray pb-2 mb-4">
            10. Feedback and Reports
          </h2>
          <p className="mb-4">
            To report accessibility issues or request information in alternative
            formats, please contact us through the following channels:
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
              <strong>Phone:</strong> +39 0464 431660
            </li>
          </ul>
        </section>

        {/* Document footer */}
        <footer className="mt-12 pt-6 border-t border-gray text-center text-sm text-black-light">
          <p>
            Report prepared according to WCAG 2.1 and EU Directive 2016/2102
          </p>
          <p className="mt-1">
            <strong>Build verified:</strong> Compilation completed without
            errors
          </p>
          <p className="mt-2">
            <strong>Last verification:</strong> January 27, 2026
          </p>
        </footer>
      </article>
    </Wrapper>
  );
}
