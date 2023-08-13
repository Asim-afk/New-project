import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
export default function Info() {
  const heads = [
    {
      pic: "/@assets/img/a.jpg",
      name: "Abc ",
      post: "Chairman (SMC)",
      num: "9845123",
    },
    {
      pic: "/@assets/img/b.jpg",
      name: "Abc ",
      post: "Principal",
      num: "9845123",
    },
    {
      pic: "/@assets/img/c.jpg",
      name: "Abc ",
      post: "Chariman (PTA)",
      num: "9845123",
    },
    {
      pic: "/@assets/img/a.jpg",
      name: "Abc ",
      post: "Vice Principal",
      num: "9845123",
    },
    {
      pic: "/@assets/img/b.jpg",
      name: "Abc ",
      post: "Vice Principal",
      num: "9845123",
    },
  ];
  return (
    <>
      <Grid container sx={{ px: { xl: 30 }, py: 5 }}>
        <Grid item xl={6} xs={12}>
          <img
            className="responsive"
            src="/@assets/img/Takewondo-Activities.jpg"
            alt=""
          />
        </Grid>
        <Grid sx={{ px: { sm: 8, xl: 0 } }} item xl={5} xs={12}>
          <Card sx={{ textAlign: "left" }}>
            <CardContent sx={{ p: 5 }}>
              <Typography style={{ marginBottom: 8 }} variant="h5">
                School Introduction
              </Typography>
              <Typography variant="body">
                Being located nearly 12 km south west from its district
                headquarters, Dhulikhel, at an altitude’s of 1481 meters from
                the sea level on the lower belt of Mahabharat range in Panauti
                Municipality ward no. 8 Malpi, this Shree Bhaleshwor Secondary
                School was started in the year 2011 B.S with the contribution of
                local people and […]
              </Typography>
              <br />
              <div data-aos="zoom-out-up">
                <Button
                  sx={{
                    marginTop: 4,
                    backgroundColor: "#be0f34",
                    borderRadius: 5,
                  }}
                  variant="contained"
                >
                  Know More
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{ mx: { xs: 0, xl: 50 }, mt: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#323a40" }}>
          SCHOOL HEADS
        </Typography>
      </Divider>
      <Grid
        sx={{
          marginTop: "10px",
          px: { xl: 20, xs: 2 },
          justifyContent: "center",
        }}
        container
      >
        {heads.map((card, index) => (
          <Grid
            sx={{ display: "flex", justifyContent: "center" }}
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
          >
            <Card key={index} sx={{ width: "90%", m: 2, p: 1 }}>
              <div data-aos="flip-left">
                <CardMedia
                  sx={{ height: 200 }}
                  image={card.pic}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.post}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.num}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
