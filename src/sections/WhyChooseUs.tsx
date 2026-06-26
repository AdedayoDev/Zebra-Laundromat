import { motion } from "framer-motion";
import {
  BadgeCheck,
  Clock3,
  Flower2,
  MonitorSmartphone,
  Users,
  WashingMachine,
  type LucideIcon,
} from "lucide-react";
import { useState, type KeyboardEvent } from "react";

interface WhyChooseCard {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const cards: WhyChooseCard[] = [
  {
    id: 1,
    icon: Flower2,
    title: "Exceptional Care",
    description: "Delicate handling of every fiber.",
  },
  {
    id: 2,
    icon: Clock3,
    title: "Reliable Turnaround",
    description: "Timely service without compromise.",
  },
  {
    id: 3,
    icon: WashingMachine,
    title: "Modern Equipment",
    description: "State-of-the-art cleaning technology.",
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Multi-point inspection process.",
  },
  {
    id: 5,
    icon: Users,
    title: "Professional Team",
    description: "Experts in garment and surface care.",
  },
  {
    id: 6,
    icon: MonitorSmartphone,
    title: "Customer Convenience",
    description: "Seamless booking and logistics.",
  },
];

function WhyChooseUs() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveCard(index);
    }
  };

  return (
    <section
      className='w-full bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28'
      aria-labelledby='why-choose-us-heading'
    >
      <div className='mx-auto flex max-w-7xl flex-col items-center'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className='mb-4 text-[20px] font-semibold uppercase tracking-[0.22em] text-[#00DA40]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Why Zebra Laundromat
        </motion.p>

        <motion.h2
          id='why-choose-us-heading'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          className='text-center text-[30px] font-bold leading-tight text-black sm:text-[36px] lg:text-[40px]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Why Clients Choose Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className='mx-auto mt-6 max-w-[750px] text-center text-[16px] font-medium leading-[170%] text-black/70 sm:text-[18px] lg:text-[20px]'
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Professional care, reliable service, and exceptional results delivered
          with convenience, quality, and attention to detail.
        </motion.p>

        <div className='mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isActive = activeCard === index;

            return (
              <motion.button
                key={card.id}
                type='button'
                role='button'
                tabIndex={0}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.01, y: -4 }}
                onClick={() => setActiveCard(index)}
                onKeyDown={(event) => handleCardKeyDown(event, index)}
                aria-pressed={isActive}
                className={`cursor-pointer rounded-2xl border p-8 text-left transition-all duration-300 ${
                  isActive
                    ? "border-transparent bg-[#002590] shadow-xl"
                    : "border-[rgba(0,0,0,0.08)] bg-white shadow-sm hover:shadow-lg"
                }`}
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${
                    isActive ? "bg-white/10" : "bg-[#002590]/10"
                  }`}
                >
                  <Icon
                    className='h-8 w-8'
                    strokeWidth={1.8}
                    color={isActive ? "#FFFFFF" : "#002590"}
                  />
                </div>

                <h3
                  className={`text-[24px] font-semibold leading-[140%] ${
                    isActive ? "text-white" : "text-black"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {card.title}
                </h3>
                <p
                  className={`mt-3 text-[16px] leading-[170%] ${
                    isActive ? "text-white/90" : "text-[#444748]"
                  }`}
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {card.description}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
