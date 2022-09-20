import * as React from "react";
import Grid from "@mui/material/Grid";

import {
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

export default function CourseDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        New Course Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="courseTitle"
            name="courseTitle"
            label="Course Title"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="subtitleTitle"
            name="subtitleTitle"
            label="Course Subtitle"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="courseDescription"
            name="courseDescription"
            label="Course Description"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel id="account-type">--Select Level--</InputLabel>
          <Select
            labelId="level"
            value="Level"
            id="level"
            onChange={""}
            fullWidth
          >
            <MenuItem value={"Beginner Level"}>Beginner Level</MenuItem>
            <MenuItem value={"Intermediate Level"}>Intermediate Level</MenuItem>
            <MenuItem value={"Expert Level"}>Expert Level</MenuItem>
            <MenuItem value={"All Levels"}>All Levels</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="Phone Number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="yearOfExperience"
            name="yearOfExperience"
            type="number"
            label="Year of experience"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="areaOfExpertise"
            name="areaOfExpertise"
            label="Tell us about yourself and your area of expertise "
            fullWidth
            variant="standard"
            multiline
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="picture"
            name="picture"
            type="file"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
