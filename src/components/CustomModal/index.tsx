import { Modal } from "antd";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Button from "@/src/components/CustomButton/Button";

export const CustomModal = (props) => {
  const { t } = useTranslation();
  const router = useRouter();

  const { isSuccess, isFailed, isPending, type } = props;
  return (
    <Modal visible={true} footer={null} closable={false}>
      <div className="flex flex-col mt-2 mb-4">
        {isSuccess && (
          <img
            className="w-[56px] mx-auto mb-9"
            src="/images/modal/success.svg"
          />
        )}
        {type === "change-password" && (
          <div className="text-lg font-bold text-center">
            {t(`common:passwordReseted`)}
          </div>
        )}
        {type === "change-password-success" && (
          <div className="text-lg font-bold text-center">
            Đổi mật khẩu thành công
          </div>
        )}
        {type === "reset-password" && (
          <div className="text-lg font-bold text-center">
            Kiểm tra email của bạn
          </div>
        )}

        <Button
          type="submit"
          size="small"
          className="bg-primary mt-14 py-2 px-7 self-center"
          onClick={() => router.push("/login")}
        >
          <span className="font-bold tracking-wider">{t(`common:login`)}</span>
        </Button>
      </div>
    </Modal>
  );
};
