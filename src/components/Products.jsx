import React from "react";
import { Star } from "lucide-react";

export default function Products() {
  const productList = [1, 2, 3];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Handpicked for Your Glow
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {productList.map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <img
                src={`https://source.unsplash.com/400x300/?natural,facecare&sig=${item}`}
                alt="Product"
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">
                  Glow Boost Serum
                </h4>
                <p className="text-sm text-gray-500 mt-1">Infused with Vitamin C & Turmeric</p>
                <div className="flex items-center mt-2 gap-1 text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400" />
                  ))}
                  <Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 text-sm text-gray-600">4.7</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-primary">₹549</p>
                <button className="mt-4 w-full bg-primary hover:bg-green-700 text-white py-2 rounded-full font-medium shadow-md">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
