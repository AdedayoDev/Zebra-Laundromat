import type { ButtonProps } from "../../types";

const variantClasses = {
  primary:
    "border-transparent bg-[#D62828] text-white hover:bg-[#b71c1c] hover:scale-[1.03] active:scale-[0.98]",
  secondary:
    "border border-[#D62828] bg-transparent text-[#D62828] hover:bg-[#FFF5F5]",
  tertiary:
    "border-transparent bg-[#00DA40] text-white hover:bg-[#00C23A] hover:scale-[1.03] active:scale-[0.98]",
  whatsapp:
    "border-transparent bg-[#D62828] text-white hover:bg-[#b71c1c] hover:scale-[1.03] active:scale-[0.98]",
};

function Button({
  children,
  className = "",
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
