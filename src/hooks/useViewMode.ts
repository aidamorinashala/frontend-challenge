import { useState } from 'react';
import { ViewMode } from '@/types';

export const useViewMode = (initialMode: ViewMode = 'grid') => {
  const [viewMode, setViewMode] = useState<ViewMode>(initialMode);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'grid' ? 'list' : 'grid'));
  };

  return { viewMode, toggleViewMode };
};
