import SE_API from '@/config/network';

export const fetchCreateCollection = (data) => {
    return SE_API.post('/v1/collections', data);
};

export const fetchUpdateCollection = (id, data) => {
    return SE_API.put(`/v1/collections/${id}`, data);
}