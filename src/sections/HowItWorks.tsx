import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Bring Your Laundry",
    description: "Bring your laundry, no appointment needed.",
  },
  {
    number: "02",
    title: "Sort and Weigh",
    description: "We sort, weigh, and confirm the price before we begin.",
  },
  {
    number: "03",
    title: "Choose Your Service",
    description:
      "Choose whether you'd like to wash your laundry yourself or let our team handle everything for you.",
  },
  {
    number: "04",
    title: "Pickup",
    description: "Pick up your fresh, clean, neatly folded laundry.",
  },
];

function HowItWorks() {
  return (
    <section
      id='how-it-works'
      className='bg-[#002590] text-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
    >
      <div className='mx-auto max-w-6xl text-center'>
        <div className='inline-flex items-center justify-center rounded-full bg-[#D62828] px-5 py-2 text-sm font-semibold text-white'>
          Simple Process
        </div>

        <h2
          className='premium-heading mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight  sm:text-5xl md:text-7xl'
          style={{ color: "#ffffff" }}
        >
          How it Works
        </h2>

        <p className='mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80 sm:text-lg'>
          Getting your laundry done is simple.
        </p>
      </div>

      <div className='mx-auto mt-16 max-w-6xl'>
        <div className='grid gap-10 md:grid-cols-4 md:items-start'>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className='flex flex-col items-center text-center'
            >
              <div className='flex w-full items-center justify-center gap-4'>
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className='flex h-14 w-14 items-center justify-center rounded-full bg-[#D62828] text-lg font-bold text-white'
                >
                  {step.number}
                </motion.div>

                {index < steps.length - 1 ? (
                  <div className='hidden h-px flex-1 border-t border-dashed border-white/60 md:block' />
                ) : null}
              </div>

              {index < steps.length - 1 ? (
                <div className='mt-6 h-16 w-px border-r border-dashed border-white/60 md:hidden' />
              ) : null}

              <div className='mt-6 max-w-xs'>
                <h3 className='text-2xl font-semibold text-white'>
                  {step.title}
                </h3>
                <p className='mt-3 text-base leading-8 text-white/80'>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
