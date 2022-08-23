import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card2";
import { v4 as uuidv4 } from "uuid";
const axios = require("axios").default;
const theme = createTheme();
const RecordListContainer = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      if (props.serviceType === "previous-clients-projects") {
        const res = await axios.get(
          "http://localhost:4000/northino/admin/getClientProjects"
        );
        setData(res.data);
        console.log(res.data);
      } else if (props.serviceType === "our-builtIn-projects") {
        const res = await axios.get(
          "http://localhost:4000/northino/admin/getBuiltProjects"
        );
        setData(res.data);
        console.log(res.data);
      } else if (props.serviceType === "businesses-promoted") {
        const res = await axios.get(
          "http://localhost:4000/northino/admin/getPromotedBusinesses"
        );
        setData(res.data);
        console.log(res.data);
      } else {
        const res = await axios.get(
          "http://localhost:4000/northino/admin/getMentors"
        );
        setData(res.data);
        console.log(res.data);
      }
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
                cardTitle={datas.project_name}
                clientName={datas.client_name}
                cardImage={datas.project_logo}
                cardDesc={datas.project_description}
              />
            </Grid>
          );
        })}
      </Grid>
    </ThemeProvider>
  );
};
export default RecordListContainer;
