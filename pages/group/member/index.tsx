import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { HeadTag } from "@components/Layout/Head";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { YourGroup } from "@components/Group/YourGroup";
import { JoinedGroup } from "@components/Group/JoinedGroup";
import { SuggestedGroup } from "@components/Group/SuggestedGroup";
import { MemberList } from "@components/Group/MemberList";

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

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  const [value, setValue] = useState(0);

  useEffect(() => {
    // fetchMyAPI();
  }, []);
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
          <div className="post-container w-[700px] mx-auto">
            <MemberList t={t} />
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
      ...(await serverSideTranslations(locale, ["common", "group"])),
      // Will be passed to the page component as props
    },
  };
}
