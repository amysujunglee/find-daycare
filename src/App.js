import { Routes, Route } from 'react-router-dom'
import AllDaycaresPage from "./pages/AllDaycares";
import AddDaycarePage from './pages/AddDaycare';
import FavouritesPage from './pages/Favourites'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllDaycaresPage />} />
        <Route path="/add-daycare" element={<AddDaycarePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
