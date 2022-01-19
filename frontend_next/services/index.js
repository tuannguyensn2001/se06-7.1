import SE_API from '@/config/network';

export const fetchUploadFile = (data) => {
    return SE_API.post('/v1/upload', data);
};

export const fetchMyFiles = () => {
    return SE_API.get('/v1/files');
}

export const fetchUpdateAuth = (data) => {
    return SE_API.put('/v1/auth', data);
}

export const fetchRegister = (data) => {
    return SE_API.post('/v1/auth/register', data);
}

export const fetchUpdatePassword = data => {
    return SE_API.put('/v1/auth/change-password', data);
}