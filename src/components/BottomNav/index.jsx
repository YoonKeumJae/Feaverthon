import React from "react";
import { useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import { StyledFooter, StyledCenterButton } from "./style";
import menu from "./data";

function BottomNav() {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const pillIndex = menu.findIndex(
    (item) => location.pathname && item.matched.includes(pathname),
  );
  console.log(pillIndex, location.pathname.split("/")[1]);
  return (
    <StyledFooter>
      {menu.map((item, idx) => {
        if (pillIndex === idx)
          return (
            <StyledCenterButton key={item.path}>
              {item.icon(true)}
            </StyledCenterButton>
          );
        return (
          <IconButton key={item.path} className="menuIcon">
            {item.icon(false)}
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
