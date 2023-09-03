import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Card from "./pages/Card";
import Singup from "./pages/Singup";
import Login from "./pages/Login";
import ShowDe from "./pages/ShowDe";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Nav />}></Route>
        <Route path="" element={<Card />}></Route>
        <Route path="Singup" element={<Singup />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="ShowDe/:id" element={<ShowDe />}></Route>
      </Routes>
    </>
  );
}

export default App;
