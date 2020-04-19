import { DoczFooter } from '@devboldly/react-devboldly-tools';
import { MainContainer as OriginalMainContainer } from 'gatsby-theme-docz/src/components/MainContainer/index';
import React from 'react';
import ReactGA from 'react-ga';

let lastPageview = undefined;

export const MainContainer = ({ children, ...rest }) => {
  // Track page view
  if (typeof window !== 'undefined') {
    const newPageview = window.location.pathname + window.location.search;
    if (newPageview !== lastPageview) {
      ReactGA.pageview(newPageview);
      lastPageview = newPageview;
    }
  }
  console.log('children', children);
  return (
    <OriginalMainContainer {...rest}>
      {children}
      <DoczFooter />
    </OriginalMainContainer>
  );
};
