import { createSlice } from '@reduxjs/toolkit';

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    open: false,
  },
  reducers: {
    toggle(state) {
      state.open = !state.open;
    },
  },
});

export const { toggle } = drawerSlice.actions;

export default drawerSlice.reducer;
