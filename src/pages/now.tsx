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
          <li>Learning some Rails</li>
          <li>
            Trying to get some exercise during quarentine by riding my bike
            trainer on Zwift
          </li>
          <li>Welcoming our new cat, Penny, to our home</li>
        </ul>

        <p className={styles.Info}>
          <a href="https://nownownow.com/about">What is this page?</a>
        </p>
      </Page>
    </Layout>
  );
}

export default NowPage;
