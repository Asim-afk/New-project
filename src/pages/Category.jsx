import { Card, CardContent, Grid, Typography } from "@mui/material";
const cardData = [
  {
    title: "lizard",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
  },
  {
    title: "Frog",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
  },
  {
    title: "apple",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
  },
  {
    title: "apple",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
  },
  {
    title: "apple",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
  },
];

const CardList = () => {
  return (
    <Grid sx={{ marginTop: "10px" }} container spacing={0} columnSpacing={1}>
      {cardData.map((card, index) => (
        <Grid
          sx={{ display: "flex", justifyContent: "center" }}
          item
          key={index}
          xs={12}
          sm={6}
          md={4}
        >
          <Card
            sx={{
              maxWidth: 345,
              marginBottom: "1rem",
              backgroundColor: "#f1f1f1",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.body}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
