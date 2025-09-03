import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { toast: null as null | { type: 'success' | 'error' | 'info', message: string } },
    reducers: {
        showToast(state, action) {
            state.toast = action.payload;
        },
        clearToast(state) {
            state.toast = null;
        }
    }
});

export const { showToast, clearToast } = uiSlice.actions;
export default uiSlice.reducer;
