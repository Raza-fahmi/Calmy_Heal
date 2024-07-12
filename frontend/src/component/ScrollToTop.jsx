import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ paths }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (paths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname, paths]);

  return null;
};

export default ScrollToTop;
