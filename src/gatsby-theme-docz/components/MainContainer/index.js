import { DoczFooter, DoczFeedbackForm } from '@devboldly/react-devboldly-tools';
import { MainContainer as OriginalMainContainer } from 'gatsby-theme-docz/src/components/MainContainer/index';
import React from 'react';
import { themeAdditionsConfig } from '../../theme-additions-config';

export const MainContainer = ({ children, ...rest }) => {
  let showFeedbackForm = typeof window !== 'undefined' && themeAdditionsConfig.feedbackForm.enabled;
  if (showFeedbackForm) {
    for (let i = 0; i < themeAdditionsConfig.feedbackForm.excludedPaths.length; i++) {
      const excludedPath = themeAdditionsConfig.feedbackForm.excludedPaths[i].replace(/^\/|\/$/g, ''); // Remove leading and trailing slashes;
      const currentPath = window.location.pathname.replace(/^\/|\/$/g, '');
      // Account for running from domain root, or out of the project folder (gh-pages)
      if (
        currentPath === excludedPath ||
        currentPath === themeAdditionsConfig.projectName ||
        currentPath === `${themeAdditionsConfig.projectName}/${excludedPath}`
      ) {
        showFeedbackForm = false;
        break;
      }
    }
  }
  return (
    <OriginalMainContainer {...rest}>
      {children}
      {showFeedbackForm && (
        <div
          style={{
            border: 'solid 1px #bdcee2',
            padding: '20px',
            marginTop: '50px',
          }}
        >
          <DoczFeedbackForm
            formActionUrl={themeAdditionsConfig.feedbackForm.formActionUrl}
            siteName={themeAdditionsConfig.projectName}
            pageUrl={window.location.href}
            yesNoFieldName={themeAdditionsConfig.feedbackForm.yesNoFieldName}
            feedbackFieldName={themeAdditionsConfig.feedbackForm.feedbackFieldName}
            siteFieldName={themeAdditionsConfig.feedbackForm.siteFieldName}
            pageUrlFieldName={themeAdditionsConfig.feedbackForm.pageUrlFieldName}
          />
        </div>
      )}
      {themeAdditionsConfig.footer.enabled && (
        <DoczFooter
          authorName={themeAdditionsConfig.footer.authorName}
          authorUrl={themeAdditionsConfig.footer.authorUrl}
          hostName={themeAdditionsConfig.footer.hostName}
          hostUrl={themeAdditionsConfig.footer.hostUrl}
          hideEmoji={themeAdditionsConfig.footer.hideEmoji}
          hideHolidays={themeAdditionsConfig.footer.hideHolidays}
        />
      )}
    </OriginalMainContainer>
  );
};
