import React from "react";

export default function Testimonials() {
  const feedbacks = [
    {
      name: "Aarav M.",
      quote: "My skin has never felt better. This is a must-try brand!",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Isha K.",
      quote: "Natural, affordable and smells amazing!",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold text-gray-800 mb-12">What People Are Saying</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {feedbacks.map((user, i) => (
            <div key={i} className="p-8 bg-gray-100 rounded-xl shadow-md text-left">
              <p className="text-lg font-medium text-gray-700 mb-4">“{user.quote}”</p>
              <div className="flex items-center gap-4">
                <img src={user.img} className="w-12 h-12 rounded-full" />
                <span className="font-semibold text-gray-800">{user.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
