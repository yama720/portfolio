import React, { useState } from 'react';
import styles from './Profile.module.css';
import profileImage from './../../../assets/image/profile.jpg';
import buttonImage from './../../../assets/image/arrow.png';
import ProfileModal from './ProfileModal';

export default function Profile() {
  //モーダルの開閉
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className={styles.profileContainer}>
        <h2 className={styles.profileHeading}>Profile</h2>

        <div className={styles.profileContent}>
          <div className={styles.profilePhotoArea}>
            <img
              src={profileImage}
              alt="プロフィール画像"
              className={styles.profilePhoto}
            />
          </div>

          <div className={styles.profileInfoArea}>
            <h3 className={styles.profileName}>山田真歩</h3>
            <p className={styles.profileDescription}>
              兵庫県在住　1998年生まれ <br />
              大学卒業後、アルバイトで転々とし、
              <br />
              現在職業訓練校に在籍中。
            </p>

            <button className={styles.profileButton} onClick={openModal}>
              <span className={styles.plusIcon}>
                <img
                  src={buttonImage}
                  alt="ボタン画像"
                  className={styles.buttonImage}
                />
              </span>
              もっと見る
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <ProfileModal
          isOpen={isModalOpen}
          onClose={closeModal} // 閉じるための関数を渡す
          content="スタジオツアーにて撮った写真。スリザリンの談話室は椅子がとても深かった。"
        />
      )}
    </>
  );
}
