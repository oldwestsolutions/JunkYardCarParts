'use client';

import Image from 'next/image';
import { MotionLink } from '@/components/MotionLink';
import { useCallback, useRef, useState } from 'react';
import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { MOCK_CART_ITEMS } from '@/data/mock-cart';

const accountLinks = [
  { href: '/products', label: 'Shop all parts' },
  { href: '/services', label: 'Services' },
  { href: '/products?q=Lighting', label: 'Lighting' },
  { href: '/products?q=Interior', label: 'Interior parts' },
  { href: '/checkout', label: 'Checkout' },
] as const;

const helpLinks = [
  { href: '/help-center', label: 'Help Center' },
  { href: '/shipping', label: 'Shipping & returns' },
  { href: '/legal', label: 'Legal & policies' },
] as const;

const iconTriggerClass =
  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border-0 bg-transparent p-0 text-black transition hover:bg-black/[0.06] active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20';

function useHoverPanelCloseDelay(delayMs: number) {
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clear = useCallback(() => {
    if (t.current) clearTimeout(t.current);
    t.current = null;
  }, []);
  const scheduleClose = useCallback(
    (setter: (v: boolean) => void) => {
      clear();
      t.current = setTimeout(() => setter(false), delayMs);
    },
    [clear, delayMs]
  );
  return { clear, scheduleClose };
}

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const cartHover = useHoverPanelCloseDelay(120);
  const accountHover = useHoverPanelCloseDelay(120);

  const subtotal = MOCK_CART_ITEMS.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const panelClass =
    'absolute right-0 top-full z-[100] w-[min(22rem,calc(100vw-1.5rem))] pt-1 [--anchor-gap:4px]';

  const dropdownSurface = 'rounded-md border-2 border-black bg-white';

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-black bg-[var(--primary-color)] pt-[env(safe-area-inset-top)]">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex min-h-14 items-center justify-between gap-2 sm:h-16">
          <div className="flex min-w-0 flex-1 items-center gap-2 pr-2 sm:gap-3">
            <MotionLink href="/" className="shrink-0" aria-label="Junkyard Car Parts home">
              <Image
                src="/brand-placeholder.svg"
                alt=""
                width={40}
                height={40}
                className="h-9 w-9 rounded-md border-2 border-black bg-white/80 object-cover sm:h-10 sm:w-10"
              />
            </MotionLink>
            <MotionLink
              href="/"
              className="truncate text-base font-bold leading-tight text-black sm:text-xl sm:leading-normal md:text-2xl"
            >
              JUNKYARD CAR PARTS
            </MotionLink>
          </div>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
            {/* Cart — icon trigger; hover shows cart preview */}
            <div
              className="relative"
              onMouseEnter={() => {
                cartHover.clear();
                setCartOpen(true);
              }}
              onMouseLeave={() => {
                cartHover.scheduleClose(setCartOpen);
              }}
            >
              <button
                type="button"
                className={iconTriggerClass}
                title="Cart"
                aria-expanded={cartOpen}
                aria-haspopup="true"
                aria-controls="nav-cart-dropdown"
                aria-label="Shopping cart"
              >
                <ShoppingCartIcon className="h-6 w-6" aria-hidden />
              </button>
              {cartOpen && (
                <div id="nav-cart-dropdown" className={panelClass} role="region" aria-label="Shopping cart preview">
                  <div className={`${dropdownSurface} max-h-[min(70vh,24rem)] overflow-y-auto p-4`}>
                    <p className="mb-3 text-xs font-bold uppercase tracking-wide text-gray-500">
                      Your cart
                    </p>
                    {MOCK_CART_ITEMS.length === 0 ? (
                      <p className="text-sm text-gray-600">Your cart is empty.</p>
                    ) : (
                      <ul className="space-y-3">
                        {MOCK_CART_ITEMS.map((item) => (
                          <li key={item.id} className="flex gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded border border-gray-200">
                              <Image
                                src={item.image}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="56px"
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold leading-snug text-gray-900 line-clamp-2">
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500">Qty {item.quantity}</p>
                              <p className="text-sm font-semibold text-gray-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-4 border-t border-gray-200 pt-3">
                      <div className="mb-3 flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <MotionLink
                          href="/cart"
                          className="block w-full rounded-md border-2 border-black bg-neutral-200 py-2.5 text-center text-sm font-bold text-black hover:bg-neutral-300"
                        >
                          View cart
                        </MotionLink>
                        <MotionLink
                          href="/checkout"
                          className="block w-full rounded-md border-2 border-black bg-neutral-900 py-2.5 text-center text-sm font-bold text-white hover:bg-neutral-800"
                        >
                          Checkout
                        </MotionLink>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Account — icon trigger; hover shows menu */}
            <div
              className="relative"
              onMouseEnter={() => {
                accountHover.clear();
                setAccountOpen(true);
              }}
              onMouseLeave={() => {
                accountHover.scheduleClose(setAccountOpen);
              }}
            >
              <button
                type="button"
                className={iconTriggerClass}
                title="Account"
                aria-expanded={accountOpen}
                aria-haspopup="true"
                aria-controls="nav-account-dropdown"
                aria-label="Account menu"
              >
                <UserCircleIcon className="h-6 w-6 shrink-0" aria-hidden />
              </button>
              {accountOpen && (
                <div id="nav-account-dropdown" className={panelClass} role="navigation" aria-label="Account menu">
                  <div className={`${dropdownSurface} max-h-[min(70vh,28rem)] overflow-y-auto py-2`}>
                    <p className="px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                      Shopping
                    </p>
                    {accountLinks.map((item) => (
                      <MotionLink
                        key={item.href}
                        href={item.href}
                        className="block min-h-11 w-full px-4 py-3 text-left text-sm text-gray-900 hover:bg-gray-100 sm:py-2"
                      >
                        {item.label}
                      </MotionLink>
                    ))}
                    <div className="my-1 border-t border-gray-200" />
                    <p className="px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                      Help &amp; legal
                    </p>
                    {helpLinks.map((item) => (
                      <MotionLink
                        key={item.href}
                        href={item.href}
                        className="block min-h-11 w-full px-4 py-3 text-left text-sm text-gray-900 hover:bg-gray-100 sm:py-2"
                      >
                        {item.label}
                      </MotionLink>
                    ))}
                    <div className="my-1 border-t border-gray-200" />
                    <a
                      href="mailto:support@junkyardcarparts.com"
                      className="block min-h-11 w-full px-4 py-3 text-left text-sm text-gray-900 hover:bg-gray-100 sm:py-2"
                    >
                      Email support
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
