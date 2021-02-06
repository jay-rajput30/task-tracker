import "./styles.css";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
export default function App() {
  //list of tasks

  let [tasks, setTasks] = useState([
    {
      id: 1,
      name: "task one",
      day: "Feb 5th",
      reminder: false
    },
    {
      id: 2,
      name: "task two",
      day: "March 20th",
      reminder: false
    },
    {
      id: 3,
      name: "task three",
      day: "Aug 2nd",
      reminder: false
    }
  ]);

  let deleteThis = (id) => {
    console.log(id);
    // setTasks(
    //   tasks.filter((task) => {
    //     return task.id !== id;
    //   })
    // );
  };
  return (
    <div className="container">
      <Header text="Task Tracker" />
      <Tasks tasks={tasks} deleteThis={deleteThis} />
    </div>
  );
}
