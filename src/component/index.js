import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./appbarDesptop";
import AppbarMobile from "./appbarMobile";

export function Appbar(){

  const theme=useTheme();
  const matches=useMediaQuery(theme.breakpoints.down('md'));

  return(
    <>
          {matches ? <AppbarMobile/> : <AppbarDesktop/> }
 </>
  );
}