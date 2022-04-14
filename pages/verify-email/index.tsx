import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Form, Input, Checkbox } from "antd";
import Link from "next/link";
import Button from "@/src/components/CustomButton/Button";
import { useRouter } from "next/router";
import { VerifyUser } from "@/src/api/post-services";

const VerifyEmail = () => {
  const { t } = useTranslation();
  const [isVerified, setIsVerified] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const router = useRouter();
  const handleErr = (err) => {
    switch (err) {
      case "CODE_HAS_EXPIRED":
        setErrMsg("Link đã hết hạn");
        return;
      default:
        setErrMsg("Lỗi trong quá trình xác thực !");
        return;
    }
  };
  useEffect(() => {
    const { code, id } = router.query;
    if (code) {
      VerifyUser({ code, id }).then((res) => {
        console.log("res", res);
        if (res.success) {
          setIsVerified("confirmed");
        } else {
          setIsVerified("not-confirmed");
          handleErr(res.reason);
        }
      });
    }

    // .then(() => router.push("/login"));
  }, [router.query]);

  return (
    <div className="register w-1/2  md:w-2/3 lg:w-[500px] mx-auto py-12 px-12 bg-[#F7F8FC] my-[10%]">
      <h1 className="text-center text-2xl font-bold text-[#3BDEC1] mb-6">
        Xác minh tài khoản
      </h1>
      {isVerified === "confirmed" ? (
        <div className="text-center font-bold mb-2">
          Tài khoản được xác minh thành công
        </div>
      ) : isVerified === "not-confirmed" ? (
        <div className="text-center font-bold mb-2">
          Tài khoản chưa được xác minh
        </div>
      ) : (
        <></>
      )}
      {errMsg !== "" && (
        <div className="text-center font-bold mb-2 text-red-500">{errMsg}</div>
      )}
      <Link href={`/login`}>
        <a
          className={`m-1 mt-3 rounded-lg active:bg-[gray] text-base font-semibold `}
        >
          <Button
            className="flex justify-center w-full"
            size="small"
            variant="primary"
            type="submit"
            color="green"
          >
            Đăng nhập
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default VerifyEmail;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
