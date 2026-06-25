import type { ButtonProps } from "../../types";

const variantClasses = {
  primary: "border-transparent bg-[#002590] text-white hover:scale-[1.03]",
  secondary:
    "border border-[#002590] bg-transparent text-[#002590] hover:bg-slate-50",
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
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring- focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
