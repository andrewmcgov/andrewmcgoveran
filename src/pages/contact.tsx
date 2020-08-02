import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Contact from '../components/Contact';

function ContactPage() {
  return (
    <Layout>
      <SEO title="Posts" />
      <Contact />
    </Layout>
  );
}

export default ContactPage;
