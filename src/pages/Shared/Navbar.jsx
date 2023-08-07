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
    <header className="bg-transparent backdrop-blur-2xl z-50 sticky top-0">
      <nav className=" container mx-auto nav flex h-[100px] items-center justify-between px-4 relative">
        <Link className="text-xl lg:text-3xl font-bold text-[#e4d804]" href="/">
          QuadShow
        </Link>
        <ul className=" flex gap-10">
          {navlink.map(({ path, title }) => (
            <li className=" text-white font-bold" key={path}>
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
