import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { HeadTag } from "@components/Layout/Head";
import { useRouter } from "next/router";
import { Tabs, Row, Col } from "antd";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { YourGroup } from "@components/Group/YourGroup";
import { JoinedGroup } from "@components/Group/JoinedGroup";
import { GroupTemplate } from "@components/Group/GroupTemplate";
import { LinkCard } from "@components/Profile/LinkCard";
import { ManageWallet } from "@components/Profile/ManageWallet";
import { GROUP_TYPE } from "@/src/constants/common";
import { GroupLayout } from "@/src/components/Layout/GroupLayout";

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

const coinWallet = {
  address: "0x7aa78fef2d53a0c15zxcxczxczxcz017e0c2b0a",
  balance: 800000000,
  history: [
    {
      id: 123,
      type: "send",
      from: "0x7aa78fef2d53a0c15zxcxczxczxcz017e0c2b0a",
      to: "0x344kkfef2d53a0c15zxcxczxczxcz017e0c2b0a",
      amount: 1000,
      date: 1523343434233,
    },
    {
      id: 123,
      type: "receive",
      from: "0x569945fef2d53a0c15zxcxczxczxcz017e0c2b0a",
      to: "0x7aa78fef2d53a0c15zxcxczxczxcz017e0c2b0a",
      amount: 1000,
      date: 1623343423233,
    },
  ],
};
export default function Profile() {
  const { t } = useTranslation();

  const tab = [{ query: "link-account" }];

  return (
    <>
      <HeadTag />
      <GroupLayout>
        <div className="post-container bg-white px-4 pt-3 rounded-xl w-full">
          <div className="bg-white p-4 rounded-xl">
            <Tabs className="h-full" defaultActiveKey="link-account">
              <TabPane
                tab={
                  <span className="font-bold text-base">
                    {t(`profile:linkCard`)}
                  </span>
                }
                key={"link-account"}
              >
                <LinkCard data={walletData} />
              </TabPane>
              <TabPane
                tab={
                  <span className="font-bold text-base">
                    {t(`profile:manageCoinWallet`)}
                  </span>
                }
                key={"manage-wallet"}
              >
                <ManageWallet data={coinWallet} />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </GroupLayout>
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
