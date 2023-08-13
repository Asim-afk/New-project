/* eslint-disable react/no-unescaped-entities */
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import HomeIcon from "@mui/icons-material/Home";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    suggestion: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const formStyle = {
    width: "100%",
    marginTop: "20px",
  };
  const iconStyle = {
    fontSize: 14,
    color: "#bbbbbb",
    marginRight: "15px",
  };
  return (
    <>
      <div>
        <div>
          <Typography
            className="Top-image"
            variant="h4"
            style={{ backgroundImage: `url("/@assets/img/a.jpg")` }}
          >
            Contact us
          </Typography>
        </div>
        <div style={{ marginTop: "80px" }} className="container">
          <Grid justifyContent="center" spacing={10} container>
            <Grid
              item
              lg={8}
              md={12}
              sx={{
                textAlign: "left",
                fontWeight: "bolder",
              }}
            >
              <Typography mb={4} sx={{ fontWeight: "bold", fontSize: "18px" }}>
                Contact us about anything related to our school or other. We'll
                do our best to get back to you as soon as possible.
              </Typography>
              <form style={{ padding: "0px 10px" }} onSubmit={handleSubmit}>
                <TextField
                  sx={formStyle}
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <br />
                <TextField
                  style={formStyle}
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <br />
                <TextField
                  style={formStyle}
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
                <br />
                <TextField
                  style={formStyle}
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <br />
                <TextField
                  style={formStyle}
                  label="Suggestion"
                  name="suggestion"
                  value={formData.suggestion}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    marginTop: "20px",
                    backgroundColor: "#be0f34",
                    width: "150px  ",
                  }}
                >
                  Send
                </Button>
              </form>
            </Grid>
            <Grid item lg={4} md={12} xs={12}>
              <Card
                sx={{
                  textAlign: "left",
                  width: {
                    xs: "100%",
                    sm: "60%",
                    md: "40%",
                    lg: "100%",
                    xl: "100%",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h7"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                  >
                    Address
                  </Typography>
                  <Typography variant="caption" component="div">
                    <HomeIcon sx={iconStyle} />
                    Panauti – 8, Malpi, Kabhre
                  </Typography>
                  <a style={{ color: "#212121" }} href="tel:011-441426">
                    <Typography variant="caption" component="div">
                      <CallIcon sx={iconStyle} />
                      011-441426
                    </Typography>
                  </a>
                  <Typography variant="caption" component="div">
                    <EmailIcon sx={iconStyle} />
                    bhaleshwor2014@gmail.com
                  </Typography>
                  <a href="" target="_blank" style={{ textAlign: "left" }}>
                    <FacebookIcon
                      sx={{
                        color: "#0c88ef",
                        marginRight: "5px",
                        marginTop: "10px",
                      }}
                    />
                  </a>
                  <a href="" target="_blank">
                    <YouTubeIcon sx={{ color: "red" }} />
                  </a>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d56557.277383011446!2d85.46843604233644!3d27.629786333103617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m3!3m2!1d27.6297164!2d85.50972159999999!4m0!5e0!3m2!1sen!2snp!4v1685681741366!5m2!1sen!2snp"
            className="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
