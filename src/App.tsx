import "./App.css";
import { Routes, Route } from "react-router-dom";
// import NavBar from "./components/ui/NavBar";
// import Login from "./components/pages/Login";
// import MyFavourites from "./components/pages/MyFavourites";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import FindDaycare from "./components/pages/FindDaycare";

// TODO: Create the 404 page

const App = () => {
  return (
    <>
      <Header />
      {/* <NavBar /> */}
      <Routes>
        <Route path="/find-daycare" element={<FindDaycare />}></Route>
        {/* <Route path="/login" element={<Login />}></Route>
        <Route path="/my-favourites" element={<MyFavourites />}></Route> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
