import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import { AppbarConatiner, AppbarHeader, MyList } from "../styles/appbar/index";
import SearchIcon from "@mui/icons-material/Search";
export default function AppbarMobile({ matches }) {
  return (<AppbarConatiner>
    <AppbarHeader>
      My Bags
    </AppbarHeader>

    <MyList type="row">
      <ListItemText primary="Home"/>
      <ListItemText primary="Categories" />
      <ListItemText primary="Products" />
      <ListItemText primary="Contact Us" />
    </MyList>

    <ListItemButton>
      <ListItemIcon>
        <SearchIcon/>
      </ListItemIcon>
    </ListItemButton>
  </AppbarConatiner>);

}