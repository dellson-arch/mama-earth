import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-12">
        <div>
          <h4 className="text-2xl font-bold text-white mb-3">PureGlow</h4>
          <p className="text-sm leading-relaxed">
            Discover radiant skin with nature-powered skincare that puts your well-being first.
          </p>
        </div>

        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">Offers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Reach Us</h5>
          <p className="text-sm">📧 hello@pureglow.in</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">📍 Bangalore, India</p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} PureGlow. Made with 💚 for Hackathons.
      </div>
    </footer>
  );
}
