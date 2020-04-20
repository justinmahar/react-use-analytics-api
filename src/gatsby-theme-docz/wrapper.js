import React from 'react';
import { themeAdditionsConfig } from './theme-additions-config';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';

// See: https://github.com/doczjs/docz/tree/master/core/gatsby-theme-docz#wrapping-the-entire-app

let gaInitialized = false;
let lastPageview = undefined;

export default ({ children }) => {
  if (typeof window !== 'undefined' && themeAdditionsConfig.gaTrackingId) {
    if (!gaInitialized) {
      ReactGA.initialize(themeAdditionsConfig.gaTrackingId);
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
        <link rel="icon" type="image/x-icon" href={themeAdditionsConfig.faviconUrl} />
      </Helmet>
      {children}
    </>
  );
};