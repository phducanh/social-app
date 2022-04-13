import { Row, Col } from "antd";
import { CustomMenu } from "@components/Layout/CustomMenu";
import { GroupTemplate } from "@components/Group/GroupTemplate";
import { GROUP_TYPE } from "@/src/constants/common";

export const GroupLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Row justify={`center`} className="w-full">
        <Col className="w-full xl:w-11/12 ">
          <Row className="w-full justify-center">
            <Col md={4} lg={5} className="mr-6">
              <CustomMenu />
              <GroupTemplate type={GROUP_TYPE.OWNED_GROUP} className="mt-3" />
              <GroupTemplate type={GROUP_TYPE.JOINED_GROUP} className="mt-3" />
            </Col>
            <Col md={13} lg={13} className="w-full">
              <div className="post-container mx-auto">{children}</div>
            </Col>
            <Col md={4} lg={5} className="ml-6">
              <GroupTemplate type={GROUP_TYPE.SUGGESTED_GROUP} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
