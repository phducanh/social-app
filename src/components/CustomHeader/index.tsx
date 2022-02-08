import { Layout, Input, Row, Col } from "antd";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
const { Header } = Layout;

export const CustomHeader = () => {
  const { t } = useTranslation();
  const onSearch = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Header className="h-[90px] bg-primary px-4">
        <Row className="items-center justify-between h-full">
          <Col md={12} lg={6}>
            <Link href={`/`} className={`cursor-pointer`}>
              <img src="/images/logo.svg" alt="Logo of the website" />
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
            </div>
          </Col>
        </Row>
      </Header>
    </>
  );
};
