import { Input, Row, Col } from "antd";
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
      className="shadow-xl bg-[white] w-full p-3 mr-2 rounded-xl"
    >
      {showPostModal && (
        <PostModal
          sendRequest={() => setShowPostModal(false)}
          user={user.user}
          setShow={setShowPostModal}
        />
      )}
      <Row className="w-full mb-2" align="middle" gutter={8}>
        <Col>
          <img
            src={user.user.avatar}
            alt="author-img"
            className="block max-w-full max-h-10 bg-primary rounded-full object-cover p-[1px]"
          />
        </Col>
        <Col flex={1} className="flex items-center">
          <Input
            type={"text"}
            placeholder="Bạn đang nghĩ gì?"
            className="placeholder:text-gray-500 rounded-xl w-full py-3"
            onClick={() => setShowPostModal(true)}
          ></Input>
        </Col>
      </Row>
      <div className="">
        <div className="w-full">
          <Button size="xs" className="rounded-3xl bg-[#C6FAF0]">
            <FileImageOutlined className="flex items-center" />
            Ảnh/Video
          </Button>
        </div>
      </div>
    </div>
  );
};
