import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTodo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState("");
  useEffect(() => {
    getPrefil();
  }, []);

  const getPrefil = async () => {
    let data = await fetch(`http://localhost:3000/addtodo/${params.id}`);
    let result = await data.json();
    setTodo(result.todo);
  };

  const updateData = async () => {
    let data = await fetch(`http://localhost:3000/addtodo/${params.id}`, {
      method: "put",
      body: JSON.stringify({ todo }),
      headers: {
        "content-Type": "application/json",
      },
    });
    let result = await data.json();
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <input
        type="text"
        placeholder="enter a todo to update"
        className="outline-none border border-black w-[500px] py-2 p-4 inline mx-4"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="button"
        className="cursor-pointer bg-black text-white  px-6 py-[9px]"
        onClick={updateData}
      >
        update todo
      </button>
    </div>
  );
};

export default UpdateTodo;
