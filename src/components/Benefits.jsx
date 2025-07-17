import React from "react";

export default function Benefits() {
  const items = [
    { title: "100% Natural", desc: "No chemicals. Only real ingredients." },
    { title: "Dermatologist Approved", desc: "Clinically tested & safe for all skin types." },
    { title: "Eco-Friendly", desc: "Sustainable packaging and cruelty-free." },
  ];

  return (
    <section className="bg-accent py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold text-gray-800 mb-12">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
