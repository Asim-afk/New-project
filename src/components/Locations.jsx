import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Locations() {
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
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          py: 2,
          px: {
            xs: 10,
            xl: 37,
          },
          textAlign: "center",
        }}
      >
        <Grid
          container
          spacing={{ xs: 0, xl: 2 }}
          sx={{
            maxWidth: "xl",
            mx: "auto",
            marginTop: 3,
          }}
        >
          <Grid item sx={{ mb: 3 }} xs={12} md={3} xl={3}>
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
                key={item.title}
                style={{ marginTop: "8px" }}
                item
                xs={12}
              >
                <a
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
          <Grid item sx={{ mb: 3 }} xs={12} md={3} xl={3}>
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
                  marginTop: "8px",
                }}
                key={item.title}
                item
                xs={12}
              >
                <Link
                  style={{ textDecoration: "none", color: "#595d7b" }}
                  to={item.link}
                >
                  <Typography sx={{ fontSize: 14 }}>{item.title}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
          <Grid item sx={{ mb: 3 }} xs={12} md={3} xl={3}>
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
            <Grid
              sx={{
                textAlign: { xs: "center", xl: "left" },
                marginTop: "7px",
              }}
              item
              xs={12}
            >
              <Link style={{ textDecoration: "none", color: "#595d7b" }}>
                <Typography sx={{ fontSize: 14 }}>
                  <LocationOnIcon sx={{ fontSize: 19 }} />
                  Panauti – 8, Malpi, Kabhre
                </Typography>
              </Link>
            </Grid>
            <Grid
              sx={{
                textAlign: { xs: "center", xl: "left" },
                marginTop: "5px",
              }}
              item
              xs={12}
            >
              <Link style={{ textDecoration: "none", color: "#595d7b" }}>
                <Typography sx={{ fontSize: 14 }}>
                  <LocalPhoneIcon sx={{ fontSize: 19 }} />
                  011-441426
                </Typography>
              </Link>
            </Grid>
            <Grid
              sx={{
                textAlign: { xs: "center", xl: "left" },
                marginTop: "5px",
              }}
              item
              xs={12}
            >
              <Link style={{ textDecoration: "none", color: "#595d7b" }}>
                <Typography sx={{ fontSize: 14 }}>
                  <EmailIcon sx={{ fontSize: 19 }} />
                  bhaleshwor2014@gmail.com
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ textAlign: { xs: "center", md: "left", xl: "left" } }}
            xs={12}
            md={3}
            xl={3}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#323a40",
                textAlign: { xs: "center", xl: "left" },
                marginBottom: "8px",
              }}
            >
              Get in Touch
            </Typography>
            <a href="" target="_blank" style={{ textAlign: "left" }}>
              <FacebookIcon sx={{ color: "#0c88ef", justifySelf: "left" }} />
            </a>
            <a href="" target="_blank" style={{ textAlign: "left" }}>
              <YouTubeIcon sx={{ color: "red" }} />
            </a>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{ maxWidth: "xl", mx: "auto", marginTop: "40px" }}
        >
          <Grid item xs={12} md={6} xl={8}>
            <Typography
              style={{ fontSize: 12 }}
              sx={{
                color: "#323a40",
                textAlign: { xs: "center", xl: "left" },
              }}
            >
              2020 © Bhaleshwor Secondary School . All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Typography
              style={{ fontSize: 12 }}
              sx={{
                color: "#323a40",
                textAlign: { xs: "center", xl: "right" },
              }}
            >
              Made with 🙏🙏🙏 by
              <a
                href=""
                style={{ textDecoration: "none", color: "#595d7b" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                🙂🙂🙂
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
