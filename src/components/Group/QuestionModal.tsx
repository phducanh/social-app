import React from "react";
import { Modal, Row, Col } from "antd";
import { CheckboxQues } from "@components/Group/Question/CheckboxQues";
import { RatioQues } from "@components/Group/Question/RatioQues";
import { TextQues } from "@components/Group/Question/TextQues";

import { Form, Select, Button } from "antd";

const { Option } = Select;

export const QuestionModal = (props) => {
  const { groupData, question, setShow, sendRequest } = props;

  const formItemLayout = {
    labelCol: {
      span: 24,
    },
  };

  const submitForm = (e) => {
    console.log("first", e);
    sendRequest()
  };
  return (
    <Modal visible={true} footer={null} closable={false}>
      <div className="">
        <div className="header font-bold text-lg mb-5">Trả lời câu hỏi</div>
        <Row className="group-infor">
          <Col className="mr-4" lg={6}>
            <img
              className="block w-full object-cover w-20 h-20 rounded-xl"
              src="/images/background-group-default.png"
            ></img>
          </Col>
          <Col lg={17} className="flex-col flex justify-center">
            <div className="title font-extrabold">{groupData?.name}</div>
            <div className="infor text-gray-400 font-medium text-xs">
              <span className="mr-2">
                {groupData?.group_type == 0
                  ? "Nhom Rieng tu"
                  : "Nhom Cong khai"}
              </span>
              {"-"}
              <span className="ml-2">{groupData?.member}</span>
            </div>
          </Col>
        </Row>
        <div className="noti mt-5 p-4 bg-gray-400/50 rounded-xl">
          Yêu cầu của bạn đang được phê duyệt. Hãy trả lời những câu hỏi dưới
          đây để được duyệt.
        </div>

        <div className="question-container mt-5">
          <Form
            layout={"vertical"}
            name="validate_other"
            {...formItemLayout}
            onFinish={submitForm}
            initialValues={{
              "input-number": 3,
              "checkbox-group": ["A", "B"],
              rate: 3.5,
            }}
          >
            {question.map((ques) => {
              switch (ques.type) {
                case "ratio":
                  return <RatioQues data={ques}></RatioQues>;
                case "checkbox":
                  return <CheckboxQues data={ques}></CheckboxQues>;
                case "text":
                  return <TextQues data={ques}></TextQues>;
                default:
                  return <></>;
              }
            })}

            <Form.Item>
              <Button htmlType="submit">Gửi</Button>
              <Button
                className="ml-4"
                htmlType="button"
                onClick={() => setShow(false)}
              >
                Huỷ
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
