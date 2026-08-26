import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Footer() {
  return (
    <footer className='bg-black text-white' aria-label='Site footer'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20'>
        <div className='grid gap-12 lg:grid-cols-3'>
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
              className='w-45'
            />
            <p className='mt-5 max-w-md text-base leading-8 text-white/80'>
              Turning laundry from a boring household chore into a happy,
              refreshing experience.
            </p>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          >
            <h3 className='text-[24px] font-semibold text-white'>Company</h3>
            <ul className='mt-5 space-y-3'>
              <li>
                <a
                  href='#location'
                  className='block text-base text-white/80 transition duration-300 hover:text-(--quick-red)'
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href='#faq'
                  className='block text-base text-white/80 transition duration-300 hover:text-(--quick-red)'
                >
                  FAQ
                </a>
              </li>
              <li>
                <Link
                  to='/policy'
                  className='block text-base text-white/80 transition duration-300 hover:text-(--quick-red)'
                >
                  Policies
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className='text-[24px] font-semibold text-white'>Contact</h3>
            <div className='mt-5 space-y-4 text-base leading-7 text-white/80'>
              <p>+234 913 444 8903</p>
              <p>hello@zebralaundromat.com</p>
              <p>12, Agungi Ajiran Road, Lekki Peninsula, Lekki, Nigeria</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className='mt-16 border-t border-white/10 pt-6'
        >
          <p className='text-sm text-white/70'>
            © 2026 Zebra Laundromat. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
