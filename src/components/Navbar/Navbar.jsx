import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigationData = [
    {
      id: "home",
      name: "Home",
      path: "/",
    },
    {
      id: "about",
      name: "About Us",
      path: "/about",
    },
    {
      id: "blog",
      name: "Blog",
      path: "/blog",
    },
    {
      id: "chess-basics",
      name: "Chess Basics",
      path: "/blog/chess-basics",
    },
    {
      id: "contact",
      name: "Contact",
      path: "/contact",
    },
  ];
  const links = navigationData.map((route) => (
    <Link route={route} key={route.id}></Link>
  ));

  return (
    <nav className="flex justify-between mx-10">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul
          className={`md:hidden absolute bg-amber-200 duration-1000 text-black ${
            open ? "top-8" : "-top-32"
          }`}
        >
          {links}
        </ul>

        <h3 className="ml-4">My Navbar</h3>
      </span>
      <ul className="md:flex hidden">{links}</ul>

      <button>Sign In</button>
    </nav>
  );
};

export default Navbar;
