'use client';

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
  return (
    <nav className="sticky top-0 z-50 bg-[var(--primary-color)] border-b-2 border-black pt-[env(safe-area-inset-top)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-14 sm:h-16 gap-2">
          <div className="flex min-w-0 flex-1 items-center pr-2">
            <Link
              href="/"
              className="truncate text-base font-bold leading-tight text-black sm:text-xl sm:leading-normal md:text-2xl"
            >
              JUNKYARD CAR PARTS
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            <Link href="/cart" className="retro-button p-2" title="Cart" aria-label="Shopping cart">
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
                className="z-[100] mt-2 w-[min(18rem,calc(100vw-1.5rem))] max-h-[min(70vh,28rem)] origin-top-right overflow-y-auto rounded-md border-2 border-black bg-white py-1 [--anchor-gap:6px] data-[closed]:scale-95 data-[closed]:opacity-0 transition data-[open]:duration-100 data-[closed]:duration-75"
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
