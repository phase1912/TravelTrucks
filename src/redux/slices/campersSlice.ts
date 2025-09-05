import { createSelector, createSlice } from '@reduxjs/toolkit';
import { State } from '@/models/state';
import { fetchCamperById, fetchCampers } from '@/redux/camperOps';
import { makeQueryKey, toQuery } from '@/utils/helpers';
import { selectFilters } from '@/redux/slices/filtersSlice';
import { RootState } from '../store';
import { CampersQuery } from '@/models/campersQuery';
import { Camper } from '@/models/camper';

const initial: State = { items: [], page: 1, hasMore: true, status: 'idle', totalItems: 0 };

const slice = createSlice({
    name: 'campers',
    initialState: initial,
    reducers: {
        resetResults(s) {
            s.items = [];
            s.page = 1;
            s.hasMore = true;
            s.status = 'idle';
            s.error = undefined;
            s.lastPage = undefined;
            s.totalItems = 0;
        },
        nextPage(s) {
            s.page += 1;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCampers.pending, (s, a) => {
                s.status = 'loading';
                s.activeRequestId = a.meta.requestId;
            })
            .addCase(fetchCampers.fulfilled, (s, a) => {
                if (a.meta.requestId !== s.activeRequestId) return;

                const q = a.meta.arg as CampersQuery;
                const page = q?.page ?? 1;
                const queryKey = makeQueryKey(q);
                const isNewQuery = queryKey !== s.lastQueryKey;
                const isNewPage = page !== s.lastPage;

                const newItems = a.payload.items as Camper[];

                if (isNewQuery || page === 1) {
                    s.items = newItems;
                } else if (isNewPage) {
                    s.items.push(...newItems);
                }

                s.hasMore = s.items.length < a.payload.total;
                s.status = 'succeeded';
                s.lastQueryKey = queryKey;
                s.lastPage = page;
                s.totalItems = a.payload.total;
            })
            .addCase(fetchCampers.rejected, (s, a) => {
                s.status = 'failed';
                s.error = a.error.message;
                s.hasMore = false;
            })
            .addCase(fetchCamperById.pending, (s) => {
                s.selected = undefined;
            })
            .addCase(fetchCamperById.fulfilled, (s, a) => {
                s.selected = a.payload;
            });
    }
});

export const { resetResults, nextPage } = slice.actions;
export default slice.reducer;

export const selectCampersPage = (s: RootState) => s.campers.page;

export const selectCampersItems = (s: RootState) => s.campers.items;

export const selectCampersStatus = (s: RootState) => s.campers.status;

export const selectHasMore = (s: RootState) => s.campers.hasMore;

export const selectTotalItems = (s: RootState) => s.campers.totalItems;

export const selectCampersQuery = createSelector(
    [selectFilters],
    (filters) => toQuery(filters)
);

