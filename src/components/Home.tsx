import React from 'react';
import styles from '../styles/Home.module.scss';

function Home() {
  return (
    <div className={styles.Splash}>
      <div className={styles.Content}>
        <h2 className={styles.Heading}>👋 Hi! I'm Andrew.</h2>
        <p className={styles.Tagline}>
          I'm a web developer based in Ottawa Ontario. Im passionate about
          learning and teaching. I'll be sharing what I'm workig on here on this
          site.{' '}
        </p>
      </div>
    </div>
  );
}

export default Home;
