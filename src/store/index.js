import { configureStore } from '@reduxjs/toolkit';
import formSlice from './form/formSlice';

export const store = configureStore({
    reducer: {
        form: formSlice,
    },
});
