import React from 'react';
import styles from './Tags.module.scss';

interface Props {
  tags: string[] | null;
}

export function Tags({tags}: Props) {
  if (!tags) {
    return null;
  }

  return (
    <div className={styles.Tags}>
      {tags.map(tag => (
        <span key={tag} className={styles.Tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
