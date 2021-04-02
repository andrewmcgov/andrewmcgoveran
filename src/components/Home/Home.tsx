import React from 'react';
import styles from './Home.module.scss';
import {PostPreviewEdge} from '../../types';
import {BlogPostPreview} from '../BlogPostPreview';
import {StaticImage} from 'gatsby-plugin-image';

interface Props {
  recentPosts: PostPreviewEdge[];
}

export function Home({recentPosts}: Props) {
  return (
    <>
      <section className={styles.Splash}>
        <div className={styles.Image}>
          <StaticImage
            src="../../images/headshot.jpg"
            alt="My headshot"
            width={300}
            height={300}
            loading="eager"
            placeholder="blurred"
          />
        </div>
        <div className={styles.Content}>
          <h2 className={styles.Heading}>
            👋 <span className={styles.Gradient}>Hi! I'm Andrew.</span>
          </h2>
          <p className={styles.Tagline}>
            I am a web developer based in Ottawa, Ontario. I work primarily in
            TypeScript, React, and sometimes Rails.
          </p>
        </div>
      </section>
      <section>
        <h2>Recent Posts</h2>
        {recentPosts.map(post => (
          <BlogPostPreview post={post} key={post.node.id} />
        ))}
      </section>
    </>
  );
}
