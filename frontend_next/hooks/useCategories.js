import { useEffect, useState } from 'react';

export default function useCategories() {
  const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   setCategories(
  //     Array.isArray(JSON.parse(localStorage.getItem('CATEGORIES_VALUE')))
  //       ? JSON.parse(
  //           localStorage.getItem(localStorage.getItem('CATEGORIES_VALUE'))
  //         )
  //       : []
  //   );
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem('CATEGORIES_VALUE', JSON.stringify(categories));
  // }, [categories]);

  return [categories, setCategories];
}
