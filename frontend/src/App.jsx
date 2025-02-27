import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddComponent from "./components/AddComponent";
import ShowList from "./components/ShowList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <AddComponent />
        <Routes>
          <Route path="/" element={<ShowList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
