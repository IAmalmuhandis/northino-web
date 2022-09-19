import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const informations = [
  {
    name: "First Name",
    desc: "Abubakar",
  },
  {
    name: "Last Name",
    desc: "Muhammad",
  },
  {
    name: "Email Address",
    desc: "abubakaralmuhandis@gmail.com",
  },
  {
    name: "Phone Number",
    desc: "08123402377",
  },
  {
    name: "Years of Experience",
    desc: "3",
  },
  {
    name: "About you",
    desc: "I am a professional front-end developer, also am a software engineering student. i mentored almost 1000 student and equip them with digital skills.",
  },
];

const payments = [
  { name: "Account Name", detail: "Muhammad Abubakar Umar" },
  { name: "Account Number", detail: "3136779354" },
  { name: "Bank Name", detail: "First Bank" },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Profile Overview
      </Typography>
      <List disablePadding>
        {informations.map((information) => (
          <ListItem key={information.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={information.name}
              secondary={information.desc}
            />
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={12} md={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Bank details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
