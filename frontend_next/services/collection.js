import SE_API from '@/config/network';

export const fetchCreateCollection = (data) => {
  return SE_API.post('/v1/collections', data);
};