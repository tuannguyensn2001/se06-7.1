import { createSlice } from '@reduxjs/toolkit';

const CollectionSlice = createSlice({
  name: 'collections',
  initialState: {
    list: [],
  },
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
    addCollection(state, action) {
      state.list.push(action.payload);
    },
  },
});

const CollectionReducer = CollectionSlice.reducer;

export const { setList, addCollection } = CollectionSlice.actions;

export default CollectionReducer;
