import * as React from "react";
import Button from "@mui/material/Button";
import "../../base/_utilities.scss";
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
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
const theme = createTheme();
const axios = require("axios").default;

const SignUpForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [age, setAge] = useState("");

  const url = "http://localhost:4000/northino/services";

  const fullNameChangeHandler = (e) => {
    setFullName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const numberChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const genderChangeHandler = (e) => {
    setGender(e.target.value);
  };
  const nationalityChangeHandler = (e) => {
    setNationality(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${url}/tutorSignUp`, {
        fullname: fullName,
        email: email,
        phone_number: phoneNumber,
        password: password,
        gender: gender,
        nationality: nationality,
        age: age,
      })
      .then(function (response) {
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        setGender("");
        setNationality("");
        setAge("");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
              Start Learning with Us
            </Typography>
            <p className="u-center-text">
              Achieve your goal within a short period of time
            </p>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
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
                fullWidth
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
                fullWidth
                id="phone-number"
                label="Phone Number"
                name="phone-number"
                autoComplete="phone number"
                onChange={numberChangeHandler}
              />
              <TextField
                margin="normal"
                required
                value={password}
                fullWidth
                id="password"
                label="password"
                name="password"
                autoComplete="password"
                onChange={passwordChangeHandler}
              />
              <InputLabel id="business-type">Business Type</InputLabel>
              <Select
                margin="normal"
                labelId="gender"
                value={gender}
                id="gender"
                onChange={genderChangeHandler}
                fullWidth
                label="Gender"
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>

              <InputLabel id="nationality">Nationality</InputLabel>
              <Select
                margin="normal"
                labelId="nationality"
                id="nationality"
                value={nationality}
                onChange={nationalityChangeHandler}
                fullWidth
                label="nationality"
              >
                <MenuItem value={"Nigeria"}>Nigeria</MenuItem>
                <MenuItem value={"Ghana"}>Ghana</MenuItem>
                <MenuItem value={"Chad"}>Chad</MenuItem>
                <MenuItem value={"Cameroon"}>Cameroon</MenuItem>
                <MenuItem value={"Cotourno"}>Cotourno</MenuItem>
                <MenuItem value={"Saudi Arabia"}>Saudi Arabia</MenuItem>
                <MenuItem value={"Senegal"}>Senegal</MenuItem>
                <MenuItem value={"Mali"}>Mali</MenuItem>
              </Select>
              <TextField
                margin="normal"
                required
                fullWidth
                type="number"
                value={age}
                id="age"
                label="Age"
                name="age"
                onChange={ageChangeHandler}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>

              <Link to="/">Back</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default SignUpForm;
