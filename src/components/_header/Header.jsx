import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.mainNav}>
          <ul className={styles.navUl}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/works">Works</Link>
            </li>
            <li>
              <Link to="/favorite">Favorite</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
