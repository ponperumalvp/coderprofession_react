import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { reviewReducer } from "./reviewSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const Store = configureStore({
  reducer: {
    review: reviewReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);
