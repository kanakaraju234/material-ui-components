import React, { FC } from "react";
import { SxProps } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

import "./ws-data-grid.scss";

interface Props {
  sx?: SxProps;
  rows: GridRowsProp;
  columns: GridColDef[];
  isLoading?: boolean;
  getRowId?: (rowId: number | string) => number | string;
}

export const WSDataGrid: FC<Props> = ({
  rows,
  columns,
  sx = { m: "10px" }, // default values
  isLoading = false,
  getRowId,
}) => {
  return (
    <DataGrid
      className="ws-data-grid"
      loading={isLoading}
      sx={sx}
      getRowId={getRowId}
      rows={rows}
      columns={columns}
      hideFooter
    />
  );
};
