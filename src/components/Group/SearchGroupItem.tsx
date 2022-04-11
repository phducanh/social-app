import React from "react";
import { Row, Col } from "antd";
import { useState } from "react";
import Link from "next/link";
import { JoinGroup } from "@/src/api/post-services";
import Button from "@/src/components/CustomButton/Button";
import { getUserInfo } from "@utils/common";

export const SearchGroupItem = (props) => {
  const { group } = props;
  const user = getUserInfo();

  const privacy = group.isPrivate ? "Nhóm Riêng tư" : "Nhóm Công khai";
  const postApproval = group.postApproval
    ? "Nhóm xét duyệt công khai"
    : "Nhóm xét duyệt riêng tư";

  const handleJoinGroup = (groupId, user) => {
    JoinGroup(groupId, user).then((res) => console.log("Joined group", res));
  };

  return (
    <Row className="bg-white mb-4 py-4 px-6 rounded-xl">
      <Col flex={1}>
        <Link href={`/group?groupId=${group._id}`}>
          <Row>
            <Col md={4} className="h-28 flex items-center mr-3">
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
                <div className="text-primary ml-3 font-bold">
                  {postApproval}
                </div>
                {group?.fee.length > 0 && (
                  <img
                    className="block ml-3"
                    src="/images/icons/money.svg"
                    alt="fee"
                  />
                )}
              </div>
              <div className="description"></div>
            </Col>
          </Row>
        </Link>
      </Col>
      <Col md={4} className="flex items-center justify-end">
        {true && (
          // <div
          //   className="join-btn font-bold"
          //   onClick={() => {
          //     handleJoinGroup(group._id, user);
          //   }}
          // >
          //   Tham gia
          // </div>
          <Button
            size="small"
            variant="primary"
            onClick={() => {
              handleJoinGroup(group._id, user);
            }}
          >
            Tham gia
          </Button>
        )}
      </Col>
    </Row>
  );
};
