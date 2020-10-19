import React from 'react';
import styles from '../styles/Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.Footer}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  );
}

export default Footer;
