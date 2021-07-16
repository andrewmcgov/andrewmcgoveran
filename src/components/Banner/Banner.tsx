import React from 'react';

import styles from './Banner.module.scss';

export interface BannerProps {
  prop?: string;
}

export function Banner({prop = 'default value'}: BannerProps) {
  return <div className={styles.Banner}>Banner {prop}</div>;
}
