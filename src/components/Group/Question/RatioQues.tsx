import React from "react";
import { Radio, Form, Space } from "antd";

export const RatioQues = (props) => {
  const { data } = props;
  return (
    <Form.Item name="radio-group" label={data?.question}>
      <Radio.Group>
        <Space direction="vertical">
          {data.answer.map((answer, index) => (
            <Radio key={index} value={answer}>
              {answer}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </Form.Item>
  );
};
