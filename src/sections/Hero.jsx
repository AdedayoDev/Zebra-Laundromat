import { motion } from "framer-motion";
import Button from "../components/Button/Button";

const trustAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
];

const features = [
  { title: "Professional Equipment", icon: "/profession-icon.svg" },
  { title: "Fast Turnaround", icon: "/fast-icon.svg" },
  { title: "Trained Specialists", icon: "/trained-icon.svg" },
  { title: "Reliable Service", icon: "/reliable.svg" },
];

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

      <div className='relative mx-auto flex min-h-screen w-[90%] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='mb-8 flex flex-col items-start gap-2 md:gap-3 self-start  sm:flex-row sm:items-center'
        >
          <div className='flex -space-x-3'>
            {trustAvatars.map((avatar, index) => (
              <img
                key={avatar}
                src={avatar}
                alt={`Happy customer ${index + 1}`}
                className='h-11 w-11 rounded-full border-2 border-white object-cover shadow-lg'
              />
            ))}
          </div>

          <div className='flex flex-col'>
            <div className='flex items-center gap-1 text-[#FFD700]'>
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} aria-hidden='true'>
                  ★
                </span>
              ))}
            </div>
            <p className='text-sm font-medium text-white sm:text-base'>
              Over 200 Happy Customers
            </p>
          </div>
        </motion.div>

        <div className='max-w-full '>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className='hero-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl'
          >
            Laundry & Cleaning Services
            <span className='mt-2 block'>Designed For Modern Living</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className='hero-description mt-6 max-w-[700px] text-base font-medium leading-8 text-white/90 sm:text-lg lg:text-xl'
          >
            Professional laundromat, laundry, and premium cleaning services
            delivered with precision, convenience, and unmatched attention to
            detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className='mt-8 flex flex-col gap-4 sm:flex-row'
          >
            <a href='#contact' className='w-full sm:w-auto'>
              <Button variant='primary' className='w-full sm:w-auto'>
                Book a Service
              </Button>
            </a>
            <a href='#services' className='w-full sm:w-auto'>
              <Button
                variant='secondary'
                className='w-full border-2 border-white bg-transparent text-white hover:text-slate-900 sm:w-auto'
              >
                Explore Our Services
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className='mt-16 grid gap-4 grid-cols-4'
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.45 + index * 0.08,
                ease: "easeOut",
              }}
              className="flex flex-col gap-3 items-center justify-center"
            >
              <img src={feature.icon} alt='' className='mx-auto h-10 w-10' />
              <h2 className='hero-description mt-4 text-xs text-center md:text-base font-semibold text-white'>
                {feature.title}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
