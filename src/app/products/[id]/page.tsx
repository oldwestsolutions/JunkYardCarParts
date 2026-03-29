'use client';

import { useState } from 'react';
import Image from 'next/image';

// Mock product data - in a real app, this would come from your database
const product = {
  id: 1,
  name: 'Performance Exhaust System',
  price: 299.99,
  category: 'Exhaust',
  description:
    'High-performance exhaust system engineered for better flow, sound control, and durability. Listing data includes sourcing transparency so you know where it shipped from, how it was verified, and whether it moved through a Copart pipeline.',
  sourceLocation: 'Dalton, GA, USA · Verified supplier network',
  copartLotId: '8843215-US',
  condition: 'New – aftermarket (verified SKU)',
  verification:
    'Two-step supplier onboarding, invoice versus packing slip match, and destination photos prior to dispatch. Copart auction documentation archived for this lot where participation is permitted.',
  features: [
    'Stainless steel construction',
    'Improved exhaust flow',
    'Tuned acoustic profile',
    'Hardware kit included',
    'Install supports bonded mechanic booking',
  ],
  images: [
    'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1486262715619-67b85e81a29d?auto=format&fit=crop&w=1200&q=80',
  ],
  rating: 4.5,
  reviews: 128,
  inStock: true,
};

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <div className="relative mb-4 h-64 w-full sm:h-80 md:h-96">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width:768px)100vw,50vw"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-md sm:h-20 sm:w-20 touch-manipulation ${
                    selectedImage === index ? 'ring-2 ring-red-600' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full min-w-0 md:w-1/2">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 sm:text-3xl break-words">
              {product.name}
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-2xl font-bold text-red-600 mb-6">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-600 mb-6 sm:text-base break-words">{product.description}</p>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Sourcing, Copart data & verification
              </h2>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold text-gray-800">Source location: </span>
                {product.sourceLocation}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold text-gray-800">Copart lot ID: </span>
                {product.copartLotId} (displayed on Copart-sourced listings)
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold text-gray-800">Part condition: </span>
                {product.condition}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold text-gray-800">Verification: </span>
                {product.verification}
              </p>
              <p className="text-sm text-gray-600">
                Shoppers exploring <span className="font-medium">global auto parts
                Bitcoin</span> checkout paths and <span className="font-medium">
                Copart-sourced parts</span> disclosures will see the same data points
                mirrored on invoices for audit-friendly record keeping.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Crypto checkout & installation
              </h2>
              <p className="text-gray-700 mb-2">
                Purchase this part securely using Bitcoin.
              </p>
              <p className="text-gray-700 mb-2">
                Arrange professional installation with verified mechanics near you.
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Our bonded network documents complex assemblies so installs stay
                compliant from lift to final torque.
              </p>
              <p className="text-sm text-gray-600">
                Together, those services reinforce this{' '}
                <span className="font-medium">crypto car parts marketplace</span>{' '}
                experience without sacrificing the bonded mechanic installation standards
                professional installers expect.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 mb-6">
              <div className="flex w-fit items-center rounded-md border">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="min-h-11 min-w-11 px-3 py-2 text-lg text-gray-600 hover:bg-gray-100 touch-manipulation"
                >
                  -
                </button>
                <span className="min-w-[2.5rem] px-2 py-2 text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="min-h-11 min-w-11 px-3 py-2 text-lg text-gray-600 hover:bg-gray-100 touch-manipulation"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className={`min-h-12 w-full flex-1 rounded-md bg-red-600 px-4 py-3 text-base font-semibold text-white hover:bg-red-700 transition-colors sm:w-auto sm:min-w-[12rem] ${
                  !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold mb-2">Shipping & Returns</h3>
              <p className="text-gray-600">
                Free shipping on orders over $100 for domestic routes. International lanes
                may incur duties depending on supplier country. Returns follow a
                documented chain-of-custody policy—especially for Copart-linked inventory—so
                we can uphold regulated sourcing requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 