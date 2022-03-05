import React from "react";
import { Form, Checkbox, Col, Row } from "antd";

export const CheckboxQues = (props) => {
  const { data } = props;

  return (
    <Form.Item name={`question-${data.id}`} label={data?.question}>
      <Checkbox.Group>
        <Row className="flex-col">
          {data?.answer.map((answer) => (
            <Col key={answer} span={8}>
              <Checkbox
                value={answer}
                style={{
                  lineHeight: "32px",
                }}
              >
                {answer}
              </Checkbox>
            </Col>
          ))}
        </Row>
      </Checkbox.Group>
    </Form.Item>
  );
};
