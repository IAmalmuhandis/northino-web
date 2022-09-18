import PropTypes from "prop-types";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Stack, Chip } from "@mui/material";

// project import
import DrawerHeaderStyled from "./DrawerHeaderStyled";
// import Logo from 'components/Logo';
import northinoLogo from "../../../../tutorDashboard/assets/images/users/logo.png";
import "./index.css";

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <img src={northinoLogo} className="logo" alt="logo" />
        <Chip
          label={process.env.REACT_APP_VERSION}
          size="small"
          sx={{
            height: 16,
            "& .MuiChip-label": { fontSize: "0.625rem", py: 0.25 },
          }}
          component="a"
          clickable
        />
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool,
};

export default DrawerHeader;
