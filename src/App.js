import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
const columns = [
  { field: "contentType", headerName: "Content Type", width: 120 },
  { field: "fileFormat", headerName: "File Format", width: 120 },
  { field: "fileExtension", headerName: "File Extension", width: 110 },
  {
    field: "httpContent",
    headerName: "HTTP Content Type",
    type: "number",
    width: 170,
  },

  {
    field: "maxSize",
    headerName: "Max Size (MB)",
    type: "number",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    width: 80,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 440, width: "70%", marginTop: 50, marginLeft: 150 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={10}
        // rowsPerPageOptions={[10]}
        checkboxSelection
      />
      <div style={{ display: "flex" }}>
        <Button variant="outlined">
          <AddIcon />
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        {/* <Stack spacing={2} style={{ marginLeft: 260 }}>
          <Pagination
            count={10}
            variant="outlined"
            color="secondary"
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack> */}
      </div>
    </div>
  );
}
