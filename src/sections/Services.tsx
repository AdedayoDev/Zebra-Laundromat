import { motion } from "framer-motion";
import { openWhatsApp } from "../utils/whatsapp";

const serviceCards = [
  {
    id: "self",
    icon: "/self-services.svg",
    title: "Self-Service",
    description:
      "Want to do your laundry yourself? We'll help you sort and weigh your laundry, then you can use our commercial machines to get it done in about an hour.",
    features: [
      "Choose your own wash settings",
      "Staff available to help",
      "Clean, washed with treated water",
      "Comfortable waiting area",
    ],
    price: "₦6,000",
    priceDetail: "Per load up to 10kg",
    note: "(Roughly 10–20 regular clothing items)",
    buttonLabel: "Start My Wash",
    variant: "self",
  },
  {
    id: "full",
    icon: "/full-service.svg",
    title: "Drop off Service",
    description:
      "Spend your time doing the things you enjoy while we take care of your laundry. Simply drop off your clothes and we will wash, dry and neatly fold everything for you. Come back to fresh, clean laundry that's neatly folded and ready for pickup.",
    features: [
      "We will do all the work for you",
      "Wash, dry and neatly fold your laundry",
      "Ready at your scheduled pickup time",
      "Perfect for busy professionals, families and anyone short on time",
    ],
    price: "₦8,000",
    priceDetail: "Per load up to 10kg",
    note: "(Roughly 10–20 regular clothing items)",
    buttonLabel: "Handle My Laundry",
    variant: "full",
  },
];

function Services() {
  return (
    <section
      id='services'
      className='scroll-mt-24 bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-28'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
          <div className='inline-flex rounded-full bg-[#002590] px-5 py-2.5 shadow-[0_12px_30px_rgba(0,37,144,0.16)]'>
            <span className='text-sm font-semibold text-white'>
              Our Services
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className='relative mt-6 flex max-w-3xl flex-col items-center text-center'
          >
            <div className='absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-[#002598] md:block' />

            <h2 className='premium-heading text-4xl font-extrabold tracking-[-0.04em] text-[#002598] leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
              <span className='relative inline-flex items-center'>
                Two Ways To Do Your Laundry
                <motion.span
                  className='ml-3 hidden h-2.5 w-2.5 rounded-full bg-[#00D84A] md:inline-flex'
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.08, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  aria-hidden
                />
              </span>
            </h2>

            <div className='mt-5 flex items-center gap-3'>
              <div className='h-px min-w-[5rem] flex-1 bg-[#002598]' />
              <motion.div
                className='h-1 w-8 rounded-full bg-[#00D84A]'
                animate={{ scaleX: [1, 1.25, 1], opacity: [1, 0.8, 1] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden
              />
              <div className='h-px min-w-[5rem] flex-1 bg-[#002598]' />
            </div>
          </motion.div>

          <p className='mt-4 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg'>
            Select the service that fits your schedule and experience a premium
            laundry workflow built for speed, control, and peace of mind.
          </p>
        </div>

        <div className='mt-16 grid gap-8 md:grid-cols-2'>
          {serviceCards.map((service, index) => {
            const isFull = service.variant === "full";
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.75,
                  ease: "easeOut",
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className={`relative group rounded-[1.75rem] p-8 shadow-[0_30px_70px_rgba(0,37,144,0.10)]  ${
                  isFull
                    ? "bg-[#002590] text-white"
                    : "border border-[#002590] bg-transparent text-slate-900"
                }`}
              >
                {isFull && (
                  <div className='absolute right-5 top-5 rounded-full bg-[#EA2126] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-[0_12px_25px_rgba(234,33,38,0.18)]'>
                    Most Popular
                  </div>
                )}
                <div className='mb-6 inline-flex  items-center justify-center  rounded-xl shadow-[0_14px_30px_rgba(0,37,144,0.18)] '>
                  {isFull ? (
                    <div className='inline-flex items-center justify-center rounded-xl bg-slate-100 p-4 transition-colors duration-300'>
                      <img
                        src={service.icon}
                        alt={service.title}
                        className='w-8 h-8'
                      />
                    </div>
                  ) : (
                    <div className='inline-flex items-center justify-center rounded-xl p-4 border border-[#002590] transition-colors duration-300'>
                      <img
                        src={service.icon}
                        alt={service.title}
                        className='w-8 h-8'
                      />
                    </div>
                  )}
                </div>

                <h3
                  className={`text-2xl font-semibold ${isFull ? "text-white" : "text-[#002590]"}`}
                >
                  {service.title}
                </h3>

                <p
                  className={`mt-4 max-w-xl text-sm leading-7 ${
                    isFull ? "text-white/85" : "text-slate-700"
                  }`}
                >
                  {service.description}
                </p>

                <div className='mt-8 space-y-4'>
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className='flex items-start gap-4 border-b border-white/15 pb-2 last:border-b-0 last:pb-0'
                    >
                      <div className='mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500'>
                        <svg
                          viewBox='0 0 20 20'
                          className='h-5 w-5 text-white'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5 10.5L8.2 14L15 7'
                            stroke='white'
                            strokeWidth='2.2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <p
                        className={`text-sm leading-7 ${isFull ? "text-white/90" : "text-slate-700"}`}
                      >
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <div className='mt-8 flex flex-col gap-2'>
                  <div className='flex flex-wrap items-baseline gap-3'>
                    <span
                      className={`text-4xl font-semibold ${isFull ? "text-white" : "text-[#002590]"}`}
                    >
                      {service.price}
                    </span>
                    <span
                      className={`text-sm ${isFull ? "text-white/80" : "text-slate-500"}`}
                    >
                      {service.priceDetail}
                    </span>
                  </div>
                  <p
                    className={`text-xs ${isFull ? "text-white/70" : "text-slate-500"}`}
                  >
                    {service.note}
                  </p>
                </div>

                <motion.button
                  type='button'
                  onClick={openWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                    isFull
                      ? " text-[#002590] bg-white "
                      : "bg-[#002590] text-white"
                  }`}
                >
                  {service.buttonLabel}
                </motion.button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
