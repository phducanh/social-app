import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Button from "@/src/components/CustomButton/Button";
import { useRouter } from "next/router";
import { Form, Input, Checkbox } from "antd";
import { CustomModal } from "@components/CustomModal";
import { PostResetPassword } from "@/src/api/post-services";

export default function Login() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const onFinish = (values) => {
    const { code, id } = router.query;
    console.log("val", values, code);
    PostResetPassword({ code, id, newPassword: values.newPassword }).then(
      (res) => {
        console.log("res", res);
        setShowModal(true);
      }
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login w-1/2  md:w-2/3 lg:w-[500px] mx-auto py-20 px-[65px] bg-[#F7F8FC] my-[10%]">
      <h1 className="text-center text-2xl font-bold text-primary mb-16">
        {t(`common:changePassword`)}
      </h1>
      {showModal && (
        <CustomModal isSuccess={true} type="change-password-success" />
      )}
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
        <label htmlFor="newPassword" className="">
          {t(`common:password`)}
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
            <Button size="small" type="submit" className="bg-primary py-2 px-7">
              <span className="font-bold tracking-wider">
                {t(`common:changePassword`)}
              </span>
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
