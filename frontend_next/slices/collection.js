import {createSlice} from '@reduxjs/toolkit';

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
        updateCollection(state, action) {
            const {id} = action.payload;
            const index = state.list?.findIndex(item => Number(item.id) === Number(id));

            state.list[index] = action.payload;

        }
    },
});

const CollectionReducer = CollectionSlice.reducer;

export const {setList, addCollection,updateCollection} = CollectionSlice.actions;

export default CollectionReducer;
