import "./styles.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
export default function App() {
  //list of tasks
  let tasks = [
    {
      id: 1,
      name: "task one",
      day: "Feb 5th",
      reminder: false
    },
    {
      id: 1,
      name: "task two",
      day: "March 20th",
      reminder: false
    },
    {
      id: 1,
      name: "task three",
      day: "Aug 2nd",
      reminder: false
    }
  ];
  return (
    <div className="container">
      <Header className="header" text="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}
