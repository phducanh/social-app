import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { getWeb3 } from "@utils/getWeb3";
import GroupFactory from "../constant/ABI/GroupFactory.json";
import { HeadTag } from "@components/Layout/Head";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { YourGroup } from "@components/Group/YourGroup";
import { JoinedGroup } from "@components/Group/JoinedGroup";
import { SuggestedGroup } from "@components/Group/SuggestedGroup";
import GetData from "@hooks/useSWRCustom";
import { useBlockchainFunc } from "@utils/blockchain";

import { Post } from "@components/Post";
import { Row, Col } from "antd";

const post = {
  id: "iasjdjkaskjdjkkjkxcjzkczkjxzzc",
  like: 90,
  dislike: 10,
  ownerId: "abcxyz",
  groupId: "nxmxmcn",
  content: "This is content of post",
  imageList: [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/149px-Picture_icon_BLACK.svg.png",
  ],
  postedAt: 1619434004304,
  comment: 20,
};

const Home = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [value, setValue] = useState(0);

  const { createGroup, getDeployedGroups } = useBlockchainFunc();

  useEffect(async () => {
    const check = await getDeployedGroups();
    console.log(check, "check thui");
    // console.log("check ham", await getDeployedGroups());
  }, []);
  return (
    <>
      <HeadTag />
      <Row justify={`center`}>
        <Col>
          <Row>
            <Col className="mr-8">
              <CustomMenu />
              <YourGroup title={t(`common:layout.yourGroup`)} />
              <JoinedGroup title={t(`common:layout.joinedGroup`)} />
            </Col>
            <Col className="mx-auto ">
              <div className="post-container w-[700px] mx-auto">
                <Post data={post} />
              </div>
            </Col>
            <Col className="ml-8">
              <SuggestedGroup title={t(`common:layout.suggestedGroup`)} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}
