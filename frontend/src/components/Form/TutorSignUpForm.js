import * as React from "react";
import "../../base/_utilities.scss";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bgImg from "../../img/anga.jpg";
import AuthTutorRegister from "../../pages/authentication/auth-forms/AuthTutorRegister";
const theme = createTheme();

// const axios = require("axios").default;

const TutorSignUpForm = (props) => {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");
  // const [gender, setGender] = useState("");
  // const [nationality, setNationality] = useState("");
  // const [areaOfExpertise, setAreaOfExpertise] = useState("");
  // const [yearsOfExperience, setYearsOfExperience] = useState("");
  // const url = "http://localhost:4000/northino/services";

  // const fullNameChangeHandler = (e) => {
  //   setFullName(e.target.value);
  // };
  // const emailChangeHandler = (e) => {
  //   setEmail(e.target.value);
  // };
  // const numberChangeHandler = (e) => {
  //   setPhoneNumber(e.target.value);
  // };
  // const passwordChangeHandler = (e) => {
  //   setPassword(e.target.value);
  // };
  // const genderChangeHandler = (e) => {
  //   setGender(e.target.value);
  // };
  // const nationalityChangeHandler = (e) => {
  //   setNationality(e.target.value);
  // };
  // const areaOfExpertiseChangeHandler = (e) => {
  //   setAreaOfExpertise(e.target.value);
  // };
  // const yearsOfExperienceChangeHandler = (e) => {
  //   setYearsOfExperience(e.target.value);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post(`${url}/tutorSignUp`, {
  //       fullname: fullName,
  //       email: email,
  //       phone_number: phoneNumber,
  //       password: password,
  //       gender: gender,
  //       nationality: nationality,
  //       areaOfExpertise: areaOfExpertise,
  //       yearsOfExperience: yearsOfExperience,
  //     })
  //     .then(function (response) {
  //       setFullName("");
  //       setEmail("");
  //       setPhoneNumber("");
  //       setPassword("");
  //       setGender("");
  //       setNationality("");
  //       setAreaOfExpertise("");
  //       setYearsOfExperience("");
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

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
            backgroundImage: `url(${bgImg})`,
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
              Teach with Us
            </Typography>
            <p className="u-center-text">
              Become a tutor and change lives, Including your own
            </p>

            <AuthTutorRegister />
          </Box>

          {/* Tutor signup form */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default TutorSignUpForm;
