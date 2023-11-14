import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import "./ws-modal.scss";

interface Props {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  fullWidth?: boolean;
  actions?: React.ReactNode;
}

export const WSModal: React.FC<Props> = ({
  open,
  handleClose,
  children,
  title,
  subTitle,
  maxWidth = "sm",
  fullWidth = true,
  actions,
  ...restProps // Rest of the props
}) => {
  return (
    <div id="dynamic-modal">
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        className="ws-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title}
        {...restProps}
      >
        <div className="dialog-container">
          <DialogTitle id={title}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography className="modal-title" fontSize={24}>
                {title}
              </Typography>
              <IconButton
                style={{ float: "right" }}
                onClick={handleClose}
                aria-label="Close"
                size="large"
                className="close-icon"
              >
                <CloseIcon
                  fontSize="large"
                  sx={{ width: "20 !important", height: "20 !important" }}
                />
              </IconButton>
            </Box>
            <Typography className="modal-sub-title">{subTitle}</Typography>
          </DialogTitle>
          <DialogContent>{children}</DialogContent>
          {actions && <DialogActions>{actions}</DialogActions>}
        </div>
      </Dialog>
    </div>
  );
};
