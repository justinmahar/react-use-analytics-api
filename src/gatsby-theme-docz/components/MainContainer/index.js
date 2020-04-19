import { DoczFooter, DoczFeedbackForm } from '@devboldly/react-devboldly-tools';
import { MainContainer as OriginalMainContainer } from 'gatsby-theme-docz/src/components/MainContainer/index';
import React from 'react';
import { customThemeConfig } from '../../custom-theme-config';

export const MainContainer = ({ children, ...rest }) => {
  return (
    <OriginalMainContainer {...rest}>
      {children}
      {typeof window !== 'undefined' &&
        window.location.pathname !== '/' &&
        window.location.pathname !== `/${customThemeConfig.projectName}/` && (
          <DoczFeedbackForm
            formActionUrl="https://docs.google.com/forms/u/0/d/e/1FAIpQLScMRAM6r__I_rSeg_l-a5mk8p8iSTDNrjJCUOTlnxa63Czwrg/formResponse"
            siteName={customThemeConfig.projectName}
            pageUrl={window.location.href}
            yesNoFieldName="entry.681938809"
            feedbackFieldName="entry.593370879"
            siteFieldName="entry.1824430892"
            pageUrlFieldName="entry.2081371977"
          />
        )}
      <DoczFooter
        authorName={customThemeConfig.footer.authorName}
        authorUrl={customThemeConfig.footer.authorUrl}
        hostName={customThemeConfig.footer.hostName}
        hostUrl={customThemeConfig.footer.hostUrl}
        hideEmoji={customThemeConfig.footer.hideEmoji}
        hideHolidays={customThemeConfig.footer.hideHolidays}
      />
    </OriginalMainContainer>
  );
};
