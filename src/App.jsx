import './App.css';

import Footer from './components/_footer/Footer';
import Header from './components/_header/Header';
import MainArea from './components/_main/MainArea/MainArea';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokeAPIData from './components/_main/Works/PokeAPIData';
import LpData from './components/_main/Works/LpData';
import Profile from './components/_main/Profile/Profile';
import Service from './components/_main/Service/Service';

import Works from './components/_main/Works/Works';
import Home from './pages/Home';
import About from './pages/About';
import Favorite from './components/_main/Favorite/Favorite';

function App() {
  return (
    <div>
      {/* ナビゲーション */}
      <nav style={{ display: 'flex', gap: '16px' }}>
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        <Link to="/works">Works</Link>
        <Link to="/favorite">Favorite</Link>
      </nav>
      <Header />

      <MainArea>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Profile />
                <Service />
                <Works />
                <Favorite />
              </>
            }
          />

          <Route path="/service" element={<Service />} />

          {/* Works 一覧ページ */}
          <Route path="/works" element={<Works />} />

          {/* 詳細ページ */}
          <Route path="/works/poke-api" element={<PokeAPIData />} />
          <Route path="/works/moku-lp" element={<LpData />} />

          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </MainArea>

      <Footer />
    </div>
  );
}

export default App;
