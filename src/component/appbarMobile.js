import { IconButton } from "@mui/material";
import { AppbarConatiner, AppbarHeader } from ".../component/styles/appbar.js";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Action from "./Action";

export default function AppbarMobile({ matches }) {
  return (
    <AppbarConatiner>
      <IconButton>
        <MenuIcon />
      </IconButton>

      <AppbarHeader textAlign={"center"} variant="h4">
        Mobile View
      </AppbarHeader>

      <IconButton>
        <SearchIcon />
      </IconButton>

      <Action matches={matches} />

    </AppbarConatiner>
  )

}