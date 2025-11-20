import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // パスが変わるたびに、ウィンドウを最上部にスクロールさせる
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // このコンポーネント自体は何もレンダリングしない
}
