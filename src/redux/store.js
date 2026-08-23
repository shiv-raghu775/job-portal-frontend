import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";
import companySlice from "./companySlice";
import applicationSlice from "./applicationSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const storage = {
    getItem: async (key) => {
        return localStorage.getItem(key);
    },

    setItem: async (key, value) => {
        localStorage.setItem(key, value);
    },

    removeItem: async (key) => {
        localStorage.removeItem(key);
    },
};

// Auth ke andar sirf user persist hoga
const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["user"],
};

const persistedAuthReducer = persistReducer(
    authPersistConfig,
    authSlice
);

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    job: jobSlice,
    company: companySlice,
    application: applicationSlice,
});

const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export default store;