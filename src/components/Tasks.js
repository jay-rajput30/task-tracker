let Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => {
        return <h3>{task.name}</h3>;
      })}
    </>
  );
};

export default Tasks;
