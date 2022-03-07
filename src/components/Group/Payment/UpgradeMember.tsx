import React from "react";
import { Modal, Row, Col, Space, message } from "antd";
import { CheckboxQues } from "@components/Group/Question/CheckboxQues";
import { RatioQues } from "@components/Group/Question/RatioQues";
import { TextQues } from "@components/Group/Question/TextQues";
import { convertLongString } from "@utils/common";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import {ConfirmBill} from "./ConfirmBill";

import {
  PlusOutlined
} from "@ant-design/icons";

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

var upgrade_type = undefined;
export const UpgradeMember = (props) => {
  const { groupData, userData, setShow } = props;
  const { t } = useTranslation();

  const [showConfirmBill, setShowConfirmBill] = useState(false);
//   upgrade_type=userData?.member_type == "member"? 2: 1;

  const confirmBill = () => {
    setShowConfirmBill(true);
  };
  var setUpgradeType = (value) => {
      upgrade_type = value;
      return value;
  }

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
  };

  const submitForm = (e) => {
    console.log("first", e);
    console.log(e["radio-group"]);
    setUpgradeType(e["radio-group"]);
    console.log(upgrade_type);

  };
  return (
    <Modal visible={true} footer={null} closable={false}>
      <div className="bg-[]">
        <div 
            className="header bg-[] font-bold text-lg text-center"
        >
            Upgrade Member
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

        <div
            className="bg-[] mt-5 mx-5"
        >
            <div aria-label=""
              className=" bg-[]"
            >
                <Form
                    hidden={userData?.member_type == "vip"? true: false}
                    layout={"vertical"}
                    name="validate_other"
                    onFinish={submitForm}
                >
                    <span className="font-bold">
                        Chọn loại thành viên:
                    </span>
                    <Form.Item name="radio-group"
                        initialValue={userData?.member_type == "member"? 2: 1}
                        className="bg-[] mb-[2px]"
                    >
                        <div
                        className="bg-[] flex justify-start"
                        >
                        <Radio.Group 
                            defaultValue={userData?.member_type == "member"? 2: 1}
                            onChange={(e) => {setUpgradeType(e.target.value)}}
                        >
                            <Space direction="vertical"
                                className="bg-[] my-1"
                            >
                                <Radio value={1} 
                                    disabled={userData?.member_type == "member"? true: false}
                                    className="flex justify-center"
                                >
                                    <div>
                                        <div  className="font-bold text-base flex justify-start">
                                            <div>Member: {groupData?.member_fee} Xu/tháng</div>
                                            <div aria-label="green-check-icon"
                                                hidden={userData?.member_type == "member"? false: true}
                                                className="ml-2 mt-[2px] h-[15px] w-[15px]"
                                            >
                                                <img src="/images/icons/green-check-fill.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="text-sm">Bạn có thể xem, tương tác, bình luận bài viết nhưng không thể đăng bài</div>
                                    </div>
                                </Radio>
                                <Radio value={2}>
                                    <div>
                                        <div  className="font-bold text-base">
                                            VIP: {groupData?.vip_fee} Xu/tháng
                                        </div>
                                        <div className="text-sm">
                                            Bạn có thể xem, tương tác, bình luận bài viết 
                                            và có thể viết bài đóng góp đồng thời kiếm thêm thu nhập
                                        </div>
                                    </div>
                                </Radio>
                                
                            </Space>
                        </Radio.Group>
                        </div>
                    </Form.Item>

                    
                    <hr className="my-2"/>
                    <Form.Item>
                        <div
                        className="flex justify-end"
                        >
                        <Button htmlType="submit"
                            className="rounded-3xl font-bold border-2 bg-[#C6FAF0]"
                            onClick={
                                confirmBill
                            }
                        >Thanh toán</Button>
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
                <div aria-label="if already vip"
                    hidden={userData?.member_type == "vip"? false: true}
                >
                    <div className="my-4">
                        <div className="text-base font-bold text-[#15705F]">
                            Bạn đã là thành viên VIP của cộng đồng này! Cảm ơn sự đóng góp của bạn.
                        </div>
                        <div className="text-sm my-2 italic">
                            VIP là hạng mức cao nhất theo tiêu chuẩn của chúng tôi.
                        </div>
                        
                    </div>
                    <div
                        className="bg-[#CCFFCC] border-solid border-2 rounded-xl p-2"
                    >
                        <div  className="font-bold text-base flex justify-start">
                            <div>VIP: {groupData?.vip_fee} Xu/tháng</div>
                            <div aria-label="green-check-icon"
                                className="ml-2 mt-[2px] h-[15px] w-[15px]"
                            >
                                <img src="/images/icons/green-check-fill.png" alt="" />
                            </div>
                        </div>
                        <div className="text-sm">
                            Bạn có thể xem, tương tác, bình luận bài viết 
                            và có thể viết bài đóng góp đồng thời kiếm thêm thu nhập
                        </div>
                    </div>

                    <hr className="my-5" />
                    <div className="flex justify-center">
                        <Button
                            className="ml-4 rounded-3xl font-bold border-2 bg-[#C6FAF0]"
                            htmlType="button"
                            onClick={() => setShow(false)}
                        >
                        Đóng
                    </Button>
                    </div>
                </div>
                
            </div>
        </div>
        
        {console.log("đây là upgrade type")}
        {console.log(upgrade_type)}
        {showConfirmBill && <ConfirmBill setShow={setShowConfirmBill} userData={userData} groupData={groupData} upgrade_type={upgrade_type} />}

      </div>
    </Modal>
  );
};
