const projectName = 'react-use-analytics-api';

export const themeAdditionsConfig = {
  gaTrackingId: 'UA-148090679-5',
  projectName: projectName,
  faviconUrl: `/${projectName}/public/favicon.ico`,
  footer: {
    enabled: true,
    authorName: 'DevBoldly',
    authorUrl: 'https://devboldly.com/',
    hideEmoji: false,
    /** Holidays like new year's day are announced, for fun. */
    hideHolidays: false,
    hostName: 'GitHub Pages',
    hostUrl: 'https://pages.github.com/',
  },
  feedbackForm: {
    enabled: true,
    siteName: projectName,
    formActionUrl:
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLScMRAM6r__I_rSeg_l-a5mk8p8iSTDNrjJCUOTlnxa63Czwrg/formResponse',
    yesNoFieldName: 'entry.681938809',
    feedbackFieldName: 'entry.593370879',
    siteFieldName: 'entry.1824430892',
    pageUrlFieldName: 'entry.2081371977',
    /**
     * Page paths to exclude the feedback form from.
     */
    excludedPaths: ['/', '/mit-license', '/code-of-conduct'],
  },
};
