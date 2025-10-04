"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navData } from "../../data/navData";

// Reusable desktop links component
const DesktopLinks = ({ linkClassName = "" }: { linkClassName?: string }) => (
  <>
    {navData.links.map(link => (
      <Link
        key={link.id}
        href={link.href}
        className={
          linkClassName ||
          "text-foreground1 hover:text-foreground2 font-[500] tracking-widest uppercase transition-colors duration-200"
        }
      >
        {link.label}
      </Link>
    ))}
  </>
);

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false); // desktop sticky nav visibility

  // Scroll state refs (avoid re-renders on every scroll)
  const lastScrollY = useRef(0);
  const upDelta = useRef(0);
  const downDelta = useRef(0);
  const ticking = useRef(false);

  // Component styling configuration
  const HAMBURGER_SIZE = 44; // Minimum touch target size
  const ANIMATION_DURATION = 0.3;
  const SCROLL_THRESHOLD = 360; // ScrollY after which sticky nav can appear
  const REVEAL_DELTA = 100; // Total upward scroll needed to reveal
  const HIDE_DELTA = 70; // Total downward scroll needed to hide
  const MIN_DELTA = 2; // Ignore tiny jitter

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll listener for desktop sticky nav show/hide
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY.current;

        if (Math.abs(delta) > MIN_DELTA) {
          if (delta > 0) {
            // Scrolling down
            downDelta.current += delta;
            upDelta.current = 0;
            if (downDelta.current > HIDE_DELTA && showSticky) {
              setShowSticky(false);
              downDelta.current = 0;
            }
          } else {
            // Scrolling up
            upDelta.current += -delta; // delta is negative
            downDelta.current = 0;
            if (
              upDelta.current > REVEAL_DELTA &&
              currentY > SCROLL_THRESHOLD &&
              !showSticky
            ) {
              setShowSticky(true);
              upDelta.current = 0;
            }
          }

          // Always hide sticky when above threshold
          if (currentY <= SCROLL_THRESHOLD && showSticky) {
            setShowSticky(false);
          }
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSticky]);

  return (
    <>
      {/* Hero / initial absolute nav (shows at top) */}
      <nav className="bg-nav-bg absolute top-0 right-0 left-0 z-50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
          <div className="flex h-24 items-center justify-between">
            {/* Desktop Logo */}
            <div className="hidden md:flex">
              <Link
                href={navData.logo.href}
                className="font-rox-reg text-foreground1 text-5xl font-bold transition-colors duration-200 hover:text-gray-700"
              >
                {navData.logo.text}
              </Link>
            </div>

            {/* Mobile Logo - Centered */}
            <div className="flex flex-1 justify-center md:hidden">
              <Link
                href={navData.logo.href}
                className="font-rox-reg text-xl font-bold text-gray-900"
              >
                {navData.logo.text}
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center space-x-12 md:flex">
              <DesktopLinks />
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                style={{ minWidth: HAMBURGER_SIZE, minHeight: HAMBURGER_SIZE }}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <motion.div
                  className="flex flex-col items-center justify-center"
                  animate={isMobileMenuOpen ? "open" : "closed"}
                >
                  {/* Top line */}
                  <motion.span
                    className="block h-0.5 w-6 bg-current"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 },
                    }}
                    transition={{ duration: ANIMATION_DURATION }}
                  />
                  {/* Middle line */}
                  <motion.span
                    className="mt-1.5 block h-0.5 w-6 bg-current"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    transition={{ duration: ANIMATION_DURATION }}
                  />
                  {/* Bottom line */}
                  <motion.span
                    className="mt-1.5 block h-0.5 w-6 bg-current"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 },
                    }}
                    transition={{ duration: ANIMATION_DURATION }}
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sticky desktop nav that slides in/out on scroll direction (exact copy styling) */}
      <motion.nav
        aria-label="Primary navigation"
        initial={false}
        animate={{ y: showSticky ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-nav-bg fixed top-0 right-0 left-0 z-50 hidden backdrop-blur-sm md:block"
        aria-hidden={!showSticky}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20">
          <div className="flex h-24 items-center justify-between">
            {/* Desktop Logo (same as absolute) */}
            <div className="hidden md:flex">
              <Link
                href={navData.logo.href}
                className="font-rox-reg text-foreground1 text-5xl font-bold transition-colors duration-200 hover:text-gray-700"
              >
                {navData.logo.text}
              </Link>
            </div>
            {/* Preserve spacing with empty flex item for symmetry when needed */}
            <div className="flex items-center space-x-12 md:flex">
              <DesktopLinks />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: ANIMATION_DURATION }}
              onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-16 right-0 left-0 z-50 bg-white shadow-lg md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: ANIMATION_DURATION }}
            >
              <div className="space-y-1 px-4 py-6">
                {navData.links.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: ANIMATION_DURATION,
                      delay: index * 0.1,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-3 text-lg font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-gray-900"
                      style={{ minHeight: HAMBURGER_SIZE }}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16" />
    </>
  );
};

export default Nav;
