import React from "react";
import { Radio, Form } from "antd";

export const RatioQues = (props) => {
  const { data } = props;
  return (
    <Form.Item name="radio-group" label={data?.question}>
      <Radio.Group>
        <Radio value="a">item 1</Radio>
        <Radio value="b">item 2</Radio>
        <Radio value="c">item 3</Radio>
      </Radio.Group>
    </Form.Item>
  );
};
