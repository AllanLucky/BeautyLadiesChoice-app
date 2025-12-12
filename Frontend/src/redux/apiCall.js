import { userRequest } from "../RequestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    console.error("Login error:", error);
    dispatch(loginFailure());
  }
};
