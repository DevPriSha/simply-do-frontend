import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import { useState } from "react";
import { Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "dayjs/locale/en-in";
import axios from "axios";
import { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";



export default function AddTask() {
  const [dropDown, setDropDown] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [duedate, setDuedate] = useState("");
  const handleSubmit = e => {
    console.log("submitting");
    if (title === "") {
        <Snackbar autoHideDuration={6000} message="Title cannot be empty!" />;
        return;
    }
    console.log(title, description, duedate);
    axios
      .post("http://localhost:8080/todolist", {
        "title": title,
        "description": description,
        "duedate": duedate,
        "completed": false
      })
      .then((response) => {
        <Snackbar autoHideDuration={6000} message={response.statusText} />;
      })
      .catch((error) => {
        <Snackbar autoHideDuration={6000} message={error} />;
      });
  }
  return (
    <Grid container>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{ m: "1em", p: "2px 4px", alignItems: "center", width: "100%" }}
      >
        <Stack direction="column">
          <Stack direction="row">
            <InputBase
              id="title"
              sx={{ ml: 1, flex: 1 }}
              placeholder="Add Task"
              inputProps={{ "aria-label": "add task" }}
              onSubmit={handleSubmit}
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />
            <IconButton
              sx={{ p: "10px", alignItems: "right" }}
              aria-label="dropdown"
              onClick={() => setDropDown(!dropDown)}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
            <Divider
              sx={{ height: 28, m: 0.5, justifyContent: "right" }}
              orientation="vertical"
            />
            <IconButton
              type="submit"
              onSubmit={handleSubmit}
              color="primary"
              sx={{ p: "10px", justifyContent: "right" }}
              aria-label="add task"
            >
              <AddIcon />
            </IconButton>
          </Stack>

          {/* DROP DOWN STUFF */}
          <div style={{ display: dropDown ? "block" : "none" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <InputBase
                id="description"
                multiline
                sx={{ ml: 1, flex: 1 }}
                placeholder="Description"
                inputProps={{ "aria-label": "description" }}
                onChange={(event) => {
                    setDesc(event.target.value);
                  }}
              />
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-in"
              >
                <DateTimePicker
                  id="duedate"
                  margin="dense"
                  label="Due Date"
                  value={duedate}
                  onChange={(newValue) => setDuedate(newValue)}
                  slotProps={{ textField: { variant: "standard" } }}
                  sx={{ mx: "10px", flex: 1}}
                  disablePast
                />
              </LocalizationProvider>
            </Stack>
          </div>
        </Stack>
      </Paper>
    </Grid>
  );
}
