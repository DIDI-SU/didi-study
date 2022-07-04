import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/Home.module.css";
const Home = () => {
  const [todoItem, setTodoItem] = useState("");
  const [items, setItmes] = useState([
    { id: 0, task: "무언가사기", done: false },
    { id: 1, task: "무언가사기2", done: false },
    { id: 2, task: "무언가사기3", done: false },
  ]);

  const handleAdd = () => {
    if (todoItem) {
      setItmes((prve) => [
        { id: uuidv4(), task: todoItem, done: false },
        ...prve,
      ]);
      setTodoItem("");
    }
  };
  const handleToggle = (id) => {
    const _items = items.map((todos) => {
      if (todos.id === id) {
        return { ...todos, done: !todos.done };
      }
      return todos;
    });

    setItmes(_items);
  };

  return (
    <div className="w-3/4 mx-auto text-center">
      <div className="pt-12">
        <h6 className="text-xs uppercase font-bold pb-2">Learning React</h6>
        <h1 className="text-5xl">ToDoApp</h1>
      </div>
      <div className="pt-12">
        <input
          className="w-full text-gray-900 px-4 py-2 text-center rounded"
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
      </div>
      <ul>
        {items
          .filter((item) => !item.done)
          .map((item) => {
            const { id, task, done } = item;
            return (
              <li
                key={id}
                onClick={() => handleToggle(id)}
                className={done ? styles.item + " " + styles.done : styles.item}
              >
                {task}
              </li>
            );
          })}
        {items
          .filter((item) => item.done)
          .map((item) => {
            const { id, task, done } = item;
            return (
              <ul
                key={id}
                onClick={() => handleToggle(id)}
                className={done ? styles.item + " " + styles.done : styles.item}
              >
                {task}
              </ul>
            );
          })}
      </ul>
    </div>
  );
};
export default Home;
