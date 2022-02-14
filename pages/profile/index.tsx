import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { HeadTag } from "@components/Layout/Head";
import { useRouter } from "next/router";
import { Tabs, Row, Col } from "antd";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { YourGroup } from "@components/Group/YourGroup";
import { JoinedGroup } from "@components/Group/JoinedGroup";
import { SuggestedGroup } from "@components/Group/SuggestedGroup";
import { LinkCard } from "@components/Profile/LinkCard";

const { TabPane } = Tabs;

const walletData = [
  { id: 1, name: "MasterCard", number: "1111111111111111", default: true },
  {
    id: 2,
    name: "MetaMask",
    number: "0x6b804b05B2cbC3dABFfB2b1EbA945C1b675b16b6",
  },
  { id: 3, name: "Momo", number: "0335229871" },
];
export default function Profile() {
  const { t } = useTranslation();

  const tab = [{ query: "link-account" }];

  return (
    <>
      <HeadTag />
      <Row>
        <Col className="">
          <CustomMenu />
          <YourGroup title={t(`common:layout.yourGroup`)} />
          <JoinedGroup title={t(`common:layout.joinedGroup`)} />
        </Col>
        <Col flex={2} className="mx-auto ">
          <div className="post-container h-full w-[700px] mx-auto bg-white px-4">
            <Tabs className="h-full" defaultActiveKey="1">
              <TabPane tab={t(`profile:linkCard`)} key={"link-account"}>
                <LinkCard data={walletData} />
              </TabPane>
              <TabPane
                tab={t(`profile:manageCoinWallet`)}
                key={"manage-wallet"}
              >
                Content of tab 2
              </TabPane>
            </Tabs>
          </div>
        </Col>
        <Col className="">
          <SuggestedGroup title={t(`common:layout.suggestedGroup`)} />
        </Col>
      </Row>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "profile", "group"])),
      // Will be passed to the page component as props
    },
  };
}
