import { Tabs } from "@mui/material";
import React from "react";

function CategoryTabs({ children, value, onChange }) {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      variant="scrollable"
      scrollButtons="auto"
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
      sx={{
        "& .MuiTabs-indicatorSpan, & .MuiTabs-indicator": {
          display: "none",
        },
        "& .MuiTabs-flexContainer": {
          gap: "0.5rem",
        },
        "paddingBottom": "1rem",
      }}
    >
      {children}
    </Tabs>
  );
}

export default CategoryTabs;
