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
import bgImg from "../../img/almuhandis.jpg";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
const theme = createTheme();
const axios = require("axios").default;

const PhotographyRequestForm = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [eventType, setEventType] = useState("");
  const [dateAndTime, setDateAndTime] = useState("");
  const [location, setLocation] = useState("");
  const [eventDuration, setEventDuration] = useState("");
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

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
  const eventTypeChangeHandler = (e) => {
    setEventType(e.target.value);
  };
  const eventDurationChangeHandler = (e) => {
    setEventDuration(e.target.value);
  };
  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${url}/photo-videography-request`, {
        fullname: fullName,
        email: email,
        phone_number: phoneNumber,
        eventType: eventType,
        dateAndTime: dateAndTime,
        location: location,
      })
      .then(function (response) {
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setEventType("");
        setDateAndTime("");
        setLocation("");
        setEventDuration("");
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
              Say Cheese!
            </Typography>
            <p className="u-center-text">
              Our lens capture your moments in all their flavor and fancies
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
                type="text"
                value={phoneNumber}
                fullWidth
                id="phone-number"
                label="Phone Number"
                name="phone-number"
                autoComplete="phone number"
                onChange={numberChangeHandler}
              />
              <InputLabel id="business-type">Event Type</InputLabel>
              <Select
                margin="normal"
                labelId="gender"
                value={eventType}
                id="eventType"
                onChange={eventTypeChangeHandler}
                fullWidth
                label="Event Type"
              >
                <MenuItem value={"Seminar"}>Seminar</MenuItem>
                <MenuItem value={"Conference"}>Conference</MenuItem>
                <MenuItem value={"Wedding Ceremony"}>Wedding Ceremony</MenuItem>
                <MenuItem value={"Birthday party"}>Birthday party</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
              <TextField
                margin="normal"
                required
                type="number"
                fullWidth
                value={eventDuration}
                id="eventDuration"
                label="Event Duration (Hours)"
                name="eventDuration"
                onChange={eventDurationChangeHandler}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Date&Time picker"
                  fullWidth
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <TextField
                margin="normal"
                required
                fullWidth
                value={location}
                id="location"
                label="Event Location"
                name="location"
                onChange={locationChangeHandler}
                multiline
                rows={6}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Book Now
              </Button>
              <Link to="/">Back</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default PhotographyRequestForm;
