import React from 'react';
import styles from './PokeAPIData.module.css';
import desktopMockup from './../../../assets/image/PokeAPI-pc.png';
import mobileMockup from './../../../assets/image/PokeAPI-sp.png';
import PokeAPI from './../../../assets/image/PokeAPI02.png';

export default function PokeAPIData() {
  const Link = import.meta.env.BASE_URL;

  return (
    <div className={styles.detailPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>PokeAPI</h1>
        <p className={styles.overview}>
          PokeAPIを利用して、今日のニュースとラッキーカラーにまつわるポケモンを表示する作品。
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
          <img src={`${Link}html.png`} alt="HTML" className={styles.IconItem} />
          <img src={`${Link}sass.png`} alt="Sass" className={styles.IconItem} />
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
        <p className={styles.detailText}>1週間</p>
        <h2 className={styles.subHeading}>目的</h2>
        <p className={styles.detailText}>
          朝のニュース番組のように見出しだけでもパッと見ただけで、今日のニュースがわかるサイトが欲しくて制作しました。
          <br />
          各サイトから引っ張ってきているので、記事の本文も含めて内容に偏りが出ないようになっています。
          <br />
          また移動中等の朝に見ることを想定しているため、遊び心として、今日のラッキーカラーも追加しました。
          <br />
          ランダムで出て来た色、ポケモンの何かしらをその日持っていたら少し気分が上がる仕様に仕上げれました。
          <br />
        </p>
        <h2 className={styles.subHeading}>デザインプロセス</h2>
        <p className={styles.detailText}>
          上部には、NEWSDATA.IOを使った今日の最新ニュースと推しポケモンをランダムに表示。
          <br />
          下部には、ラッキーカラーを表示させるボタンを配置し、クリックするとランダムで「色名」が表示される。
          <br />
          その後、ランダムで排出されたその色に関連するポケモンが5匹表示される。
          <br />
        </p>

        {/* ライブデモやGitHubへのリンク */}
        <div className={styles.linkGroup}>
          <a
            href="https://yama720.github.io/PokeAPI/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionButton}
          >
            サイトを見る
          </a>
          <a
            href="https://github.com/yama720/PokeAPI"
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
          src={PokeAPI}
          alt="サイト画像"
          className={styles.screenshotImage}
        />
      </section>
    </div>
  );
}
