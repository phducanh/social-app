import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HeadTag } from "@components/Layout/Head";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { YourGroup } from "@components/Group/YourGroup";
import { JoinedGroup } from "@components/Group/JoinedGroup";
import { SuggestedGroup } from "@components/Group/SuggestedGroup";
import { SearchGroupItem } from "@components/Group/SearchGroupItem";

import GetData from "@hooks/useSWRCustom";
import { SearchGroup } from "@/src/api/post-services";
import { getUserInfo } from "@utils/common";

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

      <Row justify={`center`}>
        <Col>
          <Row>
            <Col className="mr-8">
              <CustomMenu />
              <YourGroup title={t(`common:layout.yourGroup`)} />
              <JoinedGroup title={t(`common:layout.joinedGroup`)} />
            </Col>
            <Col flex={2} className="mx-auto ">
              <div className="post-container w-[700px] mx-auto">{groups}</div>
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
