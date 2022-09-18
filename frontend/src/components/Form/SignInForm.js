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
import bgImg3 from "../../img/northinoTVBg.png";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import classes from "./_signInForm.module.scss";
const theme = createTheme();
const axios = require("axios").default;

const SignInForm = (props) => {
  const [accountType, setAccountType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:4000/northino/signIn";
  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.type === "admin") {
      axios
        .post(`${url}/admin`, {
          email: email,
          password: password,
        })
        .then(function (response) {
          setEmail("");
          setPassword("");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .post(`${url}/user`, {
          email: email,
          password: password,
          accountType: accountType,
        })
        .then(function (response) {
          setEmail("");
          setPassword("");
          setAccountType("");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${props.type === "admin" ? bgImg : bgImg3})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={12} md={6} elevation={6} square>
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
              {props.type !== "admin" ? "SIGN IN" : "Welcome back Admin "}
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
                type="email"
                value={email}
                fullWidth
                id="email"
                focused
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={emailChangeHandler}
              />
              <TextField
                margin="password"
                required
                type="password"
                value={password}
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="Password"
                onChange={passwordChangeHandler}
              />

              {props.type !== "admin" ? (
                <div>
                  <InputLabel id="business-type">SignIn As</InputLabel>
                  <Select
                    margin="normal"
                    labelId="account-type"
                    value={accountType}
                    id="account-type"
                    onChange={handleAccountTypeChange}
                    fullWidth
                  >
                    <MenuItem value={"Learner"}>Learner</MenuItem>
                    <MenuItem value={"Tutor"}>Tutor</MenuItem>
                  </Select>
                </div>
              ) : (
                ""
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SignIn
              </Button>
              {props.type !== "admin" ? (
                <p>
                  Don't have an account? <Link to="/signUp">SignUp</Link>
                </p>
              ) : (
                ""
              )}
              <br />
              <Link className={classes.backBtn} to="/">
                Back
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default SignInForm;
