import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HeadTag } from "@components/Layout/Head";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { GroupTemplate } from "@components/Group/GroupTemplate";
import GetData from "@hooks/useSWRCustom";
import { useBlockchainFunc } from "@utils/blockchain";
import { GROUP_TYPE } from "@/src/constants/common";

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
              <GroupTemplate type={GROUP_TYPE.OWNED_GROUP} className="mt-3" />
              <GroupTemplate type={GROUP_TYPE.JOINED_GROUP} className="mt-3" />
            </Col>
            <Col className="mx-auto ">
              <div className="post-container w-[700px] mx-auto">
                <Post data={post} />
              </div>
            </Col>
            <Col className="ml-8">
              <GroupTemplate type={GROUP_TYPE.SUGGESTED_GROUP} />
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
