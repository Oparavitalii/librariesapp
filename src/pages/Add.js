import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Add() {
  const [result, setResult] = useState("");
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  console.log(book)
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/books",book);
        navigate("/")
    } catch (error) {
      return setResult(error.message);
    }
  };
  return (
    <div className="form">
      <h1>Add book</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="title"
        />
        <input
          type="text"
          name="desc"
          onChange={handleChange}
          placeholder="desc"
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="price"
        />
        <input
          type="text"
          name="cover"
          onChange={handleChange}
          placeholder="cover"
        />
        <button>Add</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
