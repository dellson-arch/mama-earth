import React from "react";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-green-50 to-green-100 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-green-800 leading-tight">
          Glow Naturally, Shine Exceptionally
        </h2>
        <p className="mt-6 text-lg text-green-700">
          Skincare that understands you — safe, clean, and stunningly effective.
        </p>
        <button className="mt-8 bg-primary hover:bg-green-700 transition text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg">
          Explore Collection
        </button>
      </div>
    </section>
  );
}
