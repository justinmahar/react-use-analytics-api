import { renderHook } from '@testing-library/react-hooks';
import { useSignOut } from '../hooks/useSignOut';
import { useAnalyticsApi } from '../hooks/useAnalyticsApi';

describe('useSignOut Hook', () => {
  test('should run without crashing', () => {
    const { result: analyticsResult } = renderHook(() => useAnalyticsApi());
    const { result } = renderHook(() => useSignOut(analyticsResult.current.gapi));
    expect(result.error).toBe(undefined);
  });
});
