import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircleMore, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { NavItem } from "../../types";
import Button from "../Button/Button";

const navigationItems: NavItem[] = [
  { label: "Services", href: "#services", id: "services" },
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Location", href: "#location", id: "location" },
  { label: "Get Help", href: "/get-help", id: "get-help-page" },
];

const whatsappUrl = "https://wa.me/234XXXXXXXXXX";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sectionIds = [
      "hero",
      "services",
      "how-it-works",
      "pricing",
      "faq",
      "location",
    ];
    const sections = sectionIds.flatMap((sectionId) =>
      Array.from(document.querySelectorAll<HTMLElement>(`[id="${sectionId}"]`)),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.8],
        rootMargin: "-15% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigation = (item: NavItem) => {
    setActiveSection(item.id);
    setIsMenuOpen(false);

    if (item.href.startsWith("/")) {
      navigate(item.href);
      return;
    }

    scrollToSection(item.id);
  };

  const openWhatsApp = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`sticky top-0 z-100 w-full border-b border-slate-200/70 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-md"
          : "bg-white/95"
      }`}
    >
      <nav
        aria-label='Primary navigation'
        className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8'
      >
        <Link
          to='/'
          className='flex items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] focus-visible:ring-offset-2'
          aria-label='Go to the home page'
        >
          <img
            src='/logo.svg'
            alt='Zebra Laundromat logo'
            className='h-12 w-12 sm:h-14 sm:w-14'
          />
        </Link>

        <div className='hidden items-center lg:flex'>
          <div className='flex items-center gap-8 xl:gap-8'>
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <motion.a
                  key={item.id}
                  whileHover={{ y: -2, scale: 1.02 }}
                  href={item.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavigation(item);
                  }}
                  className={`rounded-full px-1 py-2 text-[16px] font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] focus-visible:ring-offset-2 ${
                    isActive
                      ? "text-[#D62828]"
                      : "text-[#111111] hover:text-[#D62828]"
                  }`}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </div>

          <div className='ml-10'>
            <Button
              type='button'
              variant='whatsapp'
              onClick={openWhatsApp}
              className='rounded-full px-6 py-3 text-[15px] shadow-lg shadow-[#D62828]/20'
            >
              <span className='mr-2 inline-flex items-center'>
                <MessageCircleMore size={18} strokeWidth={2} />
              </span>
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        <motion.button
          type='button'
          whileTap={{ scale: 0.95, rotate: 10 }}
          className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#111111] shadow-sm transition hover:border-[#D62828]/20 hover:text-[#D62828] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] focus-visible:ring-offset-2 lg:hidden'
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <AnimatePresence mode='wait' initial={false}>
            <motion.span
              key={isMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {isMenuOpen ? (
                <X size={20} strokeWidth={2.25} />
              ) : (
                <Menu size={20} strokeWidth={2.25} />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className='fixed inset-0 z-90 bg-slate-950/50 backdrop-blur-sm'
              aria-hidden='true'
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className='fixed right-0 top-0 z-100 flex h-screen w-[80vw] max-w-90 flex-col bg-white shadow-[0_20px_80px_rgba(0,0,0,0.22)]'
              role='dialog'
              aria-modal='true'
              aria-label='Mobile navigation'
              onClick={(event) => event.stopPropagation()}
            >
              <div className='flex items-center justify-between border-b border-slate-200 px-5 py-5'>
                <Link
                  to='/'
                  onClick={() => setIsMenuOpen(false)}
                  className='rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] focus-visible:ring-offset-2'
                  aria-label='Go to the home page'
                >
                  <img
                    src='/logo.svg'
                    alt='Zebra Laundromat logo'
                    className='h-12 w-12'
                  />
                </Link>
                <button
                  type='button'
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full text-[#111111] transition hover:bg-slate-100 hover:text-[#D62828] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D62828] focus-visible:ring-offset-2'
                  aria-label='Close navigation menu'
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={20} strokeWidth={2.25} />
                </button>
              </div>

              <div className='flex flex-1 flex-col justify-between px-5 py-6'>
                <div className='space-y-2'>
                  {navigationItems.map((item, index) => {
                    const isActive = activeSection === item.id;

                    return (
                      <motion.a
                        key={item.id}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.04 * index,
                          duration: 0.22,
                          ease: "easeOut",
                        }}
                        href={item.href}
                        onClick={(event) => {
                          event.preventDefault();
                          handleNavigation(item);
                        }}
                        className={`flex items-center rounded-2xl border-l-4 px-4 py-3 text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "border-[#D62828] bg-[#FFF5F5] text-[#D62828]"
                            : "border-transparent text-[#111111] hover:border-[#D62828]/30 hover:bg-slate-50"
                        }`}
                      >
                        {item.label}
                      </motion.a>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.22, ease: "easeOut" }}
                  className='mt-6 border-t border-slate-200 pt-6'
                >
                  <Button
                    type='button'
                    variant='whatsapp'
                    onClick={openWhatsApp}
                    className='w-full justify-center rounded-xl px-6 py-3 text-[15px] shadow-lg shadow-[#D62828]/20'
                  >
                    <span className='mr-2 inline-flex items-center'>
                      <MessageCircleMore size={18} strokeWidth={2} />
                    </span>
                    Chat on WhatsApp
                  </Button>
                </motion.div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
