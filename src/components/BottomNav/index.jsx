import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import axios from "axios";
import { StyledFooter, StyledCenterButton } from "./style";
import menu from "./data";

function BottomNav({ centerMenu }) {
  const location = useLocation();
  const pafilldex = menu.findIndex(
    (object) => location.pathname && object.path === location.pathname,
  );

  useEffect(() => {
    axios
      .get("http://121.55.117.123:8005", {
        withCredentials: true, // 클라이언트와 서버가 통신할때 쿠키와 같은 인증 정보 값을 공유하겠다는 설정
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });

  return (
    <StyledFooter>
      {menu.map((item, idx) => {
        if (idx === Math.floor(menu.length / 2))
          return (
            <React.Fragment key={item.path}>
              <StyledCenterButton>{centerMenu.icon}</StyledCenterButton>
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
BottomNav.propTypes = {
  centerMenu: PropTypes.shape({
    path: PropTypes.string,
    icon: PropTypes.node,
  }).isRequired,
};

export default BottomNav;
