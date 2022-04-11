import React from "react";
import { Row, Col } from "antd";

export const TopItem = (props) => {
  const { data, index } = props;

  const handleColor = (index) => {
    switch (index) {
      case 1:
        return "bg-red-300";
      case 2:
        return "bg-orange-300";
      case 3:
        return "bg-yellow-200";
      default:
        return "bg-white";
    }
  };

  const colorClass = handleColor(index + 1);

  return (
    <Row
      className={`top-item ${colorClass} mb-3 p-3 shadow-xl`}
      justify="center"
    >
      <Col className="avatar">
        <img
          src={`${data.avatar}`}
          alt="user-avatar"
          className="w-12 h-12 rounded-full object-contain"
        />
      </Col>
      <Col flex={1} className="flex items-center ml-3">
        <span className="font-bold">
          {data.fullName} - {data.totalLikes}{" "}
          {data.totalLikes > 1 ? "likes" : "like"}
        </span>
      </Col>
      <Col className="action flex items-center">
        <img
          src="https://cdn1.iconfinder.com/data/icons/web-and-user-interface-21/512/30-512.png"
          className="h-4 w-4"
        />
      </Col>
    </Row>
  );
};
