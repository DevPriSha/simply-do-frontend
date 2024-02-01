import * as React from "react";
import { Grid } from "@mui/material";
import TaskItem from "./TaskItem.js";
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function TaskList() {
    // use axios to get data from the database
  const [tasklist, setTasklist] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/todolist').then((response) => {
        setTasklist(response.data);
        });
    }, []);
    if (!tasklist.length) return (<h2>No tasks! Add one now!</h2>);
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
