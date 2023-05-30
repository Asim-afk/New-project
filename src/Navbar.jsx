import { AppBar, Box, Tab, Tabs } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="transparent" position="static">
        <Tabs>
          <Tab sx={{ color: "red" }} label="Home" component={Link} to="/" />
          <Tab label="Category" component={Link} to="/Category" />
          <Tab label="About" component={Link} to="/About" />
        </Tabs>
      </AppBar>
    </Box>
  );
}
