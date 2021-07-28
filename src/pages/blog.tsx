import React from 'react';
import {graphql, PageProps, Link} from 'gatsby';
import {PostPreviewEdge} from '../types';
import {Layout} from '../components/Layout';
import {Seo} from '../components/Seo';
import {Page} from '../components/Page';
import {BlogPostPreview} from '../components/BlogPostPreview';

type PageQuery = {
  allMdx: {
    edges: PostPreviewEdge[];
  };
};

type BlogProps = PageProps<PageQuery>;

function BlogPage({data}: BlogProps) {
  const postsMarkup = data.allMdx.edges.map(post => {
    return <BlogPostPreview post={post} />;
  });

  return (
    <Layout>
      <Seo title="Blog" />
      <Page title="Blog">{postsMarkup}</Page>
    </Layout>
  );
}

export default BlogPage;

export const query = graphql`
  query {
    allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;
