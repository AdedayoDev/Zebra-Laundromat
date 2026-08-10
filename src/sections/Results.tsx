import { motion } from "framer-motion";
import { Droplets, Zap } from "lucide-react";

const featureCards = [
  {
    icon: "/fast-services.svg",
    title: "Fast Service",
    description:
      "Most loads are ready in about an hour, thanks to our commercial washers and dryers.",
    iconType: "image",
  },
  {
    icon: "/hot-and-cold-wash.svg",
    title: "Hot & Cold Wash",
    description:
      "Different fabrics need different care. Choose hot or cold wash settings that suit your clothes.",
    iconType: "image",
  },
  {
    icon: "/need-help.svg",
    title: "Help When You Need It",
    description:
      "First time at a laundromat? Our attendants are always nearby to guide and assist you through the process.",
    iconType: "image",
  },
  {
    icon: '/wash-and-dry.svg',
    title: "Approximately 1 Hour",
    description:
      "Most laundry completed in about an hour.",
    iconType: "lucide",
  },
  {
    icon: "/wash-cycle.svg",
    title: "30 to 35 Minutes",
    description:
      "Wash cycles completed in as little as 30 to 35 minutes.",
    iconType: "lucide",
  },
  {
    icon: "filtered-water.svg",
    title: "Clean Water",
    description:
      "Filtered, treated water that helps keep your clothes looking their best.",
    iconType: "lucide",
  },
];

function Results() {
  return (
    <section
      id='results'
      className='w-full overflow-hidden bg-[#F8F8F9] py-20 sm:py-24 lg:py-28'
    >
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className='relative mx-auto flex max-w-3xl flex-col items-center text-center'
        >
          {/* Section Label */}
          <div className='flex items-center justify-center'>
            <span className='inline-flex items-center rounded-full bg-[#002598] px-5 py-2 text-sm font-semibold text-white'>
              Why Choose Us
            </span>

            <motion.span
              className='ml-3 hidden h-2.5 w-2.5 rounded-full bg-[#00D84A] md:inline-flex'
              animate={{
                y: [0, -5, 0],
                opacity: [1, 0.8, 1],
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              aria-hidden
            />
          </div>

          {/* Decorative Line */}
          <div className='mt-5 flex w-full items-center justify-center gap-3'>
            <div className='h-px max-w-20 flex-1 bg-[#002598]' />

            <motion.div
              className='relative h-1 w-10 rounded-full bg-[#002598]'
              animate={{
                scaleX: [1, 1.2, 1],
                opacity: [1, 0.75, 1],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden
            >
              <span className='absolute right-0 top-0 h-1 w-3 rounded-full bg-[#00D84A]' />
            </motion.div>

            <div className='h-px max-w-20 flex-1 bg-[#002598]' />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.08,
            ease: "easeOut",
          }}
          className='mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-slate-700 sm:text-lg'
        >
          Whether you're catching up on work, spending time with family, or
          simply resting, Zebra makes laundry one less thing to worry about.
        </motion.p>

        {/* Feature Cards */}
        <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {featureCards.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className='group rounded-[1.75rem] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-300 hover:bg-[#002598] sm:p-7'
            >
              {/* Icon */}
              <div className='mb-6 inline-flex items-center justify-center rounded-3xl bg-slate-100 p-4 transition-all duration-300 group-hover:bg-white'>
              
                  <img
                    src={feature.icon as string}
                    alt=''
                    aria-hidden='true'
                    className='h-8 w-8 object-contain'
                  />
              </div>

              {/* Title */}
              <h3 className='text-xl font-semibold text-[#002598] transition-colors duration-300 group-hover:text-white sm:text-2xl'>
                {feature.title}
              </h3>

              {/* Description */}
              <p className='mt-3 text-sm leading-7 text-slate-600 transition-colors duration-300 group-hover:text-white/90 sm:text-base'>
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