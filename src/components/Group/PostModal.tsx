import React from "react";
import { Modal } from "antd";
import { FileImageOutlined } from "@ant-design/icons";

import { Form, Button, Input } from "antd";
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
    <Modal visible={true} footer={null} closable={false}>
      <div className="">
        <div className="header font-bold text-lg mb-5">Đăng bài viết</div>
        <div className="info flex">
          <img
            src={user.avatar}
            alt="user-avatar"
            className="w-10 h-10 object-cover rounded-full"
          ></img>
          <div className="font-bold ml-3">{user.fullName}</div>
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
                // placeholder=""
                autoSize={{ minRows: 3, maxRows: 15 }}
              />
            </Form.Item>

            <div className="flex justify-end mb-3">
              <Button
                icon={<FileImageOutlined />}
                className="rounded-3xl bg-[#C6FAF0]"
              >
                Ảnh/Video
              </Button>
            </div>

            <Form.Item className="">
              <div className="flex">
                <Button
                  htmlType="submit"
                  className="ml-auto block rounded bg-primary text-white font-bold"
                >
                  Đăng
                </Button>
                <Button
                  className="ml-3 rounded bg-red-400 font-bold"
                  htmlType="button"
                  onClick={() => setShow(false)}
                >
                  Huỷ
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
