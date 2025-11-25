import styles from './App.module.css';

import Footer from './components/_footer/Footer';
import Header from './components/_header/Header';

import MainArea from './components/_main/MainArea/MainArea';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokeAPIData from './components/_main/Works/PokeAPIData';
import LpData from './components/_main/Works/LpData';
import Profile from './components/_main/Profile/Profile';
import Service from './components/_main/Service/Service';
import Works from './components/_main/Works/Works';
import Favorite from './components/_main/Favorite/Favorite';
import ScrollToTop from './components/_commons/ScrollToTop';

//スプラッシュ画面関連
import SplashScreen from './components/SplashScreen/SplashScreen';
import useSplashScreenControl from './components/SplashScreen/useSplashScreenControl';

function App() {
  //スプラッシュ制御を呼び出す
  const { showSplash, splashClass, closeSplash } = useSplashScreenControl();

  return (
    <>
      {/* スプラッシュ画面（showSplash が true の間だけ表示） */}
      {showSplash && (
        <SplashScreen onClose={closeSplash} splashClass={splashClass} />
      )}

      {/* showSplash が false のときだけ、通常画面を表示 */}
      {!showSplash && (
        <div>
          <Header />

          <MainArea>
            <ScrollToTop />
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
              <Route path="/works" element={<Works />} />
              <Route path="/works/poke-api" element={<PokeAPIData />} />
              <Route path="/works/moku-lp" element={<LpData />} />
              <Route path="/favorite" element={<Favorite />} />
            </Routes>
          </MainArea>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
