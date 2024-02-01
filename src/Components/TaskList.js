import * as React from "react";
import { Grid } from "@mui/material";
import TaskItem from "./TaskItem.js";

export default function TaskList() {
  let tasklist = [
    {
      id: 1,
      title: "Completed APIs",
      description: "I wanna die",
      duedate: "2021-10-10",
      completed: true,
    },
    {
      id: 2,
      title: "Completed APIs",
      description: "I wanna die",
      duedate: "2021-10-10",
      completed: false,
    },
    {
      id: 3,
      title: "Completed APIs",
      description: "I wanna die",
      duedate: "2021-10-10",
      completed: false,
    },
  ];
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <h1>My Tasks</h1>
      </Grid>
      {/* run a loop to display all taskitems from tasklist */}
      {tasklist.map((task) => 
        <Grid item xs={12}>
          <TaskItem key = {task.id} title = {task.title} description = {task.description} completed = {task.completed} date= {task.duedate} />
        </Grid>
      )}
    </Grid>
  );
}
