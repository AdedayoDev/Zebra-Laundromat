import { motion } from "framer-motion";

interface ExpansionCard {
  title: string;
  image: string;
  features: string[];
}

const cards: ExpansionCard[] = [
  {
    title: "Residential Cleaning Services",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Furniture Cleaning",
      "Rug & Carpet Care",
      "Upholstery Restoration",
      "Fabric Surface Sanitization",
    ],
  },
  {
    title: "Commercial Cleaning Services",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Executive Office Cleaning",
      "Retail & Boutique Care",
      "Luxury Property Management",
      "Event Facility Services",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FutureExpansion() {
  return (
    <section
      className='bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
      aria-labelledby='future-expansion-heading'
    >
      <div className='mx-auto max-w-7xl'>
        <motion.p
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className='text-[22px] font-semibold uppercase tracking-[0.16em] text-[#00DA40]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Future Expansion
        </motion.p>

        <motion.h2
          id='future-expansion-heading'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className='mt-4 max-w-3xl text-[30px] font-bold leading-[120%] text-black sm:text-[36px] lg:text-[40px]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Expanding Our Commitment To Clean Spaces
        </motion.h2>

        <motion.p
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className='mt-5 max-w-[900px] text-[16px] leading-[170%] text-black/70 sm:text-[18px] lg:text-[22px]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          As part of our growth strategy, we are preparing to introduce a
          comprehensive range of residential and commercial cleaning solutions.
        </motion.p>

        <div className='mt-16 grid gap-8 md:grid-cols-2'>
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{
                duration: 0.55,
                delay: 0.14 + index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: "0 20px 45px -20px rgba(0,0,0,0.25)",
              }}
              className='group relative overflow-hidden rounded-[24px] shadow-lg'
            >
              <div
                className='absolute right-4 top-4 z-10 rounded-full bg-[#EF4444] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-white'
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Coming Soon
              </div>

              <img
                src={card.image}
                alt={card.title}
                loading='lazy'
                className='h-[400px] w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-[450px] lg:h-[550px]'
              />

              <div className='absolute inset-x-4 bottom-4 rounded-[24px] border border-white/20 bg-white/15 p-6 backdrop-blur-md transition duration-500 ease-out group-hover:-translate-y-1'>
                <h3
                  className='text-[24px] font-bold text-white'
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {card.title}
                </h3>
                <ul className='mt-4 space-y-3'>
                  {card.features.map((feature) => (
                    <li
                      key={feature}
                      className='flex items-center gap-3 text-[16px] text-white'
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      <span className='h-[10px] w-[10px] shrink-0 rounded-full bg-[#002590]' />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FutureExpansion;
