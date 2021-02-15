import React from 'react';
import {Layout} from '../components/Layout';
import {Seo} from '../components/Seo';
import {Page} from '../components/Page';

function AboutPage() {
  return (
    <Layout>
      <Seo title="About" />
      <Page title="Hi! I'm Andrew">
        <p>I am a web developer from Ottawa, Ontario. 🇨🇦</p>
        <p>
          I currently work at <a href="https://www.shopify.ca/">Shopify</a>{' '}
          where I help build the admin interfaces that over one million
          merchants use to manage their inventory.
        </p>
        <p>
          I primarily work with React and Typescript, and I am working on
          getting more familiar with Ruby on Rails. You can find me over on{' '}
          <a href="https://github.com/andrewmcgov">Github</a> where I am
          currently working on{' '}
          <a href="https://github.com/andrewmcgov/andrewmcgoveran">this site</a>{' '}
          and a{' '}
          <a href="https://github.com/andrewmcgov/react-component-generator">
            React component generator for VS Code.
          </a>
        </p>
        <p>
          Aside from web development, you can find me rooting for the Toronto
          Maple Leafs, playing Hockey in the winter, and waterskiing in the
          summer. I also enjoy video games 👾 and playing music 🎺🎸.
        </p>
        <p>
          Feel free to say hi over on{' '}
          <a href="https://twitter.com/andrew_mcgov">Twitter</a>!
        </p>
      </Page>
    </Layout>
  );
}

export default AboutPage;
