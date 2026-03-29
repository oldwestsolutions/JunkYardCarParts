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
  return `block w-full min-h-11 px-4 py-3 text-left text-sm text-gray-900 sm:py-2 ${
    focus ? 'bg-gray-100' : ''
  }`;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--primary-color)] border-b-2 border-black pt-[env(safe-area-inset-top)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-14 sm:h-16 gap-2">
          <div className="flex min-w-0 flex-1 items-center pr-2">
            <Link
              href="/"
              className="truncate text-base font-bold leading-tight text-black [text-shadow:2px_2px_0px_#FFFFFF] sm:text-xl sm:leading-normal md:text-2xl"
            >
              JUNKYARD CAR PARTS
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <Link href="/cart" className="retro-button p-2" title="Cart" aria-label="Shopping cart">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>

            <Menu as="div" className="relative hidden md:block">
              <MenuButton className="retro-button flex items-center gap-1.5 px-3 py-2 text-sm font-bold uppercase tracking-wide">
                <UserCircleIcon className="h-6 w-6 shrink-0" aria-hidden />
                <span className="hidden sm:inline">Account</span>
                <ChevronDownIcon className="h-4 w-4 shrink-0" aria-hidden />
              </MenuButton>
              <MenuItems
                transition
                anchor="bottom end"
                className="z-[100] mt-2 w-[min(18rem,calc(100vw-1.5rem))] max-h-[min(70vh,28rem)] origin-top-right overflow-y-auto rounded-md border-2 border-black bg-white py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [--anchor-gap:6px] data-[closed]:scale-95 data-[closed]:opacity-0 transition data-[open]:duration-100 data-[closed]:duration-75"
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
              className="retro-button min-w-[4.5rem] px-2 text-xs md:hidden sm:text-sm"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain md:hidden border-t-2 border-black bg-[var(--primary-color)]">
          <div className="space-y-2 px-2 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-3">
            <Link
              href="/cart"
              className="block min-h-12 w-full py-3 text-center retro-button sm:min-h-11 sm:py-2"
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
                className="block min-h-12 w-full py-3 text-center text-sm retro-button sm:min-h-11 sm:py-2"
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
                className="block min-h-12 w-full py-3 text-center text-sm retro-button sm:min-h-11 sm:py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:support@junkyardcarparts.com"
              className="block min-h-12 w-full py-3 text-center text-sm retro-button sm:min-h-11 sm:py-2"
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
