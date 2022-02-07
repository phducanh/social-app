import React from "react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

export const LayoutAll = ({ children }) => {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content>{children}</Content>
        
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};
