import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "../../data/faqItems";

interface FAQAccordionProps {
  items: FaqItem[];
}

function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className='space-y-4'>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className='overflow-hidden rounded-3xl border border-(--border-light) bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]'
          >
            <button
              type='button'
              aria-expanded={isOpen}
              onClick={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
              className='flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-slate-50 sm:px-6 sm:py-6'
            >
              <span className='min-w-0 text-base font-semibold text-(--text-dark) sm:text-lg'>
                {item.question}
              </span>
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-colors duration-300 ${isOpen ? "bg-(--quick-red)" : "bg-(--zebra-blue)"}`}
              >
                {isOpen ? (
                  <X aria-hidden='true' size={20} />
                ) : (
                  <Plus aria-hidden='true' size={20} />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className='px-5 pb-6 text-base leading-7 text-(--text-muted) sm:px-6'>
                    {Array.isArray(item.answer) ? (
                      <ul className='list-disc space-y-2 pl-5'>
                        {item.answer.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.answer}</p>
                    )}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
