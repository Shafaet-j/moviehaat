import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
        <div className=" hidden lg:block">
          <ul className=" flex gap-10">
            {navlink.map(({ path, title }) => (
              <li className=" text-white font-bold" key={path}>
                <NavLink to={path}>{title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className=" lg:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <FaWindowClose color="#e4d804" size={25} />
          ) : (
            <FaBars color="#e4d804" size={25} />
          )}
        </div>
        <div
          className={` absolute duration-300 ease-out ${
            open ? " right-14 top-0" : "right-14 -top-[15rem]"
          }`}
        >
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
