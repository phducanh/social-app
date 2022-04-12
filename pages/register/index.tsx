import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Form, Input, Checkbox } from "antd";
import Link from "next/link";
import Button from "@/src/components/CustomButton/Button";
import { useRouter } from "next/router";
import { SignUp } from "@/src/api/post-services";

export default function Register() {
  const { t } = useTranslation();

  const router = useRouter();
  const onFinish = (values) => {
    SignUp(values)
      .then((res) => console.log("res", res))
      .then(() => router.push("/login"));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="register w-1/2  md:w-2/3 lg:w-[500px] mx-auto py-20 px-[65px] bg-[#F7F8FC] my-[10%]">
      <h1 className="text-center text-2xl font-bold text-[#3BDEC1] mb-16">
        Tạo tài khoản mới
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
        <label htmlFor="fullName" className="font-bold">
          Tên người dùng
        </label>
        <Form.Item
          // label="Tên người dùng"
          name="fullName"
          rules={[
            {
              required: true,
              message: t(`common:pleaseInputUsername`),
            },
          ]}
        >
          <Input
            type={"text"}
            className="px-4 py-2.5"
            placeholder="Tên người dùng"
          />
        </Form.Item>
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <Form.Item
          // label="Email address"
          name="email"
          rules={[
            {
              required: true,
              message: t(`common:pleaseInputEmail`),
            },
          ]}
        >
          <Input
            type={"email"}
            className="px-4 py-2.5"
            placeholder="Địa chỉ email"
          />
        </Form.Item>

        <label htmlFor="password" className="font-bold">
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
          <Input.Password
            type={"password"}
            className="px-4 py-2.5"
            placeholder="Mật khẩu của bạn"
          />
        </Form.Item>

        <label htmlFor="cf-password" className="font-bold">
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
          <Input.Password
            className="px-4 py-2.5"
            placeholder="Xác nhận mật khẩu"
          />
        </Form.Item>

        <Checkbox>
          <p className="font-bold">
            {t(`common:acceptPrivacy`)}{" "}
            <Link href={`/terms-of-uses`}>
              <a className="text-primary">{t(`common:termsOfUses`)}</a>
            </Link>{" "}
            &{" "}
            <Link href={`/terms-of-uses`}>
              <a className="text-primary">{t(`common:privacyPolicy`)}</a>
            </Link>
          </p>
        </Checkbox>

        <div className="flex justify-center mt-9 border-b mb-6">
          <Form.Item>
            <Button
              size="small"
              variant="primary"
              type="submit"
              // onClick={() => {
              //   // handleJoinGroup(group._id, user);
              // }}
            >
              {t(`common:register`)}
            </Button>
            {/* <button type="submit" className="bg-[#3BDEC1] py-2 px-11">
              <span className="font-bold tracking-wider">
                
              </span>
            </button> */}
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
