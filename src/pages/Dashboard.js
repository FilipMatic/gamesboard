import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FriendsTable from '../components/FriendsTable';
import BoardsList from './BoardsList';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <FriendsTable />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <BoardsList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

// gonna have 6 (3 / 3) tables
// friends list under it
// games list under it - MAYBE