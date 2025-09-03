import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './slices/campersSlice';
import filtersReducer from './slices/filtersSlice';
import favoritesReducer from './slices/favoritesSlice';
import uiReducer from './slices/uiSlice';

function loadFavs(): string[] {
    try {
        const raw = localStorage.getItem('favorites');
        if (!raw) return [];
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

export const store = configureStore({
    reducer: {
        campers: campersReducer,
        filters: filtersReducer,
        favorites: favoritesReducer,
        ui: uiReducer
    },
    preloadedState: {
        favorites: { ids: loadFavs() }
    }
});

store.subscribe(() => {
    const ids = store.getState().favorites.ids;
    localStorage.setItem('favorites', JSON.stringify(ids));
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch