import { Input, Button } from "antd";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { FileImageOutlined } from "@ant-design/icons";
import { PostModal } from "@components/Group/PostModal";
import { getUserInfo } from "@utils/common";

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
      className="shadow-xl bg-[white] w-full h-[120px] p-2 mr-2 rounded-xl"
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
            className="bg-gray-300 placeholder:text-gray-500 rounded-3xl text-[16px] w-full mt-[10px]"
            onClick={() => setShowPostModal(true)}
          ></Input>
          <hr className="my-[10px]" />
          <div className="flex justify-start">
            <Button
              icon={<FileImageOutlined />}
              className="rounded-3xl bg-[#C6FAF0]"
            >
              Ảnh/Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
