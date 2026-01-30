import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../api/axiosApi';
import {type SearchShow, type Show } from '../types';

export const fetchShows = createAsyncThunk<Show[], string>(
  'shows/fetch',
  async (query) => {
    const { data } = await axiosApi.get<SearchShow[]>(
      `/search/shows?q=${query}`
    );
    return data.map(item => item.show);
  }
);

export const fetchShowById = createAsyncThunk<Show, string>(
  'shows/fetchById',
  async (id) => {
    const { data } = await axiosApi.get<Show>(`/shows/${id}`);
    return data;
  }
);
