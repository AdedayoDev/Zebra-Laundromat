import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppFloat() {
  const phoneNumber = "2349134448903";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className='fixed bottom-4 right-4 z-[60] flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6'>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: [0, -6, 0], scale: [1, 1.02, 1] }}
        transition={{
          duration: 1.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className='rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#002590] shadow-lg ring-1 ring-black/10'
      >
        Chat with us
      </motion.div>

      <motion.a
        href={whatsappUrl}
        target='_blank'
        rel='noreferrer'
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label='Chat with Zebra Laundromat on WhatsApp'
        className='flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-colors duration-300 hover:bg-[#1ebe5b]'
      >
        <FaWhatsapp className='h-7 w-7' />
      </motion.a>
    </div>
  );
}

export default WhatsAppFloat;
