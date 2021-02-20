import React from 'react';
import {Link} from 'gatsby';
import {Tags} from '../Tags';
import {PostPreviewEdge} from '../../types';
import styles from './BlogPostPreview.module.scss';

interface Props {
  post: PostPreviewEdge;
}

export function BlogPostPreview({post}: Props) {
  const {
    id,
    frontmatter: {slug, title, date, tags},
    excerpt,
  } = post.node;
  return (
    <article key={id} className={styles.BlogPostPreview}>
      <Link to={slug}>
        <h3 className={styles.Heading}>{title}</h3>
        <div className={styles.Meta}>
          <span>{date}</span>
        </div>
        <Tags tags={tags} />
        <p className={styles.Excerpt}>{excerpt}</p>
      </Link>
    </article>
  );
}
