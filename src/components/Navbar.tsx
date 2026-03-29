'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuHeading,
  MenuSeparator,
} from '@headlessui/react';
import {
  ShoppingCartIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const accountLinks = [
  { href: '/catalog', label: 'Shop all parts' },
  { href: '/catalog?q=Lighting', label: 'Lighting' },
  { href: '/catalog?q=Interior', label: 'Interior parts' },
  { href: '/cart', label: 'Cart' },
  { href: '/checkout', label: 'Checkout' },
] as const;

const helpLinks = [
  { href: '/shipping', label: 'Shipping & returns' },
  { href: '/terms', label: 'Terms & conditions' },
  { href: '/privacy', label: 'Privacy policy' },
] as const;

function menuItemClass(focus: boolean) {
  return `block w-full px-4 py-2 text-left text-sm text-gray-900 ${
    focus ? 'bg-gray-100' : ''
  }`;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--primary-color)] border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-black [text-shadow:2px_2px_0px_#FFFFFF]"
            >
              JUNKYARD CAR PARTS
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/cart" className="retro-button p-2" title="Cart">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>

            <Menu as="div" className="relative">
              <MenuButton className="retro-button flex items-center gap-1.5 px-3 py-2 text-sm font-bold uppercase tracking-wide">
                <UserCircleIcon className="h-6 w-6 shrink-0" aria-hidden />
                <span className="hidden sm:inline">Account</span>
                <ChevronDownIcon className="h-4 w-4 shrink-0" aria-hidden />
              </MenuButton>
              <MenuItems
                transition
                anchor="bottom end"
                className="z-[100] mt-2 w-60 origin-top-right rounded-md border-2 border-black bg-white py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [--anchor-gap:4px] data-[closed]:scale-95 data-[closed]:opacity-0 transition data-[open]:duration-100 data-[closed]:duration-75"
              >
                <MenuHeading className="px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                  Shopping
                </MenuHeading>
                {accountLinks.map((item) => (
                  <MenuItem key={item.href}>
                    {({ focus }) => (
                      <Link href={item.href} className={menuItemClass(focus)}>
                        {item.label}
                      </Link>
                    )}
                  </MenuItem>
                ))}
                <MenuSeparator className="my-1 border-t border-gray-200" />
                <MenuHeading className="px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                  Help &amp; legal
                </MenuHeading>
                {helpLinks.map((item) => (
                  <MenuItem key={item.href}>
                    {({ focus }) => (
                      <Link href={item.href} className={menuItemClass(focus)}>
                        {item.label}
                      </Link>
                    )}
                  </MenuItem>
                ))}
                <MenuSeparator className="my-1 border-t border-gray-200" />
                <MenuItem>
                  {({ focus }) => (
                    <a
                      href="mailto:support@junkyardcarparts.com"
                      className={menuItemClass(focus)}
                    >
                      Email support
                    </a>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden retro-button p-2"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t-2 border-black bg-[var(--primary-color)]">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            <Link
              href="/cart"
              className="block retro-button w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-center space-x-2">
                <ShoppingCartIcon className="h-5 w-5" />
                <span>CART</span>
              </div>
            </Link>
            <p className="px-2 text-xs font-bold uppercase text-black/70">Shopping</p>
            {accountLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block retro-button w-full text-center text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="px-2 pt-2 text-xs font-bold uppercase text-black/70">
              Help &amp; legal
            </p>
            {helpLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block retro-button w-full text-center text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:support@junkyardcarparts.com"
              className="block retro-button w-full text-center text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Email support
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
