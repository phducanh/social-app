import React from "react";
import { Member } from "./Member";
import { Input } from "antd";

const member = {
  groupOwner: {
    name: "Pham DUc Anh",
    image:
      "https://vnn-imgs-f.vgcloud.vn/2019/04/02/16/kha-banh-kiem-duoc-bao-nhieu-tien-tu-mang-xa-hoi.jpg",
  },
  admin: [
    {
      id: "1",
      name: "Pham DUc Anh 2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Mr._Bean_2011.jpg",
    },
    {
      id: "2",

      name: "Pham DUc Anh 3",
      image:
        "https://toasanguocmo.vn/tien-bip-sinh-nam-bao-nhieu/imager_12098.jpg",
    },
  ],
  inspector: [
    {
      id: "3",

      name: "Pham DUc Anh 2",
      image: "https://cf.shopee.vn/file/30b6784bb8584bec92060d1650958212",
    },
    {
      id: "4",

      name: "Pham DUc Anh 3",
      image:
        "https://gamek.mediacdn.vn/133514250583805952/2021/10/12/cd2-16340311715491860620247.jpg",
    },
  ],
  members: [
    {
      id: "5",

      name: "Pham DUc Anh 2",
      image:
        "https://static.wikia.nocookie.net/dragonball/images/7/79/OolongWMATEp17.png/revision/latest?cb=20101005205111",
    },
    {
      id: "6",

      name: "Pham DUc Anh 3",
      image:
        "https://static.wikia.nocookie.net/dragonball/images/3/34/Oolongfuture.JPG/revision/latest/top-crop/width/360/height/450?cb=20120324233412",
    },
  ],
};

export const MemberList = (props) => {
  const { t } = props;
  return (
    <div className="member-list bg-white py-5 px-10">
      <div className="intro border-b-2 pb-3">
        <div className="title font-bold">
          {t("group:member")} {`(${member.members.length})`}
        </div>
        <Input
          name={`search-text`}
          onPressEnter={() => {}}
          placeholder={t(`common:search`)}
          className="h-10 rounded-xl px-6 bg-emerald-100 placeholder:text-gray-600"
        />
      </div>
      <div className="group-owner mt-3 border-b-2">
        <div className="title font-bold">{t("group:groupOwner")}</div>
        <div className="member-container">
          {" "}
          <Member data={member.groupOwner} role={"group owner"} t={t} />
        </div>
      </div>
      <div className="admin mt-3 border-b-2">
        <div className="title font-bold">{t("group:admin")}</div>
        <div className="member-container">
          {member.admin.map((admin) => (
            <Member data={admin} key={admin?.id} role="admin" t={t} />
          ))}
        </div>
      </div>
      <div className="inspector mt-3 border-b-2">
        <div className="title font-bold">{t("group:inspector")}</div>
        <div className="member-container">
          {member.inspector.map((inspector) => (
            <Member
              data={inspector}
              key={inspector?.id}
              role="inspector"
              t={t}
            />
          ))}
        </div>
      </div>
      <div className="member mt-3">
        <div className="title font-bold">{t("group:member")}</div>
        <div className="member-container">
          {member.members.map((member) => (
            <Member data={member} key={member?.id} role="member" t={t} />
          ))}
        </div>
      </div>
    </div>
  );
};
