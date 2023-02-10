import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarConatiner, AppbarHeader, MyList } from "../../styles/appbar/index";
import SearchIcon from "@mui/icons-material/Search";
import Action from "./Action";

export default function AppbarDesktop({ matches }) {
  return (

    <AppbarConatiner>
      <AppbarHeader>
        Desktop View
      </AppbarHeader>

      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
      </MyList>

      <ListItemButton>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
      </ListItemButton>

      <Action matches={matches} />
    </AppbarConatiner>

  )

}