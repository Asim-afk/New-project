import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./button.css";
export default function Footer() {
  const links = [
    {
      title: "Government Of Nepal",
      link: "https://www.google.com/",
    },
    {
      title: "Office Of President Of Nepal",
      link: "https://www.google.com/",
    },
    {
      title: "Federal Parliament Of Nepal",
      link: "https://www.google.com/",
    },
    {
      title: "Ministry Of Federal Affairs & General Administration",
      link: "https://www.google.com/",
    },
    {
      title: "Ministry Of Federal Affairs & General",
      link: "https://www.google.com/",
    },
  ];
  const info = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "School Introduction",
      link: "/",
    },
    {
      title: "School Facilities",
      link: "/",
    },
    {
      title: "Events",
      link: "/",
    },
    {
      title: "Gallery",
      link: "/",
    },
    {
      title: "School Calendar",
      link: "/",
    },
    {
      title: "Notices",
      link: "/",
    },
    {
      title: "Teaching Learning Links",
      link: "/",
    },
    {
      title: "Contact Us",
      link: "/",
    },
  ];
  return (
    <>
      <Box sx={{ height: "auto", backgroundColor: "#003169" }}>
        <Grid sx={{ py: 6 }} container xs={12} justifyContent="center">
          <Grid container xs={8} justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h5" color="white">
                Questions? please contact us
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h7" color="white">
                We will be happy to share our information.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <div className="outer">
              <div className="button">
                <Link to={"/contacts"} className="text">
                  <Typography sx={{ fontWeight: "bold" }}>
                    Let&apos;s Talk&nbsp;&nbsp;&nbsp;
                    <ArrowForwardIosIcon sx={{ fontSize: 10 }} />
                  </Typography>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#f5f5f5",
          py: 2,
          px: {
            xs: 0,
            xl: 25,
          },
          textAlign: "center",
        }}
      >
        <Grid
          container
          xs={12}
          spacing={2}
          justifyContent="center"
          sx={{ maxWidth: "xl", mx: "auto" }}
        >
          <Grid item xs={12} md={3} xl={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#323a40",
                textAlign: { xs: "center", xl: "left" },
              }}
            >
              Important links
            </Typography>
            {links.map((item) => (
              <Grid
                sx={{
                  textAlign: { xs: "center", xl: "left" },
                }}
                key={item}
                style={{ marginTop: "5px" }}
                item
                xs={12}
              >
                <a
                  key={item}
                  href={item.link}
                  style={{ textDecoration: "none", color: "#595d7b" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography sx={{ fontSize: 14 }}>{item.title}</Typography>
                </a>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#323a40",
                textAlign: { xs: "center", xl: "left" },
              }}
            >
              Information
            </Typography>
            {info.map((item) => (
              <Grid
                sx={{
                  textAlign: { xs: "center", xl: "left" },
                  marginTop: "5px",
                }}
                key={item}
                item
                xs={12}
              >
                <Link
                  style={{ textDecoration: "none", color: "#595d7b" }}
                  key={item}
                  to={item.link}
                >
                  <Typography sx={{ fontSize: 14 }}>{item.title}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#323a40",
                textAlign: { xs: "center", xl: "left" },
              }}
            >
              Address
            </Typography>
          </Grid>
          <Grid item xs={12} md={3} xl={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#323a40",
                textAlign: { xs: "center", xl: "left" },
              }}
            >
              Get in Touch
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
