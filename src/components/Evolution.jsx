// components/Evolution.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const timelineData = [
  { year: "2011", items: ["HR Support", "Corporate Consultation Services", "Reel Time"] },
  { year: "2012", items: ["HR Support", "Corporate Consultation Services", "Reel Time"] },
  { year: "2013", items: ["Security Monitoring Compliance", "Calling Solutions"] },
  {
    year: "2014",
    items: [
      "RealTime Task Management",
      "Financial Offerings",
      "Software Development Wing",
      "Due Diligence Services",
    ],
  },
  { year: "2015", items: ["Business Intelligence", "Supply Chain Management", "Loss Prevention"] },
  { year: "2016", items: ["Fraud Prevention", "Inventory Solutions"] },
  { year: "2017", items: ["Facial Recognition", "Tax Compliance", "SAAS Offerings"] },
  { year: "2018", items: ["Drones", "RPA Automation", "Customer Tools", "Healthcare Solutions"] },
  { year: "2019", items: ["Centraverse", "Time Clock System", "Real Estate Tracking"] },
  { year: "2020", items: ["QR Systems", "Automation Tools", "Healthcare Systems"] },
  { year: "2021", items: ["Payroll Services", "HR End-to-End", "AI Document Capture"] },
];

export default function Evolution() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative py-24 bg-[#F5F0E8] overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,128,112,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(143,175,154,0.12),transparent_55%)]" />

      <div className="max-w-6xl mx-auto px-5 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-[#5A8070] font-semibold flex items-center justify-center gap-4">
            <span className="w-10 h-[1px] bg-[#5A8070]" />
            Our Journey
            <span className="w-10 h-[1px] bg-[#5A8070]" />
          </p>

          <h2 className="text-4xl md:text-6xl font-serif mt-5 text-[#1C1C1C]">
            Evolution In <span className="italic text-[#8FAF9A]">Motion</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Every year reflects our expansion into smarter automation, enterprise systems, and AI-driven workflows.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {timelineData.map((item, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50, scale: 0.95, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActive(isOpen ? null : index)}
                className="relative cursor-pointer group"
              >

                {/* YEAR BADGE */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05 + 0.2, type: "spring" }}
                  className="absolute -top-4 left-6 bg-[#8FAF9A] text-white text-sm px-4 py-1 rounded-full shadow-md group-hover:scale-110 transition"
                >
                  {item.year}
                </motion.div>

                {/* CARD */}
                <div className="bg-white/60 backdrop-blur-xl border border-[#8FAF9A]/25 rounded-2xl p-6 pt-10 shadow-sm hover:shadow-2xl transition-all duration-300">

                  {/* TITLE */}
                  <div className="text-lg font-semibold text-[#1C1C1C] mb-3">
                    Business Expansion
                  </div>

                  {/* PREVIEW */}
                  <p className="text-sm text-gray-500">
                    {item.items.slice(0, 2).join(", ")}...
                  </p>

                  {/* EXPAND */}
                  <AnimatePresence mode="wait">
                    {isOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="mt-4 pt-4 border-t border-[#8FAF9A]/30 space-y-2 overflow-hidden"
                      >
                        {item.items.map((text, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: i * 0.05,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-[#8FAF9A]">▹</span>
                            {text}
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}