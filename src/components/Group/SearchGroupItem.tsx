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
    <Row className="bg-white mb-4 py-4 px-6 rounded-xl w-full">
      <Col md={20}>
        <Link href={`/group?groupId=${group._id}`}>
          <Row className="flex-nowrap">
            <Col className="flex items-center mr-4">
              <img
                src={group?.header}
                alt="group-img"
                className="block object-cover h-24 w-24 rounded-full"
              />
            </Col>
            <Col flex={1} className="flex flex-col justify-center">
              <div className="name font-bold text-xl">{group?.name}</div>
              <div className="info flex flex-wrap text-stone-400">
                <div className="mr-3">{privacy}</div>
                <div className="mr-3">
                  {group?.members.length}{" "}
                  {group?.members.length > 1 ? "Thành viên" : "Thành viên"}
                </div>
                <div className="text-primary font-bold mr-3">
                  {postApproval}
                </div>
                {group?.fee.length > 0 && (
                  <img
                    className="block"
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
          <Button
            size="xs"
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
