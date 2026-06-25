import { motion } from "framer-motion";

const stats = [
  { value: "100%", label: "Satisfaction" },
  { value: "Elite", label: "Professional Team" },
  { value: "Strict", label: "Quality Assurance" },
  { value: "State-of-Art", label: "Modern Equipment" },
];

function About() {
  return (
    <section
      id='about'
      className='bg-white px-4 py-20 sm:px-6  lg:px-8 lg:py-28'
    >
      <div className='mx-auto flex flex-col-reverse md:flex-row w-11/12 gap-12  lg:items-center lg:gap-12'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='overflow-hidden rounded-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.12)]'
        >
          <img
            src='about.svg'
            alt='Professional laundromat service'
            className='h-full min-h-[320px] w-full object-cover lg:min-h-[520px]'
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          className='max-w-2xl'
        >
          <p className='about-label mb-4 text-sm uppercase tracking-[0.28em] text-[#00DA40]'>
            About Zebra Laundromat
          </p>
          <h2 className='about-heading text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-[42px]'>
            Redefining Laundry & Cleaning Excellence
          </h2>

          <div className='mt-6 space-y-6'>
            <p className='about-text text-base leading-8 text-black/70 sm:text-lg lg:text-[20px]'>
              We believe laundry and cleaning should be effortless. Our team
              combines modern equipment, professional expertise, and exceptional
              customer care to deliver results that exceed expectations.
            </p>
            <p className='about-text text-base leading-8 text-black/70 sm:text-lg lg:text-[20px]'>
              From everyday garments to delicate fabrics and large-scale
              commercial spaces, we provide reliable solutions tailored to your
              lifestyle and business needs.
            </p>
          </div>

          <div className='mt-10 grid gap-4 sm:grid-cols-2'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: 0.12 + index * 0.06,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
                }}
                className='rounded-2xl bg-white p-6 shadow-md transition-all duration-300'
              >
                <p className='text-3xl font-bold text-black sm:text-[32px]'>
                  {stat.value}
                </p>
                <p className='mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[#444748]'>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
