import React from "react";
import { Modal } from "antd";
import { FileImageOutlined } from "@ant-design/icons";

import { Form, Input } from "antd";
import Button from "@/src/components/CustomButton/Button";
import { CloseOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export const PostModal = (props) => {
  const { setShow, sendRequest, user } = props;

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
  };

  const submitForm = (e) => {
    console.log("first", e);
    sendRequest();
  };
  return (
    <Modal
      visible={true}
      footer={null}
      // closable={false}
      className="rounded"
      closeIcon={
        <Button
          size="xs"
          className="mt-3"
          color="red"
          type="button"
          onClick={() => setShow(false)}
        >
          <CloseOutlined />
        </Button>
      }
    >
      <div className="">
        <div className="header font-extrabold text-xl mb-5">Đăng bài viết</div>
        <div className="info flex">
          <img
            src={user.avatar}
            alt="user-avatar"
            className="w-10 h-10 object-cover rounded-full"
          ></img>
          <div className="font-bold ml-3 text-base">{user.fullName}</div>
        </div>
        <div className="question-container mt-5">
          <Form
            layout={"vertical"}
            name="validate_other"
            {...formItemLayout}
            onFinish={submitForm}
            className="rounded-xl"
          >
            <Form.Item name={["content"]} className="mb-2">
              <TextArea
                // value={value}
                // onChange={onChange}
                className="rounded-xl pt-2"
                placeholder="Bạn đang nghĩ gì?"
                autoSize={{ minRows: 3, maxRows: 15 }}
              />
            </Form.Item>

            <div className="flex justify-end mb-3">
              <Button
                size="xs"
                className="mt-2"
                icon={<FileImageOutlined className="flex items-center" />}
              >
                Ảnh/Video
              </Button>
            </div>

            <Form.Item className="mb-0">
              <Button size="small" type="submit" className="w-full mt-1">
                Chia sẻ
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
