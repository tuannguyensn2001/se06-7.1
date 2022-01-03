import SE_API from '@/config/network';

export const fetchModelComments = (id) => {
  return SE_API.get(`/v1/comments/${id}`);
};
