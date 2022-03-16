import { configureStore} from '@reduxjs/toolkit';
import { reducer } from './slices/RootSlice';

export const store = configureStore({
    reducer,
    devTools: true
})

// Redux Store exists as it's own kind of state that we can call and update from multiple components