/* eslint-disable no-unused-vars */
import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const selectedCategory = "New";
const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => {
        return (
          <button
            key={category.name}
            style={{
              background: category.name === selectedCategory && "#FC1503",
              color: "white",
            }}
            className="category-btn"
          >
            <span style={{color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
