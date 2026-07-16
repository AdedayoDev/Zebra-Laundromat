interface ServiceIconProps {
  variant: "basket" | "stars";
  className?: string;
}

function ServiceIcon({ variant, className = "" }: ServiceIconProps) {
  if (variant === "basket") {
    return (
      <svg
        viewBox='0 0 64 64'
        className={className}
        fill='none'
        aria-hidden='true'
      >
        <rect
          x='12'
          y='16'
          width='40'
          height='28'
          rx='8'
          stroke='#111111'
          strokeWidth='2.5'
        />
        <path
          d='M20 26h24c2 0 3.5 1.7 3.5 3.7v2.6c0 2-1.6 3.7-3.5 3.7H20c-2 0-3.5-1.7-3.5-3.7v-2.6C16.5 27.7 18 26 20 26Z'
          fill='#2563eb'
        />
        <path
          d='M24 36h16'
          stroke='#111111'
          strokeWidth='2.2'
          strokeLinecap='round'
        />
        <path
          d='M26 24c1.2-2.8 3.8-4.5 7-4.5s5.8 1.7 7 4.5'
          stroke='#111111'
          strokeWidth='2.2'
          strokeLinecap='round'
        />
      </svg>
    );
  }

  return (
    <div
      className={`flex items-end gap-1 ${className}`.trim()}
      aria-hidden='true'
    >
      <svg
        viewBox='0 0 24 24'
        className='h-5 w-5 fill-[#facc15] text-[#111827]'
      >
        <path d='M12 2.8 14.4 8l5.8.8-4.3 4.2 1 5.7L12 16.4 6.1 18.7l1-5.7L2.8 8.8 8.6 8 12 2.8Z' />
      </svg>
      <svg
        viewBox='0 0 24 24'
        className='h-4 w-4 fill-[#facc15] text-[#111827]'
      >
        <path d='M12 2.8 14.4 8l5.8.8-4.3 4.2 1 5.7L12 16.4 6.1 18.7l1-5.7L2.8 8.8 8.6 8 12 2.8Z' />
      </svg>
      <svg
        viewBox='0 0 24 24'
        className='h-3.5 w-3.5 fill-[#facc15] text-[#111827]'
      >
        <path d='M12 2.8 14.4 8l5.8.8-4.3 4.2 1 5.7L12 16.4 6.1 18.7l1-5.7L2.8 8.8 8.6 8 12 2.8Z' />
      </svg>
    </div>
  );
}

export default ServiceIcon;
