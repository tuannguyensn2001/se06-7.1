import { useEffect, useLayoutEffect, useState } from 'react';

export default function useCategories() {
  const KEY = 'CATEGORIES_VALUE';
  const [categories, setCategories] = useState();

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem(KEY);
      setCategories(savedData !== null ? JSON.parse(savedData) : []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(categories));
  }, [categories]);

  return [categories, setCategories];
}
