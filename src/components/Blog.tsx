import React from "react";
import {graphql, PageProps} from "gatsby";
import Page from "./Page";

type PostPreviewNode = {
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
    edges: PostPreviewNode[];
  };
};

type BlogProps = PageProps<PageQuery>;

function Blog({data}: BlogProps) {
  // const postsMarkup = data.allMarkdownRemark.edges.map((node) => {
  //   const {id, exerpt} = node;
  // });

  console.log(data);

  return (
    <Page title="Blog">
      <p>Here I'll have some posts that I will write in 1-5 years.</p>
    </Page>
  );
}

export default Blog;

export const pageQuery = graphql`
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
