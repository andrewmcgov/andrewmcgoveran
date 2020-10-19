import React from 'react';
import {graphql, PageProps, Link} from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Page from '../components/Page';

type PostPreviewEdge = {
  node: {
    id: string;
    excerpt: string;
    frontmatter: {
      date: string;
      slug: string;
      title: string;
    };
  };
};

type PageQuery = {
  allMarkdownRemark: {
    edges: PostPreviewEdge[];
  };
};

type BlogProps = PageProps<PageQuery>;

function BlogPage({data}: BlogProps) {
  const postsMarkup = data.allMarkdownRemark.edges.map(({node}) => {
    const {id, excerpt, frontmatter} = node;

    return (
      <div key={id}>
        <Link to={frontmatter.slug}>
          <h2>{frontmatter.title}</h2>
          <p>{excerpt}</p>
        </Link>
      </div>
    );
  });

  return (
    <Layout>
      <SEO title="Blog" />
      <Page title="Blog!">{postsMarkup}</Page>
    </Layout>
  );
}

export default BlogPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
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
