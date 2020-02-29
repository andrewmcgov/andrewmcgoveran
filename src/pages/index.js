import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/image';
import SEO from '../components/Seo';

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <Image />
      </div>
      <Link to="/about">About</Link>
    </Layout>
  );
}

export default IndexPage;
