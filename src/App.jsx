import styles from './App.module.css';

import Footer from '@components/_footer/Footer';
import Navigation from '@components/_header/Navigation';
import Header from '@components/_header/Header';

//スプラッシュ画面関連
import SplashScreen from '@components/SplashScreen/SplashScreen';
import useSplashScreenControl from '@components/SplashScreen/useSplashScreenControl';

function App() {
  //スプラッシュ制御を呼び出す
  const { showSplash, splashClass, closeSplash } = useSplashScreenControl();

  return (
    <>
      {/* スプラッシュ画面（showSplash が true の間だけ表示） */}
      {showSplash && (
        <SplashScreen onClose={closeSplash} splashClass={splashClass} />
      )}

      <div>
        <Header />

        <Navigation />

        <Footer />
      </div>
    </>
  );
}

export default App;
