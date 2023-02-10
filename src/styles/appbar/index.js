import styled from "@emotion/styled";
import { Box, colors, Typography,List } from "@mui/material";
import { padding } from "@mui/system";
import "@fontsource/montez";
import "@fontsource/cedarville-cursive";
import { Colors } from "../theme";

// container
export const AppbarConatiner = styled(Box)(() => ({

  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px"

}));

// header

export const AppbarHeader = styled(Typography)(() => ({

  padding: "4px",
  flexGrow: 1,
  fontSize: "4em",
  fontFamily: '"montez" ,"cursive"',
  color: Colors.secondary,
}));


export const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));
