import { renderHook } from '@testing-library/react-hooks';
import { useDataChart } from '../hooks/useDataChart';
import { useAnalyticsApi } from '../hooks/useAnalyticsApi';

describe('useDataChart Hook', () => {
  test('should run without crashing', () => {
    const { result: analyticsResult } = renderHook(() => useAnalyticsApi());
    const { result } = renderHook(() =>
      useDataChart(
        analyticsResult.current.gapi,
        {
          metrics: 'ga:sessions',
          dimensions: 'ga:browser',
          'start-date': '28daysAgo',
          'end-date': 'today',
          ids: 'ga:123456789',
        },
        {
          container: 'data-chart-container',
          type: 'BAR',
          options: {
            title: 'Sessions By Browser (28 Days)',
          },
        },
      ),
    );
    expect(result.error).toBe(undefined);
  });
});
