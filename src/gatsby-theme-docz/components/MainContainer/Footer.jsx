import * as React from 'react';
import styled from 'styled-components';
/*
export interface FooterProps {
  url?: string;
  author?: string;
  emoji?: string;
  emojiLabel?: string;
  hideNetlify?: boolean;
}
*/
export function Footer(props) {
  const anchorProps = { target: '_blank', rel: 'noopener noreferrer' };

  // Holiday div just for fun :)
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  let holidayDiv = <></>;
  if (month === 1 && day === 1) {
    holidayDiv = <div className="holiday">🎉 Happy New Year! 🍾</div>;
  } else if (month === 2 && day === 2) {
    holidayDiv = <div className="holiday">Happy Groundhog Day! 🐿️🕳</div>;
  } else if (month === 2 && day === 14) {
    holidayDiv = <div className="holiday">💘 Happy Valentine&apos;s Day! 💞</div>;
  } else if (month === 3 && day === 17) {
    holidayDiv = <div className="holiday">☘️ Happy St. Patrick&apos;s Day! 🍻</div>;
  } else if (month === 5 && day === 5) {
    holidayDiv = <div className="holiday">🎊 Happy Cinco de Mayo! 🍹</div>;
  } else if (month === 7 && day === 4) {
    holidayDiv = <div className="holiday">🎆 Happy Independence Day! 🧨</div>;
  } else if (month === 10 && day === 31) {
    holidayDiv = <div className="holiday">👻 Happy Halloween! 🎃</div>;
  } else if (month === 11 && day >= 22 && day <= 28) {
    holidayDiv = <div className="holiday">🥧 Happy Thanksgiving! 🦃</div>;
  } else if (month === 12 && day >= 21 && day <= 30) {
    holidayDiv = <div className="holiday">⛄ Happy Holidays! 🎁</div>;
  } else if (month === 12 && day === 31) {
    holidayDiv = <div className="holiday">🥳 Happy New Year&apos;s Eve! 🎆</div>;
  }

  return (
    <Styled>
      <div className="footer-container">
        <div>
          Created{' '}
          {props.emoji && (
            <>
              with{' '}
              <span role="img" aria-label={props.emojiLabel}>
                {props.emoji}
              </span>{' '}
            </>
          )}
          {(props.url || props.author) && (
            <>
              {'by '}
              {props.url && props.author && (
                <a href={props.url} {...anchorProps}>
                  {props.author}
                </a>
              )}
              {props.url && !props.author && (
                <a href={props.url} {...anchorProps}>
                  {props.url}
                </a>
              )}
              {!props.url && props.author && props.author}
            </>
          )}
        </div>
        {holidayDiv}
        {!props.hideNetlify && (
          <div>
            <a href="https://www.netlify.com">
              <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
            </a>
          </div>
        )}
      </div>
    </Styled>
  );
}

const Styled = styled.div`
  a,
  a:visited {
    color: #0b5fff;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  .footer-container {
    margin-top: 40px;
    padding-top: 15px;
    font-size: 80%;
    border-top: solid 2px #67788a;
    display: flex;
    justify-content: space-between;
  }

  .holiday {
    font-weight: bold;
    font-size: 120%;
  }
`;
