import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function CoursePricing() {
  return (
    <React.Fragment>
      <Typography variant="body2" gutterBottom>
        Set a Price for you course
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="price"
            name="price"
            label="Set Price (N)"
            fullWidth
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
