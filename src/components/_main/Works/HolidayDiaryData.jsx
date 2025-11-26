import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PokeAPIData.module.css';
import desktopMockup from './../../../assets/image/holiday-pc.png';
import mobileMockup from './../../../assets/image/holiday-sp.png';
import HolidayDiary from './../../../assets/image/holiday02.png';

export default function HolidayDiaryData() {
  const Link = import.meta.env.BASE_URL;

  const navigate = useNavigate();

  // 1つ前の履歴に戻る関数（スクロール位置を保持する）
  const handleBack = (e) => {
    e.preventDefault(); // aタグのデフォルトの動作（ページトップへのスクロール）を防止
    navigate(-1); // 履歴を1つ戻る
  };

  return (
    <>
      <div className={styles.detailPage}>
        <header className={styles.header}>
          <h1 className={styles.title}>お盆休み日記</h1>
          <p className={styles.overview}>
            最初の制作課題。お盆期間の出来事を書き留めた日記。
          </p>
        </header>

        <section className={styles.mockupSection}>
          {/* 画像を横並びにするコンテナ */}
          <div className={styles.deviceMockups}>
            {/* PC画面 */}
            <div className={styles.desktopWrapper}>
              <img
                src={desktopMockup}
                alt="PC画面モックアップ"
                className={styles.desktopImage}
              />
            </div>
            {/* スマホ画面 */}
            <div className={styles.mobileWrapper}>
              <img
                src={mobileMockup}
                alt="スマートフォン画面モックアップ"
                className={styles.mobileImage}
              />
            </div>
          </div>
        </section>

        {/* 使用技術のアイコンリスト */}
        <section className={styles.SectionItem}>
          <h2 className={styles.subHeading}>制作ツール</h2>
          <div className={styles.IconsItem}>
            <img
              src={`${Link}figma.png`}
              alt="Figma"
              className={styles.IconItem}
            />
            <img
              src={`${Link}vscode.png`}
              alt="VSCode"
              className={styles.IconItem}
            />
            <img
              src={`${Link}html.png`}
              alt="HTML"
              className={styles.IconItem}
            />
            <img
              src={`${Link}sass.png`}
              alt="Sass"
              className={styles.IconItem}
            />
            <img
              src={`${Link}js.png`}
              alt="JavaScript"
              className={styles.IconItem}
            />
            <img
              src={`${Link}github-mark.svg`}
              alt="GitHub"
              className={styles.IconItem}
            />
          </div>
        </section>

        {/* 詳細な説明テキスト */}
        <section className={styles.descriptionSection}>
          <h2 className={styles.subHeading}>制作期間</h2>
          <p className={styles.detailText}>2日</p>
          <h2 className={styles.subHeading}>目的</h2>
          <p className={styles.detailText}>
            最初の制作課題で、お盆期間の出来事を書き留めた日記を制作しました。
            <br />
          </p>
          <h2 className={styles.subHeading}>デザインプロセス</h2>
          <p className={styles.detailText}>
            トップページの各記事は、画像と一部本文のみ表示するようにしており、
            <br />
            もっと読みたいときに、続きはこちらボタンを押すとページが遷移するように設定しています。
            <br />
            また各記事は、カテゴリー別にソートをかけることも可能にしています。
            <br />
            スクロールした際にメニューが右側をついてくる仕様は、使いやすさ重視で実装しました。
            <br />
          </p>

          {/* ライブデモやGitHubへのリンク */}
          <div className={styles.linkGroup}>
            <a
              href="https://yama720.github.io/obon_holiday/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
            >
              サイトを見る
            </a>
            <a
              href="https://github.com/yama720/obon_holiday"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionButton}
            >
              GitHubを見る
            </a>
          </div>
        </section>

        <section className={styles.screenshotSection}>
          <img
            src={HolidayDiary}
            alt="サイト画像"
            className={styles.screenshotImage}
          />
        </section>
      </div>
      <div className={styles.fixedButtonContainer}>
        <button className={styles.ButtonFixed} onClick={handleBack}>
          ホームへ戻る
        </button>
      </div>
    </>
  );
}
