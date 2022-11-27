/** @format */

// material-ui
import { useTheme } from "@mui/material/styles";

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logo2 from 'assets/images/users/northinoLogo.png';
 * import logo from 'assets/images/users/logo.png';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return <img src={logo} alt="Mantis" width="400" />;
};

export default Logo;
