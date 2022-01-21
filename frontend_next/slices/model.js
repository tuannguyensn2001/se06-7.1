import {createSlice} from "@reduxjs/toolkit";

const ModelSlice = createSlice({
    name: 'model',
    initialState: {
        current: null
    },
    reducers: {
        setModel(state, action) {
            state.current = action.payload;
        },
        addCollectionToModel(state, action) {
            state.current.collections.push({
                id: Number(action.payload)
            });
        }
    }
})

const ModelReducer = ModelSlice.reducer;

export const {setModel, addCollectionToModel} = ModelSlice.actions;

export default ModelReducer;