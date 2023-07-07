import React from "react";
import s from "./spinner.module.css";

const Spinner = ({size = "25px"}) => {
  return (
    <div>
      <svg style={{width: size, height: size}} className={s.spinner} viewBox="0 0 50 50">
        <circle className={s.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"/>
      </svg>
    </div>
  )
}
export default Spinner
