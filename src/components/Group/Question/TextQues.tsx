import React from "react";
import { Form, Input } from "antd";

export const TextQues = (props) => {
  const { data } = props;

  return (
    <Form.Item
      name="ques-text"
      label={data?.question}
      rules={[
        {
          required: true,
          message: "Hãy nhập câu trả lời",
        },
      ]}
    >
      <Input.TextArea showCount maxLength={256} />
    </Form.Item>
  );
};
