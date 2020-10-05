import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Blog from "../components/Blog";

function BlogPage() {
  return (
    <Layout>
      <SEO title="Blog" />
      <Blog />
    </Layout>
  );
}

export default BlogPage;
