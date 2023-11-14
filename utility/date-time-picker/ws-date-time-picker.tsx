"use client";

import React, { useState } from "react";
import { SxProps } from "@mui/system";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";

import "./ws-date-time-picker.scss";

import { dateTimePicker } from "../types";

interface Props {
  type: dateTimePicker; // type should be : "TimePicker | DatePicker | DateTimePicker"
  label: string;
  sx?: SxProps;
  onChange?: (value: Dayjs | null) => void;
  value?: string | number | null | Dayjs;
  readOnly?: boolean;
  errorMessage?: string;
}

export const WSDateTimePicker: React.FC<Props> = ({
  label = "Date Picker",
  type,
  sx,
  onChange,
  value = null,
  readOnly = false,
  errorMessage = "",
  ...restProps
}) => {
  const pickerValue = value ? dayjs(value) : null;

  const getDateTimePicker = (type: string) => {
    switch (type) {
      case dateTimePicker.TimePicker:
        return (
          <DemoContainer components={["TimePicker"]} sx={sx}>
            <TimePicker
              label={label}
              className="ws-date-time-picker"
              value={pickerValue}
              onChange={onChange}
              sx={sx}
              readOnly={readOnly}
              {...restProps}
              slotProps={{
                textField: {
                  helperText: errorMessage,
                },
              }}
            />
          </DemoContainer>
        );
        break;
      case dateTimePicker.DatePicker:
        return (
          <DemoContainer components={["DatePicker"]} sx={sx}>
            <DatePicker
              label={label}
              className="ws-date-time-picker"
              value={pickerValue}
              onChange={onChange}
              readOnly={readOnly}
              slotProps={{
                textField: {
                  helperText: errorMessage,
                },
              }}
              {...restProps}
            />
          </DemoContainer>
        );
        break;
      case dateTimePicker.DateTimePicker:
        return (
          <DemoContainer components={["DateTimePicker"]} sx={sx}>
            <DateTimePicker
              label={label}
              className="ws-date-time-picker"
              value={pickerValue}
              onChange={onChange}
              readOnly={readOnly}
              slotProps={{
                textField: {
                  helperText: errorMessage,
                },
              }}
              {...restProps}
            />
          </DemoContainer>
        );

      default:
        return (
          <DemoContainer components={["DatePicker"]} sx={sx}>
            <DatePicker
              label={label}
              className="ws-date-time-picker"
              value={pickerValue}
              onChange={onChange}
              {...restProps}
            />
          </DemoContainer>
        );
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {getDateTimePicker(type)}
    </LocalizationProvider>
  );
};
