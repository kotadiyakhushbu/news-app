"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const Alljokes = () => {
  const columns = [
    {
      idn: "idn",
      name: "ID",
    },
    {
      id: "alljokes",
      name: "All JOkes",
    },
  ];

  const handlechangepage = (event, newpage) => {
    pagechange(newpage);
  };
  const handleRowsPerPage = (event) => {
    rowperpagechange(+event.target.value);
    pagechange(0);
  };

  const [rows, setData] = useState([]);
  const [page, pagechange] = useState(0);
  const [rowperpage, rowperpagechange] = useState(5);
  useEffect(() => {
    axios
      .get("https://api.freeapi.app/api/v1/public/randomjokes")
      .then((res) => setData(res.data?.data?.data));
  }, []);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((columm) => (
                <TableCell key={columm.idn}>{columm.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowperpage, page * rowperpage + rowperpage)
              .map((row, i) => {
                console.log(row);
                return (
                  <TableRow>
                    <TableCell key={row.id}>{row.id}</TableCell>
                    <TableCell key={row.content}>{row.content}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[2, 5, 10, 20]}
        rowsPerPage={rowperpage}
        page={page}
        count={rows.length}
        component="div"
        onPageChange={handlechangepage}
        onRowsPerPageChange={handleRowsPerPage}
      ></TablePagination>
    </Paper>
  );
};
export default Alljokes;
