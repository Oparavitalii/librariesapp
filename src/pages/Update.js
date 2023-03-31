import React,{useState} from "react";
import axios from "axios";
import { AppContext } from "../context";
import { useNavigate } from "react-router-dom";
export default function Update() {
  const navigate = useNavigate();

const [book, setBook] = useState({
  title: "",
  desc: "",
  price: null,
  cover: "",
});


const handlerChange = (e) => {
  setBook({...book,[e.target.name]:e.target.value})
}

const handlerSubmit = async (e,value) => {
  e.preventDefault();
console.log(book)
  try {
    await axios.put(`http://localhost:5000/books/${value}`, book);
    navigate("/");
  } catch (error) {
    return error.message;
  }
}

  return (
    <div>
<AppContext.Consumer>
{(value) => (
  <div className="form">
      <h1>Change book</h1>
      <form onSubmit={(e) => handlerSubmit(e,value)}>
        <input
          type="text"
          name="title"
          onChange={handlerChange}
          placeholder="title"
        />
        <input
          type="text"
          name="desc"
          onChange={handlerChange}
          placeholder="desc"
        />
        <input
          type="number"
          name="price"
          onChange={handlerChange}
          placeholder="price"
        />
        <input
          type="text"
          name="cover"
          onChange={handlerChange}
          placeholder="cover"
        />
        <button>Change</button>
      </form>
    </div>
)}
     
    </AppContext.Consumer>
    </div>
  )
  }
