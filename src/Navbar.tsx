import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Our Services", href: "#services", id: "services" },
  { label: "Contact Us", href: "#contact", id: "contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: [0.3, 0.6],
        rootMargin: "-20% 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavSelect = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-300 ${
        isScrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.06)]" : "shadow-none"
      }`}
    >
      <nav
        aria-label='Primary navigation'
        className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'
      >
        <a
          href='#home'
          className='flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] focus-visible:ring-offset-2'
          onClick={() => handleNavSelect("home")}
        >
          <img
            src='/logo.svg'
            alt='Zebra Laundromat logo'
            className='h-10 w-10'
          />
        </a>

        <div className='hidden items-center gap-8 lg:flex'>
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link rounded-full px-2 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] focus-visible:ring-offset-2 ${
                  isActive ? "active" : "text-black"
                }`}
                onClick={() => handleNavSelect(item.id)}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href='#contact'
            className='book-service-btn inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] focus-visible:ring-offset-2'
            onClick={() => handleNavSelect("contact")}
          >
            Book a Service
          </a>
        </div>

        <button
          type='button'
          className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-800 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] lg:hidden'
          aria-label='Toggle navigation menu'
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg viewBox='0 0 24 24' aria-hidden='true' className='h-5 w-5'>
            <path
              fill='currentColor'
              d={
                isMenuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"
              }
            />
          </svg>
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
        }`}
      >
        <div className='mx-4 rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-lg'>
          <div className='flex flex-col gap-3'>
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`nav-link rounded-xl px-3 py-2 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] focus-visible:ring-offset-2 ${
                    isActive ? "active" : "text-black"
                  }`}
                  onClick={() => handleNavSelect(item.id)}
                >
                  {item.label}
                </a>
              );
            })}

            <a
              href='#contact'
              className='book-service-btn mt-2 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm'
              onClick={() => handleNavSelect("contact")}
            >
              Book a Service
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
