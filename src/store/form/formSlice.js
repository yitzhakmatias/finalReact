import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    password: '',
    module: 'React Mod7',
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateForm: (state, action) => {
            return { ...state, ...action.payload };
        },
        clearForm: () => initialState,
    },
});

export const { updateForm, clearForm } = formSlice.actions;
export default formSlice.reducer;
