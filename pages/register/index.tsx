import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Form, Input, Button, Checkbox } from "antd";
import Link from "next/link";
import { CustomModal } from "@components/CustomModal";
import { useState } from "react";


export default function Register() {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    setShowModal(true);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="register w-1/2  md:w-2/3 lg:w-[500px] mx-auto py-20 px-[65px] bg-[#F7F8FC] my-[10%]">
      <h1 className="text-center text-2xl font-bold text-[#3BDEC1] mb-16">
        Create a new account
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
          label="User name"
          name="userName"
          rules={[
            {
              required: true,
              message: t(`common:pleaseInputUsername`),
            },
          ]}
        >
          <Input type={"text"} className="px-4 py-2.5" placeholder="User name" />
        </Form.Item>

        <Form.Item
          label="Email address"
          name="email"
          rules={[
            {
              required: true,
              message: t(`common:pleaseInputEmail`) ,
            },
          ]}
        >
          <Input type={"email"} className="px-4 py-2.5" placeholder="Your email address"/>
        </Form.Item>

        <label htmlFor="password" className="">
          {t(`common:password`)}
        </label>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: t(`common:pleaseInputPassword`),
            },
          ]}
        >
          <Input.Password type={"password"} className="px-4 py-2.5" placeholder="Your password"/>
          {/* <Popup trigger={<button> Click to open popup </button>} 
            position="right center">
              <div className=" border-solid w-1/3  md:w-2/3 lg:w-[300px] mx-auto py-[18px] px-[20px] bg-[#FFFF] my-[10%]">
                <p className="text-sm">
                  Password must have at least
                  <li>8 characters total in total</li>
                  <li>1 uppercase letter</li>
                  <li>1 lowercase letter</li>
                  <li>1 number</li>
                </p>
                
              </div>              
          </Popup> */}
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
            ,
            ({ getFieldValue }) => ({
              
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password className="px-4 py-2.5" placeholder="Confirm your password" />
        </Form.Item>

        <Checkbox>
          <p>
          {t(`common:acceptPrivacy`)} <Link href={`/terms-of-uses`}>
              <a className="text-[#5770FF] ">
                {t(`common:termsOfUses`)}
              </a>
            </Link> & <Link href={`/terms-of-uses`}>
              <a className="text-[#5770FF] ">
                {t(`common:privacyPolicy`)}
              </a>
            </Link>
          </p>         
        </Checkbox>

        <div className="flex justify-center mt-9 border-b mb-6">          
          <Form.Item>
            <button type="submit" className="bg-[#3BDEC1] py-2 px-11">
              <span className="font-bold tracking-wider">
                {t(`common:register`)}
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
