import Link from "next/link";
import { Row, Col } from "antd";
import { calculateActiveTime } from "@utils/common";
import { useTranslation } from "next-i18next";
import { useState } from "react";

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

const fee_types = [
  {
    value: 0,
    label: "Miễn phí",
    script: "Không phải trả phí khi tham gia nhóm",
    icon: "/images/icons/free-fill.png",
  },
  {
    value: 1,
    label: "Có phí",
    script: "Trả phí theo qui định khi tham gia nhóm",
    icon: "/images/icons/money-fill.png",
  },
];

export const PreviewGroup = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div
      aria-label="Giới thiệu group"
      className="shadow-lg border-1 border-black bg-[white] w-full h-full p-2 mr-2 rounded-xl"
    >
      <div className="m-[15px]">
        <div aria-label="Giới thiệu" className="">
          <div className="text-[15px] font-bold">Giới thiệu</div>
          <div className="text-[14px] mt-[3px]">{data?.descript}</div>
        </div>

        <div aria-label="Nội dung">
          <div
            aria-label="Quyền riêng tư"
            className="flex justify-start  "
            hidden={data?.privacy === undefined ? true : false}
          >
            <div
              aria-label="icon"
              className="shrink-0 m-[3px] h-[18px]  w-[18px]"
            >
              <img src={privacy_types[data?.privacy]?.icon} alt="" />
            </div>
            <div aria-label="chi tiết" className="">
              <div className="text-[15px] font-bold">
                {privacy_types[data?.privacy]?.label}
              </div>
              <div className="text-[14px] m-[3px]">
                {privacy_types[data?.privacy]?.script}
              </div>
            </div>
          </div>

          <div
            aria-label="Loại nhóm"
            className="flex justify-start mt-2 mb-2"
            hidden={data?.group_type === undefined ? true : false}
          >
            <div aria-label="icon" className="m-[3px]  h-[18px] w-[18px]">
              <img src={fee_types[data?.group_type]?.icon} alt="" />
            </div>
            <div aria-label="chi tiết" className="">
              <div className="text-[15px] font-bold">
                {fee_types[data?.group_type]?.label}
              </div>
              <div className="text-[14px] m-[3px]">
                {fee_types[data?.group_type]?.script}
              </div>
            </div>
          </div>

          <div aria-label="Tổng quát" className="flex justify-start mt-2 mb-2">
            <div aria-label="icon" className="m-[3px] h-[18px] w-[18px]">
              <img src="/images/icons/team-fill.png" alt="team-icon" />
            </div>
            <div aria-label="chi tiết" className="text-[15px] font-bold">
              Tổng quát
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
