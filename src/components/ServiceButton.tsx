import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_URL } from "../utils/whatsapp";

interface ServiceButtonProps {
  text: string;
  variant: "primary" | "secondary";
  href?: string;
}

function ServiceButton({ text, variant, href }: ServiceButtonProps) {
  const baseClasses =
    "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300";

  const variantClasses =
    variant === "primary"
      ? "border border-[#002590] bg-transparent text-[#002590] hover:bg-[#002590] hover:text-white"
      : "bg-white text-[#002590] shadow-[0_12px_30px_rgba(0,37,144,0.12)] hover:bg-[#002590] hover:text-white";

  return (
    <motion.a
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      href={href || WHATSAPP_URL}
      target='_blank'
      rel='noreferrer'
      className={`${baseClasses} ${variantClasses}`}
    >
      <span>{text}</span>
      <ArrowRight className='h-4 w-4' />
    </motion.a>
  );
}

export default ServiceButton;
