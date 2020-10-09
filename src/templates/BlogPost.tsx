import React from "react";
import {graphql, PageProps} from "gatsby";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import styles from "../styles/BlogPost.module.scss";

type PageQuery = {
  markdownRemark: {
    frontmatter: {
      date: string;
      slug: string;
      title: string;
    };
    html: string;
  };
};

type BlogPostProps = PageProps<PageQuery>;

export default function BlogPost(props: BlogPostProps) {
  console.log(props);
  const {markdownRemark} = props.data; // data.markdownRemark holds your post data
  const {frontmatter, html} = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div>
        <h1>{frontmatter.title}</h1>
        <p className={styles.Date}>{frontmatter.date}</p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{__html: html}}
        />
      </div>
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
      }
    }
  }
`;
