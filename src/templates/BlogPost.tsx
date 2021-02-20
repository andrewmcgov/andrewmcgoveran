import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {Seo} from '../components/Seo';
import {Layout} from '../components/Layout';
import {Page} from '../components/Page';
import {Tags} from '../components/Tags';
import styles from '../styles/BlogPost.module.scss';

type PageQuery = {
  markdownRemark: {
    frontmatter: {
      date: string;
      slug: string;
      title: string;
      tags: string[] | null;
    };
    html: string;
  };
};

type BlogPostProps = PageProps<PageQuery>;

export default function BlogPost(props: BlogPostProps) {
  const {markdownRemark} = props.data;
  const {
    frontmatter: {title, date, tags},
    html,
  } = markdownRemark;

  return (
    <Layout>
      <article>
        <Page title={title}>
          <Seo title={title} />
          <div className={styles.Meta}>
            <span>{date}</span>
          </div>
          <Tags tags={tags} />

          <div
            className={styles.Content}
            dangerouslySetInnerHTML={{__html: html}}
          />
        </Page>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
      }
    }
  }
`;
