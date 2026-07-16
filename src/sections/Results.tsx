import { Clock, Droplet, Zap } from "lucide-react";
import { motion } from "framer-motion";

const featureCards = [
  {
    title: "Fast Service",
    description:
      "Most loads are ready in about an hour, thanks to our commercial washers and dryers.",
  },
  {
    title: "Hot & Cold Wash",
    description:
      "Different fabrics need different care. Choose hot or cold wash settings that suit your clothes.",
  },
  {
    title: "Help When You Need It",
    description:
      "First time at a laundromat? Our attendants are always nearby to guide and assist you through the process.",
  },
];

const statCards = [
  {
    icon: Clock,
    accent: "bg-[#E9F2FF]",
    iconColor: "text-black",
    title: "≈ 1 Hour",
    description: "Most laundry completed in about an hour.",
  },
  {
    icon: Zap,
    accent: "bg-[#FFF6D6]",
    iconColor: "text-[#CB9E1A]",
    title: "30–35 Minutes",
    description: "Wash cycles completed in as little as 30–35 minutes.",
  },
  {
    icon: Droplet,
    accent: "bg-[#E3F0FF]",
    iconColor: "text-[#1E4DB7]",
    title: "Clean Water",
    description:
      "Filtered, treated water that helps keep your clothes looking their best.",
  },
];

function Results() {
  return (
    <section className='bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28'>
      <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[45%_55%] lg:items-start'>
        <div>
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

          <div className='mt-10 space-y-4'>
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
                className='rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-transform duration-300'
              >
                <h3 className='text-xl font-semibold text-[#002590]'>
                  {feature.title}
                </h3>
                <p className='mt-3 text-sm leading-7 text-slate-600'>
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-1'>
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.article
                key={stat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: 0.14 + index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5, scale: 1.01 }}
                className='flex flex-col items-center gap-6 rounded-[2rem] bg-white p-5 text-center shadow-[0_25px_70px_rgba(0,0,0,0.08)] transition-transform duration-300'
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full border border-black/10 ${stat.accent}`}
                >
                  <Icon
                    className={`h-9 w-9 ${stat.iconColor}`}
                    strokeWidth={2.5}
                  />
                </div>

                <div>
                  <p className='text-2xl font-semibold text-[#002590]'>
                    {stat.title}
                  </p>
                  <p className='mt-3 text-sm leading-7 text-slate-600'>
                    {stat.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Results;
