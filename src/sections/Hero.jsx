import { motion } from "framer-motion";
import Button from "../components/Button/Button";
import { openWhatsApp } from "../utils/whatsapp";



function Hero() {
  return (
    <section className='relative isolate overflow-hidden bg-slate-950'>
      <div className='absolute inset-0'>
        <img
          src='hero-image.svg'
          alt='Modern laundromat interior'
          className='h-full w-full object-cover'
        />
        <div className='absolute inset-0 bg-[rgba(0,0,0,0.45)]' />      
      </div>

      <div className='relative mx-auto flex min-h-svh w-[90%] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8'>

        <div className='max-w-full '>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className=' text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl'
          >
           Your laundry, <span className='hero-heading'> done right,</span> <br/> every single time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className='hero-description mt-6 max-w-175 text-base font-medium leading-8 text-white/90 sm:text-lg lg:text-xl'
          >
            Walk in with your laundry and leave with fresh, clean clothes in about an hour. Choose our self-service option or let our team handle the washing, drying, and folding while you focus on more important things
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className='mt-8 flex flex-col gap-4 sm:flex-row '
          >
            <div className='w-full sm:w-55'>
              <Button
                variant='primary'
                className='w-full capitalize'
                onClick={openWhatsApp}
              >
                Start your Laundry
              </Button>
            </div>
            <div  className='w-full sm:w-55 '>
              <Button
              onClick={openWhatsApp}
                variant='secondary'
                className='w-full capitalize  text-white '
              >Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
}

export default Hero;
