import { motion } from "framer-motion";
import Button from "../components/Button/Button";

interface CTAProps {
  backgroundImage: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function CTA({ backgroundImage }: CTAProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id='cta'
      className='relative w-full overflow-hidden'
      aria-labelledby='cta-heading'
    >
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className='absolute inset-0 bg-[#002590]/70' />
      </div>

      <div className='relative mx-auto flex min-h-[450px] w-full max-w-7xl items-center justify-center px-4 py-16 sm:min-h-[500px] sm:px-6 sm:py-20 lg:min-h-[600px] lg:px-8 lg:py-24'>
        <div className='mx-auto flex max-w-4xl flex-col items-center text-center'>
          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className='mb-5 text-[20px] font-semibold uppercase tracking-[0.2em] text-[#00DA40]'
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Act Now
          </motion.p>

          <motion.h2
            id='cta-heading'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className='max-w-[850px] text-[32px] font-bold leading-[120%] text-white sm:text-[40px] lg:text-[46px]'
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ready For A Cleaner, More Convenient Experience?
          </motion.h2>

          <motion.p
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className='mx-auto mt-6 max-w-[700px] text-[16px] font-normal leading-[170%] text-white/90 sm:text-[18px] lg:text-[20px]'
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Let our professionals handle the cleaning while you focus on what
            matters most.
          </motion.p>

          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className='mt-10 flex flex-col gap-4 sm:flex-row'
          >
            <Button
            variant='tertiary'
              onClick={scrollToContact}
              className='w-full rounded-lg bg-[#00DA40] px-6 py-3 text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#00C23A] sm:w-auto'
            >
              Book a Service
            </Button>
            <Button
              variant='secondary'
              onClick={scrollToContact}
              className='w-full rounded-lg border-2 border-white bg-transparent px-6 py-3 text-white transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:text-[#002590] sm:w-auto'
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
