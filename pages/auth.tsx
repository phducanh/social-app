import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const withoutAuth = ["/login", "/register", "/forgot-password"];

export default function Auth({ children }) {
  const router = useRouter();
  const userInfo = useSelector((state: any) => state.auth);
  console.log(withoutAuth.includes(router.pathname));

  if (!userInfo && withoutAuth.includes(router.pathname)) {
    return <>{children}</>;
  } else if (userInfo) {
    return <>{children}</>;
  } else {
    router.push("/login");
    return <></>;
  }
}
