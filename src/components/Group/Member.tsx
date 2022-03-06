import React from "react";
import { Row, Col } from "antd";
import Link from "next/link";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, Dropdown, message } from "antd";

export const Member = (props) => {
  const { data, role, t } = props;
  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }
  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }
  const menu = () => {
    if (role === "admin") {
      return (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            {t("group:removeAdmin")}
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            {t("group:addToInspector")}
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            {t("group:banOutOfGroup")}
          </Menu.Item>
        </Menu>
      );
    } else if (role === "inspector") {
      return (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            {t("group:addToAdmin")}
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            {t("group:removeInspector")}
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            {t("group:banOutOfGroup")}
          </Menu.Item>
        </Menu>
      );
    } else if (role === "member") {
      return (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            {t("group:addToAdmin")}
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            {t("group:addToInspector")}
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            {t("group:banOutOfGroup")}
          </Menu.Item>
        </Menu>
      );
    } else {
      return <></>;
    }
  };

  return (
    <Row className="member h-16 mt-3">
      <Col className="image mr-4">
        <img
          src={data.image}
          className="object-cover h-10 w-10 rounded-full"
          alt="image"
        />
      </Col>
      <Col className="info">
        <Link href={``}>
          <a className="font-bold">{data.name}</a>
        </Link>
        <div className="capitalize text-xs text-gray-400">{role}</div>
      </Col>
      {role !== "group owner" && (
        <Col className="action ml-auto">
          <Dropdown.Button
            onClick={handleButtonClick}
            overlay={menu}
          ></Dropdown.Button>
        </Col>
      )}
    </Row>
  );
};
