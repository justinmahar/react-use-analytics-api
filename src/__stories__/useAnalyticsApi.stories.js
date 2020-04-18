import React from 'react';
import { useAnalyticsApi } from '../hooks/useAnalyticsApi';
import { useAuthorize } from '../hooks/useAuthorize';
import { useDataChart } from '../hooks/useDataChart';
import { useViewSelector } from '../hooks/useViewSelector';
import { useSignOut } from '../hooks/useSignOut';

// Learn how to write stories:
// https://storybook.js.org/docs/basics/writing-stories/

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'useAnalyticsApi Hook',
};

const stringify = (arg: any) => {
  try {
    return JSON.stringify(arg);
  } catch (e) {
    return typeof arg;
  }
};

// Styles for our loading/success/error badges
const badgeStyles = {
  padding: '5px 10px 5px 10px',
  borderRadius: 5,
  display: 'inline-block',
  fontWeight: 'bold',
  fontFamily: 'Roboto',
  fontSize: '80%',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
};
const loadingStyles = {
  ...badgeStyles,
  backgroundColor: 'yellow',
  color: 'saddlebrown',
};
const successStyles = {
  ...badgeStyles,
  backgroundColor: 'lightgreen',
  color: 'darkgreen',
};
const errorStyles = {
  ...badgeStyles,
  backgroundColor: 'pink',
  color: 'darkred',
  display: 'block',
  padding: 10,
  margin: '20px 0 20px 0',
};

// The named exports define the stories

// Needed to wrap the hook and give it visual representation.

const ChartComponent = props => {
  useDataChart(props.gapi, props.query, props.chart);

  return <div className="data-chart" id={props.chart.container} />;
};

const HookComponent = props => {
  const viewSelectorContainerId = `${props.idPrefix ? props.idPrefix + '-' : ''}view-selector-container`;
  const chartContainerId = `${props.idPrefix ? props.idPrefix + '-' : ''}data-chart-container`;
  const authorizeContainerId = `${props.idPrefix ? props.idPrefix + '-' : ''}auth-container`;

  const analyticsApi = useAnalyticsApi();
  const { ready, gapi, authorized, error } = analyticsApi;
  const authorize = useAuthorize(gapi, {
    clientId: '932669268667-ptpd9g2buqb0qv56rk8ki8cpavedku83.apps.googleusercontent.com',
    container: authorizeContainerId,
  });
  const [viewId, setViewId] = React.useState();
  useViewSelector(gapi, viewSelectorContainerId, viewId => setViewId(viewId));
  const signOut = useSignOut(gapi);

  React.useEffect(() => {
    if (!authorized) {
      authorize();
    }
  }, [authorize, authorized]);

  return (
    <>
      <div>
        {ready ? (
          <span style={successStyles}>
            <span role="img" aria-label="check">
              ✔️
            </span>{' '}
            Loaded!
          </span>
        ) : (
          <span style={loadingStyles}>
            {' '}
            <span role="img" aria-label="hourglass">
              ⌛
            </span>{' '}
            Loading...
          </span>
        )}
      </div>
      <div style={{ marginTop: '30px' }}>
        {!authorized && <div id={authorizeContainerId} />}
        {!authorized && <div>Refresh the page if auth button not visible.</div>}
        {authorized && (
          <div>
            <button
              onClick={() => {
                signOut();
                if (typeof window !== 'undefined' && window.location && window.location.reload) {
                  // The signout happens outside of react, so give the page a reload.
                  window.location.reload(false);
                }
              }}
            >
              <span role="img" aria-label="door">
                🚪
              </span>{' '}
              Sign Out
            </button>
          </div>
        )}
      </div>
      <div id={viewSelectorContainerId} />
      {authorized && (
        <div style={{ marginTop: '30px' }}>
          {' '}
          <div>
            <ChartComponent
              gapi={gapi}
              query={{
                ids: viewId,
                'start-date': '28daysAgo',
                'end-date': 'today',
                metrics: 'ga:sessions',
                dimensions: 'ga:browser',
              }}
              chart={{
                container: chartContainerId,
                type: 'BAR',
                options: {
                  title: 'Sessions By Browser (28 Days)',
                },
              }}
            />
          </div>
        </div>
      )}
      {error && (
        <div style={errorStyles}>
          <div style={{ fontSize: '120%' }}>
            <span role="img" aria-label="X">
              ❌
            </span>{' '}
            Error
          </div>
          <hr style={{ border: 0, borderTop: 'solid 1px rosybrown' }} />
          <p>{error.toString()}</p>
          <p>See the console for more information.</p>
        </div>
      )}
      <div>
        <h5>Analytics API:</h5>
        <ul>
          {analyticsApi ? (
            Object.keys(analyticsApi).map(v => (
              <li key={v}>
                <code>{`${v}: ${stringify(analyticsApi[v])}`}</code>
              </li>
            ))
          ) : (
            <li>not loaded</li>
          )}
          {analyticsApi && !ready && (
            <li>
              <em>
                <code>Loading...</code>
              </em>
            </li>
          )}
        </ul>
      </div>
      <div>
        {gapi && (
          <>
            <h5>
              Google Embed API with Analytics (<code>gapi</code>):
            </h5>
            <ul>
              {gapi ? (
                Object.keys(gapi).map(v => (
                  <li key={v}>
                    <code>{`${v}: ${stringify(gapi[v])}`}</code>
                  </li>
                ))
              ) : (
                <li>Not loaded</li>
              )}
              {gapi && !ready && (
                <li>
                  <em>
                    <code>Loading...</code>
                  </em>
                </li>
              )}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export const SingleGoogleAnalyticsEmbedApiStory = () => <HookComponent />;
SingleGoogleAnalyticsEmbedApiStory.story = {
  name: 'Single API Hook',
};

export const MultipleGoogleAnalyticsEmbedApiStory = () => (
  <>
    <HookComponent idPrefix="dash1" />
    <HookComponent idPrefix="dash2" />
    <HookComponent idPrefix="dash3" />
  </>
);
MultipleGoogleAnalyticsEmbedApiStory.story = {
  name: 'Multiple API Hook Calls',
};
