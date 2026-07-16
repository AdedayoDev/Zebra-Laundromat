import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { openWhatsApp } from "../utils/whatsapp";

const BUSINESS_LOCATION = "Agungi, Eti-Osa, Lagos";
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_LOCATION)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

const infoCards = [
  {
    emoji: "📍",
    title: "Address",
    content: ["12 Beby Nal, Agungi Road,", "Eti-Osa,", "Lagos."],
  },
  {
    emoji: "🕐",
    title: "Opening Hours",
    content: [
      "Monday - Friday",
      "9:00 AM - 6:00 PM",
      "Sunday",
      "2:00 PM - 6:00 PM",
    ],
  },
  {
    emoji: "✉️",
    title: "Email Address",
    content: ["hello@zebralaundromat.com"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Location() {
  return (
    <section
      id='location'
      className='bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
      aria-labelledby='location-heading'
    >
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center'>
        <div>
          <motion.h2
            id='location-heading'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className='premium-heading text-4xl font-semibold tracking-[-0.03em] text-[#002590] sm:text-5xl lg:text-6xl'
          >
            Visit Us In Agungi
          </motion.h2>

          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className='mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg'
          >
            We'd love to welcome you to Zebra Laundromat.
          </motion.p>

          <div className='mt-10 space-y-4'>
            {infoCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{
                  duration: 0.55,
                  delay: 0.08 + index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className='flex gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]'
              >
                <div className='flex h-14 w-14 items-center justify-center rounded-3xl bg-[#002590] text-3xl text-white shadow-[0_12px_30px_rgba(0,37,144,0.16)]'>
                  {card.emoji}
                </div>

                <div className='min-w-0'>
                  <p className='text-base font-semibold text-[#002590]'>
                    {card.title}
                  </p>
                  <div className='mt-2 text-sm leading-7 text-slate-700'>
                    {card.content.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.button
            type='button'
            onClick={openWhatsApp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.36, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className='mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#00DA40] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,218,64,0.18)] transition duration-300 hover:bg-[#0bb233] sm:w-auto'
          >
            <FaWhatsapp className='h-5 w-5' />
            Chat With Us On WhatsApp
          </motion.button>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          className='overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-[0_30px_70px_rgba(15,23,42,0.08)]'
        >
          <div className='aspect-4/3 h-full min-h-80 w-full'>
            <iframe
              title={`Map showing ${BUSINESS_LOCATION}`}
              src={mapEmbedUrl}
              loading='lazy'
              allowFullScreen
              className='h-full w-full border-0'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Location;
