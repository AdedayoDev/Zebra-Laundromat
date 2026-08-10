import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "What is a laundromat?",
    answer:
      "A laundromat is a self-service laundry facility where you can wash and dry your clothes using commercial machines, or you can use our drop-off laundry service.",
  },
  {
    question: "Do I need to make an appointment?",
    answer: "No. Walk-ins are welcome during our business hours.",
  },
  {
    question: "Can I wash multiple loads at once?",
    answer:
      "Yes. Our commercial machines can help you finish several loads much faster than at home.",
  },
  {
    question: "Can I leave while my laundry is running?",
    answer: "Yes, but we recommend returning before your cycle is completed.",
  },
  {
    question: "Can I wash blankets and duvets?",
    answer:
      "Yes. We can accommodate many bulky household items. Please ask our attendants for guidance.",
  },
  {
    question: "Do you offer ironing?",
    answer: "Yes. Ironing is available as an optional add-on service.",
  },
  {
    question: "Can I drop off my laundry and return later?",
    answer:
      "Absolutely. We will notify you once your laundry is ready for collection.",
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes. Most laundry is completed on the same day.",
  },
  {
    question: "What does 10kg of laundry look like?",
    answer: [
      "15 to 20 everyday clothing items.",
      "One week's laundry for one or two people.",
      "Several bath towels and bed sheets.",
    ],
  },
  {
    question: "Why should I use a laundromat instead of washing at home?",
    answer:
      "Our commercial machines help you finish laundry faster, avoid electricity and water challenges, and give you back valuable time for work, family, or rest.",
  },
];

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id='faq'
      className='scroll-mt-24 bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
      aria-labelledby='faq-heading'
    >
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionMotion}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className='mx-auto max-w-6xl'
      >
        <div className='flex justify-center'>
          <span className='inline-flex items-center rounded-full bg-[var(--zebra-blue)] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200'>
            FAQ
          </span>
        </div>

        <h2 className='premium-heading mt-6 text-center text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl'>
          Common Questions
        </h2>

        <p className='mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-[var(--text-muted)] sm:text-lg'>
          Everything you need to know before visiting.
        </p>

        <div className='mt-12 space-y-4'>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.04,
                }}
                className='overflow-hidden rounded-[32px] border border-[var(--border-light)] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]'
              >
                <button
                  type='button'
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                  className='flex w-full items-center justify-between px-6 py-6'
                >
                  <span className='max-w-[calc(100%-3rem)] text-left text-base font-semibold text-[var(--text-dark)] sm:text-lg'>
                    {item.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className='flex h-12 w-12 items-center justify-center rounded-full text-white shadow-sm transition-colors duration-300'
                    style={{
                      backgroundColor: isOpen
                        ? "var(--quick-red)"
                        : "var(--zebra-blue)",
                    }}
                  >
                    {isOpen ? <X size={20} /> : <Plus size={20} />}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key='content'
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className='px-6 pb-6'
                    >
                      {Array.isArray(item.answer) ? (
                        <ul className='mt-2 space-y-3 text-base leading-7 text-[var(--text-muted)] sm:text-base'>
                          {item.answer.map((line) => (
                            <li key={line} className='list-inside list-disc pl-5'>
                              {line}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className='mt-2 text-base leading-7 text-[var(--text-muted)] sm:text-base'>
                          {item.answer}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default FAQ;
