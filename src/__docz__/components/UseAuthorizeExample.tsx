import * as React from 'react';
import { useAnalyticsApi } from '../../hooks/useAnalyticsApi';
import { useAuthorize } from '../../hooks/useAuthorize';
import { useSignOut } from '../../hooks/useSignOut';
import clientId from '../client-id-config';

export function UseAuthorizeExample(): JSX.Element {
  const { ready, gapi, authorized, error } = useAnalyticsApi();
  const authorize = useAuthorize(gapi, {
    clientId,
    container: 'authorize-container-id',
  });
  const signOut = useSignOut(gapi);

  // Workaround for API limitation
  const [authorizeCalled, setAuthorizeCalled] = React.useState(false);
  const authDiv = React.useRef<HTMLDivElement | null>(null);
  const hasAuthElements = authDiv.current && authDiv?.current?.children?.length > 0;

  React.useEffect(() => {
    if (ready && !error && !authorizeCalled) {
      authorize();
      setAuthorizeCalled(true);
    }
  }, [authorize, authorizeCalled, error, ready]);

  return (
    <div>
      {!error &&
        (ready && !!gapi ? (
          <div>
            {authorized && (
              <div>
                ☀️ Logged into Google Analytics! <button onClick={() => signOut()}>Sign Out</button>
              </div>
            )}
            {!authorized && <div>🔐 Not logged into Google Analytics</div>}
            <div id="authorize-container-id" ref={authDiv} />
            {!authorized && authorizeCalled && !hasAuthElements && <div>🔄 Refresh the page to access analytics.</div>}
          </div>
        ) : (
          <div>⌛ Loading...</div>
        ))}
      {error && <div>{error.toString()}</div>}
    </div>
  );
}
