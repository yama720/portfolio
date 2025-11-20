import React from 'react';
import styles from './LpData.module.css';
import desktopMockup from './../../../assets/image/LP-pc.png';
import mobileMockup from './../../../assets/image/LP-sp.png';
import mokuLP from './../../../assets/image/LP02.png';

export default function LpData() {
  return (
    <div className={styles.detailPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>moku.</h1>
        <p className={styles.overview}>
          地域密着型カフェ「moku.」のランディングページ（架空）
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
          <img src="/Figma.png" alt="Figma" className={styles.IconItem} />
          <img src="/VScode.png" alt="VSCode" className={styles.IconItem} />
          <img src="/HTML.png" alt="HTML" className={styles.IconItem} />
          <img src="/Sass.png" alt="Sass" className={styles.IconItem} />
          <img src="/JS.png" alt="JavaScript" className={styles.IconItem} />
          <img
            src="/github-mark.svg"
            alt="GitHub"
            className={styles.IconItem}
          />
        </div>
      </section>

      {/* 詳細な説明テキスト */}
      <section className={styles.descriptionSection}>
        <h2 className={styles.subHeading}>制作期間</h2>
        <p className={styles.detailText}>2週間</p>
        <h2 className={styles.subHeading}>目的</h2>
        <p className={styles.detailText}>
          新規顧客の獲得・認知拡大を行う。
          <br />
          具体的には、お問い合わせページで「今すぐ予約（イートイン）」ができたり「テイクアウトを注文する」ことができるようにする。
          <br />
          お問い合わせページに飛べるボタンを、他のセクションの区切りやフッター付近など、複数箇所に配置する。
          <br />
        </p>

        <h2 className={styles.subHeading}>ターゲット</h2>
        <p className={styles.detailText}>
          20代〜40代の近隣住民、おしゃれな空間でリラックスしたい人
        </p>

        <h2 className={styles.subHeading}>コンセプト</h2>
        <p className={styles.detailText}>
          地域の魅力を再発見できる、手作りと地産地消へのこだわり。
        </p>

        <h2 className={styles.subHeading}>ペルソナ</h2>
        <p className={styles.detailText}>
          <span className={styles.left}>名前：</span>
          <span className={styles.right}>佐藤 陽子（サトウ ヨウコ）</span>
          <br />
          <span className={styles.left}> 年齢：</span>
          <span className={styles.right}>35歳</span> <br />
          <span className={styles.left}>居住地：</span>
          <span className={styles.right}>
            カフェから徒歩10分圏内のアパート
          </span>{' '}
          <br />
          <span className={styles.left}>職業：</span>
          <span className={styles.right}>
            IT企業のリモートワーク社員（マーケティング担当）
          </span>
          <br />
          <span className={styles.left}>家族構成：</span>
          <span className={styles.right}>
            夫と二人暮らし（共働き、子どもなし）
          </span>
          <br />
          <span className={styles.left}>価値観:</span>
          <span className={styles.right}>
            「質素で丁寧な暮らし」を好む。忙しい仕事と生活のON/OFFを意識しており、家の中が仕事場になりがちなため、気分転換できる落ち着いた場所を求めている。
            <br />
            インテリアや食料品は、「シンプルさ」「素材の良さ」を重視し、
            多少高くても納得のいくものを選ぶ。
          </span>
          <br />
          <span className={styles.left}>ITリテラシー：</span>
          <span className={styles.right}>
            高い。SNS（Instagram）で地域の最新情報をチェックする。
            <br />
            テイクアウトや予約はオンラインで完結したい。
          </span>
          <br />
          <span className={styles.left}>カフェ利用の目的：</span>
          <span className={styles.right}>
            【 平日】午前中に仕事の続きをする（電源、Wi-Fi必須）。
            <br />
            【休日】：夫とブランチを楽しむ、または一人で読書や考え事をする。
          </span>
          <br />
          <span className={styles.left}>カフェに求めるもの：</span>
          <span className={styles.right}>
            1.居心地の良さ（騒がしくない、木目など自然な素材）
            <br />
            2.メニューのこだわり（コーヒーの風味、手作りスイーツの素材）
            <br />
            3.手軽な利用（テイクアウトやオンライン予約のしやすさ）
            <br />
          </span>
        </p>

        <h2 className={styles.subHeading}>含める要素</h2>
        <p className={styles.detailText}>
          ・メインビジュアル（店の雰囲気、こだわりのコーヒー豆など）
          <br />
          ・コンセプト紹介（手作り感、地元の食材へのこだわりなど）
          <br />
          ・メニューのハイライト（写真付き） アクセス情報・営業時間
          <br />
          ・予約またはテイクアウト注文へのCTA（Call to Action）ボタン
          <br />
        </p>

        <h2 className={styles.subHeading}>デザインプロセス</h2>
        <p className={styles.detailText}>
          明快で使いやすい構成を意識し、閲覧者が直感的に内容を理解できるよう設計しました。
          <br />
          シンプルでありながら温度感のあるトーンに仕上げることで、見る人に安心感と信頼感を与えられるよう意識しています。
          <br />
          全体のカラーは目に優しい緑系統の色を基調に構成。あえて彩度を抑えた背景にすることで、写真の魅力が際立つようなバランスを追求しました。
          <br />
        </p>

        {/* ライブデモやGitHubへのリンク */}
        <div className={styles.linkGroup}>
          <a
            href="https://yama720.github.io/2025_10_fictional_LP/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionButton}
          >
            サイトを見る
          </a>
          <a
            href="https://github.com/yama720/2025_10_fictional_LP"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionButton}
          >
            GitHubを見る
          </a>
        </div>
      </section>

      <section className={styles.screenshotSection}>
        <img src={mokuLP} alt="サイト画像" className={styles.screenshotImage} />
      </section>
    </div>
  );
}
