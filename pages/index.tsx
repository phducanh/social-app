import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { getWeb3 } from "@utils/getWeb3";
import SimpleStorage from "../constant/ABI/GroupFactory.json";
import { HeadTag } from "@components/Layout/Head";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { YourGroup } from "@components/Group/YourGroup";
import { JoinedGroup } from "@components/Group/JoinedGroup";
import { SuggestedGroup } from "@components/Group/SuggestedGroup";
import GetData from "@hooks/useSWRCustom";
import Auth from "@/pages/auth";

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

  useEffect(() => {
    GetData("http://localhost:4000").then((res) => console.log("data", res));
  }, []);

  const fetchMyAPI = useCallback(async () => {
    const web3 = await getWeb3();

    const account = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();

    // const deployedNet = SimpleStorage.networks[networkId];
    const SSContract = new web3.eth.Contract(
      SimpleStorage.abi
      // deployedNet && deployedNet.address
    );

    // await SSContract.methods.set(5).send({from: account[0]})
    // const newVal = await SSContract.methods.getDeployedGroups().call();

    console.log("NewVal", SSContract);
    // setValue(newVal);
  }, []);

  useEffect(() => {
    fetchMyAPI();
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
            <Post data={post} />
          </div>
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
