import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from '@/features/auth/slices';
import CollectionReducer from '@/slices/collection';

const store = configureStore({
  reducer: {
    auth: authReducer,
    collections: CollectionReducer,
  },
});

export default store;
