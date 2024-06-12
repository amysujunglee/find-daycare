import './App.css'
import { Routes, Route } from 'react-router-dom'
import AllDaycares from "./components/pages/AllDaycares";
import MyFavourites from './components/pages/MyFavourites'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LogIn from './components/pages/LogIn';

function App() {
  return (
    <div className='bg-gray-100'>
      <Header />
      <Routes>
        <Route path="/" element={<AllDaycares />} />
        <Route path="/favourites" element={<MyFavourites />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
