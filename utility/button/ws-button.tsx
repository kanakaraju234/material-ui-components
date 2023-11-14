import React, { FC } from "react";

import { Button } from "@/lib/muiclient";

import "./ws-button.scss";

import { WSBtnBgColors } from "./types";

interface WSButtonProps {
  title: string;
  backgroundColor?: WSBtnBgColors;
  borderColor?: string;
  sx?: React.CSSProperties; // Add the sx prop for additional styling
  onClick?: () => void;
  variant?: "text" | "outlined" | "contained" | undefined;
  size?: "small" | "medium" | "large";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
}

const WSButton: FC<WSButtonProps> = ({
  backgroundColor,
  borderColor,
  sx,
  onClick,
  variant,
  size = "medium",
  color,
  title,
}) => {
  return (
    <div className="ws-btn-container">
      <Button
        className={`ws-btn ${backgroundColor} ${borderColor}`}
        variant={variant}
        onClick={onClick}
        size={size}
        sx={sx}
        color={color}
      >
        {title}
      </Button>
    </div>
  );
};

export default WSButton;
