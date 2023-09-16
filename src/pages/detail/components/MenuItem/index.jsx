import React, { useState } from "react";
import menu from "./data";
import CategoryTabs from "./components/CategoryTabs";
import CategoryButton from "./components/CategoryButton";

export default function MenuItem() {
  const [categories, setCategories] = useState(
    Object.keys(
      Object.fromEntries(
        menu.map((item) => item.category).map((v) => [v, null]),
      ),
    ),
  );
  const [categoryIdx, setCategoryIdx] = useState(0);
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <CategoryTabs
        value={categoryIdx}
        onChange={(_, newValue) => setCategoryIdx(newValue)}
      >
        {categories.map((item) => (
          <CategoryButton label={item} key={item} />
        ))}
      </CategoryTabs>
    </div>
  );
}
