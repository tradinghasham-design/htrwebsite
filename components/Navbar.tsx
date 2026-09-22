"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { name: "AI/ML", href: "/services/ai-machine-learning" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "UX/UI Design", href: "/services/ui-ux-design" },
      { name: "Data Engineering", href: "/services/data-engineering" },
      { name: "Data Analytics", href: "/services/data-analytics" },
      { name: "Cloud & DevOps", href: "/services/cloud-devops" },
      { name: "E-Commerce", href: "/services/e-commerce-solutions" },
      { name: "Blockchain", href: "/services/blockchain-web3" },
      { name: "Cyber Security", href: "/services/cyber-security" },
      { name: "QA & Testing", href: "/services/qa-testing" },
      { name: "Custom Software", href: "/services/custom-software" },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 shadow-sm"
          : "border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 z-50 relative"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.svg"
                alt="HTR Systems"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-bold text-[#0a2540] tracking-tight">
                HTR
              </span>
              <span className="text-[10px] md:text-[11px] font-medium text-slate-500 tracking-wide mt-0.5">
                Systems
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-4 py-2 text-base font-medium transition-colors ${
                        active
                          ? "text-blue-500"
                          : "text-slate-700 hover:text-blue-500"
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* SIMPLE DROPDOWN - K2X Style */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 pt-2 w-64">
                        <div className="bg-white border border-slate-200 shadow-xl rounded-md py-2">
                          {link.dropdownItems?.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="block px-5 py-2.5 text-slate-700 hover:text-blue-500 hover:bg-slate-50 transition-colors text-[15px]"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-base font-medium transition-colors ${
                    active
                      ? "text-blue-500"
                      : "text-slate-700 hover:text-blue-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA BUTTON */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-base font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 z-50 relative"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] bg-[#0a2540] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#0a2540] my-[5px] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#0a2540] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="px-6 py-8 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-4 border-b border-slate-100 transition-colors ${
                  isActive(link.href) ? "text-blue-500" : "text-slate-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 inline-flex items-center justify-center px-6 py-3.5 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium text-base transition-colors"
            >
              Contact Us
            </Link>

            <div className="mt-12 pt-8 border-t border-slate-200 space-y-3 text-sm text-slate-500">
              <a
                href="mailto:info@htrsystems.com"
                className="block hover:text-[#0a2540] transition-colors"
              >
                info@htrsystems.com
              </a>
              <a
                href="tel:+923090649180"
                className="block hover:text-[#0a2540] transition-colors"
              >
                +92 309 0649180
              </a>
              <span className="block">I-9, Islamabad</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
