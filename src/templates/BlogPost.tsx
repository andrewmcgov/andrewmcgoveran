import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {Seo} from '../components/Seo';
import {Layout} from '../components/Layout';
import {Page} from '../components/Page';
import {Tags} from '../components/Tags';
import styles from '../styles/BlogPost.module.scss';

type PageQuery = {
  mdx: {
    frontmatter: {
      date: string;
      slug: string;
      title: string;
      tags: string[] | null;
      description?: string | null;
    };
    body: string;
  };
};

type BlogPostProps = PageProps<PageQuery>;

export default function BlogPost(props: BlogPostProps) {
  const {mdx} = props.data;
  const {
    frontmatter: {title, date, tags, description},
    body,
  } = mdx;

  return (
    <Layout>
      <article className={styles.BlogWrapper}>
        <Page title={title}>
          <Seo title={title} description={description} />
          <div className={styles.MetaWrapper}>
            <div className={styles.Meta}>
              <span>{date}</span>
            </div>
            <Tags tags={tags} />
          </div>

          <MDXProvider components={{}}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Page>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
        description
      }
    }
  }
`;
