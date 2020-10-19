import React from 'react';
import styles from '../styles/Page.module.scss';

interface Props {
  title: string;
  children: JSX.Element[] | JSX.Element;
}

function Page({title, children}: Props) {
  return (
    <main>
      {title && <h1 className={styles.Title}>{title}</h1>}
      {children}
    </main>
  );
}

export default Page;
