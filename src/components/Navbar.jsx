// src/components/Navbar.jsx

import { useEffect, useState } from "react";
import {
  HiOutlineMenuAlt4,
  HiOutlineX,
  HiChevronDown,
  HiSearch,
} from "react-icons/hi";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    "Business Services",
    "Solutions",
    "Centraverse™",
    "Industries",
    "Company",
    "Insights",
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
          scroll
            ? "bg-[#0b0b0b]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
            : "bg-white border-b border-zinc-200"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-4 lg:px-8">
          <div className="h-[88px] flex items-center justify-between">

            {/* LOGO */}
            <a
              href="#home"
              className={`shrink-0 rounded-2xl transition-all duration-300 ${
                scroll
                  ? "bg-white px-4 py-2 shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
                  : "bg-transparent"
              }`}
            >
              <img
                src="/Logo-transparent.png"
                alt="Lotus Analytics"
                className="h-11 lg:h-12 object-contain"
              />
            </a>

            {/* DESKTOP MENU */}
            <div className="hidden xl:flex items-center gap-10 ml-auto">

              <div className="flex items-center gap-7">

                {menu.map((item, index) => (
                  <div key={index} className="group relative">

                    <button
                      className={`flex items-center gap-1 text-[15px] font-medium transition-all duration-300 ${
                        scroll
                          ? "text-white hover:text-[var(--sage-light)]"
                          : "text-[#505866] hover:text-black"
                      }`}
                    >
                      {item}

                      {item !== "Centraverse™" && (
                        <HiChevronDown className="text-[17px] transition duration-300 group-hover:rotate-180" />
                      )}
                    </button>

                    {/* DROPDOWN */}
                    {item !== "Centraverse™" && (
                      <div
                        className={`absolute right-0 top-full mt-3 w-[260px] rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.18)] ${
                          scroll
                            ? "bg-[#151515] border border-white/10"
                            : "bg-white border border-zinc-200"
                        }`}
                      >
                        <button
                          className={`block w-full text-left px-6 py-4 text-sm ${
                            scroll
                              ? "text-white/80 hover:bg-white/5 hover:text-white"
                              : "text-zinc-700 hover:bg-zinc-100"
                          }`}
                        >
                          AI Analytics
                        </button>

                        <button
                          className={`block w-full text-left px-6 py-4 text-sm ${
                            scroll
                              ? "text-white/80 hover:bg-white/5 hover:text-white"
                              : "text-zinc-700 hover:bg-zinc-100"
                          }`}
                        >
                          Business Automation
                        </button>

                        <button
                          className={`block w-full text-left px-6 py-4 text-sm ${
                            scroll
                              ? "text-white/80 hover:bg-white/5 hover:text-white"
                              : "text-zinc-700 hover:bg-zinc-100"
                          }`}
                        >
                          Enterprise Software
                        </button>
                      </div>
                    )}
                  </div>
                ))}

                {/* CONTACT */}
                <a
                  href="#contact"
                  className={`text-[15px] font-medium transition duration-300 ${
                    scroll
                      ? "text-white hover:text-[var(--sage-light)]"
                      : "text-[#505866] hover:text-black"
                  }`}
                >
                  Contact
                </a>
              </div>

              {/* SEARCH */}
              <button
                className={`flex items-center gap-3 px-5 h-11 rounded-full transition-all duration-300 ${
                  scroll
                    ? "bg-white/5 border border-white/10 text-white"
                    : "bg-zinc-100 border border-zinc-200 text-zinc-600"
                }`}
              >
                <HiSearch className="text-[20px]" />
                <span className="text-sm font-medium">Search...</span>
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`xl:hidden w-11 h-11 rounded-xl flex items-center justify-center transition duration-300 ${
                scroll
                  ? "bg-white/5 border border-white/10 text-white"
                  : "bg-zinc-100 border border-zinc-200 text-black"
              }`}
            >
              {mobileMenu ? (
                <HiOutlineX className="text-3xl" />
              ) : (
                <HiOutlineMenuAlt4 className="text-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (FIXED HERE) */}
        <div
          className={`xl:hidden transition-all duration-500 overflow-hidden ${
            mobileMenu
              ? "max-h-[900px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div
            className={`mx-4 mb-4 rounded-3xl overflow-hidden ${
              scroll
                ? "bg-[#111111] border border-white/10"
                : "bg-white border border-zinc-200"
            }`}
          >
            <div className="flex flex-col">

              {menu.concat("Contact").map((item, index) => (
                <button
                  key={index}
                  onClick={() => setMobileMenu(false)}
                  className={`w-full text-left px-6 py-5 text-[15px] border-b transition-all duration-300 ${
                    scroll
                      ? "border-white/10 text-white hover:bg-white/5"
                      : "border-zinc-200 text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

            {/* MOBILE SEARCH */}
            <div className="p-5">
              <div
                className={`h-14 rounded-2xl flex items-center gap-3 px-5 ${
                  scroll
                    ? "bg-white/5 border border-white/10"
                    : "bg-zinc-100 border border-zinc-200"
                }`}
              >
                <HiSearch
                  className={`text-2xl ${
                    scroll ? "text-zinc-400" : "text-zinc-500"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className={`bg-transparent outline-none w-full ${
                    scroll
                      ? "text-white placeholder:text-zinc-500"
                      : "text-black placeholder:text-zinc-500"
                  }`}
                />
              </div>
            </div>

          </div>
        </div>
      </nav>

      <div className="h-[88px]"></div>
    </>
  );
}