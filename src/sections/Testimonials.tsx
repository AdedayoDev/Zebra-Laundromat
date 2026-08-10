import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  initial: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    initial: "A",
    name: "Adebola K.",
    location: "Agungi Resident",
    review:
      "I was skeptical at first, but Zebra changed how I do laundry. The space was clean, the staff was friendly, and my clothes were ready in under an hour. I will definitely be back.",
  },
  {
    id: 2,
    initial: "C",
    name: "Chiona O.",
    location: "Lekki Resident",
    review:
      "As a working mom, I never have time for laundry. The full-service option is a lifesaver. I drop off, run errands, and come back to neatly folded clothes. Absolutely worth it.",
  },
  {
    id: 3,
    initial: "T",
    name: "Tunde M.",
    location: "Eti-Osa Resident",
    review:
      "The self-service machines are fast and easy to use. I love that I can choose hot or cold water. The Wi-Fi and AC make waiting actually pleasant. Best laundromat in the area.",
  },
];

function Testimonials() {
  return (
    <section className='bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col items-center text-center'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='inline-flex rounded-full tracking-wider leading-1.5 uppercase bg-[#00DA40] px-5 py-2 text-sm font-medium text-white'
          >
            Testimonials
          </motion.div>

          <motion.h2
            id='testimonials-heading'
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            className='premium-heading mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-[#002590] sm:text-5xl lg:text-6xl'
          >
            What Our Customers Say About Us
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
          className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.16 + index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className='rounded-[2rem] bg-white p-8 shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-transform duration-300'
            >
              <div className='flex items-center gap-2'>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={18} className='text-[#D62828]' />
                ))}
              </div>

              <p className='mt-6 text-left text-base leading-8 text-slate-700'>
                “{testimonial.review}”
              </p>

              <div className='mt-8 flex items-center gap-4'>
                <div className='flex h-14 w-14 items-center justify-center rounded-full bg-[#002590] text-lg font-bold text-white'>
                  {testimonial.initial}
                </div>
                <div className='text-left'>
                  <p className='text-base font-semibold text-[#002590]'>
                    {testimonial.name}
                  </p>
                  <p className='mt-1 text-sm text-slate-500'>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
