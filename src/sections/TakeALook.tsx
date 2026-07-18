import { motion } from "framer-motion";
import { Play } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const videoPreview = {
  imageSrc: "hero-image.svg",
  altText: "Zebra Space preview",
  title: "See the Zebra Space",
  videoUrl: null,
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

        <div className='relative w-full max-w-4xl'>
          <div className='relative h-80 w-full overflow-hidden rounded-md shadow-[0_18px_40px_rgba(0,37,144,0.12)] sm:h-95'>
            <img
              src={videoPreview.imageSrc}
              alt={videoPreview.altText}
              className='h-full w-full object-cover'
            />

            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='flex h-24 w-24 items-center justify-center rounded-full bg-white/85 shadow-xl backdrop-blur-sm sm:h-28 sm:w-28'>
                <Play className='h-12 w-12 text-[#002590] sm:h-14 sm:w-14' />
              </div>
            </div>
          </div>

          
        </div>
      </motion.div>
    </section>
  );
}

export default TakeALook;
