import { motion } from "framer-motion";
import Button from "../components/Button/Button";

const serviceCards = [
  {
    icon: "/laundro.svg",
    title: "Laundromat Services",
    description:
      "Our self-service laundromat offers more than washing and drying facilities in a clean, comfortable environment. Whether you prefer independent use of our systems or assistance from our team, we ensure a seamless experience.",
    features: [
      "High Capacity Machines",
      "Eco-Friendly Detergents",
      "Pristine Environment",
      "Staff Assistance Available",
    ],
  },
  {
    icon: "/premium-service.svg",
    title: "Premium Laundry Services",
    description:
      "Entrust your garments to professionals who understand fabric care. From business attire to everyday clothing, every item is cleaned, pressed, and returned with meticulous attention to detail.",
    features: [
      "Fabric-Specific Protocols",
      "Expert Stain Removal",
      "Hand-Finished Pressing",
      "Suits and Office Wear",
    ],
  },
];

function Services() {
  return (
    <section
      id='services'
      className='scroll-mt-24 bg-[#002590] px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
    >
      <div className='mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className='mx-auto max-w-3xl text-center'
        >
          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#00DA40]'>
            What We Do
          </p>
          <h2 className='text-3xl font-bold text-white sm:text-4xl lg:text-[46px]'>
            Our Core Services
          </h2>
          <p className='mx-auto mt-4 max-w-[700px] text-base leading-8 text-white/85 sm:text-lg lg:text-[20px]'>
            Designed for individuals, families, and professionals who value
            quality and convenience.
          </p>
        </motion.div>

        <div className='mt-16 grid gap-8 lg:grid-cols-2'>
          {serviceCards.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
                boxShadow: "0 24px 60px rgba(0,0,0,0.18)",
              }}
              className='rounded-[28px] bg-white p-8 shadow-lg transition-all duration-300 sm:p-10'
            >
              <div className='flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(0,37,144,0.3)] bg-[#EEEEEE]'>
                <img src={service.icon} alt='' className='h-8 w-8' />
              </div>

              <h3 className='mt-6 text-2xl font-semibold text-black'>
                {service.title}
              </h3>

              <p className='mt-4 text-base leading-7 text-black/80 font-[Manrope]'>
                {service.description}
              </p>

              <ul className='mt-6 space-y-3'>
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className='flex items-start gap-3 text-base font-medium text-black'
                  >
                    <span className='mt-1 text-[#002590]'>•</span>
                    <span className='font-[Manrope]'>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className='mt-8'>
                <Button variant='primary'>Book This Service</Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
