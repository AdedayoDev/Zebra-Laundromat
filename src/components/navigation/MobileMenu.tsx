import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import type { NavItem } from "../../types";

interface MobileMenuProps {
  items: NavItem[];
  activeSection: string;
  onSelect: (id: string) => void;
}

function MobileMenu({ items, activeSection, onSelect }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (id: string) => {
    onSelect(id);
    setIsOpen(false);
  };

  return (
    <div className='lg:hidden'>
      <motion.button
        type='button'
        onClick={() => setIsOpen(true)}
        whileTap={{ scale: 0.96 }}
        className='relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#002590]/15 bg-[#002590] text-white shadow-lg shadow-[#002590]/15 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] focus-visible:ring-offset-2'
        aria-label='Open navigation menu'
        aria-expanded={isOpen}
      >
        <AnimatePresence mode='wait' initial={false}>
          <motion.span
            key={isOpen ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {isOpen ? (
              <X size={20} strokeWidth={2.25} />
            ) : (
              <Menu size={20} strokeWidth={2.25} />
            )}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className='fixed inset-0 z-[40] bg-black/45 backdrop-blur-[2px]'
              aria-hidden='true'
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className='fixed right-0 top-0 z-[50] flex h-screen w-[85vw] max-w-[380px] flex-col bg-white shadow-[0_20px_80px_rgba(0,0,0,0.22)]'
              role='dialog'
              aria-modal='true'
              aria-label='Mobile navigation'
              onClick={(event) => event.stopPropagation()}
            >
              <div className='flex items-center justify-between border-b border-slate-200 px-5 py-5'>
                <Logo onNavigate={() => handleSelect("home")} />
                <motion.button
                  type='button'
                  whileTap={{ scale: 0.96 }}
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full text-[#002590] transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] focus-visible:ring-offset-2'
                  aria-label='Close navigation menu'
                  onClick={() => setIsOpen(false)}
                >
                  <X size={20} strokeWidth={2.25} />
                </motion.button>
              </div>

              <div className='flex flex-1 flex-col px-5 py-6'>
                <div className='space-y-2'>
                  {items.map((item, index) => {
                    const isActive = activeSection === item.id;

                    return (
                      <motion.a
                        key={item.id}
                        href={item.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.05 * index,
                          duration: 0.24,
                          ease: "easeOut",
                        }}
                        onClick={() => handleSelect(item.id)}
                        className={`group flex items-center rounded-2xl border-l-4 px-4 py-3 text-base font-medium transition-all ${
                          isActive
                            ? "border-[#002590] bg-[#002590]/5 text-[#002590]"
                            : "border-transparent bg-white text-black hover:border-[#002590]/30 hover:bg-slate-50"
                        }`}
                      >
                        <span className='ml-1'>{item.label}</span>
                      </motion.a>
                    );
                  })}
                </div>

                <div className='mt-8 border-t border-slate-200 pt-6'>
                  <Button
                    variant='primary'
                    className='w-full justify-center rounded-2xl px-5 py-3 text-base shadow-lg shadow-[#002590]/10'
                    onClick={() => handleSelect("contact")}
                  >
                    Book a Service
                  </Button>
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default MobileMenu;
