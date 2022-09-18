// material-ui
import { Button, CardMedia, Link, Stack, Typography } from "@mui/material";

// project import
import MainCard from "../../../../tutorDashboard/components/MainCard";

// assets
import avatar from "../../../../tutorDashboard/assets/images/users/avatar-group.png";
import AnimateButton from "../../../../tutorDashboard/components/@extended/AnimateButton";

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
  <MainCard sx={{ bgcolor: "grey.50", m: 3 }}>
    <Stack alignItems="center" spacing={2.5}>
      <CardMedia component="img" image={avatar} sx={{ width: 112 }} />
      <Stack alignItems="center">
        <Typography variant="h5">Premium membership</Typography>
        <Typography variant="h6" color="secondary">
          Upgrade for pro features
        </Typography>
      </Stack>
      <AnimateButton>
        <Button
          component={Link}
          target="_blank"
          href="https://mantisdashboard.io"
          variant="contained"
          color="success"
          size="small"
        >
          Upgrade
        </Button>
      </AnimateButton>
    </Stack>
  </MainCard>
);

export default NavCard;
