import {
  Grid,
  TextField,
  CssBaseline,
  Paper,
  Typography,
  createTheme,
  ThemeProvider,
  Container,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";

const theme = createTheme();

const addVideo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Add New Video
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="videoTitle"
                name="videoTitle"
                label="Video Title"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="videoDesc"
                name="videoDesc"
                label="Video Description"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="uploadVideo">Upload Video Episode</InputLabel>
              <TextField
                required
                id="uploadVideo"
                name="uploadVideo"
                type="file"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">
                Upload Video Episode. which will be added to your selected
                course.It must meet our episode video quality standards to be
                accepted. Above 30 minutes and format .mp4, or .mkv no text on
                the video.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel id="coursesList">--Your Course--</InputLabel>
              <Select
                labelId="courseList"
                value="courseList"
                id="courseList"
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
              </Select>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, ml: 1 }}
          >
            Publish Video
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};
export default addVideo;
