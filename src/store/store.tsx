import { configureStore , combineReducers} from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
};

const reducers = combineReducers({
    cartSlice: cartSlice
})

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});


export default store;

