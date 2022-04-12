import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HeadTag } from "@components/Layout/Head";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { GroupTemplate } from "@components/Group/GroupTemplate";
import { MemberList } from "@components/Group/MemberList";
import { GROUP_TYPE } from "@/src/constants/common";
import { Row, Col } from "antd";
import { GroupLayout } from "@/src/components/Layout/GroupLayout";


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
      <GroupLayout><div className="post-container w-[700px] mx-auto">
            <MemberList t={t} />
          </div></GroupLayout>
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
