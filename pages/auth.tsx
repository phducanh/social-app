import React from "react";
import { useRouter } from "next/router";

import { store } from "@/reducer/store";

const withoutAuth = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

export default function Auth({ children }) {
  const router = useRouter();
  //const userInfo = useSelector((state: any) => state.auth);
  const userInfo = store.getState().auth;

  if (!userInfo && withoutAuth.includes(router.pathname)) {
    return <>{children}</>;
  } else if (userInfo && withoutAuth.includes(router.pathname)) {
    router.push("/");
    return <></>;
  } else if (userInfo && !withoutAuth.includes(router.pathname)) {
    return <>{children}</>;
  } else if (!userInfo && !withoutAuth.includes(router.pathname)) {
    router.push("/login");
    return <></>;
  }
}
