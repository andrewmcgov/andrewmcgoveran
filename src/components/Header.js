import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from '../styles/Header.module.scss';

function Header({siteTitle}) {
  return (
    <header className={styles.Header}>
      <h2 className={styles.Title}>
        <Link to="/">{siteTitle}</Link>
      </h2>
      <nav>
        <ul className={styles.Nav}>
          <li className={styles.NavItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={styles.NavItem}>
            <Link to="/posts">Posts</Link>
          </li>
          <li className={styles.NavItem}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
