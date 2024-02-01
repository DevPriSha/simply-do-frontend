import * as React from "react";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Divider, Grid } from "@mui/material";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "dayjs/locale/en-in";
import dayjs from "dayjs";

export default function TaskItem(props) {
    const [duedate, setDuedate] = useState(dayjs(props.date));
  const [value, setValue] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [completed, setCompleted] = React.useState(props.completed);
  const formatDate = () => {
    if (!props.date) return "";
    console.log(props.date);
    const date = new Date(props.date);

    // Localized formatting
    const localizedDateString = date.toLocaleString("en-IN", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Asia/Kolkata", // GMT +5:30
    });
    console.log(localizedDateString);
    return localizedDateString;
  };
  return (
    <Grid
      container
      spacing={1}
      sx={{ px: 5 }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <ToggleButton
          value="check"
          size="small"
          color="success"
          selected={completed}
          onChange={() => {
            setCompleted(!completed);
            // update the database
          }}
        >
          <CheckIcon />
        </ToggleButton>
      </Grid>
      <Grid item maxWidth="60%">
        <Grid container>
          <Grid item xs={12} sx={{ py: "-100px" }}>
            <Typography
              variant="h6"
              sx={{
                textDecoration: completed ? "line-through" : "",
                whiteSpace: "normal",
                // overflow: "hidden",
              }}
            >
              {props.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              multiline
              sx={{
                textDecoration: completed ? "line-through" : "",
                whiteSpace: "normal",
                
              }}
            >
              {props.description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{ textDecoration: completed ? "line-through" : "" }}
            >
              {formatDate()}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid item xs={6}>
            <IconButton
              aria-label="edit"
              color="primary"
              size="large"
              onClick={handleClickOpen}
            >
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <IconButton aria-label="delete" color="error" size="large">
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
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
          <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-in"
              >
                <DateTimePicker
                  id="duedate"
                  margin="dense"
                  label="Due Date"
                  defaultValue={dayjs(props.date)}
                    value={duedate}
                  onChange={(newValue) => setDuedate(newValue)}
                  slotProps={{ textField: { variant: "standard" } }}
                  sx={{  flex: 1}}
                  disablePast
                />
              </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Edit</Button>
        </DialogActions>
      </Dialog>
      <Grid item xs={12}>
      <Divider orientation="horizontal" />
      </Grid>
    </Grid>
    
  );
}
