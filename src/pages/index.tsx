import React from 'react';
import {graphql, PageProps} from 'gatsby';
import {PostPreviewEdge} from '../types';
import {Layout} from '../components/Layout';
import {Seo} from '../components/Seo';
import {Home} from '../components/Home';
import {Page} from '../components/Page';

type PageQuery = {
  allMdx: {
    edges: PostPreviewEdge[];
  };
};

type IndexProps = PageProps<PageQuery>;

function IndexPage({data}: IndexProps) {
  return (
    <Layout>
      <Seo title="Andrew McGoveran" />
      <Page title="Andrew McGoveran" titleHidden>
        <Home recentPosts={data.allMdx.edges} />
      </Page>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            tags
          }
        }
      }
    }
  }
`;

export default IndexPage;
