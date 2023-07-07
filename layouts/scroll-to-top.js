import React, {useEffect, useState} from "react";
import cn from "classnames";

export const ScrollToTop = () => {
  const [show, set_show] = useState(false);

  const scrolling = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
    scrollY > 400 ? set_show(true) : set_show(false);
  }
  useEffect(() => {
    window.addEventListener("scroll", scrolling);
    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  const onClick = () => {
    //set_show(false)

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <button
      className={cn(
        "btn-up",
        !show && "btn-up_hide"
      )}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        className="back-to-top-icon"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 11l5-5m0 0l5 5m-5-5v12"
        ></path>
      </svg>
    </button>
  )
}