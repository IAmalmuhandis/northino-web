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
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="courseDescription"
            name="courseDescription"
            label="Course Description"
            fullWidth
            variant="outlined"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
          <InputLabel id="account-type">--Select Category--</InputLabel>
          <Select
            labelId="category"
            value="category"
            id="category"
            onChange={""}
            fullWidth
          >
            <MenuItem value={"Development"}>Development</MenuItem>
            <MenuItem value={"Business"}>Business</MenuItem>
            <MenuItem value={"Finance & Accounting"}>
              Finance & Accounting
            </MenuItem>
            <MenuItem value={"IT & Software"}>IT & Software</MenuItem>
            <MenuItem value={"Office Productivity"}>
              Office Productivity
            </MenuItem>
            <MenuItem value={"Personal Development"}>
              Personal Development
            </MenuItem>
            <MenuItem value={"Design"}>Design</MenuItem>
            <MenuItem value={"Marketing"}>Marketing</MenuItem>
            <MenuItem value={"Photography & Video"}>
              Photography & Video
            </MenuItem>
            <MenuItem value={"Teaching & Academics"}>
              Teaching & Academics
            </MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="primarilyTaught"
            name="primarilyTaught"
            label="What is primarily taught in you course?"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="courseImg">Course Image</InputLabel>
          <TextField
            required
            id="courseImg"
            name="courseImg"
            type="file"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">
            Upload your course image here. It must meet our course image quality
            standards to be accepted. Important guidelines: 750x422 pixels;
            .jpg, .jpeg,. gif, or .png. no text on the image.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="courseImg">Promotional Video</InputLabel>
          <TextField
            required
            id="promotionalVideo"
            name="promotionalVideo"
            type="file"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2">
            Students who watch a well-made promo video are 5X more likely to
            enroll in your course. We've seen that statistic go up to 10X for
            exceptionally awesome videos. Learn how to make yours awesome!
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
