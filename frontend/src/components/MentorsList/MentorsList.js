import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card2";
import { v4 as uuidv4 } from "uuid";
const axios = require("axios").default;
const theme = createTheme();
const MentorsList = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/northino/admin/getMentors"
      );
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "auto" }}>
        {data.map((datas) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              elevation={6}
              square="true"
              key={uuidv4()}
            >
              <Card
                imgAlt="view"
                cardTitle={datas.name}
                EOE={datas.fieldOfExperience}
                cardImage={datas.picture}
                cardDesc={datas.about}
                mentorId={datas.uniqueId}
                btnText="Request"
                type="mentor"
              />
            </Grid>
          );
        })}
      </Grid>
    </ThemeProvider>
  );
};
export default MentorsList;
