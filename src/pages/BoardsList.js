import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Board from '../components/Board';
import BoardBanner from '../components/BoardBanner';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    display: 'inline-flex',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  view: {
    padding: 20,
  },
  list: {
    minWidth: 400,
  }
}));

function generateBoards(handleClickOpen) {
  return boards.map((value) => {
    return (
      <ListItem button onClick={handleClickOpen}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={value.name}
          secondary={value.username}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" disabled>
            <NavigateNextIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  });
}

const tempFunc1 = () => {
  console.log('jello');
}

function tempFunc() {
  console.log('ekkkkki');
}

function createData(id, name, username) {
  return { id, name, username };
}

const boards = [
  createData(1, 'BOP', 'FilipMatic'),
  createData(2, 'WORMS', 'username'),
  createData(3, 'Civ5', 'user123'),
  createData(4, 'Risk', 'randomUser'),
  createData(5, 'Katan', 'Coolio'),
];

export default function BoardsList() {
  const classes = useStyles();
  const [secondary, setSecondary] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {generateBoards(handleClickOpen)}
      </List>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions> */}
        
        <div className={classes.view}>
          <BoardBanner />
          <Board />
        </div>
      </Dialog>
    </div>
  );
}