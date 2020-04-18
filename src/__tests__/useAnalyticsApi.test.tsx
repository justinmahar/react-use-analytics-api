import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from '../hooks/useAnalyticsApi';

// Learn how to test React hooks:
// https://react-hooks-testing-library.com/

describe('useAnalyticsApi Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useAnalyticsApi());
    expect(result.error).toBe(undefined);
  });
});
