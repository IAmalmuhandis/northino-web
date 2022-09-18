// material-ui
import { Grid } from "@mui/material";

// project import
import ComponentSkeleton from "../components-overview/ComponentSkeleton";
import Checkout from "../../components/ProfileBody/Checkout";

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

const profile = () => (
  <ComponentSkeleton>
    <Grid container spacing={3}>
      <Checkout />
    </Grid>
  </ComponentSkeleton>
);

export default profile;
