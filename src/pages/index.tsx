import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {PostPreviewEdge} from '../types';
import {Layout} from '../components/Layout';
import {Seo} from '../components/Seo';
import {Home} from '../components/Home';
import {Page} from '../components/Page';

type PageQuery = {
  allMarkdownRemark: {
    edges: PostPreviewEdge[];
  };
};

type IndexProps = PageProps<PageQuery>;

function IndexPage({data}: IndexProps) {
  return (
    <Layout>
      <Seo title="Home" />
      <Page title="Home" titleHidden>
        <Home recentPosts={data.allMarkdownRemark.edges} />
      </Page>
    </Layout>
  );
}

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

export default IndexPage;
