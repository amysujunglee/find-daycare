import { Routes, Route } from 'react-router-dom'
import AllDaycaresPage from "./pages/AllDaycares";
import FavouritesPage from './pages/Favourites'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className='bg-gray-100'>
      <Header />
      <Routes>
        <Route path="/" element={<AllDaycaresPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
