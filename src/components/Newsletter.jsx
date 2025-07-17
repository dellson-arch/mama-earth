import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-green-100 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-green-800 mb-4">Stay Updated</h3>
        <p className="text-gray-700 mb-8">
          Join our newsletter to get exclusive offers and skin care tips.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full w-full sm:w-2/3 focus:outline-none border border-gray-300"
          />
          <button className="bg-primary hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
