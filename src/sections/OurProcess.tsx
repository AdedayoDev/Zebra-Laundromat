import { motion } from "framer-motion";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Book Your Service",
    description: "Schedule online or contact our team.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Drop Off or Request Pickup",
    description: "Bring your items or arrange collection.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Professional Cleaning",
    description: "We clean, inspect, and prepare every item.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Collection or Delivery",
    description: "Receive your items fresh, clean, and ready to use.",
  },
];

const galleryImages = [
  {
    src: "process-1.svg",
    alt: "Laundry service workspace",
  },
  {
    src: "process-2.svg",
    alt: "Clean folded linens",
  },
];

function OurProcess() {
  return (
    <section
      className='w-full bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
      aria-labelledby='our-process-heading'
    >
      <div className='mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-12'>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='flex w-full flex-col gap-6 lg:w-[45%]'
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
              className='overflow-hidden rounded-[1.5rem] shadow-lg'
            >
              <img
                src={image.src}
                alt={image.alt}
                className='h-[320px] w-full object-cover transition-all duration-500 hover:scale-105'
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='w-full lg:w-[55%]'
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            className='text-[20px] font-semibold text-[#00DA40]'
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Our Process
          </motion.p>

          <motion.h2
            id='our-process-heading'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className='mt-4 text-[30px] font-bold leading-[120%] text-black sm:text-[36px] lg:text-[40px]'
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Simple, Efficient, Professional
            <br />
            4-Step Process
          </motion.h2>

          <div className='mt-10 space-y-8'>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: 0.12 + index * 0.06,
                  ease: "easeOut",
                }}
                className='relative pl-12'
              >
                {index < processSteps.length - 1 ? (
                  <div className='absolute left-[0.95rem] top-10 h-[calc(100%+1.5rem)] w-px bg-[rgba(0,37,144,0.15)]' />
                ) : null}

                <div className='absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#002590] text-sm font-semibold text-white'>
                  {step.number}
                </div>

                <div>
                  <h3
                    className='text-[24px] font-semibold text-[#002590]'
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className='mt-2 text-[20px] leading-[170%] text-[rgba(0,0,0,0.8)]'
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OurProcess;
