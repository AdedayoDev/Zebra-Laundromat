import type { ButtonProps } from "../../types";

const variantClasses = {
  primary:
    "border-transparent bg-[#002598] text-white hover:bg-[#FFF5F5] hover:scale-[1.03] active:scale-[0.98] hover:text-[#002598]",
  secondary:
    "hover:text-[#00D84A] hover:scale-[1.03] active:scale-[0.98]  bg-[#00D84A] hover:bg-[#FFF5F5]",
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
