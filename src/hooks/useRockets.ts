import { useState, useEffect, useCallback } from 'react';
import { getRockets } from '../api/api';
import Rocket from '../types/Rocket';

export function useRockets() {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchRockets = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getRockets();
      setRockets(data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch rockets');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchRockets();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchRockets();
  }, [fetchRockets]);

  return { rockets, loading, error, refreshing, handleRefresh };
}
