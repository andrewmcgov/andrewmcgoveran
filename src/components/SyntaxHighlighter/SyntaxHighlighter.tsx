import React from 'react';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/dracula';
import styles from './SyntaxHighlighter.module.scss';

import {classNames} from '../../utilities';

export interface SyntaxHighlighterProps {
  children: string;
  language?: Language;
  highlightedLines?: number[];
}

export function SyntaxHighlighter({
  children,
  language = 'jsx',
  highlightedLines,
}: SyntaxHighlighterProps) {
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={nightOwl}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className + ` ${styles.Pre}`} style={style}>
          <code>
            {tokens.map((line, i) => {
              const lineNumber = i + 1;
              const isHighlightedLine =
                highlightedLines && highlightedLines.includes(lineNumber);

              console.log(isHighlightedLine);

              const tokens = line.map((token, key) => (
                <span
                  {...getTokenProps({
                    token,
                    key,
                  })}
                />
              ));

              return (
                <div {...getLineProps({line, key: i, className: styles.Line})}>
                  <span className={styles.LineNumber}>{lineNumber}</span>
                  {isHighlightedLine ? (
                    <span className={styles.HighlightedLine}>{tokens}</span>
                  ) : (
                    tokens
                  )}
                </div>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
