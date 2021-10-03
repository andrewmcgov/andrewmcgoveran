import React from 'react';
import {MDXProvider} from '@mdx-js/react';

import {SyntaxHighlighter} from './src/components/SyntaxHighlighter';

const components = {
  pre: props => {
    const className = props.children.props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);
    const language =
      matches && matches.groups && matches.groups.lang
        ? matches.groups.lang
        : '';

    const highlightedLines = props.children.props.highlightedLines
      ?.split(',')
      .map(Number);

    return (
      <SyntaxHighlighter
        language={language}
        highlightedLines={highlightedLines}
      >
        {props.children.props.children.trim()}
      </SyntaxHighlighter>
    );
  },
};

export const wrapRootElement = ({element}) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
