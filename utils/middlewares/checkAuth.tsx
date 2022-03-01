import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/router";
// import { EnhancedStore } from "@reduxjs/toolkit";

export const WithAuthSync = (children, store) => {
//   const { children, store } = props;
  const { auth } = store.getState();

  //   const router = useRouter();

  if (auth) {
    return <div>{children}</div>;
  } else {
    // router.push("/signin");
    return <></>;
  }
}
