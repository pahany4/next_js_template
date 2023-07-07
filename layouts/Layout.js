import React, {useEffect} from "react";
import {ScrollToTop} from "./scroll-to-top";
import {useDispatch} from "react-redux";
import {useSessionContext} from "supertokens-auth-react/recipe/session";
import {set_is_session} from "../reducers/auth";
import {useTokenUpdate} from "../hooks/useTokenUpdate";
import {getMe} from "./get-me";

const Layout = ({children}) => {

  const dispatch = useDispatch();
  const sessionContext = useSessionContext();

  useEffect(() => {
    if (sessionContext.loading) {
      return;
    }
    if (!sessionContext.loading && sessionContext.doesSessionExist) {
      dispatch(set_is_session(true));
    } else {
      dispatch(set_is_session(false));
    }
  }, [sessionContext?.loading, sessionContext?.doesSessionExist]);

  /** Обновление jwt токенов */
  useTokenUpdate();

  /** Запрос личных данных */
  getMe();

  return (
    <div className={"root"}>
      <main className={"main"}>
        {children}
      </main>
      <ScrollToTop/>
    </div>
  );
};

export default Layout;
