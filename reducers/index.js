import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import errors_server from "./errors-server";
import {burger} from "./burger";
import {auth} from "./auth";
import {user} from "./user";

const rootReducer = combineReducers({
  auth,
  burger,
  errors_server,
  user,
});

const persistConfig = {
  key: "root",
  storage,
  /** Не сохранять при обновлении страницы */
  blacklist: [
    "auth",
    "errors_server",
    "burger",
    "user",
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =
  configureStore({
    reducer: persistedReducer,
    /** Отключение redux devtools в production */
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });


/**
 * Раскомментировать и импортировать при необходимости использования сохранения в localstorage.
 * Оборачиваем компоненты <PersistGate loading={null} persistor={persistor}></<PersistGate>,
 * в которых необходимо сохранить состояние при перезагрузки страницы.
 * При оборачивании всего приложения PersistGate next.js не сбилдит html-теги,
 * а поместит весь контент в тег <script>, что хуже для SEO.
 * */
//export const persistor = persistStore(store);