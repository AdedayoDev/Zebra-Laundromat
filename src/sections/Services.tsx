import { motion } from "framer-motion";
import { openWhatsApp } from "../utils/whatsapp";

const serviceCards = [
  {
    id: "self",
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
    title: "Full Service",
    description:
      "Spend your time doing the things you enjoy while we take care of your laundry. Simply drop off your clothes and we'll wash, dry and neatly fold everything for you. Come back to fresh, clean laundry that's neatly folded and ready for pickup.",
    features: [
      "We'll do all the work for you",
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

function BasketIcon({className}: {className?: string}) {
  return (
    <span className={`text-3xl ${className}`} aria-hidden='true'>🧺</span>
  );
}

function StarClusterIcon({className}: {className?: string}) {
  return (
    <svg
      viewBox='0 0 64 64'
      className={`  ${className}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <polygon
        points='22,6 27,21 43,21 30,30 35,46 22,36 9,46 14,30 1,21 17,21'
        fill='#FFC700'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <polygon
        points='44,18 48,28 58,28 50,34 53,44 44,38 35,44 38,34 30,28 40,28'
        fill='#FFD950'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <polygon
        points='38,40 41,46 47,46 42,50 44,56 38,52 32,56 34,50 29,46 35,46'
        fill='#FFE77A'
        stroke='#000'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  );
}

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

          <h2 className='premium-heading mt-6 text-2xlfont-extrabold tracking-[-0.03em] text-[#002590] sm:text-5xl md:text-6xl'>
            Two Ways To Do Your Laundry
          </h2>

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
                className={`group rounded-[1.75rem] p-8 shadow-[0_30px_70px_rgba(0,37,144,0.10)]  ${
                  isFull
                    ? "bg-[#002590] text-white"
                    : "border border-[#002590] bg-transparent text-slate-900"
                }`}
              >
                <div className='mb-6 inline-flex h-14 w-14 items-center justify-center  bg-[#002590] rounded-xl shadow-[0_14px_30px_rgba(0,37,144,0.18)]'>
                  {isFull ? <StarClusterIcon  className="bg-white/10 p-2
                    rounded-xl"/> : <BasketIcon />}
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
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                    isFull
                      ? "border border-white bg-[#002590] text-white hover:bg-white hover:text-[#002590]"
                      : "border border-[#002590] bg-transparent text-[#002590] hover:bg-[#002590] hover:text-white"
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
