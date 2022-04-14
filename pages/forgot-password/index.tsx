import { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Form, Input } from "antd";
import { ResetPassword } from "@/src/api/post-services";
import { CustomModal } from "@components/CustomModal";
import Button from "@/src/components/CustomButton/Button";

export default function ForgotPassword() {
  const { t } = useTranslation();
  const [resetModal, setResetModal] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    ResetPassword(values).then((res) => {
      if (res.success) {
        setResetModal(true);
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login w-1/2  md:w-2/3 lg:w-[500px] mx-auto py-20 px-[65px] bg-[#F7F8FC] my-[10%]">
      {resetModal && <CustomModal type="reset-password" isSuccess={true} />}
      <h1 className="text-center text-2xl font-bold text-primary mb-11">
        {t(`common:forgotPassword2`)}
      </h1>
      <p className="mb-6 font-medium">
        {t(`common:willSend`)}
        <br />
        {t(`common:willSend2`)}
      </p>
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
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email adress!",
            },
          ]}
        >
          <Input
            placeholder={t(`common:yourEmailAddress`)}
            className="px-4 py-2.5"
          />
        </Form.Item>
        <div className="flex justify-center mt-[132px]">
          <Form.Item className="mb-5">
            <Button
              size="small"
              type="submit"
              className="bg-primary py-2.5 px-7"
            >
              <span className="font-bold tracking-wider">
                {t(`common:next`)}
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
