import * as React from "react";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import bgImg from "../../img/codes.jpg";
import bgImg2 from "../../img/business.png";
import bgImg3 from "../../img/mentor.jpg";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
const theme = createTheme();
const axios = require("axios").default;

const RequestServiceForm = (props) => {
  const [businessType, setBusinessType] = useState("");
  const [mentorshipType, setMentorshipType] = useState("");
  const [experienceRate, setExperienceRate] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const url = "http://localhost:4000/northino/services";
  const handleBusinessTypeChange = (e) => {
    setBusinessType(e.target.value);
  };
  const handleMentorshipTypeChange = (e) => {
    setMentorshipType(e.target.value);
  };
  const handleExperienceRateChange = (e) => {
    setExperienceRate(e.target.value);
  };
  const fullNameChangeHandler = (e) => {
    setFullName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const numberChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const businessNameChangeHandler = (e) => {
    setBusinessName(e.target.value);
  };
  const businessDescriptionChangeHandler = (e) => {
    setBusinessDescription(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.serviceType === "custom-software-form") {
      axios
        .post(`${url}/custom-software-request`, {
          fullname: fullName,
          email: email,
          phone_number: phoneNumber,
          business_name: businessName,
          business_type: businessType,
          business_description: businessDescription,
        })
        .then(function (response) {
          setFullName("");
          setEmail("");
          setPhoneNumber("");
          setBusinessName("");
          setBusinessDescription("");
          setBusinessType("");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (props.serviceType === "branding-and-promotion-form") {
      axios
        .post(`${url}/business-promotion-request`, {
          fullname: fullName,
          email: email,
          phone_number: phoneNumber,
          business_name: businessName,
          business_type: businessType,
          business_description: businessDescription,
        })
        .then(function (response) {
          setFullName("");
          setEmail("");
          setPhoneNumber("");
          setBusinessName("");
          setBusinessDescription("");
          setBusinessType("");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios

        .post(`${url}/mentorship-request`, {
          fullname: fullName,
          email: email,
          phone_number: phoneNumber,
          mentorship_type: mentorshipType,
          experience: experienceRate,
        })
        .then(function (response) {
          setFullName("");
          setEmail("");
          setPhoneNumber("");
          setMentorshipType("");
          setExperienceRate("");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "auto" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${
              props.serviceType === "custom-software-form"
                ? bgImg
                : props.serviceType === "branding-and-promotion-form"
                ? bgImg2
                : props.serviceType === "mentor-form"
                ? bgImg3
                : ""
            })`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Fill in the form below
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                autowidth="true"
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={fullName}
                onChange={fullNameChangeHandler}
              />
              <TextField
                margin="normal"
                required
                type="email"
                value={email}
                autowidth="true"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={emailChangeHandler}
              />
              <TextField
                margin="normal"
                required
                type="number"
                value={phoneNumber}
                autowidth="true"
                id="phone-number"
                label="Phone Number"
                name="phone-number"
                autoComplete="phone number"
                onChange={numberChangeHandler}
              />
              {props.serviceType !== "mentor-form" ? (
                <TextField
                  margin="normal"
                  required
                  value={businessName}
                  autowidth="true"
                  id="business-name"
                  label="Busines Name"
                  name="business-name"
                  autoComplete="business name"
                  onChange={businessNameChangeHandler}
                />
              ) : (
                ""
              )}
              {props.serviceType !== "mentor-form" ? (
                <div>
                  <InputLabel id="business-type">Business Type</InputLabel>
                  <Select
                    margin="normal"
                    labelId="business-type"
                    value={businessType}
                    id="business-type"
                    onChange={handleBusinessTypeChange}
                    autowidth="true"
                    label="Select your Business Type"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Retailer"}>Retailer</MenuItem>
                    <MenuItem value={"Health Practitioner"}>
                      Health Practitioner
                    </MenuItem>
                    <MenuItem value={"Distributor"}>Distributor</MenuItem>
                    <MenuItem value={"Finished Goods"}>Finished Goods</MenuItem>
                    <MenuItem value={"Food Service"}>Food Service</MenuItem>
                    <MenuItem value={"Supplier/Raw Ingredient Distributor"}>
                      Supplier/Raw Ingredient Distributor
                    </MenuItem>
                    <MenuItem value={"Manufacturer"}>Manufacturer</MenuItem>
                    <MenuItem value={"Business Services"}>
                      Business Services
                    </MenuItem>
                  </Select>
                </div>
              ) : (
                <div>
                  <InputLabel id="business-type">Mentorship Type</InputLabel>
                  <Select
                    margin="normal"
                    labelId="mentorship-type"
                    id="mentorship-type"
                    value={mentorshipType}
                    onChange={handleMentorshipTypeChange}
                    autowidth="true"
                    label="Select your Mentorship Type"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Web Development"}>
                      Web Development
                    </MenuItem>
                    <MenuItem value={"Mobile App Development"}>
                      Mobile App Development
                    </MenuItem>
                    <MenuItem value={"Graphic design"}>Graphic design</MenuItem>
                    <MenuItem value={"UI/UX"}>UI/UX</MenuItem>
                    <MenuItem value={"Content Creation"}>
                      Content Creation
                    </MenuItem>
                    <MenuItem value={"Digital Marketin"}>
                      Digital Marketing
                    </MenuItem>
                    <MenuItem value={"Photography/Videography"}>
                      Photography/Videography
                    </MenuItem>
                    <MenuItem value={"Enterprenuership"}>
                      Enterprenuership
                    </MenuItem>
                  </Select>
                </div>
              )}
              {props.serviceType !== "mentor-form" ? (
                <TextField
                  margin="normal"
                  required
                  autowidth="true"
                  value={businessDescription}
                  id="business-description"
                  label="Business Description"
                  name="business-description"
                  onChange={businessDescriptionChangeHandler}
                  multiline
                  rows={6}
                />
              ) : (
                <div>
                  <InputLabel id="business-type">
                    Rate your experience
                  </InputLabel>
                  <Select
                    margin="normal"
                    labelId="experience-rate"
                    id="experience-rate"
                    value={experienceRate}
                    onChange={handleExperienceRateChange}
                    autowidth="true"
                    label="Rate your experience"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Beginner"}>Beginner</MenuItem>
                    <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                    <MenuItem value={"Expert"}>Expert</MenuItem>
                  </Select>
                </div>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>

              <Link to="/northino-services/">Back</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default RequestServiceForm;
