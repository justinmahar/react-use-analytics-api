import React from 'react';
import { TRACKING_ID } from './analytics-config';
import ReactGA from 'react-ga';

// See: https://github.com/doczjs/docz/tree/master/core/gatsby-theme-docz#wrapping-the-entire-app

let gaInitialized = false;

export default ({ children }) => {
  if (!gaInitialized) {
    ReactGA.initialize(TRACKING_ID);
    gaInitialized = true;
  }
  return children;
};
