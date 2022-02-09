import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

const { TabPane } = Tabs;

export const CustomMenu = (props) => {
  const { t } = useTranslation();
  const router = useRouter();

  const [active, setActive] = useState(0);
  console.log(router?.pathname);

  useEffect(() => {
    if (router?.pathname === "/") {
      setActive(0);
    } else if (router?.pathname === "/account") {
      setActive(1);
    } else if (router?.pathname === "/create-group") {
      setActive(2);
    }
  }, []);

  function callback(key) {
    console.log(key);
  }
  return (
    <div className="flex flex-col w-56">
      {" "}
      {/* <Tabs
        defaultActiveKey="1"
        tabPosition={"left"}
        onChange={callback}
        className="bg-white"
      >
        <TabPane tab={t(`common:layout.newFeed`)} key="1"></TabPane>
        <TabPane tab={t(`common:layout.account`)} key="2"></TabPane>
        <TabPane tab={t(`common:layout.createGroup`)} key="3"></TabPane>
      </Tabs> */}
      <Link href={`/`}>
        <a
          className={`px-5 py-3 bg-white text-base font-semibold ${
            active === 0 ? "bg-active text-active2" : ""
          }`}
        >
          {t(`common:layout.newFeed`)}
        </a>
      </Link>
      <Link href={`/profile`}>
        <a
          className={`px-5 py-3 bg-white text-base font-semibold ${
            active === 1 ? "bg-active text-active2" : ""
          }`}
        >
          {t(`common:layout.account`)}
        </a>
      </Link>
      <Link href={`/create-group`}>
        <a
          className={`px-5 py-3 bg-white text-base font-semibold ${
            active === 2 ? "bg-active text-active2" : ""
          }`}
        >
          {t(`common:layout.createGroup`)}
        </a>
      </Link>
    </div>
  );
};
