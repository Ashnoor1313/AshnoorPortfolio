import { useState, useEffect } from "react";

interface UseLoadingOptions {
  minLoadingTime?: number;
  initialLoading?: boolean;
}

export function useLoading(options: UseLoadingOptions = {}) {
  const { minLoadingTime = 800, initialLoading = true } = options;
  const [isLoading, setIsLoading] = useState(initialLoading);

  useEffect(() => {
    if (initialLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, minLoadingTime);

      return () => clearTimeout(timer);
    }
  }, [initialLoading, minLoadingTime]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return { isLoading, startLoading, stopLoading, setIsLoading };
}

export function useSimulatedLoading(duration: number = 1000) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return isLoading;
}