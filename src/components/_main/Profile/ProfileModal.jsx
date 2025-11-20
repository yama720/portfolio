import React from 'react';
import styles from './ProfileModal.module.css';

// onClose: 親コンポーネントから渡される「閉じる」関数
export default function Modal({ isOpen, onClose, content }) {
  // isOpenがfalseの場合は何も表示しない
  if (!isOpen) return null;

  return (
    // モーダル背景
    // onClickでクリックした時も閉じるように設定
    <div className={styles.overlay} onClick={onClose}>
      {/* 
          e.stopPropagation()で、このエリア内をクリックしてもオーバーレイのonClickが発火しないようにする 
      */}
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        {/* モーダル内の詳細を記述 */}
        <div className={styles.modalProfile}>
          <h3>詳細プロフィール</h3>
          <h4>保有資格</h4>
          <p>ITパスポート/上級情報処理士</p>
          <h4>趣味</h4>
          <p>ゲーム/読書/声優/推し活</p>
          <h4>好きなこと</h4>
          <p>美味しいもの巡り/ものづくり</p>
        </div>

        <p>{content}</p>
      </div>
    </div>
  );
}
