import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Junkyard Car Parts",
  description:
    "How Junkyard Car Parts and Auto Equity Group collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 mb-6">
          <Link href="/" className="text-red-600 hover:text-red-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          Privacy Policy
        </p>
        <h1 className="text-2xl font-bold text-gray-900 mb-6 sm:mb-8 sm:text-3xl">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-700 sm:text-base">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Who we are
            </h2>
            <p>
              Junkyard Car Parts is operated in connection with Auto Equity Group
              (&quot;AEG&quot;). This policy describes how we handle personal information
              when you visit our site, create an account, place an order, or interact with
              our marketplace features.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Information we collect
            </h2>
            <p>
              We may collect contact details (name, email, phone, shipping address), order
              and payment-related data (processed by payment partners), device and log
              data (IP address, browser type), and communications you send to support. If
              you use crypto checkout, our partners may process wallet or transaction
              references as required for compliance.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              How we use information
            </h2>
            <p>
              We use data to fulfill orders, prevent fraud, improve the Services, comply
              with law, communicate about your account, and—where permitted—send marketing
              you can opt out of.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Sharing
            </h2>
            <p>
              We share information with service providers (hosting, payments, shipping,
              analytics) under contracts that require appropriate safeguards. We may
              disclose information if required by law or to protect rights and safety.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Cookies &amp; analytics
            </h2>
            <p>
              We use cookies and similar technologies to run the site, remember
              preferences, and measure performance. You can control cookies through your
              browser settings.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Your choices
            </h2>
            <p>
              Depending on where you live, you may have rights to access, correct, delete,
              or export personal information, or to object to certain processing. Contact
              us to exercise those rights.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Contact
            </h2>
            <p>
              Privacy inquiries:{" "}
              <a
                href="mailto:support@junkyardcarparts.com"
                className="text-red-600 hover:text-red-700"
              >
                support@junkyardcarparts.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
