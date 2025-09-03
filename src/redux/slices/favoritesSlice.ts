import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const favSlice = createSlice({
    name: 'favorites',
    initialState: { ids: [] as string[] },
    reducers: {
        toggleFavorite(state, action: PayloadAction<string>) {
            const id = action.payload;
            const i = state.ids.indexOf(id);
            if (i >= 0) state.ids.splice(i, 1);
            else state.ids.push(id);
        },
        clearFavorites(state) {
            state.ids = [];
        }
    }
});

export const { toggleFavorite, clearFavorites } = favSlice.actions;
export default favSlice.reducer;
