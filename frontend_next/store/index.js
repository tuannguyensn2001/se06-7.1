import {configureStore} from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import authReducer from '@/features/auth/slices';
import CollectionReducer from '@/slices/collection';
import ModelReducer from "@/slices/model";

const store = configureStore({
    reducer: {
        auth: authReducer,
        collections: CollectionReducer,
        model: ModelReducer
    },
});

export default store;
