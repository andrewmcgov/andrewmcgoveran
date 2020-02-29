import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'gatsby';

function AboutPage() {
  return (
    <Layout>
      <main>
        <h1>About me</h1>
        <p>Here I'll have some fancy info about myself.</p>
      </main>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
}

export default AboutPage;
