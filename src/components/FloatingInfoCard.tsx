import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FloatingInfoCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
  animationDelay?: number;
}

function FloatingInfoCard({
  icon: Icon,
  title,
  subtitle,
  className = "",
  animationDelay = 0,
}: FloatingInfoCardProps) {
  const duration = title === "Water" ? 3.2 : 3.8;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: animationDelay, ease: "easeOut" }}
      className={`absolute z-20 flex max-w-55 items-center gap-3 rounded-[1.35rem] bg-white/95 px-4 py-3 shadow-[0_16px_45px_rgba(15,23,42,0.12)] backdrop-blur-sm ${className}`.trim()}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration,
          delay: animationDelay + 0.2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F8EE]'
      >
        <Icon
          className='h-5 w-5'
          style={{
            fill: title === "Water" ? "#2563eb" : "#facc15",
            stroke: "#111827",
          }}
        />
      </motion.div>

      <div className='min-w-0'>
        <p className='text-sm font-semibold text-[#D62828]'>{title}</p>
        <p className='text-sm font-medium text-[#002590]'>{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default FloatingInfoCard;
