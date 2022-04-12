import React from "react";
import { Modal, Row, Col, Space } from "antd";
import { CheckboxQues } from "@components/Group/Question/CheckboxQues";
import { RatioQues } from "@components/Group/Question/RatioQues";
import { TextQues } from "@components/Group/Question/TextQues";
import { convertLongString } from "@utils/common";
import { useTranslation } from "next-i18next";
import { PlusOutlined } from "@ant-design/icons";

import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
} from "antd";

const { Option } = Select;
var showUpgradeType = undefined;

export const ConfirmBill = (props) => {
  const { groupData, userData, upgrade_type, setShow } = props;
  const { t } = useTranslation();

  if (upgrade_type === undefined) {
    showUpgradeType = userData?.member_type == "member" ? 2 : 1;
  } else showUpgradeType = upgrade_type;

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
        <div className="header  font-bold text-lg text-center">
          Thông tin thanh toán
        </div>
        <hr className="my-[10px]" />
        <Row className="group-info bg-[#C6FAF0] rounded-xl">
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
            <div>Loại thành viên</div>
            <div>{showUpgradeType == 1 ? "Member" : "VIP"}</div>
          </div>
          <div className="flex justify-between">
            <div>Phí tham gia/tháng</div>
            <div>
              {showUpgradeType == 1 ? groupData.member_fee : groupData.vip_fee}{" "}
              xu
            </div>
          </div>

          <hr className="my-4" />

          <div aria-label="" className="font-bold ">
            <Form
              layout={"vertical"}
              name="validate_other"
              onFinish={submitForm}
            >
              Tài khoản thanh toán:
              <Form.Item name="radio-group" className=" mb-[2px]">
                <div className=" flex justify-start">
                  <Radio.Group defaultValue={userData?.payment[0].name}>
                    <Space direction="vertical" className=" my-1">
                      {userData?.payment.map((item) => (
                        <Radio.Button
                          value={item?.name}
                          className=" w-full border-1 h-[70px] hover:bg-[#EEEEEE]"
                        >
                          <Row className=" ml-2 mt-2" key={item?.id}>
                            <Col aria-label="icon" sm={4} lg={4} className="">
                              {item?.name === "MasterCard" && (
                                <img
                                  className="h-10 w-10 object-contain"
                                  src={"/images/icons/mastercard.svg"}
                                  alt="mastercard"
                                />
                              )}
                              {item?.name === "Momo" && (
                                <img
                                  className="h-10 w-10 object-contain"
                                  src={"/images/icons/momo.png"}
                                  alt="momo"
                                />
                              )}
                              {item?.name === "MetaMask" && (
                                <img
                                  className="h-10 w-10 object-contain"
                                  src={"/images/icons/metamask.png"}
                                  alt="metamask"
                                />
                              )}
                            </Col>
                            <Col sm={4} lg={10} className="">
                              <div className="font-bold">{item?.name}</div>
                              {item?.default && (
                                <div className="font-bold bg-primary/75 inline-flex px-3 rounded text-gray-500 text-xs">
                                  {t(`profile:default`)}
                                </div>
                              )}
                            </Col>
                            <Col sm={4} lg={10} className="">
                              <span className="font-bold">
                                {item?.name === "MetaMask"
                                  ? convertLongString(item?.number, 25)
                                  : item?.number}
                              </span>
                            </Col>
                          </Row>
                        </Radio.Button>
                      ))}
                    </Space>
                  </Radio.Group>
                </div>
              </Form.Item>
              <Button
                icon={<PlusOutlined />}
                className="bg-[#C6FAF0] mb-4 font-bold rounded-3xl text-[#15705F]"
              >
                Thêm mới
              </Button>
              <div aria-label="Lưu ý">
                Lưu ý: <br></br>
                Đảm bảo rằng tài khoản của bạn có đủ lượng Xu cần thanh toán.{" "}
                <br></br>
                Phí tham gia sẽ được gia hạn tự động vào tài khoản. <br></br>
                Bạn có thể hủy gia hạn bất cứ lúc nào.
              </div>
              <hr className="my-2" />
              <Form.Item>
                <div className="flex justify-end">
                  <Button
                    htmlType="submit"
                    className="rounded-3xl font-bold border-2 bg-[#C6FAF0]"
                  >
                    Thanh toán
                  </Button>
                  <Button
                    className="ml-4 rounded-3xl font-bold border-2 bg-[#C6FAF0]"
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
