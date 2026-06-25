import { motion } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";

const serviceLinks = [
  "Premium Laundry",
  "Dry Cleaning",
  "Household Items",
  "Commercial Contracts",
];

const companyLinks = [
  "About Us",
  "Privacy Policy",
  "Terms & Services",
  "Sustainability",
  "Global Locations",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Footer() {
  return (
    <footer
      className='bg-[#002590] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20'
      aria-label='Site footer'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <img
              src='/footer-logo.svg'
              alt='Zebra Laundromat logo'
              className='w-[180px]'
            />
            <p
              className='mt-5 text-[16px] leading-[170%] text-white/90'
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Delivering professional laundry and cleaning services with excellence, reliability, and care.
            </p>
            <div className='mt-6 flex items-center gap-4'>
              <a
                href='#'
                aria-label='Instagram'
                className='transition duration-300 hover:opacity-80'
              >
                <Instagram className='h-5 w-5' />
              </a>
              <a
                href='#'
                aria-label='Facebook'
                className='transition duration-300 hover:opacity-80'
              >
                <Facebook className='h-5 w-5' />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          >
            <h3
              className='text-[24px] font-semibold text-white'
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Services
            </h3>
            <ul className='mt-5 space-y-3'>
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='block text-[16px] text-white/85 transition duration-300 hover:text-[#00DA40]'
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h3
              className='text-[24px] font-semibold text-white'
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Company
            </h3>
            <ul className='mt-5 space-y-3'>
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href='#'
                    className='block text-[16px] text-white/85 transition duration-300 hover:text-[#00DA40]'
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <h3
              className='text-[24px] font-semibold text-white'
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact
            </h3>
            <div
              className='mt-5 space-y-4 text-[16px] leading-7 text-white/85'
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              <p>123 Boulevard Avenue, Paris, FR 75008</p>
              <a
                href='tel:+2348123456789'
                className='block transition duration-300 hover:text-[#00DA40]'
              >
                +234 812 345 6789
              </a>
              <a
                href='mailto:zebra@gmail.com'
                className='block transition duration-300 hover:text-[#00DA40]'
              >
                zebra@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
          className='mt-16 border-t border-white/15 pt-6'
        >
          <div className=''>
            <p
              className='text-[14px] text-white/70'
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              © 2026 Zebra Laundromat. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
