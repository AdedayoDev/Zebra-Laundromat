import { motion } from "framer-motion";

interface ResultImage {
  src: string;
  alt: string;
}

const images: ResultImage[] = [
  {
    src: "excellence 1.svg",
    alt: "Freshly folded laundry stacked neatly",
  },
  {
    src: "excellence-2.svg",
    alt: "Modern laundromat washing machines in operation",
  },
  {
    src: "excellence-3.svg",
    alt: "Clothes care and fabric finishing details",
  },
  {
    src: "excellence-4.svg",
    alt: "Professional laundry service workspace",
  },
];

function Results() {
  return (
    <section
      className='w-full bg-[#F9F9F9] px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
      aria-labelledby='results-heading'
    >
      <div className='mx-auto flex max-w-7xl flex-col items-center text-center'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className='text-[20px] font-semibold uppercase tracking-[0.2em] text-[#00DA40]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Our Results
        </motion.p>

        <motion.h2
          id='results-heading'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className='mt-4 text-[30px] font-bold leading-[120%] text-black sm:text-[36px] lg:text-[40px]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Excellence You Can See
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className='mx-auto mt-4 max-w-[850px] text-[16px] font-medium leading-[170%] text-black/70 sm:text-[18px] lg:text-[20px]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          From perfectly cared-for garments to spotless spaces, our work
          reflects the high standards we bring to every service. Explore the
          quality, precision, and attention to detail that define our commitment
          to excellence.
        </motion.p>

        <div className='mt-16 grid w-full grid-cols-2 gap-6'>
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
              }}
              className='group relative overflow-hidden rounded-[24px] shadow-md transition-all duration-500 hover:shadow-xl'
            >
              <img
                src={image.src}
                alt={image.alt}
                loading='lazy'
                className='h-[180px] w-full object-cover transition-all duration-500 group-hover:scale-105 sm:h-[280px] lg:h-[350px]'
              />
              <div className='absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/15' />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
