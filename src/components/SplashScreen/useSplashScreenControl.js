import { useState, useEffect } from 'react';

//  showSplash - スプラッシュ画面を表示するかどうか
//  closeSplash - スプラッシュ画面を閉じるための関数

const useSplashScreenControl = () => {
  // スプラッシュ画面の表示/非表示を制御 (初期値はtrue)
  const [showSplash, setShowSplash] = useState(true);

  // アニメーション用のクラス
  const [splashClass, setSplashClass] = useState('');

  const closeSplash = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    // 既に閉じていたらイベントリスナーは不要
    if (!showSplash) return;

    // 上にスライドするため用
    const handleScroll = () => {
      setSplashClass('slideUpByScroll');
    };

    // イベントリスナーの登録
    document.addEventListener('click', handleScroll);
    window.addEventListener('scroll', handleScroll);

    // クリーンアップ関数: コンポーネントがアンマウントされる際にリスナーを削除
    return () => {
      document.removeEventListener('click', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showSplash]);

  // スプラッシュ画面の状態と操作関数を返す
  return { showSplash, splashClass, closeSplash, setSplashClass };
};

export default useSplashScreenControl;
