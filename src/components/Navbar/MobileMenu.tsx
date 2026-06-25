import { useState } from "react";
import Button from "../Button/Button";
import type { NavItem } from "../../types";

interface MobileMenuProps {
  items: NavItem[];
  activeSection: string;
  onSelect: (id: string) => void;
}

function MobileMenu({ items, activeSection, onSelect }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (id: string) => {
    onSelect(id);
    setIsOpen(false);
  };

  return (
    <div className='lg:hidden'>
      <button
        type='button'
        className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590]'
        aria-label='Toggle navigation menu'
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg viewBox='0 0 24 24' aria-hidden='true' className='h-5 w-5'>
          <path
            fill='currentColor'
            d={isOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
          />
        </svg>
      </button>

      <div
        className={`mt-3 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
        }`}
      >
        <div className='flex flex-col gap-3 px-4 py-4'>
          {items.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleSelect(item.id)}
                className={`nav-link rounded-xl px-3 py-2 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] focus-visible:ring-offset-2 ${
                  isActive ? "active-link" : "text-black"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <Button
            variant='primary'
            className='mt-2 w-full'
            onClick={() => handleSelect("contact")}
          >
            Book a Service
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
