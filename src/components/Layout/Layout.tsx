import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import {classNames} from '../../utilities';
import {Header} from '../Header';
import {Footer} from '../Footer';
import styles from './Layout.module.scss';
import '../../styles/normalize.css';
import '../../styles/global.scss';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  fullWidth?: boolean;
}

export function Layout({children, fullWidth = false}: Props) {
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
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
