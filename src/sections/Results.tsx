import { motion } from "framer-motion";

const featureCards = [
  {
    icon: "/fast-services.svg",
    title: "Fast Service",
    description:
      "Most loads are ready in about an hour, thanks to our commercial washers and dryers.",
  },
  {
    icon: "/hot-and-cold-wash.svg",
    title: "Hot & Cold Wash",
    description:
      "Different fabrics need different care. Choose hot or cold wash settings that suit your clothes.",
  },
  {
    icon: "/need-help.svg",
    title: "Help When You Need It",
    description:
      "First time at a laundromat? Our attendants are always nearby to guide and assist you through the process.",
  },
];

function Results() {
  return (
    <section className='mx-auto py-10 max-w-7xl gap-12 '>
      <div>
        <div className='mx-auto max-w-2xl text-center'>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='premium-heading text-4xl font-semibold tracking-[-0.03em] text-[#002590] sm:text-5xl lg:text-6xl'
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className='mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg'
          >
            Whether you're catching up on work, spending time with family, or
            simply resting, Zebra makes laundry one less thing to worry about.
          </motion.p>
        </div>

        <div className='mt-10 space-y-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3  '>
          {featureCards.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: 0.12 + index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -4, scale: 1.01 }}
              className='rounded-4xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:bg-[#002598] group hover:text-white '
            >
              <div className='mb-6 inline-flex items-center justify-center rounded-3xl bg-slate-100 p-4 transition-colors duration-300 group-hover:bg-white '>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className='w-8 h-8'
                />
              </div>
              <h3 className='text-xl font-semibold text-[#002590]  group-hover:text-white '>
                {feature.title}
              </h3>
              <p className='mt-3 text-sm leading-7 text-slate-600 group-hover:text-white'>
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
