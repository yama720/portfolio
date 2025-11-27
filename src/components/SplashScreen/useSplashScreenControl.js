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

    // スプラッシュ画面を閉じるアニメーションを開始する共通関数
    const ClosingAnimation = () => {
      setSplashClass('slideUpByScroll');
    };

    const handleClick = () => {
      ClosingAnimation();
    };

    const handleScroll = () => {
      // バウンスアニメーションはscrollYの値を変更しないため、誤発動を防止できる
      if (window.scrollY > 0) {
        ClosingAnimation();
      }
      // スクロール位置が0のままイベントが発火した場合（誤検出）は、何もしない
    };

    // // 上にスライドする用
    // const handleScroll = () => {
    //   setSplashClass('slideUpByScroll');
    // };

    // イベントリスナーの登録
    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    // クリーンアップ関数: コンポーネントがアンマウントされる際にリスナーを削除
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showSplash]);

  // スプラッシュ画面の状態と操作関数を返す
  return { showSplash, splashClass, closeSplash, setSplashClass };
};

export default useSplashScreenControl;
