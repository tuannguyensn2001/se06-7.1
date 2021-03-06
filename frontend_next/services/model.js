import SE_API from '@/config/network';

export const fetchMyModel = () => {
    return SE_API.get('/v1/models');
};

export const fetchUpdateModel = (id, data, query = {}) => {
    return SE_API.put(`/v1/models/${id}`, data, {
        params: query,
    });
};

export const fetchDeleteModel = (id) => {
    return SE_API.delete(`/v1/models/${id}`);
};

export const fetchModel = (id) => {
    return SE_API.get(`/v1/models/${id}`);
};

export const fetchPublishModel = (id) => {
    return SE_API.put(`/v1/models/${id}/publish`);
};

export const fetchUpdateCollectionModel = (id, data) => {
    return SE_API.put(`/v1/models/${id}/collections`, data)
}

export const fetchSuggestModel = () => {
    return SE_API.get('/v1/models/suggest');
}