import { renderHook } from '@testing-library/react-hooks';
import { useAuthorize } from '../hooks/useAuthorize';
import { useAnalyticsApi } from '../hooks/useAnalyticsApi';

describe('useAuthorize Hook', () => {
  test('should run without crashing', () => {
    const { result: analyticsResult } = renderHook(() => useAnalyticsApi());
    const { result } = renderHook(() => useAuthorize(analyticsResult.current.gapi, { clientId: 'abc-123' }));
    expect(result.error).toBe(undefined);
  });
});
