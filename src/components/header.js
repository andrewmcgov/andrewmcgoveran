import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './Header.module.scss';

function Header({siteTitle}) {
  return (
    <header className={styles.Header}>
      <h2 className={styles.Title}>
        <Link to="/">{siteTitle}</Link>
      </h2>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
