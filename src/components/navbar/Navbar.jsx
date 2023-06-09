import { Box, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./dropdown.css";

const navItems = [
  { label: "Home", children: [] },
  { label: "About", children: [] },
  {
    label: "Category",
    children: [
      { label: "Subcategory 1" },
      { label: "Subcategory 2" },
      { label: "Subcategory 3" },
    ],
  },
  {
    label: "About School",
    children: [
      { label: "aboutsub 1" },
      { label: "aboutsub 2" },
      { label: "aboutsub 3" },
    ],
  },
  { label: "Contact Us", children: [] },
];
const paddingBox = { px: { xs: 2, xl: 38 } };
export default function BootAppBar() {
  const [windowSize, setWindowSize] = useState([window.innerWidth]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log(windowSize);
  return (
    <>
      <div
        style={{
          backgroundColor: "#003169",
          color: "white",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="container d-flex justify-content-between"
          sx={{ px: { xs: 1, xl: 16 } }}
        >
          <Typography>011-441426</Typography>
          <Typography>“Shree Bhaleshwor Secondary School”</Typography>
          <Typography>bhaleshwor2014@gmail.com</Typography>
        </Box>
      </div>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <Box sx={paddingBox} className="container-fluid">
          <img className="navbar-brand" src="/@assets/react.svg" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              {navItems.map((item, index) => (
                <React.Fragment key={index}>
                  {item.children.length ? (
                    windowSize[0] >= 992 ? (
                      <div key={index} className="dropdownCustom">
                        <button className="dropbtn">
                          {item.label}
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdownCustom-content">
                          {item.children.map((childItem, childIndex) => (
                            <li key={childIndex}>
                              <NavLink
                                style={({ isActive }) => {
                                  return {
                                    color: isActive ? "#d92627" : "inherit",
                                  };
                                }}
                                className="dropdown-item"
                                to={childItem.label
                                  .replace(" ", "-")
                                  .toLowerCase()}
                              >
                                {childItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <li key={index} className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {item.label}
                        </a>
                        <ul className="dropdown-menu">
                          {item.children.map((childItem, childIndex) => (
                            <li key={childIndex}>
                              <NavLink
                                style={({ isActive }) => {
                                  return {
                                    color: isActive ? "#d92627" : "inherit",
                                  };
                                }}
                                className="dropdown-item"
                                to={childItem.label
                                  .replace(" ", "-")
                                  .toLowerCase()}
                              >
                                {childItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )
                  ) : (
                    <li key={index} className="nav-item">
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            color: isActive ? "#d92627" : "inherit",
                          };
                        }}
                        className="nav-link active"
                        aria-current="page"
                        to={item.label.replace(" ", "-").toLowerCase()}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </Box>
      </nav>
    </>
  );
}
