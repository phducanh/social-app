import React from "react";
import { Layout } from "antd";
import {CustomHeader} from "@components/CustomHeader";

const { Header, Footer, Sider, Content } = Layout;

export const LayoutAll = ({ children }) => {
  return (
    <>
      <Layout>
        <CustomHeader/>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};
