import React from "react";
import Link from "next/link";
import { Image, Row, Col, Button, Input } from "antd";
import { useTranslation } from "next-i18next";

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
    ownerName: "Hậu duệ mặt giời",
    content: "Ok nhi 💅",
    postedAt: 159939403044,
  },
];

export const Comment = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  const submitComment = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="bg-white p-4">
      <div className="interact-section">
        <Row className="mt-3">
          <Col>
            <img
              src={author?.image}
              alt="user-img"
              className="h-8 bg-gray-400 rounded-full"
            />
          </Col>
          <Col flex={1} className="ml-3 rounded-2xl bg-slate-100 py-2 px-4">
            <div>
              <Link href="/">
                <a className="font-bold">{data.ownerName}</a>
              </Link>
              <span className="role ml-2 bg-blue-300 px-2 py-0.5 rounded-xl text-white text-[10px]">
                Tác giả
              </span>
            </div>

            <div>{data.content}</div>
          </Col>
        </Row>
        <div className="comment-list"></div>
      </div>
    </div>
  );
};
