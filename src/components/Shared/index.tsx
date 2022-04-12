import { Input } from "antd";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { FileImageOutlined } from "@ant-design/icons";
import { PostModal } from "@components/Group/PostModal";
import { getUserInfo } from "@utils/common";
import Button from "@/src/components/CustomButton/Button";

const author = {
  id: "123",
  name: "Mai Phương Chu",
  image:
    "https://anhdep123.com/wp-content/uploads/2021/05/avatar-mau-trang.jpg",
};

export const Shared = (props) => {
  const { title } = props;
  const { t } = useTranslation();
  const user = getUserInfo();
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <div
      aria-label="Shared"
      className="shadow-xl bg-[white] w-full p-2 pb-3 mr-2 rounded-xl"
    >
      {showPostModal && (
        <PostModal
          sendRequest={() => setShowPostModal(false)}
          user={user.user}
          setShow={setShowPostModal}
        />
      )}
      <div className="flex justify-start">
        <div
          aria-label="Avatar user"
          className="mr-[12px] mt-[10px] h-[36px] w-[36px]"
        >
          <img
            src={author.image}
            alt="author-img"
            className="h-full bg-gray-400 rounded-full"
          />
        </div>
        <div className="w-full">
          <Input
            type={"text"}
            placeholder="Bạn đang nghĩ gì?"
            className="placeholder:text-gray-500 rounded-xl w-full mt-[10px] py-3"
            onClick={() => setShowPostModal(true)}
          ></Input>
          <hr className="my-[10px]" />
          <div className="flex justify-start">
            <Button size="xs" className="rounded-3xl bg-[#C6FAF0]">
              <FileImageOutlined className="flex items-center"/>
              Ảnh/Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
