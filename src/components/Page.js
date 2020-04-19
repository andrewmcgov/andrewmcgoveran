import React from 'react';
import styles from '../styles/Page.module.scss';

function Page({title, children}) {
  return (
    <main>
      {title && <h1 className={styles.Title}>{title}</h1>}
      {children}
    </main>
  );
}

export default Page;
