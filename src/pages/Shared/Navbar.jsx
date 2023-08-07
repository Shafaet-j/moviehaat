import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];
  return (
    <header>
      <nav className=" container mx-auto nav flex h-[100px] items-center justify-between px-4 relative">
        <Link className="text-xl lg:text-3xl font-bold text-slate-950" href="/">
          QuadB
        </Link>
        <ul className=" flex gap-10">
          {navlink.map(({ path, title }) => (
            <li key={path}>
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
