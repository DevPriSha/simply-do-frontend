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
import 'dayjs/locale/en-in';

export default function AddTask() {
  const [value, setValue] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  return (
    <Grid container>
      <Paper
        component="form"
        sx={{ m: "1em", p: "2px 4px", alignItems: "center", width: "100%" }}
      >
        <Stack direction="column">
          <Stack direction="row">
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Add Task"
              inputProps={{ "aria-label": "add task" }}
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
              color="primary"
              sx={{ p: "10px", justifyContent: "right" }}
              aria-label="add task"
            >
              <AddIcon />
            </IconButton>
          </Stack>

          {/* DROP DOWN STUFF */}
          <div style={{ display: dropDown ? "flex" : "none" }}>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Description"
              inputProps={{ "aria-label": "description" }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-in">
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="Due Date"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  variant="inline"
                  disablePast
                  sx={{ }}
                 
                  
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </Stack>
      </Paper>
    </Grid>
  );
}
