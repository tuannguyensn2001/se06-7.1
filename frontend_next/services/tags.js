import SE_API from '@/config/network';

export const fetchTags = () => {
  return SE_API.get('v1/tags/own');
};
