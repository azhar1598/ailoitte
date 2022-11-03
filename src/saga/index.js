import { takeLatest } from "redux-saga/effects"
import { GET_CATEGORIES } from "../constants/actionTypes"
import { fetchData } from "./saga-handler"


export function* watcherSaga() {
    //widgets
    yield takeLatest(GET_CATEGORIES, fetchData)
}