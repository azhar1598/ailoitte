import { setCategories } from "../actions";
import { getData } from "../services/api";
import { put } from "redux-saga/effects";

export function* fetchData() {
  try {
    const response = yield getData();
    const { data } = response;
    console.log("data response", data);
    yield put(setCategories(data));
  } catch (error) {
    console.log(error);
  }
}
