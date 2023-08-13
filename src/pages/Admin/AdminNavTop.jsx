/* eslint-disable react/prop-types */
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import adminContext from "./AdminContext";

export default function AdminNavTop() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { isSideNavVisible, setSideNavVisible } = useContext(adminContext);
  const navigate = useNavigate();

  const navButton = () => {
    setSideNavVisible(!isSideNavVisible);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  function logout() {
    setAnchorEl(null);
    localStorage.removeItem("token");
    navigate("/login", { replace: true, state: { from: "admin/logout" } });
  }
  return (
    <div className="adminNavTop">
      <div>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, color: "#5a738e" }}
          onClick={navButton}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle fontSize="40px" />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
