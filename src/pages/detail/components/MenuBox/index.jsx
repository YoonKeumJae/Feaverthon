import React, { useState } from "react";
import { Typography } from "@mui/material";
import menu from "./data";
import CategoryTabs from "./components/CategoryTabs";
import CategoryButton from "./components/CategoryButton";
import MenuItem from "./components/MenuItem";
import MenuConatiner from "./components/MenuContainer";

export default function MenuBox() {
  const [categories] = useState(
    Object.keys(
      Object.fromEntries(
        menu.map((item) => item.category).map((v) => [v, null]),
      ),
    ),
  );
  const [categoryIdx, setCategoryIdx] = useState(0);
  return (
    <div style={{ padding: "0 1.5rem" }}>
      {/* 카테고리  */}
      <CategoryTabs
        value={categoryIdx}
        onChange={(_, newValue) => setCategoryIdx(newValue)}
      >
        {categories.map((item) => (
          <CategoryButton label={item} key={item} />
        ))}
      </CategoryTabs>

      {/* 메뉴 */}
      <Typography variant="h5">{`${categories[categoryIdx]}(${
        menu.filter((item) => item.category === categories[categoryIdx]).length
      })`}</Typography>

      <MenuConatiner>
        {menu
          .filter((item) => item.category === categories[categoryIdx])
          .map((item) => (
            <MenuItem key={item.name} item={item}>
              {item.name}
            </MenuItem>
          ))}
      </MenuConatiner>
    </div>
  );
}
