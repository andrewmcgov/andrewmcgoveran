import React from 'react';
import styles from './Home.module.scss';
import {PostPreviewEdge} from '../../types';
import {BlogPostPreview} from '../BlogPostPreview';

interface Props {
  recentPosts: PostPreviewEdge[];
}

export function Home({recentPosts}: Props) {
  return (
    <>
      <div className={styles.Splash}>
        <div className={styles.Content}>
          <h2 className={styles.Heading}>
            👋 <span className={styles.Gradient}>Hi! I'm Andrew.</span>
          </h2>
          <p className={styles.Tagline}>
            I am a web developer based in Ottawa, Ontario. I work primarily in
            TypeScript and React, but sometimes dabble in Ruby on Rails.
          </p>
        </div>
      </div>
      <section>
        <h2 className={styles.Gradient}>Recent Posts</h2>
        {recentPosts.map(post => (
          <BlogPostPreview post={post} />
        ))}
      </section>
    </>
  );
}
