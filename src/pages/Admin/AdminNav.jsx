/* eslint-disable react/prop-types */
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import adminContext from "./AdminContext";

export default function AdminNav() {
  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { isSideNavVisible } = useContext(adminContext);
  const user = localStorage.getItem("user");
  const navItems = [
    { label: "Dashboard", children: [] },
    { label: "List", children: [] },
    { label: "Register", children: [] },
    { label: "About", children: [] },
    {
      label: "Category",
      children: [
        { label: "Subcategory 1" },
        { label: "Subcategory 2" },
        { label: "Subcategory 3" },
      ],
    },
    { label: "Contact Us", children: [] },
  ];

  return (
    <div className={`sideNav ${!isSideNavVisible ? "visible" : ""}`}>
      <Grid style={{ marginBottom: "30px" }} container columns={16}>
        <Grid item xs={16}>
          <div className="navTitle">{user}</div>
        </Grid>
      </Grid>
      <div>
        {navItems.map((navItem) =>
          navItem.children.length === 0 ? (
            <NavLink
              key={navItem.label}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#14bbeb" : "inherit",
                  textDecoration: "none",
                };
              }}
              className="navElement"
              aria-current="page"
              to={navItem.label.replace(" ", "-").toLowerCase()}
            >
              {navItem.label}
            </NavLink>
          ) : (
            <Accordion
              style={{
                boxShadow: "none",
                backgroundColor: "#2a3f54",
                borderBottom: "none",
              }}
              key={navItem.label}
              expanded={expanded === navItem.label}
              onChange={handleChange(navItem.label)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <span
                  style={{ marginLeft: "20px", padding: "1px 0px" }}
                  className="navElement"
                >
                  {navItem.label}
                </span>
              </AccordionSummary>
              <AccordionDetails>
                {navItem.children.map((child) => (
                  <NavLink
                    key={child.label}
                    className="navElement"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#d92627" : "aliceblue",
                        textDecoration: "none",
                      };
                    }}
                    aria-current="page"
                    to={child.label.replace(" ", "-").toLowerCase()}
                  >
                    {child.label}
                  </NavLink>
                ))}
              </AccordionDetails>
            </Accordion>
          )
        )}
      </div>
    </div>
  );
}
