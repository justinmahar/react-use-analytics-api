import React from 'react';
import { Helmet } from 'react-helmet';
import { TRACKING_ID } from './analytics-config';

// See: https://github.com/doczjs/docz/tree/master/core/gatsby-theme-docz#wrapping-the-entire-app

export default ({ children }) => <GoogleAnalytics trackingId={TRACKING_ID}>{children}</GoogleAnalytics>;

function GoogleAnalytics(props) {
  return (
    <>
      {props.trackingId !== 'UA-123456789-1' && (
        <Helmet>
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${props.trackingId}`}></script>
          <script>
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${props.trackingId}');
        `}
          </script>
        </Helmet>
      )}
      {props.children}
    </>
  );
}
