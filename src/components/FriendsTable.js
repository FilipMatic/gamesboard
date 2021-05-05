import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: 'auto',
    display: 'inline-flex',
  }
});

function createData(name, username) {
  return { name, username };
}

const rows = [
  createData('Paul', 'Username bih1342321431242'),
  createData('Jhoddwewerfwerfweferwn', 'username'),
  createData('Davis', 'user123'),
  createData('Kooda', 'randomUser'),
  createData('Micheal', 'Coolio'),
];

export default function FriendsTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
