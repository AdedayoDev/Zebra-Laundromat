import { motion } from "framer-motion";
import ServiceButton from "./ServiceButton";
import ServiceFeature from "./ServiceFeature";
import ServiceIcon from "./ServiceIcon";
import ServicePrice from "./ServicePrice";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  priceDescription: string;
  note: string;
  buttonText: string;
  variant: "self" | "full";
  icon: "basket" | "stars";
  badge?: string;
}

function ServiceCard({
  title,
  description,
  features,
  price,
  priceDescription,
  note,
  buttonText,
  variant,
  icon,
  badge,
}: ServiceCardProps) {
  const isFullService = variant === "full";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-all duration-300 sm:p-8 ${isFullService ? "ring-1 ring-[#002590]/10" : ""}`}
    >
      {badge ? (
        <div className='absolute right-5 top-5 rounded-full bg-[#D62828] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg'>
          {badge}
        </div>
      ) : null}

      <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-[#002590] text-white shadow-[0_12px_30px_rgba(0,37,144,0.18)]'>
        <ServiceIcon variant={icon} className='h-7 w-7' />
      </div>

      <h3
        className='mt-6 text-2xl font-semibold text-[#002590]'
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {title}
      </h3>

      <p
        className='mt-3 text-sm leading-7 text-black/70'
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {description}
      </p>

      <div className='mt-6 space-y-3'>
        {features.map((feature) => (
          <ServiceFeature key={feature} text={feature} />
        ))}
      </div>

      <ServicePrice
        price={price}
        priceDescription={priceDescription}
        note={note}
      />
      <ServiceButton
        text={buttonText}
        variant={isFullService ? "secondary" : "primary"}
      />
    </motion.article>
  );
}

export default ServiceCard;
