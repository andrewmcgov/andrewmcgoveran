import React from 'react';
import styles from '../styles/Home.module.scss';

function Home() {
  return (
    <div className={styles.BioContainer}>
      <span className={styles.ShortBio}>
        I'm a Web Developer passionate about learning and teaching.
      </span>
      <span className={styles.ShortBio}>
        I work at <a href="https://www.shopify.ca/">Shopify</a>, helping make
        commerce better for everyone.
      </span>
    </div>
  );
}

export default Home;
