import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { HeadTag } from "@components/Layout/Head";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { YourGroup } from "@components/Group/YourGroup";
import { JoinedGroup } from "@components/Group/JoinedGroup";
import { SuggestedGroup } from "@components/Group/SuggestedGroup";
import GetData from "@hooks/useSWRCustom";
import { SearchGroup } from "@/src/api/post-services";
import { getUserInfo } from "@utils/common";

import { Row, Col } from "antd";

const Home = () => {
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    GetData("http://localhost:4000").then((res) => console.log("data", res));
    const search = router.query.search;
    const user = getUserInfo();
    SearchGroup({ search: search }, user).then((res) => {
      console.log(res, "group found");
    });
  }, [router.query.search]);

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
          <div className="post-container w-[700px] mx-auto"></div>
        </Col>
        <Col className="">
          <SuggestedGroup title={t(`common:layout.suggestedGroup`)} />
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
