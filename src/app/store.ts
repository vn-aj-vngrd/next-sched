import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "./features/scheduleSlice";
import titleReducer from "./features/titleSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

export const store = configureStore({
  reducer: {
    scheduleReducer: persistReducer(persistConfig, scheduleReducer),
    titleReducer: titleReducer,
   },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
