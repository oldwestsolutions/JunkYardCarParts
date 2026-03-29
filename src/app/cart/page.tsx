'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock cart data - in a real app, this would come from your state management
const cartItems = [
  {
    id: 1,
    name: 'Performance Exhaust System',
    price: 299.99,
    image:
      'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=400&q=80',
    quantity: 1,
  },
  {
    id: 2,
    name: 'LED Headlight Kit',
    price: 149.99,
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80',
    quantity: 2,
  },
];

export default function CartPage() {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 sm:text-3xl">Shopping Cart</h1>
        <p className="text-sm text-gray-600 mb-8 max-w-2xl">
          Review Copart-sourced and marketplace items together. At checkout you can
          choose Bitcoin on supported orders and schedule bonded mechanic installation
          with verified technicians in your area.
        </p>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <Link
              href="/products"
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row p-4 border-b last:border-b-0"
                  >
                    <div className="relative h-32 w-32 mb-4 sm:mb-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                        sizes="128px"
                      />
                    </div>
                    <div className="flex-1 sm:ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-red-600 font-semibold mt-1">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="flex items-center rounded-md border">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="min-h-11 min-w-11 px-3 py-2 text-lg text-gray-600 hover:bg-gray-100 touch-manipulation"
                          >
                            -
                          </button>
                          <span className="min-w-[2rem] px-2 py-2 text-center">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="min-h-11 min-w-11 px-3 py-2 text-lg text-gray-600 hover:bg-gray-100 touch-manipulation"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="ml-4 min-h-11 shrink-0 text-sm font-medium text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-semibold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="flex min-h-12 w-full items-center justify-center rounded-md bg-red-600 py-3 text-base font-semibold text-white hover:bg-red-700 transition-colors"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/products"
                  className="block text-center text-red-600 hover:text-red-700 mt-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 