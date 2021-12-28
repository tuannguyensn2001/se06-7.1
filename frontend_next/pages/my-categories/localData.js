const KEY = 'CATEGORIES_VALUE';

const get = () => {
  return typeof window !== 'undefined'
    ? JSON.parse(window.localStorage.getItem(KEY))
    : [];
};

const set = (data) => {
  window.localStorage.setItem(KEY, JSON.stringify(data));
};

export { set, get };
