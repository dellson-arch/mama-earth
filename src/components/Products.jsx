import React from "react";

const productList = [
  { id: 1, name: "Onion Hair Oil", price: "₹419", image: "/images/product1.png" },
  { id: 2, name: "Vitamin C Face Wash", price: "₹299", image: "/images/product2.png" },
  { id: 3, name: "Ubtan Face Mask", price: "₹349", image: "/images/product3.png" },
  { id: 4, name: "Charcoal Face Scrub", price: "₹279", image: "/images/product4.png" },
  { id: 5, name: "Tea Tree Shampoo", price: "₹325", image: "/images/product5.png" },
  { id: 6, name: "Aloe Vera Gel", price: "₹199", image: "/images/product6.png" },
  { id: 7, name: "Sunscreen SPF50+", price: "₹449", image: "/images/product7.png" },
  { id: 8, name: "Lip Balm Strawberry", price: "₹149", image: "/images/product8.png" },
];

export default function Products() {
  return (
    <section style={{ backgroundColor: "var(--bg)", color: "var(--text)" }} className="px-6 py-16 transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-8 text-center text-green-600 dark:text-green-400">Best Sellers</h2>
      <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-hide">
        {productList.map((product) => (
          <div
            key={product.id}
            style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
            className="min-w-[220px] rounded-2xl shadow-md p-4 flex-shrink-0 transition transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-3" />
            <h4 className="text-sm font-semibold">{product.name}</h4>
            <p className="text-green-600 dark:text-green-400 font-bold">{product.price}</p>
            <button className="mt-3 bg-green-600 hover:bg-green-700 text-[var(--text)] rounded-full py-1 px-4 text-sm transition">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}