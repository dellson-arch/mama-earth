import React from "react";

export default function Hero() {
  return (
    <div className="w-full px-6 py-14 bg-gradient-to-r from-green-50 via-white to-blue-50 grid md:grid-cols-3 gap-6">
      {/* We Plant card */}
      <div className="bg-[var(--bg)] rounded-2xl shadow-xl p-6 flex flex-col justify-between transition hover:scale-105 duration-300">
        <h2 className="text-2xl font-bold text-green-700 mb-2">We Plant</h2>
        <p className="text-sm text-gray-600 mb-4">For Every Product You Buy</p>
        <img src="/images/leaf.png" alt="Leaf" className="w-16" />
      </div>

      {/* Glow Serum banner */}
      <div className="md:col-span-2 bg-gradient-to-r from-[#c7f0ff] to-[#d5f7ff] rounded-2xl p-8 shadow-xl">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">
          Glow Serum Foundation
        </h2>
        <img
          src="/images/serum.png"
          alt="Glow Serum"
          className="w-full max-h-64 object-contain mx-auto"
        />
      </div>
    </div>
  );
}
