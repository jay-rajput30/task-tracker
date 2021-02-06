import Task from "./Task";

let Tasks = ({ tasks, deleteThis }) => {
  return (
    <>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} deleteThis={deleteThis} />;
      })}
    </>
  );
};

export default Tasks;
