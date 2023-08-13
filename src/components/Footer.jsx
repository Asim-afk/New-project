import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Locations from "./Locations";
import "./button.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <Grid
          container
          sx={{
            py: 6,
            px: {
              xs: 0,
              xl: 37,
            },
            justifyContent: "space-between",
            backgroundColor: "#003169",
          }}
        >
          <Grid item sx={{ textAlign: "left" }}>
            <Typography variant="h5" sx={{ fontWeight: "600" }} color="white">
              Questions? please contact us
            </Typography>
            <Typography
              align="left"
              variant="h7"
              sx={{ fontWeight: "500" }}
              color="white"
            >
              We will be happy to share our information.
            </Typography>
          </Grid>
          <Grid item sx={{ textAlign: "right" }}>
            <div className="outer">
              <div className="button">
                <Link to={"/contact-us"} className="text">
                  <Typography style={{ fontWeight: "bolder" }}>
                    Let&apos;s Talk&nbsp;&nbsp;&nbsp;
                    <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
                  </Typography>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
        <Locations />
      </div>
    </>
  );
}
