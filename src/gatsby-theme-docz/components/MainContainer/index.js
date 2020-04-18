import { MainContainer as OriginalMainContainer } from 'gatsby-theme-docz/src/components/MainContainer/index';
import React from 'react';
import { Footer } from './Footer';

export const MainContainer = ({ children, ...rest }) => {
  const emojis = {
    Love: '❤️',
    Beer: '🍺',
    Tacos: '🌮',
    Coffee: '☕',
    Sushi: '🍣',
  };
  const emojiLabels = Object.keys(emojis);
  const emojiLabel = emojiLabels[Math.floor(Math.random() * emojiLabels.length)];
  const emoji = emojis[emojiLabel];

  return (
    <OriginalMainContainer {...rest}>
      {children}
      <Footer author="DevBoldly" url="https://devboldly.com/" emoji={emoji} emojiLabel={emojiLabel} />
    </OriginalMainContainer>
  );
};
