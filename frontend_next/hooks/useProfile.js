import { useEffect, useLayoutEffect, useState } from 'react';

export default function useProfile() {
  const KEY = 'USER_INFORMATION';
  const [data, setData] = useState();

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem(KEY);
      setData(savedData !== null ? JSON.parse(savedData) : []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(data));
  }, [data]);

  return [data, setData];
}
