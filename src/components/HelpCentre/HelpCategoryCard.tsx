import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface HelpCategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

function HelpCategoryCard({
  title,
  description,
  href,
  icon: Icon,
}: HelpCategoryCardProps) {
  return (
    <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
      <Link
        to={href}
        className='group flex h-full min-w-0 flex-col rounded-3xl border border-(--border-light) bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(0,37,152,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--zebra-blue) focus-visible:ring-offset-2 sm:p-7'
      >
        <span className='flex h-12 w-12 items-center justify-center rounded-2xl bg-(--zebra-blue)/10 text-(--zebra-blue)'>
          <Icon aria-hidden='true' size={24} />
        </span>
        <h2 className='mt-6 text-xl font-semibold text-(--zebra-blue)'>
          {title}
        </h2>
        <p className='mt-3 flex-1 text-sm leading-7 text-(--text-muted) sm:text-base'>
          {description}
        </p>
        <span className='mt-6 inline-flex items-center gap-2 text-sm font-semibold text-(--zebra-blue)'>
          Explore <ArrowUpRight aria-hidden='true' size={17} />
        </span>
      </Link>
    </motion.div>
  );
}

export default HelpCategoryCard;
