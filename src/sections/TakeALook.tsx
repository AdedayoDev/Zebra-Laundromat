import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function TakeALook() {
  return (
    <section
      id='take-a-look'
      className='bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className='mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 text-center'
      >
        <div className='inline-flex rounded-full bg-[#002590] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,37,144,0.12)]'>
          Take A Look
        </div>

        <h2 className='premium-heading text-4xl font-semibold tracking-[-0.03em] text-[#002590] sm:text-5xl lg:text-6xl'>
         See the Zebra Space
        </h2>

        <p className='max-w-2xl text-base leading-8 text-black/70 sm:text-lg'>
          Clean machines, comfortable seating, and a space designed for you.
        </p>

        
          <div className='flex h-[320px] w-full max-w-4xl items-center justify-center rounded-[36px] bg-[#002590] shadow-[0_18px_40px_rgba(0,37,144,0.12)] sm:h-[380px]'>
            <span className='text-[5rem] leading-none sm:text-[6rem]'>🧺</span>
          </div>

          <div className='absolute bottom-6 rounded-full bg-[#002590] px-5 py-3 text-base font-semibold text-white shadow-[0_16px_35px_rgba(0,0,0,0.12)]'>
            Zebra Laundromat
          </div>
        
      </motion.div>
    </section>
  );
}

export default TakeALook;
