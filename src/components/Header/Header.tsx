import {Link} from 'gatsby';
import React from 'react';
import styles from './Header.module.scss';

interface Props {
  siteTitle: string;
}

export function Header({siteTitle}: Props) {
  return (
    <header className={styles.Header}>
      <h2 className={styles.Title}>
        <Link to="/">
          Andrew
          <br />
          McGoveran
        </Link>
      </h2>
      <nav>
        <ul className={styles.Nav}>
          <li className={styles.NavItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.NavItem}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={styles.NavItem}>
            <Link to="/now">Now</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
