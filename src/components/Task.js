// import { Fatimes } from "react-icons/fa";

let Task = ({ task, deleteThis }) => {
  return (
    <article onClick={() => deleteThis()} className="task">
      <h3 onClick={() => deleteThis(task.id)}>
        {task.name}
        {/* <Fatimes /> */}
      </h3>
      <span>{task.day}</span>
    </article>
  );
};

export default Task;
