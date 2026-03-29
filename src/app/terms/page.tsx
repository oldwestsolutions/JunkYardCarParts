import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms of use for Junkyard Car Parts, the used car parts marketplace operated under Auto Equity Group.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 mb-6">
          <Link href="/" className="text-red-600 hover:text-red-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          Terms &amp; Conditions
        </p>
        <h1 className="text-2xl font-bold text-gray-900 mb-6 sm:mb-8 sm:text-3xl">
          Terms &amp; Conditions
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-700 sm:text-base">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Agreement
            </h2>
            <p>
              By accessing or using the Junkyard Car Parts website and services (the
              &quot;Services&quot;), you agree to these Terms &amp; Conditions. If you do not
              agree, do not use the Services. The Services are operated on behalf of Auto
              Equity Group and its affiliates (collectively, &quot;AEG,&quot; &quot;we,&quot;
              or &quot;us&quot;).
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Marketplace &amp; third parties
            </h2>
            <p>
              Listings may originate from verified suppliers, auction channels where
              permitted, and partner networks. Availability, pricing, and
              condition are described on each listing. We do not guarantee that every part
              fits every vehicle; you are responsible for confirming fitment and
              compatibility before purchase.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Payments
            </h2>
            <p>
              We may offer card and other payment methods through approved processors.
              Availability, fees, and settlement timing depend on program rules and
              compliance checks. You authorize us and our processors to charge or settle
              transactions in accordance with the checkout you complete.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Installation &amp; mechanics
            </h2>
            <p>
              Referrals to bonded or verified mechanics are provided for convenience.
              Installation services, if any, are between you and the service provider
              unless otherwise stated at checkout. We are not liable for installation
              outcomes except as required by applicable law.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by law, AEG and Junkyard Car Parts are not
              liable for indirect, incidental, or consequential damages arising from use of
              the Services. Our aggregate liability for any claim relating to the
              Services is limited to the amount you paid for the specific order giving
              rise to the claim.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Changes
            </h2>
            <p>
              We may update these terms from time to time. Continued use of the Services
              after changes constitutes acceptance of the revised terms.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Contact
            </h2>
            <p>
              Questions about these terms:{" "}
              <a
                href="mailto:support@junkyardcarparts.com"
                className="text-red-600 hover:text-red-700"
              >
                support@junkyardcarparts.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
