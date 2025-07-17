import React from "react";

const benefits = [
  { id: 1, title: "Personalized Care", desc: "Products that suit your skin", icon: "🧴" },
  { id: 2, title: "Free Shipping", desc: "On orders above ₹399", icon: "🚚" },
  { id: 3, title: "Secure Payment", desc: "100% secure transactions", icon: "🔒" },
];

export default function Benefits() {
  return (
    <section className="px-6 py-10 bg-[#f9fff9] dark:bg-gray-900 transition-colors duration-500">
      <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
        Why Mamaearth?
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div
            key={b.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow dark:shadow-md p-6 text-center transform transition-transform hover:scale-105 duration-300"
          >
            <div className="text-4xl mb-2">{b.icon}</div>
            <h3 className="font-semibold text-md text-gray-800 dark:text-white">
              {b.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
