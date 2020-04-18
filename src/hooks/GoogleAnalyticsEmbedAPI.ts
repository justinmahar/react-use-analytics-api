import { ReactText } from 'react';

/**
 * Google Analytics Embed API.
 *
 * Refer to the component reference here: https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference
 *
 * Also see: https://developers.google.com/analytics/devguides/reporting/embed
 *
 * This interface is provided as convenience. It is a snapshot of the API from March 2020 and, as such,
 * the actual properties may change over time as Google improves the API.
 */
export interface GoogleAnalyticsEmbedAPI {
  analytics: {
    q: any[];
    ready: (callback: Function) => undefined;
    EventType: {
      SUCCESS: string;
      ERROR: string;
      CHANGE: string;
      SIGNIN: string;
      SIGNOUT: string;
      NEEDS_AUTHORIZATION: string;
    };
    Component: (arg0: any) => any;
    createComponent: (name: string, prototypeMethods: any) => any;
    /**
     * The auth component is a singleton that can be used to authorize a user.
     *
     * See: https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth
     */
    auth: {
      /** See: https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth-options */
      authorize: (options: any) => any;
      signOut: () => any;
      isAuthorized: () => any;
      getAuthResponse: () => any;
      getUserProfile: () => any;
      on: (event: string, handler: Function) => any;
      once: (event: string, handler: Function) => any;
      off: (event: string, handler: Function) => any;
    };
    report: { Data: any };
    metadata: {
      execute: () => any;
      getColumn: (arg0: any) => any;
      isInitialized: () => any;
      on: (event: string, handler: Function) => any;
      once: (event: string, handler: Function) => any;
      off: (event: string, handler: Function) => any;
    };
    ViewSelector: any;
    googleCharts: { DataChart: any };
  };
  load: (arg0: any, arg1: any) => any;
  platform: { go: (arg0: any, arg1: any) => any };
  _pl: boolean;
  additnow: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  backdrop: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  blogger: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  comments: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  commentcount: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  community: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  donation: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  family_creation: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  follow: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  hangout: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  health: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  page: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  partnersbadge: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  person: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  playemm: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  playreview: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  plus: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  plusone: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  post: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  ratingbadge: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  savetoandroidpay: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  savetodrive: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  savetowallet: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  sharetoclassroom: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  shortlists: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  signin2: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  surveyoptin: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  visibility: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  youtube: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  ytsubscribe: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  zoomableimage: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  interactivepost: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  recobar: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  autocomplete: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  profile: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  signin: { go: () => any; render: () => any };
  share: { go: (arg0: any) => any; render: (arg0: any, arg1: any) => any };
  loaded_0: any;
  _: any;
  config: { get: (arg0: any, arg1: any) => any; update: (arg0: any, arg1: any) => any };
  auth2: {
    init: (arg0: any) => any;
    authorize: (arg0: any, arg1: any) => any;
    _gt: () => any;
    enableDebugLogs: (arg0: any) => any;
    getAuthInstance: () => any;
    BasicProfile: (arg0: any) => any;
    GoogleAuth: (arg0: any) => any;
    GoogleUser: (arg0: any) => any;
    LiveValue: (arg0: any) => any;
    SigninOptionsBuilder: (arg0: any) => any;
  };
  widget: { make: (arg0: any) => any };
  auth: {
    authorize: (arg0: any, arg1: any) => any;
    checkSessionState: (arg0: any, arg1: any) => any;
    getAuthHeaderValueForFirstParty: (arg0: any) => any;
    getToken: (arg0: any, arg1: any) => any;
    getVersionInfo: (arg0: any, arg1: any) => any;
    init: (arg0: any) => any;
    setToken: (arg0: any, arg1: any) => any;
    signIn: (arg0: any) => any;
    signOut: () => any;
    unsafeUnpackIdToken: (arg0: any) => any;
    _pimf: (arg0: any, arg1: any) => any;
    _oart: (arg0: any) => any;
    _guss: (arg0: any) => any;
  };
  client: {
    init: (arg0: any) => any;
    load: (arg0: any, arg1: any, arg2: any, arg3: any) => any;
    newBatch: (arg0: any) => any;
    newRpcBatch: () => any;
    newHttpBatch: (arg0: any) => any;
    register: (arg0: any, arg1: any) => any;
    request: (arg0: any, arg1: any) => any;
    rpcRequest: (arg0: any, arg1: any, arg2: any) => any;
    setApiKey: (arg0: any) => any;
    setApiVersions: (arg0: any) => any;
    getToken: (arg0: any) => any;
    setToken: (arg0: any, arg1: any) => any;
    AuthType: { S3: string; NONE: string; p8: string; b6: string; AUTO: string; OAUTH2: string; FIRST_PARTY: string };
    analytics: {
      data: { ga: { get: () => any }; mcf: { get: () => any }; realtime: { get: () => any } };
      WF: {
        servicePath: string;
        parameters: {
          alt: { type: any; description: any; default: any; enum: any; enumDescriptions: any; location: any };
          fields: { type: any; description: any; location: any };
          key: { type: any; description: any; location: any };
          oauth_token: { type: any; description: any; location: any };
          prettyPrint: { type: any; description: any; default: any; location: any };
          quotaUser: { type: any; description: any; location: any };
          userIp: { type: any; description: any; location: any };
        };
        apiId: string;
      };
      management: {
        accountSummaries: { list: () => any };
        accountUserLinks: { delete: () => any; insert: () => any; list: () => any; update: () => any };
        accounts: { list: () => any };
        clientId: { hashClientId: () => any };
        customDataSources: { list: () => any };
        customDimensions: { get: () => any; insert: () => any; list: () => any; patch: () => any; update: () => any };
        customMetrics: { get: () => any; insert: () => any; list: () => any; patch: () => any; update: () => any };
        experiments: {
          delete: () => any;
          get: () => any;
          insert: () => any;
          list: () => any;
          patch: () => any;
          update: () => any;
        };
        filters: {
          delete: () => any;
          get: () => any;
          insert: () => any;
          list: () => any;
          patch: () => any;
          update: () => any;
        };
        goals: { get: () => any; insert: () => any; list: () => any; patch: () => any; update: () => any };
        profileFilterLinks: {
          delete: () => any;
          get: () => any;
          insert: () => any;
          list: () => any;
          patch: () => any;
          update: () => any;
        };
        profileUserLinks: { delete: () => any; insert: () => any; list: () => any; update: () => any };
        profiles: {
          delete: () => any;
          get: () => any;
          insert: () => any;
          list: () => any;
          patch: () => any;
          update: () => any;
        };
        remarketingAudience: {
          delete: () => any;
          get: () => any;
          insert: () => any;
          list: () => any;
          patch: () => any;
          update: () => any;
        };
        segments: { list: () => any };
        unsampledReports: { delete: () => any; get: () => any; insert: () => any; list: () => any };
        uploads: { deleteUploadData: () => any; get: () => any; list: () => any; uploadData: () => any };
        webPropertyAdWordsLinks: {
          delete: () => any;
          get: () => any;
          insert: () => any;
          list: () => any;
          patch: () => any;
          update: () => any;
        };
        webproperties: { get: () => any; insert: () => any; list: () => any; patch: () => any; update: () => any };
        webpropertyUserLinks: { delete: () => any; insert: () => any; list: () => any; update: () => any };
      };
      metadata: { columns: { list: () => any } };
      provisioning: { createAccountTicket: () => any; createAccountTree: () => any };
      userDeletion: { userDeletionRequest: { upsert: () => any } };
    };
  };
  loaded_1: any;
  loaded_2: any;
}

export interface GoogleComponent {
  /** Sets or updates the component's configuration options (this can also be done at creation time in the constructor). */
  set: (options: any) => GoogleComponent;
  /** Returns the current configuration options of a component. */
  get: () => any;
  /** Invokes the component's primary action. This is usually rendering something on the page or running a report (or both). */
  execute: () => GoogleComponent;
  /** Registers a Function to be invoked when the component emits the specified event. */
  on: (event: string, handler: Function) => GoogleComponent;
  /** Registers a Function to be invoked at only the next occurrence of the specified event. After the handler runs once it automatically unregisters itself. */
  once: (event: string, handler: Function) => GoogleComponent;
  /** Removes an event handler from a component. If no handler is passed, it removes all handlers for the passed event. If no event is passed, it removes all handlers for all events. */
  off: (optEvent: string, optHandler: Function) => void;
  /** Emits an event. You may optionally specify the arguments to be passed to any registered handlers. */
  emit: (event: string, ...optArgs: any) => void;
}

/**
 * The Data component allows you to query the Google Analytics Core Reporting API and get back the results.
 *
 * See: https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#data
 */
export type Data = GoogleComponent;

/**
 * DataChart wraps a standard Google chart and a Data component so you can easily create a visualization from a query without having to wire it together yourself.
 *
 * See: https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#datachart
 */
export type DataChart = GoogleComponent;

/**
 * The ViewSelector component allows you to choose your account, property, and view via dropdown menus.
 *
 * See: https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#viewselector
 */
export type ViewSelector = GoogleComponent;

export interface Query {
  /** The unique table ID of the form ga:XXXX, where XXXX is the Analytics view (profile) ID for which the query will retrieve the data. */
  ids: string;
  /**
   * All Analytics data requests must specify a date range. If you do not include `start-date` and `end-date` parameters in the request,
   * the server returns an error. Date values can be for a specific date by using the pattern `YYYY-MM-DD` or relative by using `today`,
   * `yesterday`, or the `NdaysAgo` pattern. Values must match `[0-9]{4}-[0-9]{2}-[0-9]{2}|today|yesterday|[0-9]+(daysAgo)`.
   *
   * The earliest valid `start-date` is `2005-01-01`. There is no upper limit restriction for an `start-date`.
   *
   * Relative dates are always relative to the current date at the time of the query and are based on the timezone of the view (profile)
   * specified in the query.
   */
  'start-date': string;
  /**
   * All Analytics data requests must specify a date range. If you do not include `start-date` and `end-date` parameters in the request,
   * the server returns an error. Date values can be for a specific date by using the pattern `YYYY-MM-DD` or relative by using `today`,
   * `yesterday`, or the `NdaysAgo` pattern. Values must match `[0-9]{4}-[0-9]{2}-[0-9]{2}|today|yesterday|[0-9]+(daysAgo)`.
   *
   * The earliest valid `end-date` is `2005-01-01`. There is no upper limit restriction for an `end-date`.
   *
   * Relative dates are always relative to the current date at the time of the query and are based on the timezone of the view (profile)
   * specified in the query.
   */
  'end-date': string;
  /**
   * A list of comma-separated metrics, such as `ga:sessions,ga:bounces`.
   *
   *  Metrics from the [Dimensions and Metrics Explorer](https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/):
   * - `ga:users`: Users
   * - `ga:newUsers`: New Users
   * - `ga:percentNewSessions`: % New Sessions
   * - `ga:1dayUsers`: 1 Day Active Users
   * - `ga:7dayUsers`: 7 Day Active Users
   * - `ga:14dayUsers`: 14 Day Active Users
   * - `ga:28dayUsers`: 28 Day Active Users
   * - `ga:30dayUsers`: 30 Day Active Users
   * - `ga:sessionsPerUser`: Number of Sessions per User
   * - `ga:sessions`: Sessions
   * - `ga:bounces`: Bounces
   * - `ga:bounceRate`: Bounce Rate
   * - `ga:sessionDuration`: Session Duration
   * - `ga:avgSessionDuration`: Avg. Session Duration
   * - `ga:uniqueDimensionCombinations`: Unique Dimension Combinations
   * - `ga:hits`: Hits
   * - `ga:organicSearches`: Organic Searches
   * - `ga:impressions`: Impressions
   * - `ga:adClicks`: Clicks
   * - `ga:adCost`: Cost
   * - `ga:CPM`: CPM
   * - `ga:CPC`: CPC
   * - `ga:CTR`: CTR
   * - `ga:costPerTransaction`: Cost per Transaction
   * - `ga:costPerGoalConversion`: Cost per Goal Conversion
   * - `ga:costPerConversion`: Cost per Conversion
   * - `ga:RPC`: RPC
   * - `ga:ROAS`: ROAS
   * - `ga:goalXXStarts`: Goal XX Starts
   * - `ga:goalStartsAll`: Goal Starts
   * - `ga:goalXXCompletions`: Goal XX Completions
   * - `ga:goalCompletionsAll`: Goal Completions
   * - `ga:goalXXValue`: Goal XX Value
   * - `ga:goalValueAll`: Goal Value
   * - `ga:goalValuePerSession`: Per Session Goal Value
   * - `ga:goalXXConversionRate`: Goal XX Conversion Rate
   * - `ga:goalConversionRateAll`: Goal Conversion Rate
   * - `ga:goalXXAbandons`: Goal XX Abandoned Funnels
   * - `ga:goalAbandonsAll`: Abandoned Funnels
   * - `ga:goalXXAbandonRate`: Goal XX Abandonment Rate
   * - `ga:goalAbandonRateAll`: Total Abandonment Rate
   * - `ga:pageValue`: Page Value
   * - `ga:entrances`: Entrances
   * - `ga:entranceRate`: Entrances / Pageviews
   * - `ga:pageviews`: Pageviews
   * - `ga:pageviewsPerSession`: Pages / Session
   * - `ga:uniquePageviews`: Unique Pageviews
   * - `ga:timeOnPage`: Time on Page
   * - `ga:avgTimeOnPage`: Avg. Time on Page
   * - `ga:exits`: Exits
   * - `ga:exitRate`: % Exit
   * - `ga:contentGroupUniqueViewsXX`: Unique Views XX
   * - `ga:searchResultViews`: Results Pageviews
   * - `ga:searchUniques`: Total Unique Searches
   * - `ga:avgSearchResultViews`: Results Pageviews / Search
   * - `ga:searchSessions`: Sessions with Search
   * - `ga:percentSessionsWithSearch`: % Sessions with Search
   * - `ga:searchDepth`: Search Depth
   * - `ga:avgSearchDepth`: Avg. Search Depth
   * - `ga:searchRefinements`: Search Refinements
   * - `ga:percentSearchRefinements`: % Search Refinements
   * - `ga:searchDuration`: Time after Search
   * - `ga:avgSearchDuration`: Time after Search
   * - `ga:searchExits`: Search Exits
   * - `ga:searchExitRate`: % Search Exits
   * - `ga:searchGoalXXConversionRate`: Site Search Goal XX Conversion Rate
   * - `ga:searchGoalConversionRateAll`: Site Search Goal Conversion Rate
   * - `ga:goalValueAllPerSearch`: Per Search Goal Value
   * - `ga:pageLoadTime`: Page Load Time (ms)
   * - `ga:pageLoadSample`: Page Load Sample
   * - `ga:avgPageLoadTime`: Avg. Page Load Time (sec)
   * - `ga:domainLookupTime`: Domain Lookup Time (ms)
   * - `ga:avgDomainLookupTime`: Avg. Domain Lookup Time (sec)
   * - `ga:pageDownloadTime`: Page Download Time (ms)
   * - `ga:avgPageDownloadTime`: Avg. Page Download Time (sec)
   * - `ga:redirectionTime`: Redirection Time (ms)
   * - `ga:avgRedirectionTime`: Avg. Redirection Time (sec)
   * - `ga:serverConnectionTime`: Server Connection Time (ms)
   * - `ga:avgServerConnectionTime`: Avg. Server Connection Time (sec)
   * - `ga:serverResponseTime`: Server Response Time (ms)
   * - `ga:avgServerResponseTime`: Avg. Server Response Time (sec)
   * - `ga:speedMetricsSample`: Speed Metrics Sample
   * - `ga:domInteractiveTime`: Document Interactive Time (ms)
   * - `ga:avgDomInteractiveTime`: Avg. Document Interactive Time (sec)
   * - `ga:domContentLoadedTime`: Document Content Loaded Time (ms)
   * - `ga:avgDomContentLoadedTime`: Avg. Document Content Loaded Time (sec)
   * - `ga:domLatencyMetricsSample`: DOM Latency Metrics Sample
   * - `ga:screenviews`: Screen Views
   * - `ga:uniqueScreenviews`: Unique Screen Views
   * - `ga:screenviewsPerSession`: Screens / Session
   * - `ga:timeOnScreen`: Time on Screen
   * - `ga:avgScreenviewDuration`: Avg. Time on Screen
   * - `ga:totalEvents`: Total Events
   * - `ga:uniqueEvents`: Unique Events
   * - `ga:eventValue`: Event Value
   * - `ga:avgEventValue`: Avg. Value
   * - `ga:sessionsWithEvent`: Sessions with Event
   * - `ga:eventsPerSessionWithEvent`: Events / Session with Event
   * - `ga:transactions`: Transactions
   * - `ga:transactionsPerSession`: Ecommerce Conversion Rate
   * - `ga:transactionRevenue`: Revenue
   * - `ga:revenuePerTransaction`: Avg. Order Value
   * - `ga:transactionRevenuePerSession`: Per Session Value
   * - `ga:transactionShipping`: Shipping
   * - `ga:transactionTax`: Tax
   * - `ga:totalValue`: Total Value
   * - `ga:itemQuantity`: Quantity
   * - `ga:uniquePurchases`: Unique Purchases
   * - `ga:revenuePerItem`: Avg. Price
   * - `ga:itemRevenue`: Product Revenue
   * - `ga:itemsPerPurchase`: Avg. QTY
   * - `ga:localTransactionRevenue`: Local Revenue
   * - `ga:localTransactionShipping`: Local Shipping
   * - `ga:localTransactionTax`: Local Tax
   * - `ga:localItemRevenue`: Local Product Revenue
   * - `ga:buyToDetailRate`: Buy-to-Detail Rate
   * - `ga:cartToDetailRate`: Cart-to-Detail Rate
   * - `ga:internalPromotionCTR`: Internal Promotion CTR
   * - `ga:internalPromotionClicks`: Internal Promotion Clicks
   * - `ga:internalPromotionViews`: Internal Promotion Views
   * - `ga:localProductRefundAmount`: Local Product Refund Amount
   * - `ga:localRefundAmount`: Local Refund Amount
   * - `ga:productAddsToCart`: Product Adds To Cart
   * - `ga:productCheckouts`: Product Checkouts
   * - `ga:productDetailViews`: Product Detail Views
   * - `ga:productListCTR`: Product List CTR
   * - `ga:productListClicks`: Product List Clicks
   * - `ga:productListViews`: Product List Views
   * - `ga:productRefundAmount`: Product Refund Amount
   * - `ga:productRefunds`: Product Refunds
   * - `ga:productRemovesFromCart`: Product Removes From Cart
   * - `ga:productRevenuePerPurchase`: Product Revenue per Purchase
   * - `ga:quantityAddedToCart`: Quantity Added To Cart
   * - `ga:quantityCheckedOut`: Quantity Checked Out
   * - `ga:quantityRefunded`: Quantity Refunded
   * - `ga:quantityRemovedFromCart`: Quantity Removed From Cart
   * - `ga:refundAmount`: Refund Amount
   * - `ga:revenuePerUser`: Revenue per User
   * - `ga:totalRefunds`: Refunds
   * - `ga:transactionsPerUser`: Transactions per User
   * - `ga:socialInteractions`: Social Actions
   * - `ga:uniqueSocialInteractions`: Unique Social Actions
   * - `ga:socialInteractionsPerSession`: Actions Per Social Session
   * - `ga:userTimingValue`: User Timing (ms)
   * - `ga:userTimingSample`: User Timing Sample
   * - `ga:avgUserTimingValue`: Avg. User Timing (sec)
   * - `ga:exceptions`: Exceptions
   * - `ga:exceptionsPerScreenview`: Exceptions / Screen
   * - `ga:fatalExceptions`: Crashes
   * - `ga:fatalExceptionsPerScreenview`: Crashes / Screen
   * - `ga:metricXX`: Custom Metric XX Value
   * - `ga:calcMetric_<NAME>`: Calculated Metric
   * - `ga:dcmFloodlightQuantity`: CM Conversions
   * - `ga:dcmFloodlightRevenue`: CM Revenue
   * - `ga:dcmCPC`: CM CPC
   * - `ga:dcmCTR`: CM CTR
   * - `ga:dcmClicks`: CM Clicks
   * - `ga:dcmCost`: CM Cost
   * - `ga:dcmImpressions`: CM Impressions
   * - `ga:dcmROAS`: CM ROAS
   * - `ga:dcmRPC`: CM RPC
   * - `ga:adsenseRevenue`: AdSense Revenue
   * - `ga:adsenseAdUnitsViewed`: AdSense Ad Units Viewed
   * - `ga:adsenseAdsViewed`: AdSense Impressions
   * - `ga:adsenseAdsClicks`: AdSense Ads Clicked
   * - `ga:adsensePageImpressions`: AdSense Page Impressions
   * - `ga:adsenseCTR`: AdSense CTR
   * - `ga:adsenseECPM`: AdSense eCPM
   * - `ga:adsenseExits`: AdSense Exits
   * - `ga:adsenseViewableImpressionPercent`: AdSense Viewable Impression %
   * - `ga:adsenseCoverage`: AdSense Coverage
   * - `ga:totalPublisherImpressions`: Publisher Impressions
   * - `ga:totalPublisherCoverage`: Publisher Coverage
   * - `ga:totalPublisherMonetizedPageviews`: Publisher Monetized Pageviews
   * - `ga:totalPublisherImpressionsPerSession`: Publisher Impressions / Session
   * - `ga:totalPublisherViewableImpressionsPercent`: Publisher Viewable Impressions %
   * - `ga:totalPublisherClicks`: Publisher Clicks
   * - `ga:totalPublisherCTR`: Publisher CTR
   * - `ga:totalPublisherRevenue`: Publisher Revenue
   * - `ga:totalPublisherRevenuePer1000Sessions`: Publisher Revenue / 1000 Sessions
   * - `ga:totalPublisherECPM`: Publisher eCPM
   * - `ga:adxImpressions`: AdX Impressions
   * - `ga:adxCoverage`: AdX Coverage
   * - `ga:adxMonetizedPageviews`: AdX Monetized Pageviews
   * - `ga:adxImpressionsPerSession`: AdX Impressions / Session
   * - `ga:adxViewableImpressionsPercent`: AdX Viewable Impressions %
   * - `ga:adxClicks`: AdX Clicks
   * - `ga:adxCTR`: AdX CTR
   * - `ga:adxRevenue`: AdX Revenue
   * - `ga:adxRevenuePer1000Sessions`: AdX Revenue / 1000 Sessions
   * - `ga:adxECPM`: AdX eCPM
   * - `ga:backfillImpressions`: GAM Backfill Impressions
   * - `ga:backfillCoverage`: GAM Backfill Coverage
   * - `ga:backfillMonetizedPageviews`: GAM Backfill Monetized Pageviews
   * - `ga:backfillImpressionsPerSession`: GAM Backfill Impressions / Session
   * - `ga:backfillViewableImpressionsPercent`: GAM Backfill Viewable Impressions %
   * - `ga:backfillClicks`: GAM Backfill Clicks
   * - `ga:backfillCTR`: GAM Backfill CTR
   * - `ga:backfillRevenue`: GAM Backfill Revenue
   * - `ga:backfillRevenuePer1000Sessions`: GAM Backfill Revenue / 1000 Sessions
   * - `ga:backfillECPM`: GAM Backfill eCPM
   * - `ga:dfpImpressions`: GAM Impressions
   * - `ga:dfpCoverage`: GAM Coverage
   * - `ga:dfpMonetizedPageviews`: GAM Monetized Pageviews
   * - `ga:dfpImpressionsPerSession`: GAM Impressions / Session
   * - `ga:dfpViewableImpressionsPercent`: GAM Viewable Impressions %
   * - `ga:dfpClicks`: GAM Clicks
   * - `ga:dfpCTR`: GAM CTR
   * - `ga:dfpRevenue`: GAM Revenue
   * - `ga:dfpRevenuePer1000Sessions`: GAM Revenue / 1000 Sessions
   * - `ga:dfpECPM`: GAM eCPM
   * - `ga:cohortActiveUsers`: Users
   * - `ga:cohortAppviewsPerUser`: Appviews per User
   * - `ga:cohortAppviewsPerUserWithLifetimeCriteria`: Appviews Per User (LTV)
   * - `ga:cohortGoalCompletionsPerUser`: Goal Completions per User
   * - `ga:cohortGoalCompletionsPerUserWithLifetimeCriteria`: Goal Completions Per User (LTV)
   * - `ga:cohortPageviewsPerUser`: Pageviews per User
   * - `ga:cohortPageviewsPerUserWithLifetimeCriteria`: Pageviews Per User (LTV)
   * - `ga:cohortRetentionRate`: User Retention
   * - `ga:cohortRevenuePerUser`: Revenue per User
   * - `ga:cohortRevenuePerUserWithLifetimeCriteria`: Revenue Per User (LTV)
   * - `ga:cohortSessionDurationPerUser`: Session Duration per User
   * - `ga:cohortSessionDurationPerUserWithLifetimeCriteria`: Session Duration Per User (LTV)
   * - `ga:cohortSessionsPerUser`: Sessions per User
   * - `ga:cohortSessionsPerUserWithLifetimeCriteria`: Sessions Per User (LTV)
   * - `ga:cohortTotalUsers`: Total Users
   * - `ga:cohortTotalUsersWithLifetimeCriteria`: Users
   * - `ga:dbmCPA`: DV360 eCPA
   * - `ga:dbmCPC`: DV360 eCPC
   * - `ga:dbmCPM`: DV360 eCPM
   * - `ga:dbmCTR`: DV360 CTR
   * - `ga:dbmClicks`: DV360 Clicks
   * - `ga:dbmConversions`: DV360 Conversions
   * - `ga:dbmCost`: DV360 Cost
   * - `ga:dbmImpressions`: DV360 Impressions
   * - `ga:dbmROAS`: DV360 ROAS
   * - `ga:dsCPC`: SA360 CPC
   * - `ga:dsCTR`: SA360 CTR
   * - `ga:dsClicks`: SA360 Clicks
   * - `ga:dsCost`: SA360 Cost
   * - `ga:dsImpressions`: SA360 Impressions
   * - `ga:dsProfit`: SA360 Profit
   * - `ga:dsReturnOnAdSpend`: SA360 ROAS
   * - `ga:dsRevenuePerClick`;: SA360 RPC
   */
  metrics: string;
  /**
   * Optional. A list of comma-separated dimensions for your Analytics data, such as `ga:browser,ga:city`.
   *
   * Dimensions from the [Dimensions and Metrics Explorer](https://ga-dev-tools.appspot.com/dimensions-metrics-explorer/):
   * - `ga:userType`: User Type
   * - `ga:sessionCount`: Count of Sessions
   * - `ga:daysSinceLastSession`: Days Since Last Session
   * - `ga:userDefinedValue`: User Defined Value
   * - `ga:userBucket`: User Bucket
   * - `ga:sessionDurationBucket`: Session Duration
   * - `ga:referralPath`: Referral Path
   * - `ga:fullReferrer`: Full Referrer
   * - `ga:campaign`: Campaign
   * - `ga:source`: Source
   * - `ga:medium`: Medium
   * - `ga:sourceMedium`: Source / Medium
   * - `ga:keyword`: Keyword
   * - `ga:adContent`: Ad Content
   * - `ga:socialNetwork`: Social Network
   * - `ga:hasSocialSourceReferral`: Social Source Referral
   * - `ga:campaignCode`: Campaign Code| "ga:adGroup": | - "Google Ads: Ad Group"| "ga:adSlot": | - "Google Ads: Ad Slot"
   * - `ga:adDistributionNetwork`: Ad Distribution Network
   * - `ga:adMatchType`: Query Match Type
   * - `ga:adKeywordMatchType`: Keyword Match Type
   * - `ga:adMatchedQuery`: Search Query
   * - `ga:adPlacementDomain`: Placement Domain
   * - `ga:adPlacementUrl`: Placement URL
   * - `ga:adFormat`: Ad Format
   * - `ga:adTargetingType`: Targeting Type
   * - `ga:adTargetingOption`: Placement Type
   * - `ga:adDisplayUrl`: Display URL
   * - `ga:adDestinationUrl`: Destination URL
   * - `ga:adwordsCustomerID`: Google Ads Customer ID
   * - `ga:adwordsCampaignID`: Google Ads Campaign ID
   * - `ga:adwordsAdGroupID`: Google Ads Ad Group ID
   * - `ga:adwordsCreativeID`: Google Ads Creative ID
   * - `ga:adwordsCriteriaID`: Google Ads Criteria ID
   * - `ga:adQueryWordCount`: Query Word Count
   * - `ga:isTrueViewVideoAd`: TrueView Video Ad
   * - `ga:goalCompletionLocation`: Goal Completion Location
   * - `ga:goalPreviousStep1`: Goal Previous Step - 1
   * - `ga:goalPreviousStep2`: Goal Previous Step - 2
   * - `ga:goalPreviousStep3`: Goal Previous Step - 3
   * - `ga:browser`: Browser
   * - `ga:browserVersion`: Browser Version
   * - `ga:operatingSystem`: Operating System
   * - `ga:operatingSystemVersion`: Operating System Version
   * - `ga:mobileDeviceBranding`: Mobile Device Branding
   * - `ga:mobileDeviceModel`: Mobile Device Model
   * - `ga:mobileInputSelector`: Mobile Input Selector
   * - `ga:mobileDeviceInfo`: Mobile Device Info
   * - `ga:mobileDeviceMarketingName`: Mobile Device Marketing Name
   * - `ga:deviceCategory`: Device Category
   * - `ga:browserSize`: Browser Size
   * - `ga:dataSource`: Data Source
   * - `ga:continent`: Continent
   * - `ga:subContinent`: Sub Continent
   * - `ga:country`: Country
   * - `ga:region`: Region
   * - `ga:metro`: Metro
   * - `ga:city`: City
   * - `ga:latitude`: Latitude
   * - `ga:longitude`: Longitude
   * - `ga:networkDomain`: Network Domain
   * - `ga:networkLocation`: Service Provider
   * - `ga:cityId`: City ID
   * - `ga:continentId`: Continent ID
   * - `ga:countryIsoCode`: Country ISO Code
   * - `ga:metroId`: Metro Id
   * - `ga:regionId`: Region ID
   * - `ga:regionIsoCode`: Region ISO Code
   * - `ga:subContinentCode`: Sub Continent Code
   * - `ga:flashVersion`: Flash Version
   * - `ga:javaEnabled`: Java Support
   * - `ga:language`: Language
   * - `ga:screenColors`: Screen Colors
   * - `ga:sourcePropertyDisplayName`: Source Property Display Name
   * - `ga:sourcePropertyTrackingId`: Source Property Tracking ID
   * - `ga:screenResolution`: Screen Resolution
   * - `ga:hostname`: Hostname
   * - `ga:pagePath`: Page
   * - `ga:pagePathLevel1`: Page path level 1
   * - `ga:pagePathLevel2`: Page path level 2
   * - `ga:pagePathLevel3`: Page path level 3
   * - `ga:pagePathLevel4`: Page path level 4
   * - `ga:pageTitle`: Page Title
   * - `ga:landingPagePath`: Landing Page
   * - `ga:secondPagePath`: Second Page
   * - `ga:exitPagePath`: Exit Page
   * - `ga:previousPagePath`: Previous Page Path
   * - `ga:pageDepth`: Page Depth
   * - `ga:landingContentGroupXX`: Landing Page Group XX
   * - `ga:previousContentGroupXX`: Previous Page Group XX
   * - `ga:contentGroupXX`: Page Group XX
   * - `ga:searchUsed`: Site Search Status
   * - `ga:searchKeyword`: Search Term
   * - `ga:searchKeywordRefinement`: Refined Keyword
   * - `ga:searchCategory`: Site Search Category
   * - `ga:searchStartPage`: Start Page
   * - `ga:searchDestinationPage`: Destination Page
   * - `ga:searchAfterDestinationPage`: Search Destination Page
   * - `ga:appInstallerId`: App Installer ID
   * - `ga:appVersion`: App Version
   * - `ga:appName`: App Name
   * - `ga:appId`: App ID
   * - `ga:screenName`: Screen Name
   * - `ga:screenDepth`: Screen Depth
   * - `ga:landingScreenName`: Landing Screen
   * - `ga:exitScreenName`: Exit Screen
   * - `ga:eventCategory`: Event Category
   * - `ga:eventAction`: Event Action
   * - `ga:eventLabel`: Event Label
   * - `ga:transactionId`: Transaction ID
   * - `ga:affiliation`: Affiliation
   * - `ga:sessionsToTransaction`: Sessions to Transaction
   * - `ga:daysToTransaction`: Days to Transaction
   * - `ga:productSku`: Product SKU
   * - `ga:productName`: Product
   * - `ga:productCategory`: Product Category
   * - `ga:currencyCode`: Currency Code
   * - `ga:checkoutOptions`: Checkout Options
   * - `ga:internalPromotionCreative`: Internal Promotion Creative
   * - `ga:internalPromotionId`: Internal Promotion ID
   * - `ga:internalPromotionName`: Internal Promotion Name
   * - `ga:internalPromotionPosition`: Internal Promotion Position
   * - `ga:orderCouponCode`: Order Coupon Code
   * - `ga:productBrand`: Product Brand
   * - `ga:productCategoryHierarchy`: Product Category (Enhanced Ecommerce)
   * - `ga:productCategoryLevelXX`: Product Category Level XX
   * - `ga:productCouponCode`: Product Coupon Code
   * - `ga:productListName`: Product List Name
   * - `ga:productListPosition`: Product List Position
   * - `ga:productVariant`: Product Variant
   * - `ga:shoppingStage`: Shopping Stage
   * - `ga:socialInteractionNetwork`: Social Network
   * - `ga:socialInteractionAction`: Social Action
   * - `ga:socialInteractionNetworkAction`: Social Network and Action (Hit)
   * - `ga:socialInteractionTarget`: Social Entity
   * - `ga:socialEngagementType`: Social Type
   * - `ga:userTimingCategory`: Timing Category
   * - `ga:userTimingLabel`: Timing Label
   * - `ga:userTimingVariable`: Timing Variable
   * - `ga:exceptionDescription`: Exception Description
   * - `ga:experimentId`: Experiment ID
   * - `ga:experimentVariant`: Variant
   * - `ga:experimentCombination`: Experiment ID with Variant
   * - `ga:experimentName`: Experiment Name
   * - `ga:dimensionXX`: Custom Dimension XX
   * - `ga:customVarNameXX`: Custom Variable (Key XX)
   * - `ga:customVarValueXX`: Custom Variable (Value XX)
   * - `ga:date`: Date
   * - `ga:year`: Year
   * - `ga:month`: Month of the year
   * - `ga:week`: Week of the Year
   * - `ga:day`: Day of the month
   * - `ga:hour`: Hour
   * - `ga:minute`: Minute
   * - `ga:nthMonth`: Month Index
   * - `ga:nthWeek`: Week Index
   * - `ga:nthDay`: Day Index
   * - `ga:nthMinute`: Minute Index
   * - `ga:dayOfWeek`: Day of Week
   * - `ga:dayOfWeekName`: Day of Week Name
   * - `ga:dateHour`: Hour of Day
   * - `ga:dateHourMinute`: Date Hour and Minute
   * - `ga:yearMonth`: Month of Year
   * - `ga:yearWeek`: Week of Year
   * - `ga:isoWeek`: ISO Week of the Year
   * - `ga:isoYear`: ISO Year
   * - `ga:isoYearIsoWeek`: ISO Week of ISO Year
   * - `ga:nthHour`: Hour Index
   * - `ga:dcmClickAd`: CM Ad (GA Model)
   * - `ga:dcmClickAdId`: CM Ad ID (GA Model)
   * - `ga:dcmClickAdType`: CM Ad Type (GA Model)
   * - `ga:dcmClickAdTypeId`: CM Ad Type ID
   * - `ga:dcmClickAdvertiser`: CM Advertiser (GA Model)
   * - `ga:dcmClickAdvertiserId`: CM Advertiser ID (GA Model)
   * - `ga:dcmClickCampaign`: CM Campaign (GA Model)
   * - `ga:dcmClickCampaignId`: CM Campaign ID (GA Model)
   * - `ga:dcmClickCreativeId`: CM Creative ID (GA Model)
   * - `ga:dcmClickCreative`: CM Creative (GA Model)
   * - `ga:dcmClickRenderingId`: CM Rendering ID (GA Model)
   * - `ga:dcmClickCreativeType`: CM Creative Type (GA Model)
   * - `ga:dcmClickCreativeTypeId`: CM Creative Type ID (GA Model)
   * - `ga:dcmClickCreativeVersion`: CM Creative Version (GA Model)
   * - `ga:dcmClickSite`: CM Site (GA Model)
   * - `ga:dcmClickSiteId`: CM Site ID (GA Model)
   * - `ga:dcmClickSitePlacement`: CM Placement (GA Model)
   * - `ga:dcmClickSitePlacementId`: CM Placement ID (GA Model)
   * - `ga:dcmClickSpotId`: CM Floodlight Configuration ID (GA Model)
   * - `ga:dcmFloodlightActivity`: CM Activity
   * - `ga:dcmFloodlightActivityAndGroup`: CM Activity and Group
   * - `ga:dcmFloodlightActivityGroup`: CM Activity Group
   * - `ga:dcmFloodlightActivityGroupId`: CM Activity Group ID
   * - `ga:dcmFloodlightActivityId`: CM Activity ID
   * - `ga:dcmFloodlightAdvertiserId`: CM Advertiser ID
   * - `ga:dcmFloodlightSpotId`: CM Floodlight Configuration ID
   * - `ga:dcmLastEventAd`: CM Ad
   * - `ga:dcmLastEventAdId`: CM Ad ID (CM Model)
   * - `ga:dcmLastEventAdType`: CM Ad Type (CM Model)
   * - `ga:dcmLastEventAdTypeId`: CM Ad Type ID (CM Model)
   * - `ga:dcmLastEventAdvertiser`: CM Advertiser (CM Model)
   * - `ga:dcmLastEventAdvertiserId`: CM Advertiser ID (CM Model)
   * - `ga:dcmLastEventAttributionType`: CM Attribution Type (CM Model)
   * - `ga:dcmLastEventCampaign`: CM Campaign (CM Model)
   * - `ga:dcmLastEventCampaignId`: CM Campaign ID (CM Model)
   * - `ga:dcmLastEventCreativeId`: CM Creative ID (CM Model)
   * - `ga:dcmLastEventCreative`: CM Creative (CM Model)
   * - `ga:dcmLastEventRenderingId`: CM Rendering ID (CM Model)
   * - `ga:dcmLastEventCreativeType`: CM Creative Type (CM Model)
   * - `ga:dcmLastEventCreativeTypeId`: CM Creative Type ID (CM Model)
   * - `ga:dcmLastEventCreativeVersion`: CM Creative Version (CM Model)
   * - `ga:dcmLastEventSite`: CM Site (CM Model)
   * - `ga:dcmLastEventSiteId`: CM Site ID (CM Model)
   * - `ga:dcmLastEventSitePlacement`: CM Placement (CM Model)
   * - `ga:dcmLastEventSitePlacementId`: CM Placement ID (CM Model)
   * - `ga:dcmLastEventSpotId`: CM Floodlight Configuration ID (CM Model)
   * - `ga:userAgeBracket`: Age
   * - `ga:userGender`: Gender
   * - `ga:interestOtherCategory`: Other Category
   * - `ga:interestAffinityCategory`: Affinity Category (reach)
   * - `ga:interestInMarketCategory`: In-Market Segment
   * - `ga:dfpLineItemId`: GAM Line Item Id
   * - `ga:dfpLineItemName`: GAM Line Item Name
   * - `ga:acquisitionCampaign`: Acquisition Campaign
   * - `ga:acquisitionMedium`: Acquisition Medium
   * - `ga:acquisitionSource`: Acquisition Source
   * - `ga:acquisitionSourceMedium`: Acquisition Source / Medium
   * - `ga:acquisitionTrafficChannel`: Acquisition Channel
   * - `ga:cohort`: Cohort
   * - `ga:cohortNthDay`: Day
   * - `ga:cohortNthMonth`: Month
   * - `ga:cohortNthWeek`: Week
   * - `ga:channelGrouping`: Default Channel Grouping
   * - `ga:dbmClickAdvertiser`: DV360 Advertiser (GA Model)
   * - `ga:dbmClickAdvertiserId`: DV360 Advertiser ID (GA Model)
   * - `ga:dbmClickCreativeId`: DV360 Creative ID (GA Model)
   * - `ga:dbmClickExchange`: DV360 Exchange (GA Model)
   * - `ga:dbmClickExchangeId`: DV360 Exchange ID (GA Model)
   * - `ga:dbmClickInsertionOrder`: DV360 Insertion Order (GA Model)
   * - `ga:dbmClickInsertionOrderId`: DV360 Insertion Order ID (GA Model)
   * - `ga:dbmClickLineItem`: DV360 Line Item NAME (GA Model)
   * - `ga:dbmClickLineItemId`: DV360 Line Item ID (GA Model)
   * - `ga:dbmClickSite`: DV360 Site (GA Model)
   * - `ga:dbmClickSiteId`: DV360 Site ID (GA Model)
   * - `ga:dbmLastEventAdvertiser`: DV360 Advertiser (CM Model)
   * - `ga:dbmLastEventAdvertiserId`: DV360 Advertiser ID (CM Model)
   * - `ga:dbmLastEventCreativeId`: DV360 Creative ID (CM Model)
   * - `ga:dbmLastEventExchange`: DV360 Exchange (CM Model)
   * - `ga:dbmLastEventExchangeId`: DV360 Exchange ID (CM Model)
   * - `ga:dbmLastEventInsertionOrder`: DV360 Insertion Order (CM Model)
   * - `ga:dbmLastEventInsertionOrderId`: DV360 Insertion Order ID (CM Model)
   * - `ga:dbmLastEventLineItem`: DV360 Line Item (CM Model)
   * - `ga:dbmLastEventLineItemId`: DV360 Line Item ID (CM Model)
   * - `ga:dbmLastEventSite`: DV360 Site (CM Model)
   * - `ga:dbmLastEventSiteId`: DV360 Site ID (CM Model)
   * - `ga:dsAdGroup`: SA360 Ad Group
   * - `ga:dsAdGroupId`: SA360 Ad Group ID
   * - `ga:dsAdvertiser`: SA360 Advertiser
   * - `ga:dsAdvertiserId`: SA360 Advertiser ID
   * - `ga:dsAgency`: SA360 Agency
   * - `ga:dsAgencyId`: SA360 Agency ID
   * - `ga:dsCampaign`: SA360 Campaign
   * - `ga:dsCampaignId`: SA360 Campaign ID
   * - `ga:dsEngineAccount`: SA360 Engine Account
   * - `ga:dsEngineAccountId`: SA360 Engine Account ID
   * - `ga:dsKeyword`: SA360 Keyword
   * - `ga:dsKeywordId`;: SA360 Keyword ID
   */
  dimensions?: string;
  /** Optional. A list of comma-separated dimensions and metrics indicating the sorting order and sorting direction for the returned data. */
  sort?: string;
  /** Optional. Dimension or metric filters that restrict the data returned for your request. */
  filters?: string;
  /** Optional. Segments the data returned for your request. */
  segment?: string;
  /**
   * Optional. The desired sampling level. Allowed Values:
   * - DEFAULT — Returns response with a sample size that balances speed and accuracy.
   * - FASTER — Returns a fast response with a smaller sample size.
   * - HIGHER_PRECISION — Returns a more accurate response using a large sample size, but this may result in the response being slower.
   */
  samplingLevel?: string;
  /** Optional. Defaults to true; if set to false, rows where all metric values are zero will be omitted from the response. */
  'include-empty-rows'?: boolean;
  /** Optional. The first row of data to retrieve, starting at 1. Use this parameter as a pagination mechanism along with the max-results parameter. */
  'start-index'?: number;
  /** Optional. The maximum number of rows to include in the response. */
  'max-results'?: number;
  /** Optional. The desired output type for the Analytics data returned in the response. Acceptable values are json and dataTable. Default: json. */
  output?: string;
  /** Optional. Selector specifying a subset of fields to include in the response. */
  fields?: string;
  /** Optional. Returns response with indentations and line breaks. Default false. */
  prettyPrint?: string;
  /** Optional. Specifies IP address of the end user for whom the API call is being made. Used to cap usage per IP. */
  userIp?: string;
  /** Optional. Alternative to userIp in cases when the user's IP address is unknown. */
  quotaUser?: string;
  /** Optional. One possible way to provide an OAuth 2.0 token. */
  access_token?: string;
  /** Optional. Name of the JavaScript callback Function that handles the response. Used in JavaScript JSON-P requests. */
  callback?: string;
  /** Optional. Used for OAuth 1.0a authorization to specify your application to get quota. For example: key=AldefliuhSFADSfasdfasdfASdf. */
  key?: string;
}

export interface Chart {
  /** ID of the DOM element to inject with the chart view. */
  container: string;

  /**
   * The type of chart. Refer to the [chart gallery](https://developers.google.com/chart/interactive/docs/gallery).
   * - `"LINE"` - [Line Chart](https://developers.google.com/chart/interactive/docs/gallery/linechart)
   * - `"COLUMN"` - [Column Chart](https://developers.google.com/chart/interactive/docs/gallery/columnchart)
   * - `"BAR"` - [Bar Chart](https://developers.google.com/chart/interactive/docs/gallery/barchart)
   * - `"TABLE"` - [Table Chart](https://developers.google.com/chart/interactive/docs/gallery/table)
   * - `"GEO"` - [Geo Chart](https://developers.google.com/chart/interactive/docs/gallery/geochart)
   * - `"PIE"` - [Pie Chart](https://developers.google.com/chart/interactive/docs/gallery/piechart)
   */
  type: 'LINE' | 'COLUMN' | 'BAR' | 'TABLE' | 'GEO' | 'PIE';

  /**
   * Options for the chart type you're using. Refer to the [chart gallery](https://developers.google.com/chart/interactive/docs/gallery).
   *
   * - [`LINE` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/linechart#configuration-options)
   * - [`COLUMN` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/columnchart#configuration-options)
   * - [`BAR` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/barchart#configuration-options)
   * - [`TABLE` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/table#configuration-options)
   * - [`GEO` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options)
   * - [`PIE` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options)
   */
  options:
    | LineChartOptions
    | ColumnChartOptions
    | BarChartOptions
    | TableChartOptions
    | GeoChartOptions
    | PieChartOptions;
}

/** [`BAR` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/barchart#configuration-options) */
export interface BarChartOptions {
  'animation.duration'?: number;
  'animation.easing'?: string;
  'animation.startup'?: boolean;
  'annotations.alwaysOutside'?: boolean;
  'annotations.datum'?: any;
  'annotations.domain'?: any;
  'annotations.boxStyle'?: any;
  'annotations.highContrast'?: boolean;
  'annotations.stem'?: any;
  'annotations.style'?: string;
  'annotations.textStyle'?: any;
  axisTitlesPosition?: string;
  backgroundColor?: any;
  'backgroundColor.stroke'?: string;
  'backgroundColor.strokeWidth'?: number;
  'backgroundColor.fill'?: string;
  'bar.groupWidth'?: React.ReactText;
  bars?: 'horizontal' | 'vertical';
  chartArea?: any;
  'chartArea.backgroundColor'?: any;
  'chartArea.left'?: ReactText;
  'chartArea.top'?: ReactText;
  'chartArea.width'?: ReactText;
  'chartArea.height'?: ReactText;
  'chart.subtitle'?: string;
  'chart.title'?: string;
  colors?: string[];
  dataOpacity?: number;
  enableInteractivity?: boolean;
  explorer?: any;
  'explorer.actions'?: string[];
  'explorer.axis'?: string;
  'explorer.keepInBounds'?: boolean;
  'explorer.maxZoomIn'?: number;
  'explorer.maxZoomOut'?: number;
  'explorer.zoomDelta'?: number;
  focusTarget?: string;
  fontSize?: number;
  fontName?: string;
  forceIFrame?: boolean;
  hAxes?: any;
  hAxis?: any;
  'hAxis.baseline'?: number;
  'hAxis.baselineColor'?: number;
  'hAxis.direction'?: 1 | -1;
  'hAxis.format'?: string;
  'hAxis.gridlines'?: any;
  'hAxis.gridlines.color'?: string;
  'hAxis.gridlines.count'?: number;
  'hAxis.gridlines.units'?: any;
  'hAxis.minorGridlines'?: any;
  'hAxis.minorGridlines.color'?: string;
  'hAxis.minorGridlines.count'?: number;
  'hAxis.minorGridlines.units'?: any;
  'hAxis.logScale'?: boolean;
  'hAxis.scaleType'?: string;
  'hAxis.textStyle'?: any;
  'hAxis.textPosition'?: string;
  'hAxis.ticks'?: any[];
  'hAxis.title'?: string;
  'hAxis.titleTextStyle'?: any;
  'hAxis.maxValue'?: number;
  'hAxis.minValue'?: number;
  'hAxis.viewWindowMode'?: string;
  'hAxis.viewWindow'?: any;
  'hAxis.viewWindow.max'?: number;
  'hAxis.viewWindow.min'?: number;
  height?: ReactText;
  isStacked?: boolean | string;
  legend?: any;
  'legend.pageIndex'?: number;
  'legend.position'?: string;
  'legend.alignment'?: string;
  'legend.textStyle'?: any;
  reverseCategories?: boolean;
  orientation?: string;
  series?: any;
  theme?: string;
  title?: string;
  titlePosition?: string;
  titleTextStyle?: any;
  tooltip?: any;
  'tooltip.ignoreBounds'?: boolean;
  'tooltip.isHtml'?: boolean;
  'tooltip.showColorCode'?: boolean;
  'tooltip.textStyle'?: any;
  'tooltip.trigger'?: string;
  trendlines?: any;
  'trendlines.n.color'?: string;
  'trendlines.n.degree'?: number;
  'trendlines.n.labelInLegend'?: string;
  'trendlines.n.lineWidth'?: number;
  'trendlines.n.opacity'?: number;
  'trendlines.n.pointSize'?: number;
  'trendlines.n.pointsVisible'?: boolean;
  'trendlines.n.showR2'?: boolean;
  'trendlines.n.type'?: string;
  'trendlines.n.visibleInLegend'?: boolean;
  vAxis?: any;
  'vAxis.baseline'?: number;
  'vAxis.baselineColor'?: number;
  'vAxis.direction'?: 1 | -1;
  'vAxis.format'?: string;
  'vAxis.gridlines'?: any;
  'vAxis.gridlines.color'?: string;
  'vAxis.gridlines.count'?: number;
  'vAxis.gridlines.units'?: any;
  'vAxis.minorGridlines'?: any;
  'vAxis.minorGridlines.color'?: string;
  'vAxis.minorGridlines.count'?: number;
  'vAxis.minorGridlines.units'?: any;
  'vAxis.logScale'?: boolean;
  'vAxis.scaleType'?: string;
  'vAxis.textPosition'?: string;
  'vAxis.textStyle'?: any;
  'vAxis.ticks'?: any[];
  'vAxis.title'?: string;
  'vAxis.titleTextStyle'?: any;
  'vAxis.maxValue'?: number;
  'vAxis.minValue'?: number;
  'vAxis.viewWindowMode'?: string;
  'vAxis.viewWindow'?: any;
  'vAxis.viewWindow.max'?: number;
  'vAxis.viewWindow.min'?: number;
  width?: ReactText;
}

/** [`COLUMN` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/columnchart#configuration-options) */
export interface ColumnChartOptions {
  'animation.duration'?: number;
  'animation.easing'?: string;
  'animation.startup'?: boolean;
  'annotations.alwaysOutside'?: boolean;
  'annotations.boxStyle'?: any;
  'annotations.datum'?: any;
  'annotations.domain'?: any;
  'annotations.highContrast'?: boolean;
  'annotations.stem'?: any;
  'annotations.style'?: string;
  'annotations.textStyle'?: any;
  axisTitlesPosition?: string;
  backgroundColor?: any;
  'backgroundColor.stroke'?: string;
  'backgroundColor.strokeWidth'?: number;
  'backgroundColor.fill'?: string;
  'bar.groupWidth'?: ReactText;
  bars?: 'horizontal' | 'vertical';
  chartArea?: any;
  'chartArea.backgroundColor'?: any;
  'chartArea.left'?: ReactText;
  'chartArea.top'?: ReactText;
  'chartArea.width'?: ReactText;
  'chartArea.height'?: ReactText;
  'chart.subtitle'?: string;
  'chart.title'?: string;
  colors?: string[];
  dataOpacity?: number;
  enableInteractivity?: boolean;
  explorer?: any;
  'explorer.actions'?: string[];
  'explorer.axis'?: string;
  'explorer.keepInBounds'?: boolean;
  'explorer.maxZoomIn'?: number;
  'explorer.maxZoomOut'?: number;
  'explorer.zoomDelta'?: number;
  focusTarget?: string;
  fontSize?: number;
  fontName?: string;
  forceIFrame?: boolean;
  hAxis?: any;
  'hAxis.baseline'?: number;
  'hAxis.baselineColor'?: number;
  'hAxis.direction'?: 1 | -1;
  'hAxis.format'?: string;
  'hAxis.gridlines'?: any;
  'hAxis.gridlines.color'?: string;
  'hAxis.gridlines.count'?: number;
  'hAxis.gridlines.interval'?: number;
  'hAxis.gridlines.minSpacing'?: number;
  'hAxis.gridlines.multiple'?: number;
  'hAxis.gridlines.units'?: any;
  'hAxis.minorGridlines'?: any;
  'hAxis.minorGridlines.color'?: string;
  'hAxis.minorGridlines.count'?: number;
  'hAxis.minorGridlines.interval'?: number;
  'hAxis.minorGridlines.minSpacing'?: number;
  'hAxis.minorGridlines.multiple'?: number;
  'hAxis.minorGridlines.units'?: any;
  'hAxis.logScale'?: boolean;
  'hAxis.scaleType'?: string;
  'hAxis.textPosition'?: string;
  'hAxis.textStyle'?: any;
  'hAxis.ticks'?: any[];
  'hAxis.title'?: string;
  'hAxis.titleTextStyle'?: any;
  'hAxis.allowContainerBoundaryTextCutoff'?: boolean;
  'hAxis.slantedText'?: boolean;
  'hAxis.slantedTextAngle'?: number;
  'hAxis.maxAlternation'?: number;
  'hAxis.maxTextLines'?: number;
  'hAxis.minTextSpacing'?: number;
  'hAxis.showTextEvery'?: number;
  'hAxis.maxValue'?: number;
  'hAxis.minValue'?: number;
  'hAxis.viewWindowMode'?: string;
  'hAxis.viewWindow'?: any;
  'hAxis.viewWindow.max'?: number;
  'hAxis.viewWindow.min'?: number;
  height?: ReactText;
  isStacked?: boolean | string;
  legend?: any;
  'legend.pageIndex'?: number;
  'legend.position'?: string;
  'legend.alignment'?: string;
  'legend.textStyle'?: any;
  orientation?: string;
  reverseCategories?: boolean;
  series?: any;
  theme?: string;
  title?: string;
  titlePosition?: string;
  titleTextStyle?: any;
  tooltip?: any;
  'tooltip.ignoreBounds'?: boolean;
  'tooltip.isHtml'?: boolean;
  'tooltip.showColorCode'?: boolean;
  'tooltip.textStyle'?: any;
  'tooltip.trigger'?: string;
  trendlines?: any;
  'trendlines.n.color'?: string;
  'trendlines.n.degree'?: number;
  'trendlines.n.labelInLegend'?: string;
  'trendlines.n.lineWidth'?: number;
  'trendlines.n.opacity'?: number;
  'trendlines.n.pointSize'?: number;
  'trendlines.n.pointsVisible'?: boolean;
  'trendlines.n.showR2'?: boolean;
  'trendlines.n.type'?: string;
  'trendlines.n.visibleInLegend'?: boolean;
  vAxes?: any;
  vAxis?: any;
  'vAxis.baseline'?: number;
  'vAxis.baselineColor'?: number;
  'vAxis.direction'?: 1 | -1;
  'vAxis.format'?: string;
  'vAxis.gridlines'?: any;
  'vAxis.gridlines.color'?: string;
  'vAxis.gridlines.count'?: number;
  'vAxis.gridlines.interval'?: number;
  'vAxis.gridlines.minSpacing'?: number;
  'vAxis.gridlines.multiple'?: number;
  'vAxis.gridlines.units'?: any;
  'vAxis.minorGridlines'?: any;
  'vAxis.minorGridlines.color'?: string;
  'vAxis.minorGridlines.count'?: number;
  'vAxis.minorGridlines.interval'?: number;
  'vAxis.minorGridlines.minSpacing'?: number;
  'vAxis.minorGridlines.multiple'?: number;
  'vAxis.minorGridlines.units'?: any;
  'vAxis.logScale'?: boolean;
  'vAxis.scaleType'?: string;
  'vAxis.textPosition'?: string;
  'vAxis.textStyle'?: any;
  'vAxis.ticks'?: any[];
  'vAxis.title'?: string;
  'vAxis.titleTextStyle'?: any;
  'vAxis.maxValue'?: number;
  'vAxis.minValue'?: number;
  'vAxis.viewWindowMode'?: string;
  'vAxis.viewWindow'?: any;
  'vAxis.viewWindow.max'?: number;
  'vAxis.viewWindow.min'?: number;
  width?: ReactText;
}

/** [`GEO` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/geochart#configuration-options) */
export interface GeoChartOptions {
  backgroundColor?: any;
  'backgroundColor.fill'?: string;
  'backgroundColor.stroke'?: string;
  'backgroundColor.strokeWidth'?: number;
  colorAxis?: any;
  'colorAxis.minValue'?: number;
  'colorAxis.maxValue'?: number;
  'colorAxis.values'?: number[];
  'colorAxis.colors'?: string[];
  datalessRegionColor?: string;
  defaultColor?: string;
  displayMode?: string;
  domain?: string;
  enableRegionInteractivity?: boolean;
  forceIFrame?: boolean;
  height?: ReactText;
  keepAspectRatio?: boolean;
  legend?: any;
  'legend.numberFormat'?: string;
  'legend.textStyle'?: any;
  region?: string;
  magnifyingGlass?: any;
  'magnifyingGlass.enable'?: boolean;
  'magnifyingGlass.zoomFactor'?: number;
  markerOpacity?: number;
  resolution?: string;
  sizeAxis?: any;
  'sizeAxis.maxSize'?: number;
  'sizeAxis.maxValue'?: number;
  'sizeAxis.minSize'?: number;
  'sizeAxis.minValue'?: number;
  tooltip?: any;
  'tooltip.textStyle'?: any;
  'tooltip.trigger'?: string;
  width?: ReactText;
}

/** [`LINE` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/linechart#configuration-options) */
export interface LineChartOptions {
  aggregationTarget?: string;
  'animation.duration'?: number;
  'animation.startup'?: boolean;
  'animation.easing'?: string;
  'annotations.boxStyle'?: any;
  'annotations.datum'?: any;
  'annotations.domain'?: any;
  'annotations.highContrast'?: boolean;
  'annotations.stem'?: any;
  'annotations.style'?: string;
  'annotations.textStyle'?: any;
  axisTitlesPosition?: string;
  backgroundColor?: string | any;
  'backgroundColor.stroke'?: string;
  'backgroundColor.strokeWidth'?: number;
  'backgroundColor.fill'?: string;
  chartArea?: any;
  'chartArea.backgroundColor'?: any;
  'chartArea.left'?: ReactText;
  'chartArea.top'?: ReactText;
  'chartArea.width'?: ReactText;
  'chartArea.height'?: ReactText;
  colors?: string[];
  crosshair?: any;
  'crosshair.color'?: string;
  'crosshair.focused'?: any;
  'crosshair.opacity'?: number;
  'crosshair.orientation'?: string;
  'crosshair.selected'?: any;
  'crosshair.trigger'?: string;
  curveType?: string;
  dataOpacity?: number;
  enableInteractivity?: boolean;
  explorer?: any;
  'explorer.actions'?: string[];
  'explorer.axis'?: string;
  'explorer.keepInBounds'?: boolean;
  'explorer.maxZoomIn'?: number;
  'explorer.maxZoomOut'?: number;
  'explorer.zoomDelta'?: number;
  focusTarget?: string;
  fontSize?: number;
  fontName?: string;
  forceIFrame?: boolean;
  hAxis?: any;
  'hAxis.baseline'?: number;
  'hAxis.baselineColor'?: number;
  'hAxis.direction'?: 1 | -1;
  'hAxis.format'?: string;
  'hAxis.gridlines'?: any;
  'hAxis.gridlines.color'?: string;
  'hAxis.gridlines.count'?: number;
  'hAxis.gridlines.interval'?: number;
  'hAxis.gridlines.minSpacing'?: number;
  'hAxis.gridlines.multiple'?: number;
  'hAxis.gridlines.units'?: any;
  'hAxis.minorGridlines'?: any;
  'hAxis.minorGridlines.color'?: string;
  'hAxis.minorGridlines.count'?: number;
  'hAxis.minorGridlines.interval'?: number;
  'hAxis.minorGridlines.minSpacing'?: number;
  'hAxis.minorGridlines.multiple'?: number;
  'hAxis.minorGridlines.units'?: any;
  'hAxis.logScale'?: boolean;
  'hAxis.scaleType'?: string;
  'hAxis.textPosition'?: string;
  'hAxis.textStyle'?: any;
  'hAxis.ticks'?: any[];
  'hAxis.title'?: string;
  'hAxis.titleTextStyle'?: any;
  'hAxis.allowContainerBoundaryTextCutoff'?: boolean;
  'hAxis.slantedText'?: boolean;
  'hAxis.slantedTextAngle'?: number;
  'hAxis.maxAlternation'?: number;
  'hAxis.maxTextLines'?: number;
  'hAxis.minTextSpacing'?: number;
  'hAxis.showTextEvery'?: number;
  'hAxis.maxValue'?: number;
  'hAxis.minValue'?: number;
  'hAxis.viewWindowMode'?: string;
  'hAxis.viewWindow'?: any;
  'hAxis.viewWindow.max'?: number;
  'hAxis.viewWindow.min'?: number;
  height?: ReactText;
  interpolateNulls?: boolean;
  legend?: any;
  'legend.alignment'?: string;
  'legend.maxLines'?: number;
  'legend.pageIndex'?: number;
  'legend.position'?: string;
  'legend.textStyle'?: any;
  lineDashStyle?: number[];
  lineWidth?: number;
  orientation?: string;
  pointShape?: string;
  pointSize?: number;
  pointsVisible?: boolean;
  reverseCategories?: boolean;
  selectionMode?: string;
  series?: any;
  theme?: string;
  title?: string;
  titlePosition?: string;
  titleTextStyle?: any;
  tooltip?: any;
  'tooltip.ignoreBounds'?: boolean;
  'tooltip.isHtml'?: boolean;
  'tooltip.showColorCode'?: boolean;
  'tooltip.textStyle'?: any;
  'tooltip.trigger'?: string;
  trendlines?: any;
  'trendlines.n.color'?: string;
  'trendlines.n.degree'?: number;
  'trendlines.n.labelInLegend'?: string;
  'trendlines.n.lineWidth'?: number;
  'trendlines.n.opacity'?: number;
  'trendlines.n.pointSize'?: number;
  'trendlines.n.pointsVisible'?: boolean;
  'trendlines.n.showR2'?: boolean;
  'trendlines.n.type'?: string;
  'trendlines.n.visibleInLegend'?: boolean;
  vAxes?: any;
  vAxis?: any;
  'vAxis.baseline'?: number;
  'vAxis.baselineColor'?: number;
  'vAxis.direction'?: 1 | -1;
  'vAxis.format'?: string;
  'vAxis.gridlines'?: any;
  'vAxis.gridlines.color'?: string;
  'vAxis.gridlines.count'?: number;
  'vAxis.gridlines.interval'?: number;
  'vAxis.gridlines.minSpacing'?: number;
  'vAxis.gridlines.multiple'?: number;
  'vAxis.gridlines.units'?: any;
  'vAxis.minorGridlines'?: any;
  'vAxis.minorGridlines.color'?: string;
  'vAxis.minorGridlines.count'?: number;
  'vAxis.minorGridlines.interval'?: number;
  'vAxis.minorGridlines.minSpacing'?: number;
  'vAxis.minorGridlines.multiple'?: number;
  'vAxis.minorGridlines.units'?: any;
  'vAxis.logScale'?: boolean;
  'vAxis.scaleType'?: string;
  'vAxis.textPosition'?: string;
  'vAxis.textStyle'?: any;
  'vAxis.ticks'?: any[];
  'vAxis.title'?: string;
  'vAxis.titleTextStyle'?: any;
  'vAxis.maxValue'?: number;
  'vAxis.minValue'?: number;
  'vAxis.viewWindowMode'?: string;
  'vAxis.viewWindow'?: any;
  'vAxis.viewWindow.max'?: number;
  'vAxis.viewWindow.min'?: number;
  width?: ReactText;
}

/** [`TABLE` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/table#configuration-options) */
export interface TableChartOptions {
  allowHtml?: boolean;
  alternatingRowStyle?: boolean;
  cssClassNames?: any;
  firstRowNumber?: number;
  frozenColumns?: number;
  height?: string;
  page?: string;
  pageSize?: number;
  pagingButtons?: ReactText;
  rtlTable?: boolean;
  scrollLeftStartPosition?: number;
  showRowNumber?: boolean;
  sort?: string;
  sortAscending?: boolean;
  sortColumn?: number;
  startPage?: number;
  width?: string;
}

/** [`PIE` Chart Configuration Options](https://developers.google.com/chart/interactive/docs/gallery/piechart#configuration-options) */
export interface PieChartOptions {
  backgroundColor?: any;
  chartArea?: any;
  colors?: string[];
  enableInteractivity?: boolean;
  fontSize?: number;
  fontName?: string;
  forceIFrame?: boolean;
  height?: ReactText;
  is3D?: boolean;
  legend?: any;
  pieHole?: number;
  pieSliceBorderColor?: string;
  pieSliceText?: string;
  pieSliceTextStyle?: any;
  pieStartAngle?: number;
  reverseCategories?: boolean;
  pieResidueSliceColor?: string;
  pieResidueSliceLabel?: string;
  slices?: any;
  sliceVisibilityThreshold?: number;
  title?: string;
  titleTextStyle?: any;
  tooltip?: any;
  width?: ReactText;
}
