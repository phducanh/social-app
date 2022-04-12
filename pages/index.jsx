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
import { GroupLayout } from "@/src/components/Layout/GroupLayout";

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
      <GroupLayout>
        <div className="post-container mx-auto">
          <Post data={post} />
        </div>
      </GroupLayout>
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
