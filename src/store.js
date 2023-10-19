import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { reviewReducer } from "./Review/reviewSlice";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    review: reviewReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);
