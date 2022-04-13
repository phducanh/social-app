import React from "react";
import Link from "next/link";
import { Image, Row, Col, Input } from "antd";
import { useTranslation } from "next-i18next";
import { Comment } from "@components/Post/Comment";
import Button from "@/src/components/CustomButton/Button";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

const author = {
  id: "xkzckzxckkzxcz",
  name: "Hậu Nguyễn",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png",
};

const comment = [
  {
    id: "askdkkxckzkxczxc",
    ownerId: "aksdkasldasllasd",
    ownerName: "Hậu Nguyễn",
    content: "Ok nhi 💅",
    postedAt: 159939403044,
  },
];

export const Post = (props) => {
  const { data, id } = props;
  const { t } = useTranslation();

  const submitComment = (e) => {
    console.log(e.target.value);
  };

  const toggleLike = (postId) => {};

  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="header">
        <Link href={`/profile?id=${author?.id}`}>
          <div className="author h-10 cursor-pointer flex mb-3">
            <img
              src={author.image}
              alt="author-img"
              className="w-10 h-10 object-cover bg-gray-400 rounded-full"
            />
            <div className="ml-3">
              <div>
                <Link href={`/profile?id=${author?.id}`}>
                  <a className="font-bold">{author?.name}</a>
                </Link>{" "}
                {">"}{" "}
                <Link href={`/group?id=`}>
                  <a className="font-bold">{"Khoảnh khắc đẹp"}</a>
                </Link>
              </div>
              <div className="text-gray-500 text-[11px] font-bold">
                {new Date(data?.postedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="content-container">
        <div className="content mb-3">{data.content}</div>
        <div className="images">
          <Image.PreviewGroup>
            <Image
              width={"100%"}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Image.PreviewGroup>
        </div>
      </div>
      <div className="interact-section">
        <Row>
          <Col>
            <Button size="xs" variant="outline">
              {/* {t(`common:layout.like`)} */}
              {data.like}
              <LikeOutlined className="flex items-center" />
            </Button>
          </Col>
          <Col className="ml-3">
            <Button size="xs" variant="outline" color="red">
              {/* {t(`common:layout.unlike`)} */}
              {data.dislike}
              <DislikeOutlined className="flex items-center" />
            </Button>{" "}
          </Col>
          <Col flex={1} className="text-right font-bold text-gray-400">
            {data.comment} {t(`common:layout.comment`)}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="flex items-center">
            <img
              src={author?.image}
              alt="user-img"
              className="h-8 w-8 object-cover bg-gray-400 rounded-full"
            />
          </Col>
          <Col flex={1} className="ml-3">
            <Input
              className="rounded-xl py-2"
              placeholder={t(`common:layout.addComment`)}
              onPressEnter={submitComment}
            ></Input>
          </Col>
        </Row>
        <div className="comment-list">
          {comment.map((item) => {
            return <Comment data={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
