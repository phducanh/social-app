import Link from "next/link";
import { Row, Col } from "antd";
import { calculateActiveTime } from "@utils/common";
import { useTranslation } from "next-i18next";

const group = [
  {
    name: "Cùng nhau học Lý",
    lastActive: 1644371112445,
    id: "ajsjjxj22cjjjxxx",
    images:
      "https://media.istockphoto.com/vectors/blackboard-inscribed-with-scientific-formulas-and-calculations-in-vector-id936903524?k=20&m=936903524&s=612x612&w=0&h=2gzychnTuwV8BSmtmJ4avgX1wKu0I8-wQmUcXi0McIY=",
  },
  {
    name: "Hội Build PC Hà Nội",
    lastActive: 1644071112445,
    id: "ajsjjxjcjjjxxxxx",
    images: "https://m.media-amazon.com/images/I/51oUz+Uo3nL._AC_SS450_.jpg",
  },
  {
    name: "Truyện Tranh Hay",
    lastActive: 1640371112445,
    id: "ajsjjxjcjjzjxxx",
    images:
      "https://kenh14cdn.com/203336854389633024/2021/9/3/photo-1-16306417221131994914891.jpg",
  },
];

export const YourGroup = (props) => {
  const { title } = props;
  const { t } = useTranslation();

  return (
    <div className="bg-white w-full mt-3 p-2">
      <div className="title mb-3 text-base font-semibold">{title}</div>
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
                <Row className="bg-gray pb-2">
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
