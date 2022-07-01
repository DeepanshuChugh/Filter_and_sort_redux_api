import * as types from "./actionType";
import axios from "axios";

export const getBooks = (params) => (dispatch) => {
  console.log("params" + params);
  dispatch({ type: types.GET_BOOKS_REQUEST });
  axios
    .get("/books", params)
    .then((res) =>
      dispatch({ type: types.GET_BOOKS_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_BOOKS_FAILURE }));
};
