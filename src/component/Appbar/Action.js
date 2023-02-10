import { colors, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ActionIconContainerDesktop, ActionIconContainerMobile } from "../../styles/appbar/index";
import { Colors } from "../../styles/theme";



export default function Action({ matches }) {

  const Component = matches ? ActionIconContainerMobile : ActionIconContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", color: matches && Colors.secondary }}>
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", color: matches && Colors.secondary }}>
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />

        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", color: matches && Colors.secondary }}>
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyList>
    </Component>
  )
}    