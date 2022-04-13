import React, { useState } from "react";
import { Modal } from "antd";
import { FileImageOutlined } from "@ant-design/icons";

import { Form, Input, Upload } from "antd";
import Button from "@/src/components/CustomButton/Button";
import { CloseOutlined } from "@ant-design/icons";

const { TextArea } = Input;

export const PostModal = (props) => {
  const { setShow, sendRequest, user } = props;
  const [listImageFile, setListImageFile] = useState([]);
  const [showUpload, setShowUpload] = useState(false);
  const formItemLayout = {
    labelCol: {
      span: 24,
    },
  };

  const submitForm = (e) => {
    console.log("first", e, listImageFile);
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
            className="w-10 h-10 object-cover rounded-full p-[1px] bg-primary"
          ></img>
          <div className="font-bold ml-3 text-base text-gray-500">{user.fullName}</div>
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

            {
              <Form.Item name="imageList">
                <Upload
                  name="imageList"
                  listType="picture"
                  maxCount={1}
                  fileList={listImageFile}
                  onRemove={(file) => {
                    setListImageFile(
                      listImageFile.filter(function (item) {
                        return item !== file;
                      })
                    );
                  }}
                  beforeUpload={(file: any) => {
                    if (
                      file.type.includes("image") ||
                      file.type.includes("video")
                    ) {
                      setListImageFile([...listImageFile, file]);
                    }

                    return false;
                  }}
                >
                  <div className="flex justify-end mb-3">
                    <Button
                      size="xs"
                      className="mt-2"
                      type="button"
                      icon={<FileImageOutlined className="flex items-center" />}
                      onClick={() => {
                        setShowUpload(!showUpload);
                      }}
                    >
                      Thêm Ảnh/Video
                    </Button>
                  </div>
                </Upload>
              </Form.Item>
            }

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
