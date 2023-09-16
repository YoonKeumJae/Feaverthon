import React from "react";
import styled from "styled-components";
import { Tab } from "@mui/material";
import primaryColor from "../../../../../common";

const CategoryButton = styled((props) => <Tab disableRipple {...props} />)(
  () => ({
    "color": "rgba(255, 255, 255, 0.7)",
    "border-radius": "50px !important",
    "border": "1px solid #ddd !important",
    "&.Mui-selected": {
      color: "#fff !important",
      backgroundColor: primaryColor,
    },
  }),
);

export default CategoryButton;
