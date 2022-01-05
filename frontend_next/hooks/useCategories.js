import { useEffect, useState } from 'react';

export default function useCategories() {
  const KEY = 'CATEGORIES_VALUE';
  const [categories, setCategories] = useState();

  useEffect(() => {
    setCategories(
      Array.isArray(JSON.parse(localStorage.getItem(KEY)))
        ? JSON.parse(localStorage.getItem(KEY))
        : []
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(categories));
  }, [categories]);

  return [categories, setCategories];
}
