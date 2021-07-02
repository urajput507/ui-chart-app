import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);






const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Pepsi 1 ltr', 10 ,3, 80, 'In Stock','G'),
  createData('LU Gala Half Roll', 23,2, 20, 'In Stock','G'),
  createData('Eva Cocking Oil', 26 ,2, 260, 'In Stock', 'G'),
  createData('Rice Super Karnal', 3 ,5, 180, 'In Stock', 'G'),
  createData('Sugar per Kg', 6 ,1, 100, 'out of Stock', '1st'),
  createData('abc', 8 ,3, 100, 'in Stock', '1st'),

  createData('7up 1 ltr', 11 ,3, 70, 'In Stock','G'),
  createData('Cafe', 8,5, 30, 'In Stock','G'),
  createData('Habib Cooking Oil', 33 ,5, 200, 'In Stock', 'G'),
  createData('Tapal', 7 ,1, 40, 'In Stock', 'G'),
  createData('Cocomo', 1 ,12, 80, 'out of Stock', '1st'),

  createData('7up 1 ltr', 11 ,3, 70, 'In Stock','G'),
  createData('Cafe', 8,5, 30, 'In Stock','G'),
  createData('Habib Cooking Oil', 33 ,5, 200, 'In Stock', 'G'),
  createData('Tapal', 7 ,1, 40, 'In Stock', 'G'),
  createData('Cocomo', 1 ,12, 80, 'out of Stock', '1st'),
  
  createData('7up 1 ltr', 11 ,3, 70, 'In Stock','G'),
  createData('Cafe', 8,5, 30, 'In Stock','G'),
  createData('Habib Cooking Oil', 33 ,5, 200, 'In Stock', 'G'),
  createData('Tapal', 7 ,1, 40, 'In Stock', 'G'),
  createData('Cocomo', 1 ,12, 80, 'out of Stock', '1st'),
  
  createData('7up 1 ltr', 11 ,3, 70, 'In Stock','G'),
  createData('Cafe', 8,5, 30, 'In Stock','G'),
  createData('Habib Cooking Oil', 33 ,5, 200, 'In Stock', 'G'),
  createData('Tapal', 7 ,1, 40, 'In Stock', 'G'),
  createData('Cocomo', 1 ,12, 80, 'out of Stock', '1st'),
  
  createData('7up 1 ltr', 11 ,3, 70, 'In Stock','G'),
  createData('Cafe', 8,5, 30, 'In Stock','G'),
  createData('Habib Cooking Oil', 33 ,5, 200, 'In Stock', 'G'),
  createData('Tapal', 7 ,1, 40, 'In Stock', 'G'),
  createData('Cocomo', 1 ,12, 80, 'out of Stock', '1st'),
  
  // createData('NewEntry', 3, 80, 'in Stock', 'G'),
  
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right">Shelves&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Column NO. &nbsp;</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Stock&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Floor&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
