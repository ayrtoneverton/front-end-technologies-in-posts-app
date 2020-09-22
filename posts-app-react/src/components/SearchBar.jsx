import React from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ onChange }) => {
  return (
    <TextField
      label="Search"
      type="search"
      variant="outlined"
      InputProps={{ endAdornment: <SearchIcon /> }}
      onChange={e => onChange(e.target.value)}
      style={{ marginBottom: '2rem' }}
    />
  );
};

export default SearchBar;
