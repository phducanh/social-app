import React from "react";
import { Menu, Dropdown, Row, Col } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import Button from "@/src/components/CustomButton/Button";

export const TopItem = (props) => {
  const { data, index } = props;

  const handleColor = (index) => {
    switch (index) {
      case 1:
        return "bg-red-300";
      case 2:
        return "bg-orange-300";
      case 3:
        return "bg-yellow-200";
      default:
        return "bg-white";
    }
  };
  function handleMenuClick(e) {
    // message.info('Click on menu item.');
    console.log("click", e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Xem thông tin
      </Menu.Item>
      {/* <Menu.Item key="2" icon={<UserOutlined />}>
        Nhắn tin
      </Menu.Item> */}
      <Menu.Item key="3" icon={<MinusCircleOutlined />}>
        Báo cáo
      </Menu.Item>
    </Menu>
  );

  const colorClass = handleColor(index + 1);

  return (
    <Row
      className={`top-item ${colorClass} mb-3 p-3 shadow-xl`}
      // justify="center"
    >
      <Col sm={24} md={4} className="avatar">
        <img
          src={`${data.avatar}`}
          alt="user-avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      </Col>
      <Col sm={24} md={15} className="font-bold">
        <span className="mr-3">{data.fullName}</span>
        <span className="text-green-600 block">
          {data.totalLikes} {data.totalLikes > 1 ? "likes" : "like"}
        </span>
      </Col>
      <Col flex={1} className="flex items-center justify-end">
        <Dropdown overlay={menu}>
          <Button
            size="xs"
            // icon={<PlusOutlined className="flex items-center" />}
          >
            <InfoCircleOutlined />
          </Button>
        </Dropdown>
      </Col>
    </Row>
  );
};
