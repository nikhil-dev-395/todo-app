import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [gettingTodo, setGettingTodo] = useState([]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getTodo();
  }, []);

  const addTodo = async () => {
    if (!todo) {
      setError(true);
      return false;
    }

    let data = await fetch("http://localhost:3000/addtodo", {
      method: "post",
      body: JSON.stringify({ todo }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await data.json();
    if (result) {
      getTodo();
    }
    localStorage.setItem("user", JSON.stringify({ result }));
  };

  const handler = () => {
    if (this.key == "Enter") {
      addTodo();
    }
  };

  const getTodo = async () => {
    let data = await fetch("http://localhost:3000/addtodo");
    let result = await data.json();
    setGettingTodo(result);
  };

  const deleteTodo = async (id) => {
    let data = await fetch(`http://localhost:3000/addtodo/${id}`, {
      method: "delete",
    });
    let result = await data.json();
    if (result) {
      getTodo();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="w-full h-screen flex  justify-center p-9 ">
        <div className="">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="enter a todo"
              className="outline-none border border-black w-[500px] py-2 p-4 inline mx-4"
              autoFocus
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              onKeyPress={(e) => handler(e)}
            />

            <button
              type="submit"
              className="cursor-pointer bg-black text-white  px-6 py-[9px]"
              onClick={addTodo}
            >
              add todo
            </button>
            {error && !todo && (
              <span className="flex ml-7 text-red-600 underline">
                empty todo cannot be added
              </span>
            )}
          </form>

          <ul>
            {gettingTodo.length > 0 ? (
              gettingTodo.map((item, index) => (
                <li className="flex my-5 " key={item._id}>
                  <p className=" text-orange-800 ">{index + 1} </p>
                  <div className="  border-b-2 mx-2  max-w-lg">{item.todo}</div>
                  <div className="mt-[-2px] mx-3 absolute right-0">
                    <button
                      className="bg-violet-100 mx-3 py-2 px-3"
                      onClick={() => navigate("/update/" + item._id)}
                    >
                      update
                    </button>
                    <button
                      className="bg-yellow-300 py-2 px-3"
                      onClick={() => deleteTodo(item._id)}
                    >
                      delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <h1>no todo available</h1>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
