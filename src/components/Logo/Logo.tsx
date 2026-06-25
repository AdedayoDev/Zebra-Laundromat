import type { LogoProps } from "../../types";

function Logo({ onNavigate }: LogoProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    onNavigate?.();
  };

  return (
    <a
      href='#home'
      onClick={handleClick}
      className='flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] focus-visible:ring-offset-2'
      aria-label='Go to the home section'
    >
      <img src='/logo.svg' alt='Zebra Laundromat logo' className='h-20 w-20' />
      
    </a>
  );
}

export default Logo;
