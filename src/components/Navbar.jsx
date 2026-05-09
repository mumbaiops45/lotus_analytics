// // // // // // src/components/Navbar.jsx

// // // // // import { useEffect, useState } from "react";
// // // // // import {
// // // // //   HiOutlineMenuAlt4,
// // // // //   HiOutlineX,
// // // // //   HiChevronDown,
// // // // //   HiSearch,
// // // // // } from "react-icons/hi";

// // // // // export default function Navbar() {
// // // // //   const [mobileMenu, setMobileMenu] = useState(false);
// // // // //   const [scroll, setScroll] = useState(false);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       setScroll(window.scrollY > 40);
// // // // //     };

// // // // //     window.addEventListener("scroll", handleScroll);
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, []);

// // // // //   const menu = [
// // // // //     "Business Services",
// // // // //     "Solutions",
// // // // //     "Centraverse™",
// // // // //     "Industries",
// // // // //     "Company",
// // // // //     "Insights",
// // // // //   ];

// // // // //   return (
// // // // //     <>
// // // // //       <nav
// // // // //         className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${scroll
// // // // //             ? "bg-[#0b0b0b]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
// // // // //             : "bg-white border-b border-zinc-200"
// // // // //           }`}
// // // // //       >
// // // // //         <div className="max-w-[1500px] mx-auto px-4 lg:px-8">
// // // // //           <div className="h-[88px] flex items-center justify-between">
// // // // //             {/* LOGO */}
// // // // //             <a
// // // // //               href="#home"
// // // // //               className={`shrink-0 rounded-2xl transition-all duration-300 ${scroll
// // // // //                   ? "bg-white px-4 py-2 shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
// // // // //                   : "bg-transparent"
// // // // //                 }`}
// // // // //             >
// // // // //               <img
// // // // //                 src="/Logo-transparent.png"
// // // // //                 alt="Lotus Analytics"
// // // // //                 className="h-11 lg:h-12 object-contain"
// // // // //               />
// // // // //             </a>

// // // // //             {/* DESKTOP MENU */}
// // // // //             <div className="hidden xl:flex items-center gap-10 ml-auto">
// // // // //               <div className="flex items-center gap-7">
// // // // //                 {menu.map((item, index) => (
// // // // //                   <div key={index} className="group relative">
// // // // //                     <button
// // // // //                       className={`flex items-center gap-1 text-[15px] font-medium transition-all duration-300 ${scroll
// // // // //                           ? "text-white hover:text-[var(--sage-light)]"
// // // // //                           : "text-[#505866] hover:text-black"
// // // // //                         }`}
// // // // //                     >
// // // // //                       {item}
// // // // //                       {item !== "Centraverse™" && (
// // // // //                         <HiChevronDown className="text-[17px] transition duration-300 group-hover:rotate-180" />
// // // // //                       )}
// // // // //                     </button>

// // // // //                     {/* DROPDOWN – FIXED GAP (mt-1 instead of mt-3) */}
// // // // //                    {/* DROPDOWN */}
// // // // // {item !== "Centraverse™" && (
// // // // //   <div
// // // // //     className={`absolute left-0 top-full mt-1 min-w-[720px] rounded-2xl p-7 opacity-0 invisible translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-[0_25px_70px_rgba(0,0,0,0.18)] ${
// // // // //       scroll
// // // // //         ? "bg-[#151515] border border-white/10"
// // // // //         : "bg-white border border-zinc-200"
// // // // //     }`}
// // // // //   >
// // // // //     <div className="grid grid-cols-2 gap-x-16 gap-y-5">
// // // // //       {/* LEFT COLUMN */}
// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">📊</span>
// // // // //         <span className="text-[17px] font-semibold">
// // // // //           Accounting & Finance
// // // // //         </span>
// // // // //       </button>

// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">🔗</span>
// // // // //         <span className="text-[17px] font-semibold">
// // // // //           Loss Prevention
// // // // //         </span>
// // // // //       </button>

// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">🧾</span>
// // // // //         <span className="text-[17px] font-semibold">
// // // // //           Reconciliation
// // // // //         </span>
// // // // //       </button>

// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">⚙️</span>
// // // // //         <span className="text-[17px] font-semibold">
// // // // //           RPA & Automation
// // // // //         </span>
// // // // //       </button>

// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">📋</span>
// // // // //         <span className="text-[17px] font-semibold">
// // // // //           Supply Chain Management
// // // // //         </span>
// // // // //       </button>

// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">👨‍💼</span>
// // // // //         <span className="text-[17px] font-semibold">HR</span>
// // // // //       </button>

// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">✅</span>
// // // // //         <span className="text-[17px] font-semibold">Compliance</span>
// // // // //       </button>

// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">🚚</span>
// // // // //         <span className="text-[17px] font-semibold">
// // // // //           Logistics & Reverse Logistics
// // // // //         </span>
// // // // //       </button>

// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">📈</span>
// // // // //         <span className="text-[17px] font-semibold">
// // // // //           Custom Insights
// // // // //         </span>
// // // // //       </button>

// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">💼</span>
// // // // //         <span className="text-[17px] font-semibold">
// // // // //           Business Consulting
// // // // //         </span>
// // // // //       </button>

// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">🛠️</span>
// // // // //         <span className="text-[17px] font-semibold">
// // // // //           Custom Developments
// // // // //         </span>
// // // // //       </button>

// // // // //       <button
// // // // //         className={`flex items-center gap-4 text-left transition-all duration-200 ${
// // // // //           scroll
// // // // //             ? "text-white/80 hover:text-white"
// // // // //             : "text-zinc-700 hover:text-black"
// // // // //         }`}
// // // // //       >
// // // // //         <span className="text-2xl">💰</span>
// // // // //         <span className="text-[17px] font-semibold">
// // // // //           The Processing Partners
// // // // //         </span>
// // // // //       </button>
// // // // //     </div>
// // // // //   </div>
// // // // // )}
// // // // //                   </div>
// // // // //                 ))}

// // // // //                 {/* CONTACT */}
// // // // //                 <a
// // // // //                   href="#contact"
// // // // //                   className={`text-[15px] font-medium transition duration-300 ${scroll
// // // // //                       ? "text-white hover:text-[var(--sage-light)]"
// // // // //                       : "text-[#505866] hover:text-black"
// // // // //                     }`}
// // // // //                 >
// // // // //                   Contact
// // // // //                 </a>
// // // // //               </div>

// // // // //               {/* SEARCH */}
// // // // //               <button
// // // // //                 className={`flex items-center gap-3 px-5 h-11 rounded-full transition-all duration-300 ${scroll
// // // // //                     ? "bg-white/5 border border-white/10 text-white"
// // // // //                     : "bg-zinc-100 border border-zinc-200 text-zinc-600"
// // // // //                   }`}
// // // // //               >
// // // // //                 <HiSearch className="text-[20px]" />
// // // // //                 <span className="text-sm font-medium">Search...</span>
// // // // //               </button>
// // // // //             </div>

// // // // //             {/* MOBILE BUTTON */}
// // // // //             <button
// // // // //               onClick={() => setMobileMenu(!mobileMenu)}
// // // // //               className={`xl:hidden w-11 h-11 rounded-xl flex items-center justify-center transition duration-300 ${scroll
// // // // //                   ? "bg-white/5 border border-white/10 text-white"
// // // // //                   : "bg-zinc-100 border border-zinc-200 text-black"
// // // // //                 }`}
// // // // //             >
// // // // //               {mobileMenu ? (
// // // // //                 <HiOutlineX className="text-3xl" />
// // // // //               ) : (
// // // // //                 <HiOutlineMenuAlt4 className="text-3xl" />
// // // // //               )}
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* MOBILE MENU */}
// // // // //         <div
// // // // //           className={`xl:hidden transition-all duration-500 overflow-hidden ${mobileMenu
// // // // //               ? "max-h-[900px] opacity-100 visible"
// // // // //               : "max-h-0 opacity-0 invisible"
// // // // //             }`}
// // // // //         >
// // // // //           <div
// // // // //             className={`mx-4 mb-4 rounded-3xl overflow-hidden ${scroll
// // // // //                 ? "bg-[#111111] border border-white/10"
// // // // //                 : "bg-white border border-zinc-200"
// // // // //               }`}
// // // // //           >
// // // // //             <div className="flex flex-col">
// // // // //               {menu.concat("Contact").map((item, index) => (
// // // // //                 <button
// // // // //                   key={index}
// // // // //                   onClick={() => setMobileMenu(false)}
// // // // //                   className={`w-full text-left px-6 py-5 text-[15px] border-b transition-all duration-300 ${scroll
// // // // //                       ? "border-white/10 text-white hover:bg-white/5"
// // // // //                       : "border-zinc-200 text-zinc-700 hover:bg-zinc-100"
// // // // //                     }`}
// // // // //                 >
// // // // //                   {item}
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* MOBILE SEARCH */}
// // // // //             <div className="p-5">
// // // // //               <div
// // // // //                 className={`h-14 rounded-2xl flex items-center gap-3 px-5 ${scroll
// // // // //                     ? "bg-white/5 border border-white/10"
// // // // //                     : "bg-zinc-100 border border-zinc-200"
// // // // //                   }`}
// // // // //               >
// // // // //                 <HiSearch
// // // // //                   className={`text-2xl ${scroll ? "text-zinc-400" : "text-zinc-500"
// // // // //                     }`}
// // // // //                 />
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   placeholder="Search..."
// // // // //                   className={`bg-transparent outline-none w-full ${scroll
// // // // //                       ? "text-white placeholder:text-zinc-500"
// // // // //                       : "text-black placeholder:text-zinc-500"
// // // // //                     }`}
// // // // //                 />
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </nav>

// // // // //       <div className="h-[88px]"></div>
// // // // //     </>
// // // // //   );
// // // // // }


// // // // // src/components/Navbar.jsx

// // // // import { useEffect, useState } from "react";
// // // // import {
// // // //   HiOutlineMenuAlt4,
// // // //   HiOutlineX,
// // // //   HiChevronDown,
// // // //   HiSearch,
// // // // } from "react-icons/hi";

// // // // export default function Navbar() {
// // // //   const [mobileMenu, setMobileMenu] = useState(false);
// // // //   const [scroll, setScroll] = useState(false);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       setScroll(window.scrollY > 40);
// // // //     };

// // // //     window.addEventListener("scroll", handleScroll);
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, []);

// // // //   const menu = [
// // // //     "Business Services",
// // // //     "Solutions",
// // // //     "Centraverse™",
// // // //     "Industries",
// // // //     "Company",
// // // //     "Insights",
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       <nav
// // // //         className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
// // // //           scroll
// // // //             ? "bg-[#0b0b0b]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
// // // //             : "bg-white border-b border-zinc-200"
// // // //         }`}
// // // //       >
// // // //         <div className="max-w-[1500px] mx-auto px-4 lg:px-8">
// // // //           <div className="h-[88px] flex items-center justify-between">
// // // //             {/* LOGO */}
// // // //             <a
// // // //               href="#home"
// // // //               className={`shrink-0 rounded-2xl transition-all duration-300 ${
// // // //                 scroll ? "bg-white px-4 py-2" : "bg-transparent"
// // // //               }`}
// // // //             >
// // // //               <img
// // // //                 src="/Logo-transparent.png"
// // // //                 alt="Logo"
// // // //                 className="h-11 lg:h-12 object-contain"
// // // //               />
// // // //             </a>

// // // //             {/* DESKTOP MENU */}
// // // //             <div className="hidden xl:flex items-center gap-10 ml-auto">
// // // //               <div className="flex items-center gap-7">
// // // //                 {menu.map((item, index) => (
// // // //                   <div key={index} className="group relative">
// // // //                     <button
// // // //                       className={`flex items-center gap-1 text-[15px] font-medium transition-all duration-300 ${
// // // //                         scroll
// // // //                           ? "text-white hover:text-[var(--sage-light)]"
// // // //                           : "text-[#505866] hover:text-black"
// // // //                       }`}
// // // //                     >
// // // //                       {item}
// // // //                       {item !== "Centraverse™" && (
// // // //                         <HiChevronDown className="transition group-hover:rotate-180" />
// // // //                       )}
// // // //                     </button>

// // // //                     {/* DROPDOWN */}
// // // //                     {item !== "Centraverse™" && (
// // // //                       <div
// // // //                         className={`absolute left-0 top-full mt-1 min-w-[720px] rounded-2xl p-7 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50 ${
// // // //                           scroll
// // // //                             ? "bg-[#151515] border border-white/10"
// // // //                             : "bg-white border border-zinc-200"
// // // //                         }`}
// // // //                       >
// // // //                         <div className="grid grid-cols-2 gap-5">
// // // //                           {[
// // // //                             "Accounting & Finance",
// // // //                             "Loss Prevention",
// // // //                             "Reconciliation",
// // // //                             "RPA & Automation",
// // // //                             "Supply Chain Management",
// // // //                             "HR",
// // // //                             "Compliance",
// // // //                             "Logistics & Reverse Logistics",
// // // //                             "Custom Insights",
// // // //                             "Business Consulting",
// // // //                             "Custom Developments",
// // // //                             "Processing Partners",
// // // //                           ].map((label, i) => (
// // // //                             <button
// // // //                               key={i}
// // // //                               className={`flex items-center gap-3 text-left ${
// // // //                                 scroll
// // // //                                   ? "text-white/80 hover:text-white"
// // // //                                   : "text-zinc-700 hover:text-black"
// // // //                               }`}
// // // //                             >
// // // //                               <span>•</span>
// // // //                               <span className="font-medium">{label}</span>
// // // //                             </button>
// // // //                           ))}
// // // //                         </div>
// // // //                       </div>
// // // //                     )}
// // // //                   </div>
// // // //                 ))}

// // // //                 <a
// // // //                   href="#contact"
// // // //                   className={`text-[15px] font-medium ${
// // // //                     scroll
// // // //                       ? "text-white hover:text-[var(--sage-light)]"
// // // //                       : "text-[#505866] hover:text-black"
// // // //                   }`}
// // // //                 >
// // // //                   Contact
// // // //                 </a>
// // // //               </div>

// // // //               <button
// // // //                 className={`flex items-center gap-3 px-5 h-11 rounded-full ${
// // // //                   scroll
// // // //                     ? "bg-white/5 border border-white/10 text-white"
// // // //                     : "bg-zinc-100 border border-zinc-200 text-zinc-600"
// // // //                 }`}
// // // //               >
// // // //                 <HiSearch />
// // // //                 Search...
// // // //               </button>
// // // //             </div>

// // // //             {/* MOBILE */}
// // // //             <button
// // // //               onClick={() => setMobileMenu(!mobileMenu)}
// // // //               className="xl:hidden w-11 h-11 flex items-center justify-center"
// // // //             >
// // // //               {mobileMenu ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* MOBILE MENU */}
// // // //         <div
// // // //           className={`xl:hidden transition-all duration-500 overflow-hidden ${
// // // //             mobileMenu ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
// // // //           }`}
// // // //         >
// // // //           <div className="p-4">
// // // //             {[...menu, "Contact"].map((item, i) => (
// // // //               <div key={i} className="py-3 border-b border-zinc-200">
// // // //                 {item}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </nav>
// // // //     </>
// // // //   );
// // // // }


// // // import { useEffect, useState } from "react";
// // // import {
// // //   HiOutlineMenuAlt4,
// // //   HiOutlineX,
// // //   HiChevronDown,
// // //   HiSearch,
// // //   HiOutlineCalculator,
// // //   HiOutlineShieldCheck,
// // //   HiOutlineRefresh,
// // //   HiOutlineCog,
// // //   HiOutlineTruck,
// // //   HiOutlineUserGroup,
// // //   HiOutlineCheckCircle,
// // //   HiOutlineCube,
// // //   HiOutlineChartBar,
// // //   HiOutlineBriefcase,
// // //   HiOutlineCode,
// // //   HiOutlineCurrencyDollar,
// // // } from "react-icons/hi";

// // // export default function Navbar() {
// // //   const [mobileMenu, setMobileMenu] = useState(false);
// // //   const [scroll, setScroll] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => setScroll(window.scrollY > 40);
// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const businessServices = [
// // //     { label: "Accounting & Finance", icon: HiOutlineCalculator, path: "/business-services/accounting-finance" },
// // //     { label: "Loss Prevention", icon: HiOutlineShieldCheck },
// // //     { label: "Reconciliation", icon: HiOutlineRefresh },
// // //     { label: "RPA & Automation", icon: HiOutlineCog },
// // //     { label: "Supply Chain Management", icon: HiOutlineTruck },
// // //     { label: "HR", icon: HiOutlineUserGroup },
// // //     { label: "Compliance", icon: HiOutlineCheckCircle },
// // //     { label: "Logistics & Reverse Logistics", icon: HiOutlineCube },
// // //     { label: "Custom Insights", icon: HiOutlineChartBar },
// // //     { label: "Business Consulting", icon: HiOutlineBriefcase },
// // //     { label: "Custom Developments", icon: HiOutlineCode },
// // //     { label: "The Processing Partners", icon: HiOutlineCurrencyDollar },
// // //   ];

// // //   const menu = [
// // //     "Business Services",
// // //     "Solutions",
// // //     "Centraverse™",
// // //     "Industries",
// // //     "Company",
// // //     "Insights",
// // //   ];

// // //   return (
// // //     <>
// // //       <nav
// // //         className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${scroll
// // //             ? "bg-[#0b0b0b]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
// // //             : "bg-white border-b border-zinc-200"
// // //           }`}
// // //       >
// // //         <div className="max-w-[1500px] mx-auto px-4 lg:px-8">
// // //           <div className="h-[88px] flex items-center justify-between">

// // //             {/* LOGO */}
// // //             <a href="#home" className="shrink-0">
// // //               <img src="/Logo-transparent.png" className="h-11" />
// // //             </a>

// // //             {/* DESKTOP MENU */}
// // //             <div className="hidden xl:flex items-center gap-10 ml-auto">

// // //               {menu.map((item, index) => (
// // //                 <div key={index} className="group relative">

// // //                   <button
// // //                     className={`flex items-center gap-1 text-[15px] font-medium ${scroll ? "text-white" : "text-[#505866]"
// // //                       }`}
// // //                   >
// // //                     {item}
// // //                     {item !== "Centraverse™" && (
// // //                       <HiChevronDown className="group-hover:rotate-180 transition" />
// // //                     )}
// // //                   </button>

// // //                   {/* MEGA DROPDOWN */}
// // //                   {item === "Business Services" && (
// // //                     <div
// // //                       className={`absolute left-0 top-full mt-2 w-[750px] rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl ${scroll
// // //                           ? "bg-[#151515] border border-white/10"
// // //                           : "bg-white border border-zinc-200"
// // //                         }`}
// // //                     >
// // //                       <div className="grid grid-cols-2 gap-4">

// // //                         {businessServices.map((service, i) => {
// // //                           const Icon = service.icon;

// // //                           return (
// // //                             <div
// // //                               key={i}
// // //                               className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${scroll
// // //                                   ? "hover:bg-white/5 text-white/80 hover:text-white"
// // //                                   : "hover:bg-zinc-100 text-zinc-700 hover:text-black"
// // //                                 }`}
// // //                             >
// // //                               <Icon className="text-xl text-[#8FAF9A]" />
// // //                               <span className="text-[15px] font-medium">
// // //                                 {service.label}
// // //                               </span>
// // //                             </div>
// // //                           );
// // //                         })}

// // //                       </div>
// // //                     </div>
// // //                   )}

// // //                 </div>
// // //               ))}

// // //               <a
// // //                 href="#contact"
// // //                 className={`text-[15px] font-medium ${scroll ? "text-white" : "text-[#505866]"
// // //                   }`}
// // //               >
// // //                 Contact
// // //               </a>
// // //             </div>

// // //             {/* MOBILE */}
// // //             <button
// // //               onClick={() => setMobileMenu(!mobileMenu)}
// // //               className="xl:hidden text-2xl"
// // //             >
// // //               {mobileMenu ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
// // //             </button>

// // //           </div>
// // //         </div>
// // //       </nav>
// // //     </>
// // //   );
// // // } 









// // import { useEffect, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";   // ✅ add this
// // import {
// //   HiOutlineMenuAlt4,
// //   HiOutlineX,
// //   HiChevronDown,
// //   HiSearch,
// //   HiOutlineCalculator,
// //   HiOutlineShieldCheck,
// //   HiOutlineRefresh,
// //   HiOutlineCog,
// //   HiOutlineTruck,
// //   HiOutlineUserGroup,
// //   HiOutlineCheckCircle,
// //   HiOutlineCube,
// //   HiOutlineChartBar,
// //   HiOutlineBriefcase,
// //   HiOutlineCode,
// //   HiOutlineCurrencyDollar,
// // } from "react-icons/hi";

// // export default function Navbar() {
// //   const [mobileMenu, setMobileMenu] = useState(false);
// //   const [scroll, setScroll] = useState(false);
// //   const navigate = useNavigate();   // ✅ for programmatic navigation

// //   useEffect(() => {
// //     const handleScroll = () => setScroll(window.scrollY > 40);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const businessServices = [
// //     { label: "Accounting & Finance", icon: HiOutlineCalculator, path: "/business-services/accounting-finance" },
// //     { label: "Loss Prevention", icon: HiOutlineShieldCheck, path: "/business-services/loss-prevention" },
// //     { label: "Reconciliation", icon: HiOutlineRefresh, path: "/business-services/reconciliation" },
// //     { label: "RPA & Automation", icon: HiOutlineCog, path: "/business-services/rpa-automation" },
// //     { label: "Supply Chain Management", icon: HiOutlineTruck, path: "/business-services/supply-chain-management" },
// //     { label: "HR", icon: HiOutlineUserGroup, path: "/business-services/hr" },
// //     { label: "Compliance", icon: HiOutlineCheckCircle, path: "/business-services/compliance" },
// //     { label: "Logistics & Reverse Logistics", icon: HiOutlineCube, path: "/business-services/logisti-reverse-logistics" },
// //     { label: "Custom Insights", icon: HiOutlineChartBar, path: "/business-services/custom-insights" },
// //     { label: "Business Consulting", icon: HiOutlineBriefcase, path: "/business-services/consulting" },
// //     { label: "Custom Developments", icon: HiOutlineCode, path: "/business-services/custom-developments" },
// //     { label: "The Processing Partners", icon: HiOutlineCurrencyDollar, path: "/business-services/processing-partners" },
// //   ];

// //   const menu = [
// //     "Business Services",
// //     "Solutions",
// //     "Centraverse™",
// //     "Industries",
// //     "Company",
// //     "Insights",
// //   ];

// //   // Handle click on Accounting & Finance (or any service item)
// //   const handleServiceClick = (path) => {
// //     navigate(path);
// //     setMobileMenu(false); // close mobile menu if open
// //   };

// //   return (
// //     <nav
// //       className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
// //         scroll
// //           ? "bg-[#0b0b0b]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
// //           : "bg-white border-b border-zinc-200"
// //       }`}
// //     >
// //       <div className="max-w-[1500px] mx-auto px-4 lg:px-8">
// //         <div className="h-[88px] flex items-center justify-between">

// //           {/* LOGO */}
// //           <Link to="/" className="shrink-0">
// //             <img src="/Logo-transparent.png" className="h-11" alt="Logo" />
// //           </Link>

// //           {/* DESKTOP MENU */}
// //           <div className="hidden xl:flex items-center gap-10 ml-auto">
// //             {menu.map((item, index) => (
// //               <div key={index} className="group relative">
// //                 <button
// //                   className={`flex items-center gap-1 text-[15px] font-medium ${
// //                     scroll ? "text-white" : "text-[#505866]"
// //                   }`}
// //                 >
// //                   {item}
// //                   {item !== "Centraverse™" && (
// //                     <HiChevronDown className="group-hover:rotate-180 transition" />
// //                   )}
// //                 </button>

// //                 {/* MEGA DROPDOWN */}
// //                 {item === "Business Services" && (
// //                   <div
// //                     className={`absolute left-0 top-full mt-2 w-[750px] rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl ${
// //                       scroll
// //                         ? "bg-[#151515] border border-white/10"
// //                         : "bg-white border border-zinc-200"
// //                     }`}
// //                   >
// //                     <div className="grid grid-cols-2 gap-4">
// //                       {businessServices.map((service, i) => {
// //                         const Icon = service.icon;
// //                         return (
// //                           <div
// //                             key={i}
// //                             onClick={() => handleServiceClick(service.path)}
// //                             className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
// //                               scroll
// //                                 ? "hover:bg-white/5 text-white/80 hover:text-white"
// //                                 : "hover:bg-zinc-100 text-zinc-700 hover:text-black"
// //                             }`}
// //                           >
// //                             <Icon className="text-xl text-[#8FAF9A]" />
// //                             <span className="text-[15px] font-medium">
// //                               {service.label}
// //                             </span>
// //                           </div>
// //                         );
// //                       })}
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}

// //             <Link
// //               to="/contact"
// //               className={`text-[15px] font-medium ${
// //                 scroll ? "text-white" : "text-[#505866]"
// //               }`}
// //             >
// //               Contact
// //             </Link>
// //           </div>

// //           {/* MOBILE BUTTON */}
// //           <button
// //             onClick={() => setMobileMenu(!mobileMenu)}
// //             className="xl:hidden text-2xl"
// //           >
// //             {mobileMenu ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu Content (optional but recommended) */}
// //       {mobileMenu && (
// //         <div className="xl:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0b0b0b] border-b border-zinc-200 dark:border-white/10 p-4 flex flex-col gap-3">
// //           {businessServices.map((service, i) => (
// //             <div
// //               key={i}
// //               onClick={() => handleServiceClick(service.path)}
// //               className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-zinc-100 dark:hover:bg-white/5"
// //             >
// //               <service.icon className="text-xl text-[#8FAF9A]" />
// //               <span className="text-[15px] font-medium">{service.label}</span>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }





// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   HiOutlineMenuAlt4,
//   HiOutlineX,
//   HiChevronDown,
//   HiSearch,
//   HiOutlineCalculator,
//   HiOutlineShieldCheck,
//   HiOutlineRefresh,
//   HiOutlineCog,
//   HiOutlineTruck,
//   HiOutlineUserGroup,
//   HiOutlineCheckCircle,
//   HiOutlineCube,
//   HiOutlineChartBar,
//   HiOutlineBriefcase,
//   HiOutlineCode,
//   HiOutlineCurrencyDollar,
// } from "react-icons/hi";

// export default function Navbar() {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [scroll, setScroll] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleScroll = () => setScroll(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const businessServices = [
//     { label: "Accounting & Finance", icon: HiOutlineCalculator, path: "/business-services/accounting-finance" },
//     { label: "Loss Prevention", icon: HiOutlineShieldCheck, path: "/business-services/loss-prevention" },
//     { label: "Reconciliation", icon: HiOutlineRefresh, path: "/business-services/reconciliation" },
//     { label: "RPA & Automation", icon: HiOutlineCog, path: "/business-services/rpa-automation" },
//     { label: "Supply Chain Management", icon: HiOutlineTruck, path: "/business-services/supply-chain-management" },
//     { label: "HR", icon: HiOutlineUserGroup, path: "/business-services/hr" },
//     { label: "Compliance", icon: HiOutlineCheckCircle, path: "/business-services/compliance" },
//     { label: "Logistics & Reverse Logistics", icon: HiOutlineCube, path: "/business-services/logisti-reverse-logistics" },
//     { label: "Custom Insights", icon: HiOutlineChartBar, path: "/business-services/custom-insights" },
//     { label: "Business Consulting", icon: HiOutlineBriefcase, path: "/business-services/business-consulting" },
//     { label: "Custom Developments", icon: HiOutlineCode, path: "/business-services/custom-developments" },
//     { label: "The Processing Partners", icon: HiOutlineCurrencyDollar, path: "/business-services/payroll" },
//   ];

//   const menu = [
//     "Business Services",
//     "Solutions",
//     "Centraverse™",
//     "Industries",
//     "Company",
//     "Insights",
//   ];

//   const handleServiceClick = (path) => {
//     navigate(path);
//     setMobileMenu(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
//         scroll
//           ? "bg-[#0b0b0b]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
//           : "bg-white border-b border-zinc-200"
//       }`}
//     >
//       <div className="max-w-[1500px] mx-auto px-4 lg:px-8">
//         <div className="h-[88px] flex items-center justify-between">

//           {/* LOGO */}
//           <Link to="/" className="shrink-0">
//             <img
//               src="/Logo-transparent.png"
//               className="h-11 transition-all duration-300"
//               alt="Logo"
//               style={{
//                 filter: scroll ? "brightness(0) invert(1)" : "none",
//               }}
//             />
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden xl:flex items-center gap-10 ml-auto">
//             {menu.map((item, index) => (
//               <div key={index} className="group relative">
//                 <button
//                   className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
//                     scroll ? "text-white" : "text-[#505866]"
//                   }`}
//                 >
//                   {item}
//                   {item !== "Centraverse™" && (
//                     <HiChevronDown className="group-hover:rotate-180 transition" />
//                   )}
//                 </button>

//                 {/* MEGA DROPDOWN */}
//                 {item === "Business Services" && (
//                   <div
//                     className={`absolute left-0 top-full mt-2 w-[450px] rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl ${
//                       scroll
//                         ? "bg-[#151515] border border-white/10"
//                         : "bg-white border border-zinc-200"
//                     }`}
//                   >
//                     <div className="grid grid-cols-2 gap-2">
//                       {businessServices.map((service, i) => {
//                         const Icon = service.icon;
//                         return (
//                           <div
//                             key={i}
//                             onClick={() => handleServiceClick(service.path)}
//                             className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
//                               scroll
//                                 ? "hover:bg-white/5 text-white/80 hover:text-white"
//                                 : "hover:bg-zinc-100 text-zinc-700 hover:text-black"
//                             }`}
//                           >
//                             <Icon className="text-xl text-[#8FAF9A]" />
//                             <span className="text-[15px] font-medium">
//                               {service.label}
//                             </span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}

//             <Link
//               to="/contact"
//               className={`text-[15px] font-medium transition-colors ${
//                 scroll ? "text-white" : "text-[#505866]"
//               }`}
//             >
//               Contact
//             </Link>
//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             onClick={() => setMobileMenu(!mobileMenu)}
//             className="xl:hidden text-2xl transition-colors duration-300"
//             style={{ color: scroll ? "white" : "#111" }}
//           >
//             {mobileMenu ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {mobileMenu && (
//         <div className="xl:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0b0b0b] border-b border-zinc-200 dark:border-white/10 p-4 flex flex-col gap-3">
//           {businessServices.map((service, i) => (
//             <div
//               key={i}
//               onClick={() => handleServiceClick(service.path)}
//               className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-zinc-100 dark:hover:bg-white/5"
//             >
//               <service.icon className="text-xl text-[#8FAF9A]" />
//               <span className="text-[15px] font-medium">{service.label}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineMenuAlt4,
  HiOutlineX,
  HiChevronDown,
  HiOutlineCalculator,
  HiOutlineShieldCheck,
  HiOutlineRefresh,
  HiOutlineCog,
  HiOutlineTruck,
  HiOutlineUserGroup,
  HiOutlineCheckCircle,
  HiOutlineCube,
  HiOutlineChartBar,
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const businessServices = [
    { label: "Accounting & Finance", icon: HiOutlineCalculator, path: "/business-services/accounting-finance" },
    { label: "Loss Prevention", icon: HiOutlineShieldCheck, path: "/business-services/loss-prevention" },
    { label: "Reconciliation", icon: HiOutlineRefresh, path: "/business-services/reconciliation" },
    { label: "RPA & Automation", icon: HiOutlineCog, path: "/business-services/rpa-automation" },
    { label: "Supply Chain Management", icon: HiOutlineTruck, path: "/business-services/supply-chain-management" },
    { label: "HR", icon: HiOutlineUserGroup, path: "/business-services/hr" },
    { label: "Compliance", icon: HiOutlineCheckCircle, path: "/business-services/compliance" },
    { label: "Logistics & Reverse Logistics", icon: HiOutlineCube, path: "/business-services/logisti-reverse-logistics" },
    { label: "Custom Insights", icon: HiOutlineChartBar, path: "/business-services/custom-insights" },
    { label: "Business Consulting", icon: HiOutlineBriefcase, path: "/business-services/business-consulting" },
    { label: "Custom Developments", icon: HiOutlineCode, path: "/business-services/custom-developments" },
    { label: "The Processing Partners", icon: HiOutlineCurrencyDollar, path: "/business-services/payroll" },
  ];

  const mainMenuItems = [
    "Business Services",
    "Solutions",
    "Centraverse™",
    "Industries",
    "Company",
    "Insights",
  ];

  // Handle click on main menu items (non‑Business Services) – close mobile menu
  const handleMainMenuClick = (item) => {
    setMobileMenu(false);
    // Optional: add navigation logic for other sections
    // e.g., if (item === "Solutions") navigate("/solutions");
  };

  const handleServiceClick = (path) => {
    navigate(path);
    setMobileMenu(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        scroll
          ? "bg-[#0b0b0b]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
          : "bg-white border-b border-zinc-200"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-4 lg:px-8">
        <div className="h-[88px] flex items-center justify-between">
          {/* LOGO – inverts on dark background */}
          <Link to="/" className="shrink-0">
            <img
              src="/Logo-transparent.png"
              className="h-11 transition-all duration-300"
              alt="Logo"
              style={{
                filter: scroll ? "brightness(0) invert(1)" : "none",
              }}
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex items-center gap-10 ml-auto">
            {mainMenuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
                    scroll ? "text-white" : "text-[#505866]"
                  }`}
                >
                  {item}
                  {item !== "Centraverse™" && (
                    <HiChevronDown className="group-hover:rotate-180 transition" />
                  )}
                </button>

                {/* MEGA DROPDOWN – only Business Services */}
                {item === "Business Services" && (
                  <div
                    className={`absolute left-0 top-full mt-2 w-[450px] rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl ${
                      scroll
                        ? "bg-[#151515] border border-white/10"
                        : "bg-white border border-zinc-200"
                    }`}
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {businessServices.map((service, i) => {
                        const Icon = service.icon;
                        return (
                          <div
                            key={i}
                            onClick={() => handleServiceClick(service.path)}
                            className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
                              scroll
                                ? "hover:bg-white/5 text-white/80 hover:text-white"
                                : "hover:bg-zinc-100 text-zinc-700 hover:text-black"
                            }`}
                          >
                            <Icon className="text-xl text-[#8FAF9A]" />
                            <span className="text-[15px] font-medium">
                              {service.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className={`text-[15px] font-medium transition-colors ${
                scroll ? "text-white" : "text-[#505866]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="xl:hidden text-2xl transition-colors duration-300"
            style={{ color: scroll ? "white" : "#111" }}
          >
            {mobileMenu ? <HiOutlineX /> : <HiOutlineMenuAlt4 />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (full drawer) */}
      {mobileMenu && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0b0b0b] border-b border-zinc-200 dark:border-white/10 max-h-[80vh] overflow-y-auto shadow-xl">
          <div className="p-4 flex flex-col gap-2">
            {mainMenuItems.map((item, i) => (
              <div
                key={i}
                className="border-b border-zinc-100 dark:border-white/10 last:border-0"
              >
                {item === "Business Services" ? (
                  <div>
                    <div className="py-2 font-semibold text-[#8FAF9A]">
                      {item}
                    </div>
                    <div className="pl-4 pb-2 flex flex-col gap-2">
                      {businessServices.map((service, j) => (
                        <div
                          key={j}
                          onClick={() => handleServiceClick(service.path)}
                          className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-zinc-100 dark:hover:bg-white/5"
                        >
                          <service.icon className="text-xl text-[#8FAF9A]" />
                          <span className="text-[15px] font-medium">
                            {service.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => handleMainMenuClick(item)}
                    className="w-full text-left py-3 font-medium text-[15px]"
                  >
                    {item}
                  </button>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenu(false)}
              className="py-3 font-medium text-[15px]"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}