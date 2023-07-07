import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import axios from "axios";
import {set_access, set_access_supabase} from "../reducers/auth";
import {set_loading} from "../reducers/errors-server";


export const useTokenUpdate = () => {
  const dispatch = useDispatch();
  const is_session = useSelector((state) => state.auth.is_session);

  /** Токены */
  const tokens = useSelector((state) => state.auth.tokens);

  const get_jwt = useCallback(() => {
    dispatch(set_loading(true))
    //return jwt
    return axios
      .get(`${process.env.NEXT_PUBLIC_API_DOMAIN}/users/login/`)
      .then((res) => {
        dispatch(set_loading(false));
        dispatch(set_access_supabase(res.data.access_supabase));
        dispatch(set_access(res.data.access));
      })
      .catch(() => {
        dispatch(set_loading(false));
        dispatch(set_access_supabase(""));
        dispatch(set_access(""));
      });
  }, []);


  useEffect(() => {
    is_session && get_jwt();
  }, [is_session]);
  /** Обновление токенов */
  useEffect(() => {
    if (tokens.access_supabase) {
      const access_supabase = JSON?.parse(atob(tokens.access_supabase.split(".")[1]));
      const expires = new Date(access_supabase.exp * 1000).getTime() - Date.now() - 2 * 60 * 1000;
      setTimeout(() => {
        get_jwt();
      }, expires);
    }
  }, [tokens.access_supabase]);
};
