import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, wins) {
  return { name, wins };
}

const rows = [
  createData('Filip', 60),
  createData('Minh', 57),
  createData('Chris', 48),
  createData('Liam', 33),
  createData('Matt', 12),
];

// Logic to transform numbers into tally marks
const tallyMark = '|';
const tallyMarks = '卌 ';

function createTally(num) {
  if (num < 5) {
    return tallyMark.repeat(num);
  }
  return tallyMarks + createTally(num-5);
}

export default function Board() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" width="33.3%">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{createTally(row.wins)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}