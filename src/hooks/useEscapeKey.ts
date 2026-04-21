import { useEffect } from 'react';

const useEscapeKey = (handleEscape: () => void, isActive: boolean) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isActive) {
        handleEscape();
      }
    };

    if (isActive) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleEscape, isActive]);
};

export default useEscapeKey;
