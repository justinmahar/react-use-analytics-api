import * as React from 'react';
import { useAnalyticsApi } from '../../hooks/useAnalyticsApi';

export function UseAnalyticsApiExample(): JSX.Element {
  const { ready, gapi, authorized, error } = useAnalyticsApi();
  if (error) {
    console.error(error);
  }
  return (
    <div>
      {!error &&
        (ready && !!gapi ? (
          <>
            <div>✔️ Loaded and ready to use!</div>
            {authorized && <div>☀️ Logged into Google Analytics!</div>}
            {!authorized && <div>🔐 Not logged into Google Analytics</div>}
          </>
        ) : (
          <div>⌛ Loading...</div>
        ))}
      {error && (
        <div>
          <div style={{ fontSize: '120%' }}>❌ Error</div>
          <hr style={{ border: 0, borderTop: 'solid 1px rosybrown' }} />
          <p>{error.toString()}</p>
          <p>See the console for more information.</p>
        </div>
      )}
    </div>
  );
}
