import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function CourseMessage() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Write messages to your students (optional) that will be sent
        automatically when they join or complete your course to encourage
        students to engage with course content. If you do not wish to send a
        welcome or congratulations message, leave the text box blank.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="welcomeMessage"
            name="welcomeMessage"
            label="Welcome Message"
            fullWidth
            variant="outlined"
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="congratulationsMessage"
            name="congratulationsMessage"
            label="Congratulations Message"
            fullWidth
            variant="outlined"
            multiline
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
