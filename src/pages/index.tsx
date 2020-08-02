import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Home from '../components/Home';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  );
}

export default IndexPage;
