import { List, ListItem, ListItemAvatar, ListItemText, Modal, Box, Button } from '@material-ui/core'
import React, { useState} from 'react'
import './Todo.css'
import db from './firebase'
import DeleteIcon from '@mui/icons-material/Delete';


// const useStyles = makeStyles((theme) => ({
//  paper: {
//   position: 'absolute',
//   width: 400,
//   backgroundColor: theme.palette.background.paper,
//   border: '2px solid #000',
//   boxShadow: theme.shadow[5],
//   padding: theme.spacing(2,4,3),
//  },
// }));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('')

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, { merge: true /* prevents from overriding */})
    handleClose()
  }
  return (
    <>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1>I am Modal</h1>
        <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
        <Button onClick={updateTodo}>Update Todo</Button>
      </Box>
    </Modal>
    <List className='todo__list'>
        <ListItem>
            <ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Deadline" />
            </ListItemAvatar>
        </ListItem>
        <Button onClick={handleOpen}>Edit</Button>
        <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
    </List>
    </>
  )
}

export default Todo