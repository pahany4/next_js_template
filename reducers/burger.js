import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  active_menu: false,
};

const burger_slice = createSlice({
  name: "burger",
  initialState: initialState,

  reducers: {
    toggle_active_menu(state) {
      state.active_menu = !state.active_menu;
      return state;
    },
    set_active_menu(state, action) {
      state.active_menu = action.payload;
    },
  },
});

export const {toggle_active_menu, set_active_menu} = burger_slice.actions;

export const burger = burger_slice.reducer;
