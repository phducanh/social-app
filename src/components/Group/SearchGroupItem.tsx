import React from "react";
import { Row, Col } from "antd";
import { useState } from "react";

export const SearchGroupItem = (props) => {
  const { group } = props;

  const privacy = group.isPrivate ? "Nhóm Riêng tư" : "Nhóm Công khai";
  const postApproval = group.postApproval
    ? "Nhóm xét duyệt công khai"
    : "Nhóm xét duyệt riêng tư";

  return (
    <Row className="bg-white mb-4 py-4 px-6 rounded-xl">
      <Col md={4} className="h-28 flex items-center">
        <img
          src={group?.header}
          alt="group-img"
          className="h-24 w-24 block rounded-full object-cover"
        />
      </Col>
      <Col flex={1} className="flex flex-col justify-center">
        <div className="name font-bold text-xl">{group?.name}</div>
        <div className="info flex flex-wrap text-stone-400">
          <div className="">{privacy}</div>
          <div className="ml-3">
            {group?.members.length}{" "}
            {group?.members.length > 1 ? "Thành viên" : "Thành viên"}
          </div>
          <div className="text-primary ml-3 font-bold">{postApproval}</div>
          {group?.fee.length > 0 && <img className="block ml-3" src="/images/icons/money.svg" alt="fee" />}

        </div>
        <div className="description"></div>
      </Col>
      <Col md={4} className="flex items-center justify-end">
        {true && <div className="join-btn font-bold">Tham gia</div>}
      </Col>
    </Row>
  );
};
