import { useState, useEffect } from 'react';

//  showSplash - スプラッシュ画面を表示するかどうか
//  closeSplash - スプラッシュ画面を閉じるための関数

const useSplashScreenControl = () => {
  // スプラッシュ画面の表示/非表示を制御 (初期値はtrue)
  const [showSplash, setShowSplash] = useState(true);

  const closeSplash = () => {
    setShowSplash(false);
  };

  useEffect(() => {
    // 既に閉じていたらイベントリスナーは不要
    if (!showSplash) return;

    // クリック、スクロール、キーボード操作で画面を閉じるためのイベントハンドラ
    const handleAction = () => {
      // 画面を閉じ、イベントリスナーを解除する
      closeSplash();
      document.removeEventListener('click', handleAction);
      window.removeEventListener('scroll', handleAction);
      window.removeEventListener('keydown', handleAction);
    };

    // イベントリスナーの登録
    document.addEventListener('click', handleAction);
    window.addEventListener('scroll', handleAction);
    window.addEventListener('keydown', handleAction);

    // クリーンアップ関数: コンポーネントがアンマウントされる際にリスナーを削除
    return () => {
      document.removeEventListener('click', handleAction);
      window.removeEventListener('scroll', handleAction);
      window.removeEventListener('keydown', handleAction);
    };
  }, [showSplash]);

  // スプラッシュ画面の状態と操作関数を返す
  return { showSplash, closeSplash };
};

export default useSplashScreenControl;
