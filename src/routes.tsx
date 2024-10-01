import { Routes, Route } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import Info from './pages/Info';
import { useContext } from 'react';
import { AppContext } from './components/Context/AppContext';

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route
        path="/account/:id"
        element={isLoggedIn ? <Account /> : <Home />}
      />
    </Routes>
  );
};

export default MainRoutes;
