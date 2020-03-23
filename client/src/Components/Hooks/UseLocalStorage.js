import { useState } from "react";

export function useLocalStorage(key, initialValues) {
  if (window.localStorage && window.localStorage.getItem(key)) {
    initialValues = JSON.parse(window.localStorage.getItem(key));
  }
  const [value, setStoredValue] = useState(initialValues);

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setValue];
}