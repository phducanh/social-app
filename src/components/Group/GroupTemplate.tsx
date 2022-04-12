import Link from "next/link";
import { Row, Col } from "antd";
import { calculateActiveTime } from "@utils/common";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import { GROUP_TYPE } from "@/src/constants/common";

const group = [
  {
    name: "CFE Du An",
    lastActive: 1644371112445,
    id: "ajsjjxjcjjjxxx",
    images:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/149px-Picture_icon_BLACK.svg.png",
  },
  {
    name: "CFE Du An 2",
    lastActive: 1644071112445,
    id: "ajsjjxjcjjjxxx",
    images:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/149px-Picture_icon_BLACK.svg.png",
  },
  {
    name: "CFE Du An 3",
    lastActive: 1640371112445,
    id: "ajsjjxjcjjjxxx",
    images:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/149px-Picture_icon_BLACK.svg.png",
  },
  {
    name: "CFE Du An",
    lastActive: 1644371112445,
    id: "ajsjjxjcjjjxxx",
    images:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/149px-Picture_icon_BLACK.svg.png",
  },
  {
    name: "Hội đam mê Dream",
    lastActive: 1644071112445,
    id: "ajsjjxjcjjjxxx",
    images: "https://cf.shopee.vn/file/a46648eb507d528e6dd3d70bbd185cd5",
  },
  {
    name: "Truyện hay",
    lastActive: 1640371112445,
    id: "ajsjjxjcjjjxxx",
    images:
      "https://media.istockphoto.com/vectors/01open-book-and-creative-paper-airplanes-teamwork-paper-art-style-vector-id1189849703?k=20&m=1189849703&s=612x612&w=0&h=ViTOSts22Be3PJY0HD_2dLSF31VE5BgD0Sm7ZB96DQ8=",
  },
];

export const GroupTemplate = (props) => {
  const { title, data, className, type } = props;
  const { t } = useTranslation();

  return (
    <div className={clsx("bg-white w-full p-2 rounded-xl", className)}>
      <div className="title mb-2 text-base font-semibold ml-2 mt-2">
        {type === GROUP_TYPE.OWNED_GROUP && t(`common:layout.yourGroup`)}
        {type === GROUP_TYPE.JOINED_GROUP && t(`common:layout.joinedGroup`)}
        {type === GROUP_TYPE.SUGGESTED_GROUP && t(`common:layout.suggestedGroup`)}

      </div>
      <div className="group-container">
        {group.map((item) => {
          const calTime = calculateActiveTime(item.lastActive);
          let timeString = "";
          if (calTime < 60) {
            timeString = Math.floor(calTime) + " " + t(`common:time:minute`);
          } else if (calTime < 1440) {
            timeString = Math.floor(calTime / 60) + " " + t(`common:time:hour`);
          } else if (calTime < 10080) {
            timeString =
              Math.floor(calTime / 1440) + " " + t(`common:time:day`);
          } else if (calTime < 43200) {
            timeString =
              Math.floor(calTime / 10080) + " " + t(`common:time:week`);
          } else if (calTime < 518400) {
            timeString =
              Math.floor(calTime / 43200) + " " + t(`common:time:month`);
          } else if (calTime > 518400) {
            timeString =
              Math.floor(calTime / 518400) + " " + t(`common:time:year`);
          }
          return (
            <Link href={`/group?id=${item.id}`} key={item.id}>
              <a>
                <Row className="hover:bg-gray-100 p-2 pb-2 rounded-xl">
                  <Col lg={6} className="h-12 w-12 rounded-md mr-2">
                    <img
                      className="h-12 w-12 rounded-full object-cover"
                      src={item?.images}
                      alt="group-logo"
                    />
                  </Col>
                  <Col lg={17}>
                    <div className="group-name font-semibold">{item.name}</div>
                    <div className="last-active text-[12px] text-gray-400">
                      {t(`common:layout.lastActivation`)}
                      {timeString}
                    </div>
                  </Col>
                </Row>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
