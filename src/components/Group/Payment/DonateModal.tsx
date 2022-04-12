import React from "react";
import { Modal, Row, Col, Space, Input } from "antd";
import { CheckboxQues } from "@components/Group/Question/CheckboxQues";
import { RatioQues } from "@components/Group/Question/RatioQues";
import { TextQues } from "@components/Group/Question/TextQues";
import { convertLongString } from "@utils/common";
import { useTranslation } from "next-i18next";
import { PlusOutlined } from "@ant-design/icons";

import { Form, Select, InputNumber, Button } from "antd";

const { Option } = Select;

export const DonateModal = (props) => {
  const { groupData, userData, setShow } = props;
  const { t } = useTranslation();

  const { TextArea } = Input;

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
  };

  const submitForm = (e) => {
    console.log("first", e);
  };
  return (
    <Modal visible={true} footer={null} closable={false}>
      <div className="">
        <div className="header  font-bold text-2xl text-center">Donate</div>
        <hr className="my-[10px]" />
        <Row className="group-info bg-[#FFCCFF] rounded-xl">
          <Col className="mr-4" lg={6}>
            <img
              className="block w-full object-cover w-20 h-20 rounded-xl"
              src="/images/background-group-default.png"
            ></img>
          </Col>
          <Col lg={17} className="flex-col flex justify-center">
            <div className="title font-extrabold">{groupData?.name}</div>
            <div className="infor text-gray-400 font-medium text-xs">
              <span className="mr-2">
                {groupData?.group_type == 0
                  ? "Nhom Rieng tu"
                  : "Nhom Cong khai"}
              </span>
              {"-"}
              <span className="ml-2">{groupData?.member}</span>
            </div>
          </Col>
        </Row>

        <div className=" mt-5 mx-5 font-bold">
          <div className="flex justify-between">
            <div>Người gửi:</div>
            <div className="font-bold text-[#15705F]">
              {userData?.user_name}
            </div>
          </div>
          <div className="flex justify-between">
            <div>Số xu hiện có:</div>
            <div className="font-bold text-[#15705F]">
              {userData?.user_coins === undefined ? 0 : userData?.user_coins} xu
            </div>
          </div>
          <div className="flex justify-between">
            <div>Địa chỉ nhận:</div>
            <div className="font-bold text-[#15705F]">{groupData.name}</div>
          </div>

          <hr className="my-4" />

          <div aria-label="" className="font-bold ">
            <Form
              layout={"vertical"}
              name="validate_other"
              onFinish={submitForm}
            >
              <Form.Item
                name=""
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <div className="flex justify-between">
                  <div>Số xu chuyển:</div>
                  <InputNumber
                    controls={false}
                    min={1}
                    max={userData?.user_coins}
                    name="coin_sent"
                    className="w-[300px]"
                  />
                </div>
              </Form.Item>
              <Form.Item name="">
                <div className="flex justify-between">
                  <div>Lời nhắn:</div>
                  <TextArea
                    rows={3}
                    placeholder="maxLength is 150"
                    maxLength={150}
                    className="w-[300px]"
                  />
                </div>
              </Form.Item>

              <hr className="my-2" />
              <Form.Item>
                <div className="flex justify-end">
                  <Button
                    htmlType="submit"
                    className="w-[100px] rounded-3xl font-bold border-2 bg-[#FFCCFF]"
                  >
                    Gửi
                  </Button>
                  <Button
                    className="ml-4 rounded-3xl font-bold border-2 bg-[#FFCCFF]"
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
      </div>
    </Modal>
  );
};
