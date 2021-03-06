import React from "react";
import { Layout } from "antd";
import { CustomHeader } from "@components/CustomHeader";

const { Content } = Layout;

export const LayoutAll = ({ children }) => {
  return (
    <>
      <Layout>
        <CustomHeader />
        <Content className="pl-2 pt-3">{children}</Content>
      </Layout>
    </>
  );
};
