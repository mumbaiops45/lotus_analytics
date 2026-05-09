import { HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[9999]">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91xxxxxxxxxx"   // change number
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Call / Contact Button */}
      <a
        href="tel:+91xxxxxxxxxx"   // change number
        className="group bg-[#0b0b0b] hover:bg-gray-800 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      >
        <HiOutlinePhone className="text-2xl" />
      </a>

    </div>
  );
}