import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Leonard Dubois",
    role: "Executive Director",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    review:
      "Zebra Laundromat has completely transformed how I care for my wardrobe. The attention to detail and pristine finishing on my bespoke suits is unmatched.",
  },
  {
    id: 2,
    name: "Amelia Brooks",
    role: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    review:
      "Reliable, polished, and incredibly thoughtful. Every delivery feels like a premium service experience from start to finish.",
  },
  {
    id: 3,
    name: "Daniel Kim",
    role: "Hotel Operations Manager",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    review:
      "Their turnaround times are impressive and the quality is always consistent. I trust them with high-priority garments and linens.",
  },
  {
    id: 4,
    name: "Sofia Martinez",
    role: "Creative Consultant",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    review:
      "The team combines professionalism and care in a way that feels personal. I never worry about my special pieces when they handle them.",
  },
  {
    id: 5,
    name: "Nathan Cole",
    role: "Property Manager",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=200&q=80",
    review:
      "Exceptional standards and seamless communication. It is rare to find a service that feels both efficient and genuinely attentive.",
  },
  {
    id: 6,
    name: "Maya Chen",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    review:
      "Professional, dependable, and detail oriented. Their service has become an essential part of my weekly routine.",
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

function Testimonials() {
  return (
    <section
      className='w-full bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
      aria-labelledby='testimonials-heading'
    >
      <div className='mx-auto flex max-w-7xl flex-col items-center text-center'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className='text-[20px] font-semibold text-[#00DA40]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Testimonials
        </motion.p>

        <motion.h2
          id='testimonials-heading'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className='mt-4 text-[30px] font-bold leading-[120%] text-black sm:text-[36px] lg:text-[40px]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          What Our Clients Say
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className='mx-auto mt-4 max-w-[800px] text-[16px] font-normal leading-[170%] text-black/70 sm:text-[18px] lg:text-[20px]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Discover why clients trust us for exceptional laundry and cleaning
          services. Their experiences reflect our commitment to quality,
          reliability, and outstanding customer care.
        </motion.p>

        <div className='mt-16 w-full overflow-hidden'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className='w-full'
          >
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
              }}
              className='flex w-max items-stretch gap-6 will-change-transform'
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.article
                  key={`${testimonial.id}-${index}`}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  }}
                  transition={{ duration: 0.3 }}
                  className='min-h-[280px] w-[300px] rounded-[24px] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[360px] lg:w-[420px]'
                >
                  <div className='flex items-center gap-1'>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={`${testimonial.id}-${starIndex}`}
                        size={20}
                        className='fill-[#FFD700] text-[#FFD700]'
                      />
                    ))}
                  </div>

                  <p
                    className='mt-5 text-left text-[18px] leading-[180%] text-[#444748]'
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    “{testimonial.review}”
                  </p>

                  <div className='mt-8 flex items-center gap-4'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading='lazy'
                      className='h-14 w-14 rounded-full object-cover'
                    />
                    <div className='text-left'>
                      <h3
                        className='text-[18px] font-semibold text-black'
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {testimonial.name}
                      </h3>
                      <p
                        className='text-[14px] text-[#444748]'
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
