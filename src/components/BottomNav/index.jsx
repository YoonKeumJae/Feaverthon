import React from "react";
import { useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import { List } from "@phosphor-icons/react";
import { StyledFooter, StyledCenterButton } from "./style";
import menu from "./data";

function BottomNav() {
  const location = useLocation();
  const pafilldex = menu.findIndex(
    (object) => location.pathname && object.path === location.pathname,
  );

  return (
    <StyledFooter>
      {menu.map((item, idx) => {
        if (idx === Math.floor(menu.length / 2))
          return (
            <React.Fragment key={item.path}>
              <StyledCenterButton>
                <List />
              </StyledCenterButton>
              <IconButton className="menuIcon">
                {item.icon(pafilldex === idx)}
              </IconButton>
            </React.Fragment>
          );
        return (
          <IconButton key={item.path} className="menuIcon">
            {item.icon(pafilldex === idx)}
          </IconButton>
        );
      })}
    </StyledFooter>
  );
}

// typescript 대용..
// BottomNav.propTypes = {
//   centerMenu: PropTypes.shape({
//     path: PropTypes.string,
//     icon: PropTypes.node,
//   }).isRequired,
// };

export default BottomNav;
