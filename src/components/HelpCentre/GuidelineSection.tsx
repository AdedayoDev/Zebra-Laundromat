import { motion } from "framer-motion";

interface GuidelineSectionProps {
  heading: string;
  intro?: string;
  items: string[];
}

function GuidelineSection({ heading, intro, items }: GuidelineSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className='rounded-3xl border border-(--border-light) bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:p-8'
    >
      <h2 className='text-2xl font-semibold text-(--zebra-blue) sm:text-3xl'>
        {heading}
      </h2>
      {intro ? (
        <p className='mt-4 leading-8 text-(--text-muted)'>{intro}</p>
      ) : null}
      <ul className='mt-5 list-disc space-y-3 pl-5 leading-7 text-(--text-dark)'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.section>
  );
}

export default GuidelineSection;
