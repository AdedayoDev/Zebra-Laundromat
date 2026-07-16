import { motion } from "framer-motion";
import { ChevronRight, Droplets, MessageCircleMore, Zap } from "lucide-react";
import FloatingInfoCard from "../components/FloatingInfoCard";
import { openWhatsApp } from "../utils/whatsapp";

function Hero() {
  return (
    <section id='hero' className='relative overflow-hidden bg-[#f7fbff]'>
      <div className='absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#eaf4ff] to-transparent' />

      <div className='relative mx-auto flex md:flex-row min-h-screen w-[92%] max-w-7xl flex-col justify-center px-4 py-20  sm:px-6 lg:px-8 lg:py-24'>
        <div className='flex  flex-col-reverse gap-16 sm:flex-col-reverse md:flex-col-reverse  lg:flex-row lg:items-center lg:gap-8 xl:gap-12'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='flex-1  lg:pr-8 text-center md:text-start'
          >
            <div className='mb-7 inline-flex items-center  gap-3 rounded-full bg-white/90 px-4 py-2 shadow-[0_10px_30px_rgba(0,37,144,0.08)] '>
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='h-2.5 w-2.5 rounded-full bg-green-500'
              />
              <span className='text-sm font-medium text-[#111111]'>
                Now Open in Agungi, Lagos
              </span>
            </div>

            <h1 className='premium-heading max-w-3xl text-4xl font-extrabold leading-[1.05] text-[#002598] sm:text-5xl lg:text-6xl xl:text-7xl'>
              Your Laundry,{" "}
              <span className='relative inline-block pb-1 text-[#D62828] after:absolute after:bottom-0 after:left-0 after:h-2 after:w-full after:rounded-full after:bg-[#D62828]/35'>
                done Right
              </span>
              , every Single Time.
            </h1>

            <p className='mt-6 max-w-2xl text-base leading-8 text-black/70 sm:text-lg'>
              Walk in with your laundry and leave with fresh, clean clothes in
              about an hour. Choose our self-service option or let our team
              handle the washing, drying, and folding while you focus on more
              important things.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <button
                type='button'
                onClick={openWhatsApp}
                className='group inline-flex items-center justify-center rounded-xl bg-[#002590] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(0,37,144,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#001f74] hover:shadow-[0_18px_40px_rgba(0,37,144,0.24)]'
              >
                <span>Start Your Laundry</span>
                <ChevronRight className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5' />
              </button>

              <button
                type='button'
                onClick={openWhatsApp}
                className='inline-flex items-center justify-center gap-2 rounded-xl bg-[#00DA40] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(0,218,64,0.2)]'
              >
                <MessageCircleMore className='h-4 w-4' />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className='relative mx-auto flex w-full max-w-155 items-center justify-center overflow-hidden rounded-[2.5rem]  px-4 py-12 sm:px-8 sm:py-16 lg:ml-auto lg:mr-[-8%] lg:py-20 xl:px-12 '
          >

           
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='relative z-10 flex h-72 w-72 md:h-96 md:w-96 items-center justify-center rounded-full  sm:h-64 sm:w-64'
              >
                <img
                  src='/logo.svg'
                  alt='Zebra Laundromat logo'
                  className='h-250 w-250 drop-shadow-[0_16px_40px_rgba(0,37,144,0.24)] sm:h-48 sm:w-48 md:h-300 md:w-300'
                />
              </motion.div>
            

            <FloatingInfoCard
              icon={Droplets}
              title='Water'
              subtitle='Clean & Treated'
              className='left-5 md:left-10 bottom-6  sm:bottom-12'
              animationDelay={0.2}
            />

            <FloatingInfoCard
              icon={Zap}
              title='Cycle Time'
              subtitle='30–35 Min'
              className='right-6 md:right-10 top-6 sm:top-12'
              animationDelay={0.45}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
