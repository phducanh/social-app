import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HeadTag } from "@components/Layout/Head";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { YourGroup } from "@components/Group/YourGroup";
import { JoinedGroup } from "@components/Group/JoinedGroup";
import { GroupTemplate } from "@components/Group/GroupTemplate";
import { SearchGroupItem } from "@components/Group/SearchGroupItem";

import GetData from "@hooks/useSWRCustom";
import { SearchGroup } from "@/src/api/post-services";
import { getUserInfo } from "@utils/common";
import { GROUP_TYPE } from "@/src/constants/common";
import { GroupLayout } from "@/src/components/Layout/GroupLayout";

import { Row, Col } from "antd";

const Home = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // GetData("http://localhost:4000").then((res) => console.log("data", res));
    const search = router.query.search || "";
    const user = getUserInfo();
    SearchGroup({ search: search }, user).then((res) => {
      let allGroups = res.data?.groups.map((group) => {
        return <SearchGroupItem key={group.id} group={group} />;
      });
      console.log("all", allGroups);

      setGroups(allGroups || []);
    });
  }, [router.query.search]);
  useEffect(() => {
    console.log("chay render");
  }, [groups]);

  return (
    <>
      <HeadTag />
      <GroupLayout>
        <div className="post-container mx-auto w-full">{groups}</div>
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
