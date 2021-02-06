// import { Fatimes } from "react-icons/fa";

let Task = ({ item, deleteThis }) => {
  return (
    <article onClick={() => deleteThis()} className="task">
      <h3 onClick={() => deleteThis(item.id)}>
        {item.name}
        {/* <Fatimes /> */}
      </h3>
      <span>{item.day}</span>
    </article>
  );
};

export default Task;
