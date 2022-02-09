import React from "react";
import Link from "next/link";
import { Image, Row, Col, Button, Input } from "antd";
import { useTranslation } from "next-i18next";
import { Comment } from "@components/Post/Comment";

const author = {
  id: "xkzckzxckkzxcz",
  name: "Duc Anh",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png",
};

const comment = [
  {
    id: "askdkkxckzkxczxc",
    ownerId: "aksdkasldasllasd",
    ownerName: "Hậu duệ mặt giời",
    content: "Ok nhi 💅",
    postedAt: 159939403044,
  },
];

export const Post = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  const submitComment = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="bg-white p-4">
      <div className="header">
        <Link href={`/profile?id=${author?.id}`}>
          <div className="author h-10 cursor-pointer flex mb-3">
            <img
              src={author.image}
              alt="author-img"
              className="h-full bg-gray-400 rounded-full"
            />
            <div className="ml-3">
              <div>
                <Link href={`/profile?id=${author?.id}`}>
                  <a className="font-bold">{author?.name}</a>
                </Link>{" "}
                {">"}{" "}
                <Link href={`/group?id=`}>
                  <a className="font-bold">{author?.name}</a>
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
            <Button className="bg-primary">
              {t(`common:layout.like`)} {data.like}
            </Button>
          </Col>
          <Col className="ml-3">
            <Button>
              {t(`common:layout.unlike`)} {data.dislike}
            </Button>{" "}
          </Col>
          <Col flex={1} className="text-right font-bold text-gray-400">
            {data.comment} {t(`common:layout.comment`)}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <img
              src={author?.image}
              alt="user-img"
              className="h-8 bg-gray-400 rounded-full"
            />
          </Col>
          <Col flex={1} className="ml-3">
            <Input
              className="rounded-3xl"
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
