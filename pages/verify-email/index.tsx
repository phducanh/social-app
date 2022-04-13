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
  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const { code, id } = router.query;
    if (code) {
      VerifyUser({ code, id }).then((res) => {
        console.log("res", res);
        if (res.success) {
          setIsVerified(true);
        }
      });
    }

    // .then(() => router.push("/login"));
  }, [router.query]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="register w-1/2  md:w-2/3 lg:w-[500px] mx-auto py-20 px-[65px] bg-[#F7F8FC] my-[10%]">
      <h1 className="text-center text-2xl font-bold text-[#3BDEC1] mb-16">
        Xác minh tài khoản
      </h1>
      {true && (
        <div className="text-center font-bold">
          Tài khoản được xác minh thành công
        </div>
      )}
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
