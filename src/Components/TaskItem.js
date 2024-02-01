import * as React from 'react';
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import 'dayjs/locale/en-in';



export default function Heading(props) {
    const [value, setValue] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [completed, setCompleted] = React.useState(props.completed);
    return (
        <Grid container spacing={1} sx={{px: 5}} justifyContent="space-between" alignItems="center" >
        <Grid item  >
        <ToggleButton
  value="check"
  size='small'
  color='success'
  selected={completed}
  onChange={() => {
    setCompleted(!completed);
    // update the database
  }}
>
  <CheckIcon />
</ToggleButton>
            </Grid>
            <Grid item >
            <Grid container >
            <Grid item xs={12} sx={{py: "-100px"}}>
            <Typography variant="h6" sx={{ textDecoration: completed ? 'line-through' : '' }}>{props.title}</Typography>
            </Grid>
            <Grid item xs={12}  >
            <Typography variant="body2" sx={{ textDecoration: completed ? 'line-through' : '' }}>{props.description}</Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="body2" sx={{ textDecoration: completed ? 'line-through' : '' }}>{props.date}</Typography>
            </Grid>
            </Grid>
            </Grid>
            <Grid item >
                <Grid container >
                <Grid item xs={6}>
                    <IconButton aria-label="edit" color='primary' size='large' onClick={handleClickOpen}>
        <EditIcon />
        </IconButton>
                    </Grid>
                    <Grid item xs={6}  >
                    <IconButton aria-label="delete" color='error' size="large">
        <DeleteIcon />
      </IconButton>
                        </Grid>
                        </Grid>
            </Grid>
            <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            defaultValue={props.title}
            margin="dense"
            id="title"
            name="title"
            label="Task Title"
            fullWidth
            variant="standard"
          />
          <TextField
            defaultValue={props.description}
            margin="dense"
            id="description"
            name="description"
            label="Task Description"
            fullWidth
            variant="standard"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-in">
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                fullWidth
                  label="Due Date"
                  defaultValue={props.date}
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  slotProps={{ textField: { variant: 'standard' } }}
                //   make sure scroll is disabled in order to not break modal positioning
                sx={{ display: 'block', mb: 10, overflow: 'hidden'}}
                  disablePast
                  
                 
                  
                />
              </DemoContainer>
            </LocalizationProvider>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Edit</Button>
        </DialogActions>
      </Dialog>
            </Grid>
    );
    }
