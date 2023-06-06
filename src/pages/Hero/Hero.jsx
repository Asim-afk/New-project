import DevicesIcon from "@mui/icons-material/Devices";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Events from "./Components/Events";
import Info from "./Components/Info";
export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
  }, []);

  const headerAnimate = "flip-left";
  const iconCss = { fontSize: { xs: 60, xl: 80 }, color: "white" };
  return (
    <>
      <Grid>
        <Carousel
          className="carousel"
          showArrows={true}
          showThumbs={false}
          swipeable={true}
          infiniteLoop={true}
          dynamicHeight={true}
          autoPlay={true}
        >
          <div>
            <img
              src="/@assets/img/a.jpg"
              alt="Image 1"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="/@assets/img/b.jpg"
              alt="Image 2"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="/@assets/img/c.jpg"
              alt="Image 3"
              className="carousel-image"
            />
          </div>
          <div>
            <img
              src="/@assets/img/a.jpg"
              alt="Image 4"
              className="carousel-image"
            />
          </div>
        </Carousel>
        <div
          style={{
            backgroundColor: "#BE0F34",
            fontWeight: "500",
            color: "white",
          }}
        >
          <marquee
            style={{ marginTop: "20px", marginBottom: "15px" }}
            width="60%"
            direction="left"
          >
            <a style={{ marginRight: "60px" }} href="">
              ★ Vacancy Announcement For Computer Teacher ★
            </a>
            <a href="">★ Vacancy Announcement For Computer Teacher ★</a>
          </marquee>
        </div>
        <Grid
          container
          sx={{
            backgroundColor: "#002147",
            px: { xl: 30, xs: 2 },
            py: 5,
          }}
        >
          <Grid sx={{ py: { xs: 3, xl: 0 } }} item xs={12} xl={3}>
            <div data-aos={headerAnimate}>
              <Diversity3Icon sx={iconCss} />
              <br />
              <Typography variant="h6" sx={{ color: "white" }}>
                Friendly Environment
              </Typography>
            </div>
          </Grid>
          <Grid sx={{ py: { xs: 5, xl: 0 } }} item xs={12} xl={3}>
            <div data-aos={headerAnimate}>
              <WorkspacePremiumIcon sx={iconCss} />
              <br />
              <Typography variant="h6" sx={{ color: "white" }}>
                60+ years
              </Typography>
            </div>
          </Grid>
          <Grid sx={{ py: { xs: 5, xl: 0 } }} item xs={12} xl={3}>
            <div data-aos={headerAnimate}>
              <DevicesIcon sx={iconCss} />
              <br />
              <Typography variant="h6" sx={{ color: "white" }}>
                Modern Education
              </Typography>
            </div>
          </Grid>
          <Grid sx={{ py: { xs: 5, xl: 0 } }} item xs={12} xl={3}>
            <div data-aos={headerAnimate}>
              <SchoolIcon sx={iconCss} />
              <br />
              <Typography variant="h6" sx={{ color: "white" }}>
                Quality Education
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Info />
        <Events />
      </Grid>
    </>
  );
}
