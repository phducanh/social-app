import Link from "next/link";
import { Row, Col } from "antd";
import { calculateActiveTime } from "@utils/common";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { TopItem } from "./TopItem";

const topAuthors = [
  {
    id: "skdlfkfddf",
    fullName: "Chu Mai Phuong",
    totalLikes: 10324,
    avatar: "https://wallpaperaccess.com/full/2213424.jpg",
  },
  {
    id: "skzxxdlfkfddf",
    fullName: "Trong Dai",
    totalLikes: 9623,
    avatar:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "skdlfccckfddf",
    fullName: "Dat Nguyen Tien",
    totalLikes: 7214,
    avatar:
      "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: "skdlfkfzzddf",
    fullName: "Duyên",
    totalLikes: 5324,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNeAcbGLYtVaSSR9SaiRBAmxr94SxDIkHKeQ&usqp=CAU",
  },
  {
    id: "skdlfkfvvddf",
    fullName: "Đức Anh",
    totalLikes: 4326,
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

export const TopAuthorList = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div
      aria-label="Giới thiệu group"
      className="shadow-lg border-1 border-black bg-[white] w-full h-full p-2 mr-2 rounded-xl"
    >
      <div className="m-[15px]">
        <div className="title font-bold text-xl mb-3 text-center">
          Top tác giả tháng 2
        </div>
        {topAuthors.map((author, index) => (
          <TopItem data={author} key={author.id} index={index} />
        ))}
        <div className="text-sky-300 font-medium mt-2">Xem thêm</div>
      </div>
    </div>
  );
};
