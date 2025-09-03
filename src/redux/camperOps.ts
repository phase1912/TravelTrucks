import axios from 'axios';
import { CampersQuery } from '@/models/campersQuery';
import { Camper } from '@/models/camper';
import { createAsyncThunk } from '@reduxjs/toolkit';

const http = axios.create({
    baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
    timeout: 12000
});

export const fetchCampers = createAsyncThunk('campers/fetch', async (q: CampersQuery) => {
    const data = await fetchCampersApi(q);
    return data;
});

export const fetchCamperById = createAsyncThunk('campers/fetchById', async (id: string) => {
    const data = await fetchCamperByIdApi(id);
    return data;
});

async function fetchCampersApi(q: CampersQuery) {
    const params: Record<string, any> = {};
    if (q.page) params.page = q.page;
    if (q.limit) params.limit = q.limit;
    if (q.location) params.location = q.location;
    if (q.form) params.form = q.form;
    if (q.transmission) params.transmission = q.transmission

    ;
    (['AC', 'kitchen', 'bathroom', 'TV', 'radio', 'refrigerator', 'microwave', 'gas', 'water'] as const).forEach(k => {
        const v = (q as any)[k];
        if (v !== undefined) (params as any)[k] = v;
    });
    const res = await http.get('/campers', { params });
    return res.data;
}

async function fetchCamperByIdApi(id: string) {
    const res = await http.get(`/campers/${id}`);
    return res.data as Camper;
}