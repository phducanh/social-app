// const Web3 = require('web3');
// const Coin = require('../constant/ABI/Kelvin.json')

// const init = async () => {
//   // goi blc chua contract
//   const web3 = new Web3('HTTP://127.0.0.1:7545')
//   //init contract, truyen abi va contract address
//   const contract = await new web3.eth.Contract(Coin.abi, `0x851F452E5E1E87b8B6D92016A72a812c82fDD015`)
//   //khi cac bien trong sc duoc khai bao dang public => abi tu tao cac function có tên trùng tên biến và return giá trị biến
//   console.log(typeof await contract.methods.name().call())
//   const name = await contract.methods.name().call();
//   const balance = await contract.methods.balanceOf('0x6Cf3F3f627526B127b2831ff998332b59caAc5FA').call();
//   console.log(balance, name)
//   console.log(web3.currentProvider)
// }

// init()

// const path = require('path');

// console.log(path.join(__dirname))
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { getWeb3 } from "@utils/getWeb3";
import SimpleStorage from "../constant/ABI/SimpleStorage.json";
import { HeadTag } from "@components/Layout/Head";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { YourGroup } from "@components/Group/YourGroup";
import { JoinedGroup } from "@components/Group/JoinedGroup";
import { SuggestedGroup } from "@components/Group/SuggestedGroup";


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

  const fetchMyAPI = useCallback(async () => {
    const web3 = await getWeb3();

    const account = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();

    const deployedNet = SimpleStorage.networks[networkId];
    const SSContract = new web3.eth.Contract(
      SimpleStorage.abi,
      deployedNet && deployedNet.address
    );

    // await SSContract.methods.set(5).send({from: account[0]})
    const newVal = await SSContract.methods.get().call();
    setValue(newVal);
  }, []);

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
            <Post data={post} />
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
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}
