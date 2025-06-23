'use client';
import Image from 'next/image';
const products = [
  {
    id: 1,
    title: 'Smart AI Assistant',
    description: 'Your next-gen personal assistant with natural voice recognition.',
    image: 'https://www.techasoft.com/uploads/1627303136894.png',
  },

  {
    id: 2,
    title: 'E-commerce Dashboard',
    description: 'Manage your online store with ease using our powerful dashboard.',
    image: 'https://www.techasoft.com/uploads/ekart_logo.png',
  },

  {
    id: 3,
    title: 'Mobile Banking App',
    description: 'A fast, secure, and intuitive banking app for modern users.',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=600&q=80',
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 space-y-16">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-x-4">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-gray-600">
            Explore our wide range of carefully crafted digital and physical products designed to meet your needs.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
          <Image
            src="https://www.techasoft.com/debug/img/banner_icon.png"
            alt="Product showcase"
            width={600}
            height={700}
            className="rounded-xl shadow-lg object-contain"
          />
        </div>
      </section>

      {/* Add Button */}
      <div className="flex justify-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 font-semibold shadow-md">
          Add Products
        </button>
      </div>

      {/* Product Grid */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Available Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <img
                src={product.image}
                alt={product.title}
                className="rounded mb-4 object-cover w-full h-[200px]"
              />
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {product.description}
              </p>
              <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
