import { DoczFooter } from '@devboldly/react-devboldly-tools';
import { MainContainer as OriginalMainContainer } from 'gatsby-theme-docz/src/components/MainContainer/index';
import React from 'react';
import { customThemeConfig } from '../../custom-theme-config';

export const MainContainer = ({ children, ...rest }) => {
  return (
    <OriginalMainContainer {...rest}>
      {children}
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
