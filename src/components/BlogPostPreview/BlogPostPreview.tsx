import React from 'react';
import {Link} from 'gatsby';
import {PostPreviewEdge} from '../../types';
import styles from './BlogPostPreview.module.scss';

interface Props {
  post: PostPreviewEdge;
}

export function BlogPostPreview({post}: Props) {
  const {id, frontmatter, excerpt} = post.node;
  return (
    <article key={id} className={styles.BlogPostPreview}>
      <Link to={frontmatter.slug}>
        <h3 className={styles.Heading}>{frontmatter.title}</h3>
        <span className={styles.Meta}>{frontmatter.date}</span>
        <p>{excerpt}</p>
      </Link>
    </article>
  );
}
