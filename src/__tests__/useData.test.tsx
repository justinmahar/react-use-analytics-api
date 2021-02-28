import { renderHook } from '@testing-library/react-hooks';
import { useData } from '../hooks/useData';
import { useAnalyticsApi } from '../hooks/useAnalyticsApi';

describe('useData Hook', () => {
  test('should run without crashing', () => {
    const { result: analyticsResult } = renderHook(() => useAnalyticsApi());
    const { result } = renderHook(() =>
      useData(analyticsResult.current.gapi, {
        metrics: 'ga:sessions',
        dimensions: 'ga:date',
        'start-date': '28daysAgo',
        'end-date': 'today',
        ids: 'ga:123456789',
      }),
    );
    expect(result.error).toBe(undefined);
  });
});
