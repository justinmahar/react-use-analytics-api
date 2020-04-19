import React from 'react';
import { customThemeConfig } from './custom-theme-config';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

// See: https://github.com/doczjs/docz/tree/master/core/gatsby-theme-docz#wrapping-the-entire-app

let gaInitialized = false;
let lastPageview = undefined;

export default ({ children }) => {
  if (typeof window !== 'undefined' && customThemeConfig.gaTrackingId) {
    if (!gaInitialized) {
      ReactGA.initialize(customThemeConfig.gaTrackingId);
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
        <link rel="icon" type="image/x-icon" href={customThemeConfig.faviconUrl} />
      </Helmet>
      {children}
    </>
  );
};
