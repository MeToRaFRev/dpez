import { useState, useEffect } from "react";

export function grabLocalStorage(key) {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : undefined;
}
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
