import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  "last_name": "",
  "first_name": "",
  "patronymic": "",
  "email": "",
  "phone": null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    set_user(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },

  },

});

export const {
  set_user
} = userSlice.actions;

export const user = userSlice.reducer;

