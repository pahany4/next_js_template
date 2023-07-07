import {set_error_message, set_error_status, set_loading} from "../reducers/errors-server";
import axios from "axios";
import {set_user} from "../reducers/user";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export const getMe = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const tokens = useSelector((state) => state.auth.tokens);

  /** Запрос личных данных */
  const get_me = () => {
    dispatch(set_error_message(null))
    dispatch(set_error_status(null))
    dispatch(set_loading(true))
    return axios
      .get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/users/me/`, {
        headers: {
          authorization: tokens.access ? `Bearer ${tokens.access}` : ""
        }
      })
      .then((res) => {
        dispatch(set_loading(false))
        dispatch(set_user(res.data));
      })
      .catch(() => {
        dispatch(set_loading(false))
        dispatch(set_error_message("Что-то пошло не так"))
      });
  };
  useEffect(() => {
    if (!user.user_id && tokens.access) {
      get_me()
    }
  }, [user.user_id, tokens.access])

}