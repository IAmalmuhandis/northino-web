// material-ui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import Logo from "../images/users/northinoLogo.png";

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackground = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",

        filter: "blur(18px)",
        zIndex: -1,

        bottom: 0,
      }}
    >
      <img src={Logo} alt="Northino" height="300" />
    </Box>
  );
};

export default AuthBackground;
