import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { store } from "@/reducer/store";
import { Form, Input } from "antd";
import Button from "@/src/components/CustomButton/Button";

import { CustomModal } from "@components/CustomModal";
import { ChangePassword } from "@/src/api/post-services";

export default function Login() {
  const { t } = useTranslation();
  const { auth } = store.getState();
  const user = auth.data;
  const [showModal, setShowModal] = useState(false);
  const onFinish = (values) => {
    ChangePassword(values, user)
      .then((res) => {
        if (res.success) {
          console.log(res.data);
          setShowModal(true);
        }
      })
      .catch((err) => {
        console.log("Loi roi");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login w-1/2  md:w-2/3 lg:w-[500px] mx-auto py-20 px-[65px] bg-[#F7F8FC] my-[10%]">
      <h1 className="text-center text-2xl font-bold text-primary mb-16">
        {t(`common:changePassword`)}
      </h1>
      {showModal && <CustomModal isSuccess={true} type="change-password" />}
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
        <label htmlFor="password" className="">
          {t(`common:password`)}
        </label>
        <Form.Item
          name="oldPassword"
          rules={[
            {
              required: true,
              message: t(`common:pleaseInputPassword`),
            },
          ]}
        >
          <Input.Password className="px-4 py-2.5" />
        </Form.Item>

        <label htmlFor="newPassword" className="">
          {t(`common:currentPassword`)}
        </label>
        <Form.Item
          name="newPassword"
          rules={[
            {
              required: true,
              message: t(`common:pleaseInputPassword`),
            },
          ]}
        >
          <Input.Password className="px-4 py-2.5" />
        </Form.Item>
        <label htmlFor="cf-password" className="">
          {t(`common:confirmPassword`)}
        </label>
        <Form.Item
          name="cf-password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: t(`common:pleaseInputPassword`),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password className="px-4 py-2.5" />
        </Form.Item>
        <div className="flex justify-center mt-16">
          <Form.Item>
            {/* <button type="submit" className="bg-primary py-2 px-7">
              <span className="font-bold tracking-wider">
                {t(`common:changePassword`)}
              </span>
            </button> */}
            <Button size="small" variant="primary" type="submit">
              {t(`common:changePassword`)}
            </Button>
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
