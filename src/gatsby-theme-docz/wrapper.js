import { gaTrackingId } from './analytics-config';
import ReactGA from 'react-ga';

// See: https://github.com/doczjs/docz/tree/master/core/gatsby-theme-docz#wrapping-the-entire-app

let gaInitialized = false;
let lastPageview = undefined;

export default ({ children, doc }) => {
  if (typeof window !== 'undefined') {
    if (!gaInitialized) {
      ReactGA.initialize(gaTrackingId);
      gaInitialized = true;
    }
    // Track page view
    const newPageview = window.location.pathname + window.location.search;
    if (newPageview !== lastPageview) {
      ReactGA.pageview(newPageview);
      lastPageview = newPageview;
    }
  }
  return children;
};
