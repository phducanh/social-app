import { useEffect, useState } from "react";
import { Tabs } from "antd";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "@/src/components/CustomButton/Button";

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
    <div className="flex flex-col w-full bg-[white] grid px-2 pb-2 rounded-xl">
      <Link href={`/`}>
        <a
          className={`p-2 m-1 bg-[white] hover:bg-gray-100 rounded-lg active:bg-gray-100 text-base font-semibold ${
            active === 0 ? "bg-gray-100 " : ""
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
          className={`p-2 m-1 bg-[white] hover:bg-gray-100 rounded-lg active:bg-[gray] text-base font-semibold ${
            active === 1 ? "bg-gray-100 " : ""
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
          className={`m-1 mt-3 rounded-lg active:bg-[gray] text-base font-semibold `}
        >
          <Button
            className="flex justify-center w-full"
            size="small"
            variant="primary"
            type="submit"
            color="green"
          >
            {t(`common:layout.createGroup`)}
          </Button>
        </a>
      </Link>
    </div>
  );
};
