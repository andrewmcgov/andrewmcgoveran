import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Posts from '../components/Posts';

function PostsPage() {
  return (
    <Layout>
      <SEO title="Posts" />
      <Posts />
    </Layout>
  );
}

export default PostsPage;
