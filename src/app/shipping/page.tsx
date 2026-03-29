import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Shipping, delivery timelines, and returns for used car parts ordered from Junkyard Car Parts — domestic and international where available.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500 mb-6">
          <Link href="/" className="text-red-600 hover:text-red-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          Shipping &amp; Returns
        </p>
        <h1 className="text-2xl font-bold text-gray-900 mb-6 sm:mb-8 sm:text-3xl">
          Shipping &amp; Returns
        </h1>
        <div className="prose prose-gray max-w-none space-y-6 text-sm text-gray-700 sm:text-base">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Shipping
            </h2>
            <p>
              We ship eligible orders via carriers selected at checkout. Processing time
              depends on supplier location, verification steps (including auction-linked
              documentation when applicable), and carrier pickup schedules. Estimated
              delivery windows are shown before you pay; they are not guaranteed unless
              explicitly stated for a specific service level.
            </p>
            <p>
              Oversized or hazardous materials may require freight and additional fees.
              International orders may be subject to duties, taxes, and customs delays
              assessed by destination countries—those charges are your responsibility
              unless we state otherwise on the listing.
            </p>
            <p>
              Free or discounted shipping promotions apply only where indicated at
              checkout and may require a minimum order value.
            </p>
          </section>
          <section id="returns">
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Returns &amp; refunds
            </h2>
            <p>
              You may request a return within <strong>30 days</strong> of delivery for many
              items, provided the part is in the same condition as received and meets the
              return rules shown on your order confirmation. Some listings—especially
              auction-sourced, electrical, or custom-built items—may be marked
              non-returnable; that status is disclosed before purchase.
            </p>
            <p>
              To start a return, contact{" "}
              <a
                href="mailto:support@junkyardcarparts.com"
                className="text-red-600 hover:text-red-700"
              >
                support@junkyardcarparts.com
              </a>{" "}
              with your order number and photos if we request them. Approved refunds are
              issued to the original payment method when possible; orders paid through alternate flows
              follow the processor&apos;s refund policy and timing.
            </p>
            <p>
              Restocking or return shipping fees may apply as shown at checkout or in your
              RMA instructions.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
              Damaged or incorrect items
            </h2>
            <p>
              If an item arrives damaged or is not as described, notify us within{" "}
              <strong>7 days</strong> of delivery with photos. We will work with you and
              the supplier to replace, repair, or refund as appropriate.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
