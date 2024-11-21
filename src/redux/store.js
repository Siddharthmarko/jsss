import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import awardReducer from "./user/userAward";

const rootReducer = combineReducers({
  user: userReducer,
  awardAchievement: awardReducer,
});

const persistConfig = { 
  key: "root",
  version: 1,
  storage,
};

const SET_FORM_DATA = "SET_FORM_DATA";

export const setFormData = (formData) => ({
  type: SET_FORM_DATA,
  payload: formData,
});

const formDataReducer = (state = null, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return action.payload;
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
