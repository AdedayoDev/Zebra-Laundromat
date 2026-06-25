import { useEffect, useState } from "react";
import type { NavItem } from "../../types";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import MobileMenu from "../navigation/MobileMenu";

const navigationItems: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Our Services", href: "#services", id: "services" },
  { label: "Contact Us", href: "#contact", id: "contact" },
];

function Navbar() {
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

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-[55] w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.06)]" : "shadow-none"
      }`}
    >
      <nav
        aria-label='Primary navigation'
        className='relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'
      >
        <Logo onNavigate={() => handleNavSelect("home")} />

        <div className='hidden items-center gap-8 lg:flex'>
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavSelect(item.id)}
                className={`nav-link rounded-full px-2 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002590] focus-visible:ring-offset-2 ${
                  isActive ? "active-link" : "text-black"
                }`}
              >
                {item.label}
              </a>
            );
          })}

          <Button variant='primary' onClick={() => handleNavSelect("contact")}>
            Book a Service
          </Button>
        </div>

        <MobileMenu
          items={navigationItems}
          activeSection={activeSection}
          onSelect={handleNavSelect}
        />
      </nav>
    </header>
  );
}

export default Navbar;
