import React from "react";
import { Form, Modal, Button, InputNumber, Row, Col } from "antd";
import { Input } from "postcss";

export const ConfigMoney = (props) => {
  const formItemLayout = {
    labelCol: {
      span: 24,
    },
  };

  const submitForm = (e) => {
    console.log("first", e);
  };
  return (
    <Modal visible={true} footer={null} closable={false} style={{ top: 20 }}>
      <div>
        <div className="title text-2xl font-bold text-center border-b pb-3">
          Thiết lập dòng tiền của nhóm
        </div>
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
          <div className="mt-3">
            <div className="font-bold text-lg">Thiết lập phí tham gia:</div>
            <div className="free mt-3">
              <Row>
                <Col md={6}>Viewer: </Col>
                <Col>Free</Col>
              </Row>

              <span className="block text-black/50 italic">{`(Viewer chỉ có thể react với bài viết)`}</span>
            </div>
          </div>
          <Form.Item className="mt-3" name="member-fee">
            <div className="member">
              <Row>
                <Col md={6} className="flex items-center">
                  Member:{" "}
                </Col>
                <Col>
                  <InputNumber
                    controls={false}
                    min={1}
                    max={10}
                    name="member-fee"
                  />
                  <span>{` Xu/Tháng`}</span>
                </Col>
              </Row>
              <span className="block text-black/50 italic">{`(Member có thể react và bình luận bài viết)`}</span>
            </div>
          </Form.Item>
          <Form.Item className="mt-3" name="vip-fee">
            <div className="vip">
              <Row>
                <Col md={6} className="flex items-center">
                  VIP:{" "}
                </Col>
                <Col>
                  <InputNumber controls={false} min={1} max={10} />
                  <span>{` Xu/Tháng`}</span>
                </Col>
              </Row>
              <span className="block text-black/50 italic">{`(VIP có thể react và bình luận và viết bài và nhận xu từ đóng góp của mình)`}</span>
            </div>
          </Form.Item>
          <div className="font-bold text-lg">Thiết lập cơ chế khen thưởng:</div>
          <div className="mt-3">
            Ví Xu của group được tổng kết vào 5 ngày cuối mỗi tháng. Người tạo
            nhóm vui lòng thiết lập tỉ lệ khen thưởng xu cho các thành viên của
            nhóm{" "}
          </div>
          <Form.Item className="mt-3" name="host-rate">
            <div className="host mt-4">
              <Row>
                <Col md={6} className="flex items-center">
                  Host:{" "}
                </Col>
                <Col>
                  <InputNumber
                    controls={false}
                    min={1}
                    max={10}
                    name="host-rate"
                  />
                  <span>{` %`}</span>
                </Col>
              </Row>
            </div>
          </Form.Item>
          <Form.Item className="mt-3" name="admin-rate">
            <div className="member mt-4">
              <Row>
                <Col md={6} className="flex items-center">
                  Nhóm admin:{" "}
                </Col>
                <Col>
                  <InputNumber controls={false} min={1} max={10} />
                  <span>{` %`}</span>
                </Col>
              </Row>
              <span className="block text-black/50 italic">{`(Admin duyệt thành viên vào nhóm. Lượng Xu ở Nhóm admin sẽ được chia đều cho các admin)`}</span>
            </div>
          </Form.Item>
          <Form.Item className="mt-3" name="inspector-rate">
            <div className="vip mt-4">
              <Row>
                <Col md={6} className="flex items-center">
                  Nhóm inspector:{" "}
                </Col>
                <Col>
                  <InputNumber controls={false} min={1} max={10} />
                  <span>{` %`}</span>
                </Col>
              </Row>
              <span className="block text-black/50 italic">{`(Inspector duyệt bài đăng vào nhóm. Lượng Xu ở Nhóm inspector sẽ được chia đều cho các inspector)`}</span>
            </div>
          </Form.Item>
          <Form.Item className="mt-3" name="vip-rate">
            <div className="vip mt-4">
              <Row>
                <Col md={6} className="flex items-center">
                  Nhóm VIP:{" "}
                </Col>
                <Col>
                  <InputNumber controls={false} min={1} max={10} />
                  <span>{` %`}</span>
                </Col>
              </Row>
              <span className="block text-black/50 italic">{`(VIP đóng góp bài viết cho nhóm. Lượng Xu ở Nhóm VIP sẽ chia cho các thành viên VIP theo tỉ lệ tương tác tích cực từ bài viết của họ trong tháng)`}</span>
            </div>
          </Form.Item>
          <Form.Item className="mt-3" name="system-rate" initialValue={1.5}>
            <div className="vip mt-4">
              <Row>
                <Col md={6} className="flex items-center">
                  Hệ thống:{" "}
                </Col>
                <Col md={12}>
                  <InputNumber
                    value={1.5}
                    readOnly={true}
                    disabled
                  ></InputNumber>
                  <span>{` %`}</span>
                </Col>
              </Row>
              <span className="block text-black/50 italic">{`(Đây là kinh phí giúp hệ thống vận hành và đảm bảo chất lượng tốt nhất đến người dùng)`}</span>
            </div>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Hoàn thành</Button>
            <Button className="ml-4" htmlType="button" onClick={() => {}}>
              Quay lại
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};
