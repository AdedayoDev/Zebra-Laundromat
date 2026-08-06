import { Link } from "react-router-dom";
import type { LogoProps } from "../../types";

function Logo({ onNavigate }: LogoProps) {
  return (
    <Link
      to='/'
      onClick={() => onNavigate?.()}
      className='flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] focus-visible:ring-offset-2'
      aria-label='Go to the home page'
    >
      <img src='/logo.svg' alt='Zebra Laundromat logo' className='h-15 w-15' />
    </Link>
  );
}

export default Logo;
