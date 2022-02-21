import React from "react";
import Link from "next/link";
import { Row, Col, Button, Table, Tag, Space } from "antd";
import { useTranslation } from "next-i18next";
import { convertLongString, numberWithCommas } from "@utils/common";

const columns = [
  {
    title: "Loại",
    dataIndex: "type",
    key: "type",
    render: (type) => <a>{type}</a>,
  },
  {
    title: "Ngày",
    dataIndex: "date",
    key: "date",
    render: (date) => {
      const stringDate = new Date(date).toLocaleDateString("en-GB");
      return <div>{stringDate}</div>;
    },
  },
  {
    title: "Từ",
    dataIndex: "from",
    key: "from",
    render: (from) => <div>{convertLongString(from, 12)}</div>,
  },
  {
    title: "TớI",
    dataIndex: "to",
    key: "to",
    render: (to) => <div>{convertLongString(to, 12)}</div>,
  },
  {
    title: "Số lượng xu",
    dataIndex: "amount",
    key: "amount",
    render: (amount) => <Space size="middle">{numberWithCommas(amount)}</Space>,
  },
];

export const ManageWallet = (props) => {
  const { data } = props;
  const { t } = useTranslation();

  console.log(data);

  return (
    <div className="bg-white p-4">
      <div className="title font-bold  text-lg">Quản lý ví Xu</div>
      <div className="mt-3">
        <span className="font-bold">{`Address: `}</span> {data?.address}
      </div>
      <div className="mt-3">
        <span className="font-bold mr-1">{`Số dư:`}</span>

        <span className="">
          {data?.balance}{" "}
          <span className="text-primary font-bold">{` Xu`}</span>
        </span>
      </div>
      <Button className="bg-primary text-xl flex px-5 items-center rounded mt-3">
        <span className="text-lg block"> Nạp xu</span>
      </Button>
      <div className="tx-history mt-6">
        <div className="font-bold text-lg mb-3">Lịch sử giao dịch:</div>
        <Table columns={columns} dataSource={data?.history} />
      </div>
    </div>
  );
};
