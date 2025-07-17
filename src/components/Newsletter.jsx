import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 px-6 py-16 transition-colors duration-500"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-400">
          Get Beauty Tips & Offers
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Join our newsletter for weekly skincare & haircare advice.
        </p>
        <div className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-sm shadow-sm bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Subscribe
          </button>
        </div>
      </div>
    </motion.section>
  );
}
