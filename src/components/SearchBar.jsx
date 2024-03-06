/* eslint-disable no-unused-vars */
import React from "react";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      elevation={0}
      component="form"
      onSubmit={() => {}}
      sx={{
        pl: 2,
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        value={""}
        onChange={() => {}}
        placeholder="Search..."
        className="search-bar"
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
