import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Row, Col, Menu, Dropdown, message } from "antd";
import { calculateActiveTime } from "@utils/common";
import { useTranslation } from "next-i18next";
import { QuestionModal } from "./QuestionModal";
import { ConfirmBill } from "./Payment/ConfirmBill";
import { UpgradeMember } from "./Payment/UpgradeMember";
import { DonateModal } from "./Payment/DonateModal";
import Button from "@/src/components/CustomButton/Button";

import {
  BellOutlined,
  PlusOutlined,
  LogoutOutlined,
  HeartFilled,
  StarOutlined,
} from "@ant-design/icons";

const question = [
  {
    id: 1,
    question: "Chọn loại member",
    type: "ratio",
    answer: ["Viewer", "Member: 50.000 VNĐ/Tháng", "VIP: 100.000 VNĐ/Tháng"],
  },
  // {
  //   id: 2,

  //   question: "Ban biet gi khong (Chon nhieu)",
  //   type: "checkbox",
  //   answer: ["1", "2", "3"],
  // },

  {
    id: 3,

    question: "Bạn sẽ tuân thủ nội quy nhóm chứ?",
    type: "text",
    answer: [""],
  },
];

const privacy_types = [
  {
    value: 0,
    name: "Nhóm Công khai",
    label: "Công khai",
    script:
      "Bất kì ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng",
    icon: "/images/icons/earth-fill.png",
  },
  {
    value: 1,
    name: "Nhóm riêng tư",
    label: "Riêng tư",
    script:
      "Chỉ thành viên mới nhìn thấy mọi người trong nhóm và những gì họ đăng",
    icon: "/images/icons/lock-fill.png",
  },
];

const payment = [
  { id: 1, name: "MasterCard", number: "1111111111111111", default: true },
  {
    id: 2,
    name: "MetaMask",
    number: "0x6b804b05B2cbC3dABFfB2b1EbA945C1b675b16b6",
  },
  { id: 3, name: "Momo", number: "0335229871" },
];

const userData = {
  user_name: "duyen",
  member_type: "",
  user_coins: 1000,
  payment: payment,
};

export const GroupHeader = (props) => {
  const { data } = props;
  const { t } = useTranslation();
  const router = useRouter();
  const [showQuesModal, setShowQuesModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [selectingTab, setSelectingTab] = useState("");
  const navigate = (path) => {
    router.push({
      pathname: "/group",
      query: { groupId: data._id, page: path },
    });
    setSelectingTab(path);
  };

  const joinGroup = () => {
    if (data) {
      setShowQuesModal(true);
    } else sendRequest();
  };

  const sendRequest = () => {
    setJoined(true);
  };

  const upgradeMember = () => {
    setShowUpgradeModal(true);
  };

  const donate = () => {
    setShowDonateModal(true);
  };

  const [joined, setJoined] = useState(false);

  const menu = () => {
    return (
      <Menu className="px-2">
        <Menu.Item
          key="0"
          icon={<BellOutlined className="flex items-center" />}
          className="h-[] text-base"
        >
          Quản lý thông báo
        </Menu.Item>
        <Menu.Item
          key="1"
          icon={<StarOutlined className="flex items-center" />}
          className="text-base"
          onClick={upgradeMember}
        >
          Thăng hạng thành viên
        </Menu.Item>
        <hr />
        <Menu.Item
          key="2"
          icon={<LogoutOutlined className="flex items-center" />}
          className="text-base"
        >
          Rời khỏi nhóm
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <div aria-label="Group Header" className="bg-[transparent] w-full">
      {showQuesModal && !joined && (
        <QuestionModal
          setShow={setShowQuesModal}
          question={question}
          groupData={data}
          sendRequest={sendRequest}
        />
      )}
      {showDonateModal && (
        <DonateModal
          setShow={setShowDonateModal}
          userData={userData}
          groupData={data}
        />
      )}
      {showUpgradeModal && (
        <UpgradeMember
          setShow={setShowUpgradeModal}
          userData={userData}
          groupData={data}
        />
      )}

      <div>
        <div aria-label="Ảnh bìa" className="container mx-auto h-[300px] mb-3">
          <img
            height={"100%"}
            width={"100%"}
            src={
              data?.header === undefined
                ? "/images/background-group-default.png"
                : data?.header
            }
            alt="background-group"
            className="h-full rounded-t-xl object-cover object-center"
          />
        </div>

        <div aria-label="Tên nhóm" className="px-3">
          <div className="text-2xl font-bold">{data?.name || `Tên nhóm`}</div>
          <div aria-label="Thông tin chung" className="flex justify-start mt-3">
            <div
              aria-label="default"
              className="text-[15px] mr-[5px]"
              hidden={typeof data?.isPrivate !== undefined ? true : false}
            >
              Quyền riêng tư của nhóm
            </div>
            <div
              aria-label="Quyền riêng tư"
              className="flex justify-start"
              hidden={typeof data?.isPrivate === undefined ? true : false}
            >
              <div aria-label="icon" className="m-[3px] h-[18px] w-[18px]">
                <img
                  src={privacy_types[data?.isPrivate ? 1 : 0]?.icon}
                  alt=""
                />
              </div>
              <div aria-label="chi tiết" className="">
                <div className="text-[15px] mr-[5px]">
                  {privacy_types[data?.isPrivate ? 1 : 0]?.name}
                </div>
              </div>
            </div>
            <div className="">.</div>
            <div
              aria-label="Thành viên"
              className="ml-[3px] text-[15px] font-bold"
            >
              {data?.members.length} thành viên
            </div>
          </div>
        </div>

        <div
          aria-label="Member in Group Header"
          hidden={data?.members === undefined ? true : false}
          className=" p-2 h-[]"
        >
          <Row>
            <Col aria-label="avatar member" className="" xs={24} xl={16}>
              <div className=" p-2 flex justify-start">
                <div
                  aria-label="avatar member"
                  className=" flex -space-x-1 overflow-hidden"
                >
                  {data?.members?.slice(0, 11).map((item) => {
                    return (
                      <img
                        key={item?.id}
                        className="inline-block h-[40px] w-[40px] rounded-full ring-2 ring-white"
                        src={item?.image}
                        alt=""
                      />
                    );
                  })}
                </div>
                <div
                  hidden={data?.members?.length < 12 ? true : false}
                  className=" font-bold m-4 mx-2 text-md text-[#3BDEC1]"
                >
                  + {data?.member?.length - 12} other
                </div>
              </div>
            </Col>

            <Col aria-label="join button" className="" xs={24} xl={8}>
              <div className=" py-2 flex justify-end">
                <div className=" flex justify-end">
                  <Button
                    size="xs"
                    color="orange"
                    className="h-full mr-3"
                    onClick={donate}
                  >
                    <HeartFilled className="flex items-center" />
                    <span>Ủng hộ</span>
                  </Button>
                  <Button size="xs" color="yellow" className="h-full mr-3">
                    <span className="font-bold  text-neutral-600">
                      Chuyển tiền thành viên
                    </span>
                  </Button>
                  {!joined && (
                    <Button
                      size="xs"
                      className="h-full bg-[#3BDEC1] rounded-lg font-bold"
                      onClick={joinGroup}
                    >
                      Tham gia
                    </Button>
                  )}

                  {joined && (
                    <Dropdown overlay={menu} trigger={["click"]}>
                      <div
                        aria-label="Join button"
                        className="w-1/2 flex justify-start w-[155px] rounded-lg bg-[#C6FAF0] hover:bg-[#3BDEC1] cursor-pointer"
                      >
                        <div
                          aria-label="icon"
                          className="rounded-full h-[40px] w-[40px] grid place-items-center"
                        >
                          <div
                            aria-label="icon"
                            className=" w-3/5 h-3/5 flex justify-center rounded-sm"
                          >
                            <img
                              src="/images/icons/group-joined-fill.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div
                          aria-label="name"
                          className=" grid place-items-center"
                        >
                          <span className="font-bold w-24 text-center">
                            Đã tham gia
                          </span>
                        </div>
                        <div
                          aria-label="icon"
                          className="rounded-full h-[40px] w-[40px] grid place-items-center"
                        >
                          <div
                            aria-label="icon"
                            className=" w-3/5 h-3/5 flex justify-center rounded-sm"
                          >
                            <img
                              src="/images/icons/arrow-drop-down-fill.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </Dropdown>
                  )}

                  <div aria-label="Invite button" className=" w-1/3">
                    <div className=" ml-3 w-1/2 h-full">
                      <Button
                        size="xs"
                        icon={<PlusOutlined className="flex items-center" />}
                      >
                        <span className="font-bold">Mời</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div
            aria-label="avatar member and join button"
            className="bg-[yellow]"
          ></div>
        </div>

        <hr className="mt-3" />

        <div aria-label="Group Navbar" className="flex justify-start">
          <div className="flex">
            <Button
              onClick={() => navigate("about")}
              variant={
                selectingTab === "about" || selectingTab === ""
                  ? "outline"
                  : "text"
              }
              className="font-bold rounded-b-0 border-0 active:bg-white hover:bg-white hover:text-green-500"
            >
              Giới thiệu
            </Button>
            <Button
              onClick={() => navigate("feed")}
              variant={selectingTab === "feed" ? "outline" : "text"}
              className="font-bold rounded-b-0 border-0 active:bg-white hover:bg-white hover:text-green-500"
            >
              Thảo luận
            </Button>
            <Button
              onClick={() => navigate("members")}
              variant={selectingTab === "members" ? "outline" : "text"}
              className="font-bold rounded-b-0 border-0 active:bg-white hover:bg-white hover:text-green-500"
            >
              Thành viên
            </Button>
            <Button
              onClick={() => navigate("more")}
              variant={selectingTab === "more" ? "outline" : "text"}
              className="font-bold rounded-b-0 border-0 active:bg-white hover:bg-white hover:text-green-500"
            >
              Xem thêm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
