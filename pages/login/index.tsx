import React, { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Form, Input, Button, Checkbox } from "antd";
import Link from "next/link";
import { SignIn } from "@/src/api/post-services";
import { useDispatch, useSelector } from "react-redux";
import { clearUserInfo, setUserInfo } from "@/reducer/auth.slice";

export default function Login() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const router = useRouter();

  const userInfo = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (userInfo?.id) {
      router.push("/");
    }
  }, []);
  const onFinish = (values) => {
    console.log("Success:", values);
    SignIn(values)
      .then((res) => {
        console.log("respo", res);
        dispatch(setUserInfo(res));
      })
      .catch(() => {
        dispatch(clearUserInfo());
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login w-1/2  md:w-2/3 lg:w-[500px] mx-auto py-20 px-[65px] bg-[#F7F8FC] my-[10%]">
      <h1 className="text-center text-2xl font-bold text-primary mb-16">
        {t(`common:login`)}
      </h1>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Email adress"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email adress!",
            },
          ]}
        >
          <Input className="px-4 py-2.5" />
        </Form.Item>
        <label htmlFor="password" className="">
          Password
        </label>
        <Form.Item
          name="password"
          className="mb-2"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="px-4 py-2.5" />
        </Form.Item>
        <Link href={`/forgot-password`}>
          <a className="block text-[#5770FF] text-right">
            {t(`common:forgotPassword`)}
          </a>
        </Link>
        <div className="flex justify-between mt-9  mb-6 border-[#E4E4E4] border-b items-center pb-6">
          <Link href={`/register`}>
            <a className="text-primary font-bold">
              {t(`common:createAccount`)}
            </a>
          </Link>
          <Form.Item className="mb-0">
            <button type="submit" className="bg-primary py-2 px-11">
              <span className="font-bold tracking-wider">
                {t(`common:next`)}
              </span>
            </button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
