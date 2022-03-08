import { useEffect, useState } from "react";
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
    } else if (router?.pathname === "/profile") {
      setActive(1);
    } else if (router?.pathname === "/create-group") {
      setActive(2);
    }
  }, []);

  function callback(key) {
    console.log(key);
  }
  return (
    <div className="flex flex-col w-full bg-[white] grid">
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
          className={`p-2 m-1 bg-[white] hover:bg-[#DDDDDD] rounded-lg active:bg-[gray] text-base font-semibold ${
            active === 0 ? "bg-[#DDDDDD] " : ""
          }`}
        >
          <div
            aria-label="News feed"
            className="flex justify-start bg-[] rounded-lg"
          >
            {console.log(active)}
            <div
              aria-label="icon"
              className={`rounded-full  h-[40px] w-[40px] grid place-items-center ${
                active === 0 ? "bg-[#C6FAF0] " : "bg-[#888]"
              }`}
            >
              <div
                aria-label="icon"
                className="bg-[] w-3/5 h-3/5 flex justify-center rounded-sm"
              >
                <img src="/images/icons/news-feed-fill.png" alt="" />
              </div>
            </div>
            <div
              aria-label="name"
              className="bg-[] mx-4 grid place-items-center"
            >
              <span>{t(`common:layout.newFeed`)}</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href={`/profile`}>
        <a
          className={`p-2 m-1 bg-[white] hover:bg-[#DDDDDD] rounded-lg active:bg-[gray] text-base font-semibold ${
            active === 1 ? "bg-[#DDDDDD] " : ""
          }`}
        >
          <div
            aria-label="Profile"
            className="flex justify-start bg-[] rounded-lg"
          >
            <div
              aria-label="icon"
              className={`rounded-full  h-[40px] w-[40px] grid place-items-center ${
                active === 1 ? "bg-[#C6FAF0] " : "bg-[#888]"
              }`}
            >
              <div
                aria-label="icon"
                className="bg-[] w-3/5 h-3/5 flex justify-center rounded-sm"
              >
                <img src="/images/icons/profile-fill.png" alt="" />
              </div>
            </div>
            <div
              aria-label="name"
              className="bg-[] mx-4 grid place-items-center"
            >
              <span>{t(`common:layout.account`)}</span>
            </div>
          </div>
        </a>
      </Link>
      <Link href={`/create-group`}>
        <a
          className={`p-1 m-1 m-1 bg-[#C6FAF0] hover:bg-[#DDDDDD] rounded-lg active:bg-[gray] text-base font-semibold ${
            active === 2 ? "bg-[#DDDDDD] " : ""
          }`}
        >
          <div aria-label="Create group" className="bg-[] flex justify-center">
            <div className="flex justify-center bg-[] w-[300px]">
              <div
                aria-label="icon"
                className={`rounded-full  h-[30px] w-[30px] grid place-items-center ${
                  active === 2 ? "bg-[#C6FAF0] " : "bg-[#DDDDDD]"
                }`}
              >
                <div
                  aria-label="icon"
                  className="bg-[] w-3/5 h-3/5 flex justify-center rounded-sm"
                >
                  <img src="/images/icons/plus-fill.png" alt="" />
                </div>
              </div>
              <div
                aria-label="name"
                className="bg-[] mx-4 grid place-items-center text-[#3399FF]"
              >
                <span>{t(`common:layout.createGroup`)}</span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
