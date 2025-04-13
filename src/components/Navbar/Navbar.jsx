import React from "react";
import Link from "./Link";

const Navbar = () => {
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

  return (
    <nav>
      <ul className="flex">
        {navigationData.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>

      {/* <ul className="flex gap-3">
        <li className="mr-10">
          <a href="/">Home</a>
        </li>
        <li className="mr-10">
          <a href="/about">About</a>
        </li>
        <li className="mr-10">
          <a href="/blogs">Blogs</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
