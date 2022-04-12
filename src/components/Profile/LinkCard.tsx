import React from "react";
import Link from "next/link";
import { Row, Col } from "antd";
import Button from "@/src/components/CustomButton/Button";
import { useTranslation } from "next-i18next";
import { convertLongString } from "@utils/common";

export const LinkCard = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <div className="bg-white p-4 text-base">
      {data.map((item) => (
        <Row className="mb-4 px-3 py-5 bg-gray-100 rounded-xl" key={item?.id}>
          <Col sm={4} lg={4}>
            {item?.name === "MasterCard" && (
              <img
                className="h-10 w-10 object-contain"
                src={"/images/icons/mastercard.svg"}
                alt="mastercard"
              />
            )}
            {item?.name === "Momo" && (
              <img
                className="h-10 w-10 object-contain"
                src={"/images/icons/momo.png"}
                alt="momo"
              />
            )}
            {item?.name === "MetaMask" && (
              <img
                className="h-10 w-10 object-contain"
                src={"/images/icons/metamask.png"}
                alt="metamask"
              />
            )}
          </Col>
          <Col sm={4} lg={4} className="">
            <div className="font-bold">{item?.name}</div>
            {/* {item?.default && (
              <div className="font-bold bg-primary/75 inline-flex px-3 rounded text-gray-600 text-xs py-1">
                {t(`profile:default`)}
              </div>
            )} */}
          </Col>
          <Col sm={4} lg={10} className="">
            <span className="font-bold">
              {item?.name === "MetaMask"
                ? convertLongString(item?.number, 25)
                : item?.number}
            </span>
          </Col>
          <Col flex={1} className="action flex justify-end">
            <Button size="xs" variant="primary" type="submit" color="orange">
              {t(`profile:removeCard`)}
            </Button>
          </Col>
        </Row>
      ))}

      <Button size="small" variant="primary" type="submit">
        {t(`profile:addCard`)}
      </Button>
    </div>
  );
};
