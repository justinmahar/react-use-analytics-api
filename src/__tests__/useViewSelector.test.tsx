import { renderHook } from '@testing-library/react-hooks';
import { useViewSelector } from '../hooks/useViewSelector';
import { useAnalyticsApi } from '../hooks/useAnalyticsApi';

describe('useViewSelector Hook', () => {
  test('should run without crashing', () => {
    const { result: analyticsResult } = renderHook(() => useAnalyticsApi());
    const { result } = renderHook(() =>
      useViewSelector(analyticsResult.current.gapi, 'ga:123456789', (viewId) => console.log(viewId)),
    );
    expect(result.error).toBe(undefined);
  });
});
