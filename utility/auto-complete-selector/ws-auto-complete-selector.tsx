"use client";

import React, { FC, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  IconButton,
  TextField,
  TextFieldProps,
  TextFieldVariants,
} from "@mui/material";

import "./ws-auto-complete.scss";

interface Option {
  [key: string]: any;
}

interface AutoCompleteProps {
  label: string;
  options: Option[];
  value: any;
  variant?: TextFieldVariants | undefined;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSelectionChange?: (selectedValue: Option | null) => void;
  getOptionLabel?: (option: Option) => string;
  textFieldProps?: TextFieldProps; // Additional props for TextField
  className?: string;
  size?: "small" | "medium" | undefined;
}

export const WSAutoComplete: FC<AutoCompleteProps> = ({
  label,
  options = [],
  value = {},
  variant = "standard",
  placeholder = "Select",
  onSelectionChange,
  onChange,
  getOptionLabel = (option) => option.name, // Default to using 'name' property
  textFieldProps = {}, // Default to an empty object
  className = "custom-auto-complete",
  size = "medium",
}) => {
  const onChangeHandler = (
    event: React.ChangeEvent<{}>,
    value: Option | null,
  ) => {
    onSelectionChange && onSelectionChange(value);
  };

  let debounceTimer: any = null;
  const onInputChangeHandler = (
    event: React.ChangeEvent<{}>,
    value: string,
  ) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      onChange && onChange(value);
    }, 500);
  };

  return (
    <Autocomplete
      options={options}
      value={value}
      getOptionLabel={(option: Option) => getOptionLabel(option)} // Adjust as per API response
      className={className}
      onChange={onChangeHandler}
      size={size}
      onInputChange={onInputChangeHandler}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant={variant}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          {...textFieldProps}
        />
      )}
    />
  );
};
