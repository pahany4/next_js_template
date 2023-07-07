import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  /** Статус */
  error_status: null,
  /** Сообщение ошибки */
  error_message: null,
  /** Полная информация из response.data */
  error_data: null,
  loading: false,
  loading_notification: false,
}
const errors_server = createSlice({
  name: 'errors-server',
  initialState: initialState,
  reducers: {
    /** Статус */
    set_error_status(state, action) {
      state.error_status = action.payload
    },
    /** Сообщение ошибки */
    set_error_message(state, action) {
      state.error_message = action.payload
    },
    /** Полная информация из response.data */
    set_error_data(state, action) {
      state.error_data = action.payload
    },
    set_loading(state, action) {
      state.loading = action.payload
    },
    set_loading_notification(state, action) {
      state.loading_notification = action.payload
    },

  },

});

export const {
  set_error_status, set_error_message,
  set_error_data, set_loading,
  set_loading_notification
} = errors_server.actions;

export default errors_server.reducer;
