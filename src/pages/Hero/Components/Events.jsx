import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
export default function Events() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const currDate = new Date();
  const events = [
    {
      pic: "/@assets/img/a.jpg",
      title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: `${currDate}`,
    },
    {
      pic: "/@assets/img/b.jpg",
      title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: `${currDate}`,
    },
    {
      pic: "/@assets/img/c.jpg",
      title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: `${currDate}`,
    },
    {
      pic: "/@assets/img/a.jpg",
      title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: `${currDate}`,
    },
    {
      pic: "/@assets/img/a.jpg",
      title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: `${currDate}`,
    },
    {
      pic: "/@assets/img/a.jpg",
      title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: `${currDate}`,
    },
    {
      pic: "/@assets/img/b.jpg",
      title: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: `${currDate}`,
    },
  ];
  return (
    <>
      <Divider sx={{ mx: { xs: 0, xl: 50 }, mt: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#323a40" }}>
          SCHOOL EVENTS
        </Typography>
      </Divider>
      <Box sx={{ px: { xl: 20, xs: 1 } }}>
        <Carousel
          className="carousel"
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          autoPlay={true}
          showStatus={false}
          centerMode={true}
          emulateTouch={true}
          centerSlidePercentage={30}
        >
          {events.map((card, index) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "left",
                textAlign: "left",
              }}
              item
              key={index}
            >
              <Card
                key={index}
                sx={{ width: { xs: "95%", xl: "90%" }, marginBottom: 5 }}
              >
                <CardMedia
                  sx={{ height: { xl: 200, xs: 100 } }}
                  image={card.pic}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h7" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Carousel>
      </Box>
      <Divider sx={{ mx: { xs: 0, xl: 50 }, mt: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#323a40" }}>
          SCHOOL HEADS
        </Typography>
      </Divider>
      <Grid
        spacing={5}
        container
        sx={{ px: { xl: 35, xs: 5 }, marginTop: 1, marginBottom: 8 }}
      >
        <Grid item xs={12} xl={6}>
          <Link to="/">
            <div data-aos="fade-right" className="image-with-text-container">
              <img src="/@assets/img/b.jpg" alt="img" />
              <Typography>hello world</Typography>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} xl={6}>
          <Link to="/">
            <div data-aos="fade-left" className="image-with-text-container">
              <img src="/@assets/img/b.jpg" alt="img" />
              <Typography>hello world</Typography>
            </div>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
