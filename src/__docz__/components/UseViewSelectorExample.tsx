import * as React from 'react';
import { useAnalyticsApi } from '../../hooks/useAnalyticsApi';
import { useAuthorize } from '../../hooks/useAuthorize';
import { useSignOut } from '../../hooks/useSignOut';
import { useViewSelector } from '../../hooks/useViewSelector';
import clientId from '../client-id-config';

export function UseViewSelectorExample(): JSX.Element {
  const { ready, gapi, authorized, error } = useAnalyticsApi();
  const [viewId, setViewId] = React.useState<string>();
  const viewSelectorContainerId = 'view-selector-container';
  useViewSelector(authorized ? gapi : undefined, viewSelectorContainerId, viewId => setViewId(viewId));

  // Workaround for API limitation - see useAuthorize docs
  const authDiv = React.useRef(null);
  const [authorizeCalled, setAuthorizeCalled] = React.useState(false);
  const hasAuthElements = authDiv.current && authDiv?.current?.children?.length > 0;

  const authorize = useAuthorize(gapi, {
    clientId,
    container: 'authorize-container-id',
  });
  const signOut = useSignOut(gapi);

  React.useEffect(() => {
    if (ready && !error && !authorizeCalled) {
      authorize();
      setAuthorizeCalled(true);
    }
  }, [ready, error, authorizeCalled, authorize]);

  return (
    <div>
      {!ready && <div>Loading...</div>}
      {ready && (
        <div>
          {authorized && (
            <div>
              <div style={{ fontSize: '200%' }}>
                View ID: <span style={{ border: 'solid 3px orange', padding: '5px' }}>{viewId}</span>
              </div>
              <div id={viewSelectorContainerId} />
              <div>
                <button onClick={() => signOut()}>Sign Out</button>
              </div>
            </div>
          )}
          {!authorized && (
            <div>
              <div ref={authDiv} id="authorize-container-id"></div>
              {!hasAuthElements && <div>🔄 Refresh the page to sign in.</div>}
            </div>
          )}
        </div>
      )}
      {error && <div>{error.toString()}</div>}
    </div>
  );
}
