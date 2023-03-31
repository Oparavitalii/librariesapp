import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import { AppContext } from "./context";

function App() {
  const [id,setId] = React.useState(0);
  const getId = (id) => {
    setId(id)
  }

  console.log(id)
  return (
    <div className="App m-[10px] text-[18px]">
    <h1 className="text-center">
      It's our book
    </h1>
    <AppContext.Provider value={id}>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Add /> } />
          <Route path="/" element={<Books getId={getId} />} />
          <Route path="/update" element={<Update /> } />
        </Routes>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
