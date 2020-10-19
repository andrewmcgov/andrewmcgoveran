import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import styles from '../styles/Layout.module.scss';
import {classNames} from '../utilities';
import '../styles/normalize.css';
import '../styles/global.scss';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: JSX.Element[];
  fullWidth?: boolean;
}

function Layout({children, fullWidth = false}: Props) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div
      className={classNames(styles.Wrapper, fullWidth && styles.FullWrapper)}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
