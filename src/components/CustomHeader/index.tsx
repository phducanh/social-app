import { Layout, Input, Row, Col } from "antd";
import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { store } from "@/reducer/store";
import { useRouter } from "next/router";
import { Menu, Dropdown, message } from "antd";

import { LogOut } from "@/src/api/post-services";

const { Header } = Layout;

export const CustomHeader = (props) => {
  const { userInfo } = props;
  const { auth } = store.getState();

  const router = useRouter();

  const { t } = useTranslation();
  const onSearch = (e) => {
    console.log(e.target.value);
  };

  const handleLogout = () => {
    console.log("first")
    LogOut().then((res) => {
      console.log(res, "tra ve");
    });
  };
  const onClick = ({ key }) => {
    switch (key) {
      case "profile":
        router.push("/profile");
        return;
      case "log-out":
        handleLogout();
        return;
      default:
        return;
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="profile">Thông tin tài khoản</Menu.Item>
      <Menu.Item key="log-out">Đăng xuất</Menu.Item>
    </Menu>
  );

  const NotAuthMenu = () => {
    console.log("first");
    return (
      <>
        {" "}
        <Link href={`/login`}>
          <a className="button-item flex items-center mr-5">
            <img
              src="/images/bell.png"
              alt="bell"
              className="w-4 object-contain"
            />
            <span className="ml-1 block">{t(`common:notification`)}</span>
          </a>
        </Link>
        <Link href={`/login`}>
          <a className="button-item flex items-center">
            <img
              src="/images/user.png"
              alt="user"
              className="w-4 object-contain"
            />
            <span className="ml-1">{t(`common:login`)}</span>
          </a>
        </Link>
      </>
    );
  };

  const AuthMenu = (userInfo) => {
    console.log(userInfo, "Chay 2");
    return (
      <>
        {" "}
        <Link href={`/login`}>
          <a className="button-item flex items-center mr-5">
            <img
              src="/images/bell.png"
              alt="bell"
              className="w-4 object-contain"
            />
            <span className="ml-1 block">{t(`common:notification`)}</span>
          </a>
        </Link>
        <Dropdown overlay={menu}>
          <a className="button-item flex items-center ant-dropdown-link">
            <img
              src="/images/user.png"
              alt="user"
              className="w-4 object-contain"
            />
            <span className="ml-1">{userInfo?.userInfo.fullName}</span>
          </a>
        </Dropdown>
      </>
    );
  };
  return (
    <>
      <Header className="h-[90px] bg-primary px-4">
        <Row className="items-center justify-between h-full">
          <Col md={12} lg={6}>
            <Link href={`/`}>
              <img
                src="/images/logo.svg"
                alt="Logo of the website"
                className="cursor-pointer"
              />
            </Link>
          </Col>
          <Col md={12} lg={10}>
            <Input
              name={`search-text`}
              onPressEnter={onSearch}
              placeholder={t(`common:search`)}
              className="h-[43px] rounded-3xl px-6"
            />
          </Col>
          <Col md={12} lg={8} className="h-full max-h-[43px] flex justify-end">
            <div className="button-container flex ">
              <div className="button-item flex items-center"></div>
              {auth?.success && <AuthMenu userInfo={auth?.data.user} />}
              {!auth?.success && <NotAuthMenu />}
            </div>
          </Col>
        </Row>
      </Header>
    </>
  );
};
