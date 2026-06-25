import { motion } from "framer-motion";

const BUSINESS_ADDRESS = "Lagos, Nigeria";
const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_ADDRESS)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
// const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_ADDRESS)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Location() {
  return (
    <section
      className='bg-[#00DA40] px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
      aria-labelledby='location-heading'
    >
      <div className='mx-auto text-center max-w-7xl'>
        <motion.p
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className='text-[20px] font-semibold uppercase tracking-[0.16em] text-white'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Get Directions
        </motion.p>

        <motion.h2
          id='location-heading'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className='mt-4 text-[30px] font-bold leading-[120%] text-black sm:text-[36px] lg:text-[40px]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Our Address Location
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
          className='mt-10 overflow-hidden rounded-[24px] border border-white shadow-xl'
        >
          <div className='h-[350px] w-full sm:h-[450px] lg:h-[500px]'>
            <iframe
              title={`Map showing ${BUSINESS_ADDRESS}`}
              src={mapEmbedUrl}
              loading='lazy'
              className='h-full w-full border-0'
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
          className='mt-8'
        >
          <a
            href={googleMapsUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center justify-center rounded-lg bg-[#002590] px-6 py-3 text-[16px] font-semibold text-white transition duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] focus-visible:ring-offset-2'
          >
            Open In Google Maps
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}

export default Location;
