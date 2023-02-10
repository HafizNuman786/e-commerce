import { ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../styles/appbar";

export default function Action() {
  return (
    <MyList type="row">
      <ListItemButton>
        <ListItemIcon></ListItemIcon>
      </ListItemButton>
    </MyList>
  )
}    