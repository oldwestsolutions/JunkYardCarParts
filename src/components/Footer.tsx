import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Junkyard Car Parts</h3>
            <h4 className="text-sm font-semibold text-white mb-2">Our mission</h4>
            <p className="text-gray-400">
              We run a transparent, crypto-enabled marketplace that connects buyers to
              verified parts worldwide. Trust and regulatory compliance guide how we
              source inventory, settle transactions, and support customers end to end.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="text-gray-400 hover:text-white">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li className="pt-2 border-t border-gray-700 mt-2">
                <Link href="/legal" className="text-gray-400 hover:text-white">
                  Legal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@junkyardcarparts.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Auto Parts Lane, Detroit, MI 48201</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Junkyard Car Parts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
