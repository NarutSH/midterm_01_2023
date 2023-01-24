import { InputAdornment, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <TextField
        label="Search"
        variant="standard"
        value={searchTerm}
        onChange={(ev) => setSearchTerm(ev.target.value)}
        sx={{
          width: "500px",
          marginBottom: "20px",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
