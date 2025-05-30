import { createSlice, configureStore } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {},
  reducers: {
    toggleFavorite: (state, action) => {
      const user = action.payload;
      if (state[user.login]) {
        delete state[user.login];
      } else {
        state[user.login] = user;
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export const store = configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
  },
}); 