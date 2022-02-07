import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Form, Input, Button, Checkbox } from "antd";
import Link from "next/link";

export default function Login() {
  const { t } = useTranslation();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login w-1/2  md:w-2/3 lg:w-[500px] mx-auto py-20 px-[65px] bg-[#F7F8FC] my-[10%]">
      <h1 className="text-center text-2xl font-bold text-[#3BDEC1] mb-16">
        Login
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
        <div className="flex justify-between mt-9 border-b mb-6">
          <Link href={`/register`}>
            <a className="text-[#3BDEC1] font-bold">
              {t(`common:createAccount`)}
            </a>
          </Link>
          <Form.Item>
            <button type="submit" className="bg-[#3BDEC1] py-2 px-11">
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
