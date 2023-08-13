import { Grid, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./Admin.css";
import adminContext from "./AdminContext";
import AdminNav from "./AdminNav";
import AdminNavTop from "./AdminNavTop";
export default function Layout() {
  const isAboveThreshold = useMediaQuery("(min-width: 1200px)");
  const location = useLocation();
  const currentPath = location.pathname
    .substring(1)
    .split("/")
    .map((part) => part.toUpperCase())
    .join(" / ");
  const [isSideNavVisible, setSideNavVisible] = useState(isAboveThreshold);
  useEffect(() => {
    setSideNavVisible(isAboveThreshold);
  }, [isAboveThreshold]);

  return (
    <adminContext.Provider value={{ isSideNavVisible, setSideNavVisible }}>
      <Grid container columns={16}>
        {isSideNavVisible && ( // Conditionally render the Grid item based on isSideNavVisible
          <Grid item xs={6} sm={4} md={3} lg={3} xl={2}>
            <AdminNav />
          </Grid>
        )}
        <Grid
          item
          xs={isSideNavVisible ? 10 : 16}
          sm={isSideNavVisible ? 12 : 16}
          md={isSideNavVisible ? 13 : 16}
          lg={isSideNavVisible ? 13 : 16}
          xl={isSideNavVisible ? 14 : 16}
        >
          <AdminNavTop />
          <div style={{ textAlign: "left" }} className="outletBackground">
            <h4 style={{ color: "gray", textTransform: "capitalize" }}>
              {currentPath}
            </h4>
            <div style={{ textAlign: "center" }} className="adminOutlet">
              <Outlet />
            </div>
          </div>
        </Grid>
      </Grid>
    </adminContext.Provider>
  );
}
