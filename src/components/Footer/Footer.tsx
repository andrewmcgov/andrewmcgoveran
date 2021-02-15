import React from 'react';
import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      Made with {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> - View source on{' '}
      <a href="https://github.com/andrewmcgov/andrewmcgoveran">Github</a> - Say
      hi on <a href="https://twitter.com/andrew_mcgov">Twitter</a>
    </footer>
  );
}
