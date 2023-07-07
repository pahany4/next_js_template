import axios from "axios";
import {useCallback, useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {set_error_data, set_error_message, set_error_status} from "../reducers/errors-server";

const useFetchAuth = (url, mock) => {
  const access = useSelector((state) => state.auth.tokens?.access);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState({status: null, data: null});
  const [options, setOptions] = useState({});

  const dispatch = useDispatch();

  const BASE_URL = !mock ? process.env.NEXT_PUBLIC_API_DOMAIN : "http://localhost:3001";

  const doFetch = useCallback((options = {}) => {
    //setResponse(null); // необходимо для корректной обработки серверных ошибок
    setOptions(options);
    setIsLoading(true);
    dispatch(set_error_status(null));
    dispatch(set_error_message(null));
    dispatch(set_error_data(null));
  }, []);

  useEffect(() => {
    let skipGetResponseAfterDestroy = false;
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: access ? `Bearer ${access}` : "",
          "Accept-Language": "ru-RU, ru;q=0.9",
        },
      },
    };
    if (!isLoading) {
      return;
    }
    if (!isLoading) {
      return;
    }
    // setError({ status: null, data: null });

    axios(`${BASE_URL}${url}`, requestOptions)
      .then((res) => {
        if (!skipGetResponseAfterDestroy) {
          setResponse(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (!skipGetResponseAfterDestroy) {
          setIsLoading(false);
          setResponse(null);
          if (!error.response) {
            setError((prev) => {
              prev.status = 0;
              prev.data = null;
              return prev;
            });
            dispatch(set_error_status("noWeb"));
            dispatch(set_error_message("Проверьте подключение к Интернету"));
          }

          if (error?.response?.data && error?.response?.status === 401) {
            localStorage.setItem("access", "");
            localStorage.setItem("refresh", "");
            //document.location.href = `${window.location?.protocol}//${window.location?.hostname}:${window.location?.port}/auth`;
          }

          if (error.response) {
            setError({
              ...error,
              status: error.response.status,
              data: error.response.data,
            });
            dispatch(set_error_status(error.response.status));
            dispatch(set_error_data(error.response.data));
            setError((prev) => {
              prev.status = error.response.status;
              prev.data = error.response.data;
              return prev;
            });
          }
        }
      });

    return () => {
      skipGetResponseAfterDestroy = true;
    };
  }, [isLoading, options, url]);

  return [response, isLoading, error, doFetch];
};

export default useFetchAuth;
