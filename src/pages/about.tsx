import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import About from '../components/About';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <About />
    </Layout>
  );
}

export default AboutPage;
