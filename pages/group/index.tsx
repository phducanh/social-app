import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";
import { PreviewGroup } from "@components/Group/PreviewGroup";
import { TopAuthorList } from "@components/Group/TopBoard/TopAuthorList";
import { useRouter } from "next/router";
import { GroupHeader } from "@components/Group/GroupHeader";
import { GetGroupInfo } from "@/src/api/post-services";
import { Shared } from "@components/Shared";
import { Post } from "@components/Post";
import { Row, Col } from "antd";
import { getUserInfo } from "@utils/common";
import { GroupLayout } from "@/src/components/Layout/GroupLayout";

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
  const [groupData, setGroupData] = useState();
  const user = getUserInfo();
  useEffect(() => {
    if (router.query.groupId) {
      GetGroupInfo({ id: router.query.groupId }, user).then((res) => {
        console.log(res.data);
        setGroupData(res.data);
        document.title = res.data.name || "Group";
      });
    }
  }, [router.query.groupId]);

  return (
    <GroupLayout>
      <div className="post-container mx-auto">
        <Col aria-label="group" className="grid gap-4">
          <div
            aria-label="Group Header"
            className="bg-[white] w-full shadow-xl rounded-xl"
          >
            <GroupHeader data={groupData} />
          </div>
          <div aria-label="Xem nhóm" className="mx-auto w-full">
            <div aria-label="content of group">
              <Row className="">
                <Col aria-label="posts" span={14} className="">
                  <div aria-label="posts" className="grid gap-4 mr-4">
                    <div aria-label="Share something?" className="">
                      <Shared data={groupData} />
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

                <Col aria-label="general info" span={10} className="">
                  <div aria-label="general info" className="grid gap-4">
                    <div aria-label="Preview group" className="">
                      <PreviewGroup data={groupData} />
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
      </div>
    </GroupLayout>
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
