import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
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
    <div>
      {navlink.map(({ path, title }) => (
        <li className=" text-white font-bold text-left list-none" key={path}>
          <NavLink to={path}>{title}</NavLink>
        </li>
      ))}
    </div>
  );
};

export default MobileMenu;
