import React from 'react';
import { themeConfig } from './theme-config';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

// See: https://github.com/doczjs/docz/tree/master/core/gatsby-theme-docz#wrapping-the-entire-app

let gaInitialized = false;
let lastPageview = undefined;

export default ({ children, doc }) => {
  if (typeof window !== 'undefined') {
    if (!gaInitialized) {
      ReactGA.initialize(themeConfig.gaTrackingId);
      gaInitialized = true;
    }
    // Track page view
    const newPageview = window.location.pathname + window.location.search;
    if (newPageview !== lastPageview) {
      ReactGA.pageview(newPageview);
      lastPageview = newPageview;
    }
  }
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/x-icon" href={themeConfig.faviconUrl} />
      </Helmet>
      {children}
    </>
  );
};
