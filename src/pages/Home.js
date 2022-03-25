import BasicContainer from "../components/BasicContainer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const fetchedTodos = data;
    setTodos(fetchedTodos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BasicContainer title="Ini Home Page">
      <div>Home Page</div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </BasicContainer>
  );
}

export default Home;
