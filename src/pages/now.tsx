import React from 'react';
import {Layout} from '../components/Layout';
import {Seo} from '../components/Seo';
import {Page} from '../components/Page';
import styles from '../styles/Now.module.scss';

function NowPage() {
  return (
    <Layout>
      <Seo title="Now" />
      <Page title="What I'm doing now">
        <ul>
          <li>Living in Ottawa, Ontario</li>
          <li>Working at Shopify</li>
          <li>
            Working on{' '}
            <a href="https://css-for-js.dev/">CSS for JS devs course</a>
          </li>
          <li>Getting outside as much as possible</li>
          <li>Growing way too many tomatoes</li>
        </ul>

        <p className={styles.Info}>
          <a href="https://nownownow.com/about">What is this page?</a>
        </p>
      </Page>
    </Layout>
  );
}

export default NowPage;
