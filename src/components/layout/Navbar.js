import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [home, setHome] = useState(false);
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);
  const pathname = window.location.pathname;
  useEffect(() => {
    switch (pathname) {
      case "/":
        return setHome(true);
      case "/projects":
        return setProjects(true);
      case "/about":
        return setAbout(true);
      default:
    }
  }, [pathname]);

  const onClickHandler = string => {
    switch (string) {
      case "/":
        return () => {
          setHome(true);
          setProjects(false);
          setAbout(false);
        };
      case "/projects":
        return () => {
          setProjects(true);
          setAbout(false);
          setHome(false);
        };
      case "/about":
        return () => {
          setAbout(true);
          setHome(false);
          setProjects(false);
        };
      default:
    }
  };
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link
            className={"link " + (home && "active")}
            onClick={onClickHandler("/")}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={"link " + (projects && "active")}
            onClick={onClickHandler("/projects")}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={"link " + (about && "active")}
            onClick={onClickHandler("/about")}
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
