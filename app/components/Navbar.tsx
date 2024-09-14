"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useScroll, motion } from "framer-motion";
import Link from "next/link";

const NAVBAR_ITEMS = [
  { id: 1, link: "About", href: "about" },
  { id: 2, link: "Meetups", href: "meetups" },
  { id: 3, link: "Projects", href: "projects" },
  { id: 4, link: "Contact", href: "contact" },
];

type NavbarVariants = "hidden" | "default" | "visible";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [variant, setVariant] = useState<NavbarVariants>("default");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange(() => {
      if (scrollY.get() < 50) {
        setVariant("default");
      } else if (scrollY.getVelocity() > 0) {
        setVariant("hidden");
      } else {
        setVariant("visible");
      }
    });
  }, [scrollY, variant, setVariant]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  useEffect(() => {
    const updateViewBox = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", updateViewBox);
    return () => window.removeEventListener("resize", updateViewBox);
  }, []);

  return (
    <React.Fragment>
      <motion.div
        className={`fixed top-0 z-[2000] w-full`}
        initial={open}
        animate={{
          paddingTop: variant === "default" ? "1.5rem" : "0.75rem",
          paddingBottom: variant === "default" ? "1.5rem" : "0.75rem",
          y: variant === "hidden" ? "-100%" : "0%",
        }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
      >
        <motion.div
          className="fixed top-0 flex h-screen w-1/2 flex-col items-center justify-center bg-slate-800 md:hidden"
          initial={false}
          animate={{
            x: open ? "100%" : "200%",
          }}
          transition={{
            duration: 0.3,
          }}
        >
          <div className="flex flex-col gap-8">
            {NAVBAR_ITEMS.map(({ id, link, href }) => (
              <Link
                href={href}
                key={id}
                className="flex cursor-pointer flex-col items-center"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <span className="txt font-mono text-logo_main">{`[0${id}]`}</span>
                <span className="text-2xl text-logo_txt hover:text-logo_main">
                  {link}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
        <nav className="z-20 flex transform flex-row items-center justify-between px-5 duration-300 ease-out md:px-8 lg:px-10">
          <Link
            href="/"
            className="text-logo_main hover:text-logo_txt cursor-pointer text-4xl"
          >
            V
          </Link>
          <div className="hidden flex-row items-center gap-2 text-xs font-normal md:flex lg:gap-4">
            {NAVBAR_ITEMS.map(({ id, link, href }) => (
              <Link href={href} key={id} className="cursor-pointer p-2">
                <span className="pr-1 text-logo_main">{`[0${id}]`}</span>
                <span className="text-logo_txt hover:text-logo_main">
                  {link}
                </span>
              </Link>
            ))}
          </div>
          <DropdownIcon
            open={open}
            toggleDropdown={() => {
              setOpen(!open);
            }}
          />
        </nav>
      </motion.div>
      <div
        className={`fixed top-0 h-screen w-screen backdrop-blur-sm
            ${open ? "" : "hidden"}`}
        onClick={() => setOpen(false)}
      ></div>
    </React.Fragment>
  );
};

const DropdownIcon = ({
  open,
  toggleDropdown,
}: {
  open: boolean;
  toggleDropdown: () => void;
}) => {
  return (
    <svg
      viewBox="0 0 150 100"
      xmlns="http://www.w3.org/2000/svg"
      className="z-30 h-8 w-12 cursor-pointer stroke-logo_main md:hidden"
      onClick={toggleDropdown}
    >
      <motion.path
        d="M 70 20 L 130 80"
        strokeWidth={8}
        strokeLinecap="round"
        initial={false}
        animate={{
          rotate: open ? [-45, -45, -45, 0] : [0, -45, -45, -45],
          x: open ? [-15, -15, -15, 0] : [0, -15, -15, -15],
          opacity: open ? [0, 0, 1, 1] : [1, 1, 0, 0],
        }}
        transition={{
          duration: 0.3,
          times: [0, 0.5, 0.5, 1],
        }}
      />
      <motion.path
        d="M 70 80 L 130 20"
        strokeWidth={8}
        strokeLinecap="round"
        initial={false}
        animate={{
          rotate: open ? [45, 45, 45, 0] : [0, 45, 45, 45],
          x: open ? [-15, -15, -15, 0] : [0, -15, -15, -15],
          opacity: open ? [0, 0, 1, 1] : [1, 1, 0, 0],
        }}
        transition={{
          duration: 0.3,
          times: [0, 0.5, 0.5, 1],
        }}
      />

      <motion.path
        d="M 40 25 L 130 25"
        strokeWidth={8}
        strokeLinecap="round"
        initial={false}
        animate={{
          y: open ? [0, 25, 25, 25] : [25, 25, 25, 0],
          opacity: open ? [1, 1, 0, 0] : [0, 0, 1, 1],
        }}
        transition={{
          duration: 0.3,
          times: [0, 0.5, 0.5, 1],
        }}
      />
      <motion.path
        d="M 60 50 L 130 50"
        strokeWidth={8}
        strokeLinecap="round"
        initial={false}
        animate={{
          opacity: open ? [1, 1, 0, 0] : [0, 0, 1, 1],
        }}
        transition={{
          duration: 0.3,
          times: [0, 0.5, 0.5, 1],
        }}
      />
      <motion.path
        d="M 80 75 L 130 75"
        strokeWidth={8}
        strokeLinecap="round"
        initial={false}
        animate={{
          y: open ? [0, -25, -25, -25] : [-25, -25, -25, 0],
          opacity: open ? [1, 1, 0, 0] : [0, 0, 1, 1],
        }}
        transition={{
          duration: 0.3,
          times: [0, 0.5, 0.5, 1],
        }}
      />
    </svg>
  );
};

export default Navbar;
