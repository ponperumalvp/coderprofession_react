import { call, put } from "redux-saga/effects";
import axios from "axios";
import { setErrMsg, getReview } from "./reviewSlice";

const url = "http://localhost:4000/reviews";

const callAxios = async ({ url, method, data }) => {
  return await axios({ url, method, data });
};

export function* getReviewSaga() {
  try {
    let { data } = yield call(() => {
      return callAxios({ url: url });
    });
    yield put(getReview(data));
  } catch (err) {
    yield put(setErrMsg({ errMsg: err.message }));
  }
}
