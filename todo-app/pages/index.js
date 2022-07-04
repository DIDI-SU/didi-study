import { useState } from "react";

const Home = () => {
  const [todoItem, setTodoItem] = useState("");
  const [items, setItmes] = useState([
    "무언가사기",
    "무언가사기2",
    "무언가사기3",
  ]);
  const handleAdd = () => {
    setItmes((prve) => [...prve, todoItem]);
    setTodoItem("");
  };

  return (
    <div>
      <h1>ToDoApp</h1>
      <div>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button type="button" onClick={() => handleAdd()}>
          Add
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
