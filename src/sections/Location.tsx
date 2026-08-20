import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGlobe,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhone,
  FaShareAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { openWhatsApp } from "../utils/whatsapp";

const BUSINESS_LOCATION =
  "12, Agungi Ajiran Road, Lekki Peninsula, Lekki, Nigeria";
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_LOCATION)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_LOCATION)}`;

type ContactItem = {
  text: string;
  label?: string;
  href?: string;
  external?: boolean;
};

type ContactCard = {
  title: string;
  icon: IconType;
  items: ContactItem[];
};

const infoCards: ContactCard[] = [
  {
    title: "Customer Support",
    icon: FaHeadset,
    items: [
      { text: "MON-SAT: 9:00AM TO 6:00PM" },
      { text: "SUN: 2:00PM TO 7:00PM" },
    ],
  },
  {
    title: "Telephone",
    icon: FaPhone,
    items: [{ text: "+234 913 444 8903", href: "tel:+2349134448903" }],
  },
  {
    title: "Email",
    icon: FaEnvelope,
    items: [
      {
        text: "support@zebralaundromat.com",
        href: "mailto:support@zebralaundromat.com",
      },
    ],
  },
  {
    title: "Website",
    icon: FaGlobe,
    items: [
      {
        text: "zebralaundromat.com",
        href: "https://zebralaundromat.com",
        external: true,
      },
    ],
  },
  {
    title: "WhatsApp",
    icon: FaWhatsapp,
    items: [{ text: "+234 913 444 8903" }],
  },
  {
    title: "Head Office",
    icon: FaMapMarkerAlt,
    items: [
      {
        text: BUSINESS_LOCATION,
        href: mapLink,
        external: true,
      },
    ],
  },
  {
    title: "Social Media",
    icon: FaShareAlt,
    items: [
      { label: "Instagram", text: "@zebralaundromat" },
      { label: "Facebook", text: "@zebralaundromatt" },
      { label: "Twitter", text: "@Zebralaundromat" },
    ],
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
            className='premium-heading text-4xl font-semibold tracking-[-0.03em] text-[var(--zebra-blue)] sm:text-5xl lg:text-6xl'
          >
            Contact Us
          </motion.h2>

          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
            className='mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)] sm:text-lg'
          >
            We're here to help. If you have questions, feedback or require
            assistance, please contact our Customer Experience Team using any of
            the official channels below.
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
                className='flex min-w-0 gap-4 rounded-4xl border border-[var(--border-light)] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-6'
              >
                <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[var(--zebra-blue)] text-2xl text-[var(--zebra-blue)] shadow-[0_12px_30px_rgba(0,37,144,0.16)]'>
                  <card.icon aria-hidden='true' />
                </div>

                <div className='min-w-0'>
                  <p className='text-base font-semibold text-[var(--zebra-blue)]'>
                    {card.title}
                  </p>
                  <div className='mt-2 space-y-1 text-sm leading-6 text-[var(--text-dark)]'>
                    {card.items.map((item) => {
                      const content = (
                        <>
                          {item.label && (
                            <span className='font-medium text-[var(--text-muted)]'>
                              {item.label}:{" "}
                            </span>
                          )}
                          <span className='break-words'>{item.text}</span>
                        </>
                      );

                      return item.href ? (
                        <a
                          key={`${item.label ?? card.title}-${item.text}`}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noreferrer" : undefined}
                          className='block break-words underline decoration-[var(--zebra-blue)]/30 underline-offset-4 transition hover:text-[var(--zebra-blue)]'
                        >
                          {content}
                        </a>
                      ) : (
                        <p key={`${item.label ?? card.title}-${item.text}`}>
                          {content}
                        </p>
                      );
                    })}
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
            transition={{ duration: 0.55, delay: 0.68, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className='mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--kinetic-green)] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(0,218,64,0.18)] transition duration-300 hover:brightness-95 sm:w-auto'
          >
            <FaWhatsapp className='h-5 w-5' />
            Chat With Us On WhatsApp
          </motion.button>

          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.6, ease: "easeOut" }}
            className='mt-6 max-w-2xl text-sm leading-7 text-[var(--text-muted)]'
          >
            We will acknowledge enquiries promptly and resolve customer requests
            as quickly as reasonably possible.
          </motion.p>
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
