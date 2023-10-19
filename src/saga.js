import { takeEvery } from "redux-saga/effects";

import { getReviewSaga } from "./Review/reviewSaga";

export default function* rootSaga() {
  yield takeEvery("GET-REVIEW-SAGA", getReviewSaga);
}
