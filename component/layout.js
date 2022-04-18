import React, { useState, useEffect } from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

// Get styles
import styles from "./styles.module.css";
import { BlockRounded } from "@mui/icons-material";

export function Layout() {
  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axios = require ('axios'); 


  useEffect(() => {
    console.log(999);
      fetchData();
  }, []);

  const fetchData = () => {
    // Fetch API function
    axios.get('https://reqres.in/api/users?page=1').then(resp => {
        console.log(resp.status);
        if(resp.status==200) {
          setResponseData(resp.data.data);
          console.log(resp.data.data);
          setIsLoading(true);
        }        
    });
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
         <>
         
         { isLoading && responseData?
            <div>
              <b><h1 align ='center' >DAFTAR PEMBELI AFRI STORE CENTER</h1></b>
              <TableContainer className={styles.container}>
                <PerfectScrollbar>
                  <Table
                    stickyHeader
                    aria-label="sticky table"
                    className={styles.table}
                  >
                    <TableHead>
                      <TableRow className={styles.tableRowHeader}>
                        <TableCell
                          className={styles.tableCellHeaders}
                          rowSpan={2}
                          align="center"
                        >
                        ID
                        </TableCell>
                        <TableCell
                          className={styles.tableCellHeaders}
                          colSpan={1}
                          align="center"
                        >
                        Email
                        </TableCell>
                        <TableCell
                          className={styles.tableCellHeaders}
                          colSpan={1}
                          align="center"
                        >
                        First Name
                        </TableCell>
                        <TableCell
                          className={styles.tableCellHeaders}
                          colSpan={1}
                          align="center"
                        >
                        Last Name
                      </TableCell>
                      <TableCell
                          className={styles.tableCellHeaders}
                          colSpan={1}
                          align="center"
                        >
                        Image
                      </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {responseData.map((row) => {
                          // eslint-disable-next-line react/jsx-key
                          return <TableRow> 
                                  <TableCell align="center" className= {styles.tableCell}>{row.id}</TableCell>
                                  <TableCell align="center" className={styles.tableCell}>{row.email}</TableCell>
                                  <TableCell align="center" className={styles.tableCell}>{row.first_name}</TableCell>
                                  <TableCell align="center" className={styles.tableCell}>{row.last_name}</TableCell>
                                  <TableCell  className={styles.tableCell}><img src={row.avatar} width='50' height='50'/></TableCell>
                                  
                                </TableRow>;
                        })}
                    </TableBody>
                  </Table>
                </PerfectScrollbar>
              </TableContainer>
              <TablePagination
        rowsPerPageOptions={[3, 6, 20]}
        component="div"
        count={responseData.map.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
         />

            </div>
         : <div>
            <h1>Loading...</h1>
          </div> }
          
          
         
         </>
  )
}