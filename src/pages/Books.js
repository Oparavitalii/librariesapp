import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Books({getId}) {
  const [error, setError] = useState("");
  const [books, setBooks] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/books");
        if (res.status !== 200) {
          throw new Error("Something went wrong");
        }
        return setBooks(res.data);
      } catch (error) {
        return setError(error.message);
      }
    };
    fetchBooks();
  }, []);

  const deleteBook = async (id) => {
    console.log(id)
    try {
      await axios.delete("http://localhost:8000/books/"+id );
      
      console.log("deleted")

    } catch (error) {
      return error.message;
    }
  };

  const sendId = (id) => {
    getId(id)
  }
  return (
    <div className="flex row flex-wrap gap-[50px]">
      <h1>Books</h1>
      {books &&
        books.map((book) => {
          return (
            <div key={book.id}>
              {book.cover && (
                <img
                  className="w-[100px] h-[100px] bg-cyan-900"
                  src={book.cover}
                  alt={book.title}
                />
              )}
              <h2 className="text-[20px] text-[#000000] font-[500]">
                {book.title}
              </h2>
              <p className="text-[16px] text-[#242424] font-[300]">
                {book.desc}
              </p>
              <span className="font-[100] text-[#2afd58]">{book.price}</span>
              <button onClick={() => deleteBook(book.id)}>Delete</button> 
              <Link onClick={() => sendId(book.id)} to={"/update/"}>Update</Link>

            </div>
          );
        })}
      <Link
        to="/add"
        className="border-solid border-yellow-500 border-2 w-[150px] h-[50px] text-center bg-orange-600 rounded-[50%] flex justify-center items-center"
      >
        Add new task
      </Link>
    </div>
  );
}
