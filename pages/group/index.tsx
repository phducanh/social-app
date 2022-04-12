import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { PreviewGroup } from "@components/Group/PreviewGroup";
import { TopAuthorList } from "@components/Group/TopBoard/TopAuthorList";
import { useRouter } from "next/router";
import { GroupHeader } from "@components/Group/GroupHeader";

import { Shared } from "@components/Shared";
import { Post } from "@components/Post";
import { Row, Col } from "antd";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { GroupTemplate } from "@components/Group/GroupTemplate";
import { GROUP_TYPE } from "@/src/constants/common";

const posts = [
  {
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
  },
  {
    id: "123",
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
  },
];

const members = [
  {
    id: 0,
    username: "dduyen.dlwlrma",
    image:
      "https://anhdep123.com/wp-content/uploads/2021/05/avatar-mau-trang.jpg",
  },
  {
    id: 0,
    username: "dduyen.dlwlrma",
    image:
      "https://anhdep123.com/wp-content/uploads/2021/05/avatar-mau-trang.jpg",
  },
  {
    id: 0,
    username: "dduyen.dlwlrma",
    image:
      "https://anhdep123.com/wp-content/uploads/2021/05/avatar-mau-trang.jpg",
  },

  {
    id: 0,
    username: "dduyen.dlwlrma",
    image:
      "https://anhdep123.com/wp-content/uploads/2021/05/avatar-mau-trang.jpg",
  },
  {
    id: 0,
    username: "dduyen.dlwlrma",
    image:
      "https://anhdep123.com/wp-content/uploads/2021/05/avatar-mau-trang.jpg",
  },
  {
    id: 0,
    username: "dduyen.dlwlrma",
    image:
      "https://anhdep123.com/wp-content/uploads/2021/05/avatar-mau-trang.jpg",
  },
];

const group = {
  id: "ajsjjxjcjjjxxx",
  name: "RVN Group",
  descript:
    "Cộng đồng người dùng Reddit nói tiếng Việt. Đọc kĩ nội quy trước khi vào group: https://rvn.page.link/rules",
  privacy: 0,
  group_type: 0,
  posts: posts,
  member: "63,6K",
  members: members,
  member_fee: 2000,
  vip_fee: 15000,
};

export default function Group() {
  const { t } = useTranslation();
  const router = useRouter();
  console.log("gr id", router.query);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Row className="justify-between">
        <Col span={5} aria-label="side bar" className="bg-[] border-r">
          <div className="bg-gray-300 mx-auto overflow-auto">
            <CustomMenu />
            <GroupTemplate type={GROUP_TYPE.OWNED_GROUP} className="mt-3"/>
            <GroupTemplate type={GROUP_TYPE.JOINED_GROUP} className="mt-3"/>
          </div>
        </Col>

        <Col span={18} aria-label="group" className="bg-[] grid gap-4">
          <div
            aria-label="Group Header"
            className="bg-[white] w-full pb-4 shadow-xl"
          >
            <div
              aria-label="Group Header"
              className="mx-auto max-w-[950px] bg-[white]"
            >
              <div aria-label="group name and image" className="bg-[] w-full">
                <div aria-label="group name and image" className="">
                  <GroupHeader data={group} />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-label="Xem nhóm"
            className="mx-auto max-w-[950px] grid gap-4 bg-[]"
          >
            <div
              aria-label="content of group"
              className="bg-[] w-11/12 mx-auto"
            >
              <Row className="bg-[] ">
                <Col aria-label="posts" span={14} className="bg-[]">
                  <div aria-label="posts" className="bg-[] grid gap-4 mr-4">
                    <div aria-label="Share something?" className="">
                      <Shared data={group} />
                    </div>

                    <div
                      aria-label="Posts of this group"
                      className="post-container grid gap-4"
                    >
                      {group?.posts.map((item) => {
                        return <Post key={item?.id} data={item} />;
                      })}
                    </div>
                  </div>
                </Col>

                <Col aria-label="general info" span={10} className="bg-[]">
                  <div aria-label="general info" className="grid gap-4">
                    <div aria-label="Preview group" className="">
                      <PreviewGroup data={group} />
                    </div>
                    <div aria-label="Top author" className="">
                      <TopAuthorList data={group} />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
