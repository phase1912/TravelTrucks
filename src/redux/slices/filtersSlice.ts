import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filters } from '@/models/filter';
import { RootState } from '../store';


const initial: Filters = {
    location: '',
    form: '',
    transmission: '',
    features: {
        AC: false, automatic: false, kitchen: false, TV: false, bathroom: false
    }
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState: initial,
    reducers: {
        setLocation(s, a: PayloadAction<string>) {
            s.location = a.payload;
        },
        setForm(s, a: PayloadAction<string>) {
            s.form = a.payload;
        },
        setTransmission(s, a: PayloadAction<string>) {
            s.transmission = a.payload;
        },
        toggleFeature(s, a: PayloadAction<keyof Filters['features']>) {
            s.features[a.payload] = !s.features[a.payload];
            
            if(a.payload === 'automatic') {
                s.transmission = s.features[a.payload] ? 'automatic' : '';
            }
        },
        resetFilters() {
            return initial;
        }
    }
});

export const { setLocation, setForm, setTransmission, toggleFeature, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectFilters = (s: RootState) => s.filters;


