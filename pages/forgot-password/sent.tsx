import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function ForgotPassword() {
  const { t } = useTranslation();
  const router = useRouter();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login w-1/2  md:w-2/3 lg:w-[500px] mx-auto py-20 px-[65px] bg-[#F7F8FC] my-[10%]">
      <h1 className="text-center text-2xl font-bold text-primary mb-11">
        {t(`common:forgotPassword2`)}
      </h1>
      <p className="mb-40 font-medium text-center">
        {t(`common:sentPwdConfirm`)}
        <br />
        <span className="font-bold">{`ducanhpham@gmail.com.`}</span>
        {t(`common:checkMail`)}
      </p>

      <div className="text-center">
        {t(`common:didnotReceive`)}{" "}
        <a
          className="text-[#3b82f5] underline hover:underline underline-offset-1"
          href="/forgot-password/resend"
        >
          {" "}
          {t(`common:resend`)}
        </a>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="bg-primary py-2.5 px-7"
          onClick={() => router.push("/forgot-password/resend")}
        >
          <span className="font-bold tracking-wider">{t(`common:resend`)}</span>
        </button>
      </div>
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
