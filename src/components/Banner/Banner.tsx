import React from 'react';
import {classNames} from '../../utilities';

import styles from './Banner.module.scss';

export interface BannerProps {
  children?: React.ReactNode;
  status: 'info' | 'warning';
}

export function Banner({children, status}: BannerProps) {
  const bannerClasses = classNames(
    styles.Banner,
    status === 'info' && styles.BannerInfo,
    status === 'warning' && styles.BannerWarning
  );
  return <div className={bannerClasses}>{children}</div>;
}
