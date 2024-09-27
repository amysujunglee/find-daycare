import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/ui/NavBar";
import HomeLayout from "./layout/HomeLayout";
import Login from "./components/pages/Login";
import MyFavourites from "./components/pages/MyFavourites";

// TODO: Create the 404 page

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeLayout />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/my-favourites" element={<MyFavourites />}></Route>
      </Routes>
    </div>
  );
};

export default App;
