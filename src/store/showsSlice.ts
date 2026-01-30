import { createSlice } from '@reduxjs/toolkit';
import {type Show } from '../types';
import { fetchShows, fetchShowById } from './showsThunks';
import {type RootState } from '../app/store';

interface ShowsState {
  items: Show[];
  selected: Show | null;
  loading: boolean;
}

const initialState: ShowsState = {
  items: [],
  selected: null,
  loading: false,
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    clearShows: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchShows.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchShows.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchShowById.fulfilled, (state, { payload }) => {
        state.selected = payload;
      });
  },
});

export const { clearShows } = showsSlice.actions;
export const showsReducer = showsSlice.reducer;

export const selectShows = (state: RootState) => state.shows.items;
export const selectSelectedShow = (state: RootState) => state.shows.selected;
export const selectLoading = (state: RootState) => state.shows.loading;
