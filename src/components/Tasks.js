import Task from "./Task";

let Tasks = ({ tasks, deleteThis }) => {
  return (
    <>
      {tasks.map((item) => {
        return <Task key={item.id} item={item} deleteThis={deleteThis} />;
      })}
    </>
  );
};

export default Tasks;
