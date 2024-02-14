import ActiveLink from "@/app/components/active-link/ActiveLink";
import Link from "next/link";
import React from "react";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Contact" },
  { path: "/contact", text: "Pricing" },
];

const Navbar = async () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"}>
        <span>Home</span>
      </Link>

      <div className="flex-1"></div>

      {navItems.map(({ path, text }) => (
        <ActiveLink path={path} text={text} key={path} />
      ))}
    </nav>
  );
};

export default Navbar;
