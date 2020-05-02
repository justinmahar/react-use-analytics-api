import { renderHook } from '@testing-library/react-hooks';
import { useAnalyticsApi } from '../hooks/useAnalyticsApi';

describe('useAnalyticsApi Hook', () => {
  test('should run without crashing', () => {
    const { result } = renderHook(() => useAnalyticsApi());
    expect(result.error).toBe(undefined);
  });
});
