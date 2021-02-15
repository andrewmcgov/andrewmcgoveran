import React from 'react';
import {classNames} from '../../utilities';
import styles from './Page.module.scss';

interface Props {
  title: string;
  titleHidden?: boolean;
  children: JSX.Element[] | JSX.Element;
}

export function Page({title, titleHidden, children}: Props) {
  return (
    <main>
      <h1 className={classNames(styles.Title, titleHidden && styles.Hidden)}>
        {title}
      </h1>
      {children}
    </main>
  );
}
