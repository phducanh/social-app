import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Form, Input, Button, Select } from "antd";
import { CreateGroup } from "@/src/api/post-services";
import { useRouter } from "next/router";
import { store } from "@/reducer/store";
import { PreviewGroup } from "@components/Group/PreviewGroup";
import { GroupHeader } from "@components/Group/GroupHeader";
import { useState } from "react";
import { Shared } from "@components/Shared";
import { ConfigMoney } from "@components/Group/ConfigMoney";

enum change {
  NAME,
  PRIVACY,
  GROUP_TYPE,
  MEMBER_APPROVE,
  POST_APPROVE,
}

export default function Create_group() {
  const { t } = useTranslation();
  const { auth } = store.getState();
  const [group, setGroup] = useState(undefined);
  const router = useRouter();
  const user = auth.data.user;

  const changeGroup = (type: change, value = undefined) => {
    if (type !== undefined) {
      if (type == change.NAME) {
        if (value == "" || value === undefined) {
          setGroup({ ...group, name: "Tên nhóm" });
        } else setGroup({ ...group, name: value });
      }
      if (type == change.PRIVACY) {
        setGroup({ ...group, privacy: value });
      }
      if (type == change.GROUP_TYPE) {
        setGroup({ ...group, group_type: value });
      }
    }
  };

  const onFinish = (values) => {
    CreateGroup(values, auth.data).then((res) => {
      console.log(res.data);
      router.push("/");
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex justify-start">
      {false && <ConfigMoney />}
      <div
        aria-label="Mẫu tạo nhóm"
        className=" w-[350px]  md:w-[350px] lg:w-[300px] py-5 px-[30px] bg-[white] rounded-xl"
      >
        <h1 className="text-left text-xl font-bold text-[#000000] mb-5">
          Tạo nhóm
        </h1>

        <div aria-label="Quản trị viên" className="pb-10 flex justify-start">
          <div
            aria-label="Avatar quản trị viên"
            className="mr-[12px] h-[36px] w-[36px]"
          >
            <svg aria-hidden="true" role={"none"} color={""}>
              <mask id="jsc_c_u">
                <circle cx={18} cy={18} fill="white" r={18}></circle>
              </mask>
              \
              <g mask="url(#jsc_c_u)">
                <image
                  x="0"
                  y="0"
                  height={"100%"}
                  preserveAspectRatio="xMidYMid slice"
                  width={"100%"}
                  xlinkHref={user?.avatar}
                  className="h-[36px] w-[36px]"
                ></image>
              </g>
            </svg>
          </div>
          <div aria-label="Tên quản trị viên">
            <div className="">
              <span dir="auto" className="text-{16px} font-bold text-[14px]">
                {user?.fullName}
              </span>
            </div>
            <div>
              <span dir="auto" className=" text-[gray] text-[11px]">
                Quản trị viên
              </span>
            </div>
          </div>
        </div>

        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your group name!",
              },
            ]}
          >
            <Input
              type={"text"}
              className="px-4 py-2.5"
              placeholder="Tên nhóm"
              maxLength={75}
              onChange={(e) => {
                if (/^\s*$/.test(e.target.value)) {
                  changeGroup(change.NAME, undefined);
                } else {
                  changeGroup(change.NAME, e.target.value);
                }
              }}
            />
          </Form.Item>

          <Form.Item
            name="privacy"
            rules={[
              {
                required: true,
                message: "Please choose privacy of your group",
              },
            ]}
          >
            <Select
              id="privacy"
              placeholder="Chọn quyền riêng tư"
              onChange={(e) => changeGroup(change.PRIVACY, e)}
            >
              <Select.Option value="0">Nhóm công khai</Select.Option>
              <Select.Option value="1">Nhóm riêng tư</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="group_type"
            rules={[
              {
                required: true,
                message: "Please choose group type!",
              },
            ]}
          >
            <Select
              id="payable"
              placeholder="Loại group"
              className=""
              onChange={(e) => changeGroup(change.GROUP_TYPE, e)}
            >
              <Select.Option value={false}>Miễn phí</Select.Option>
              <Select.Option value={true}>Trả phí</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="memberApproval"
            rules={[
              {
                required: true,
                message: "Please choose how you approve new member!",
              },
            ]}
          >
            <Select
              id="memberApproval"
              placeholder="Cơ chế xét duyệt thành viên"
            >
              <Select.Option value={false}>Không xét duyệt</Select.Option>
              <Select.Option value={true}>Có xét duyệt</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="postApproval"
            rules={[
              {
                required: true,
                message: "Please choose how you approve new post!",
              },
            ]}
          >
            <Select id="postApproval" placeholder="Cơ chế xét duyệt bài đăng">
              <Select.Option value="No Approve">Không xét duyệt</Select.Option>
              <Select.Option value="Public Approve">
                Xét duyệt công khai
              </Select.Option>
              <Select.Option value="Private Approve">
                Xét duyệt riêng tư
              </Select.Option>
            </Select>
          </Form.Item>

          <div className="flex justify-center mt-9 border-b mb-6">
            <Form.Item>
              <Button
                className="rounded-3xl bg-[#C6FAF0] px-20 text-[#15705F] font-bold"
                htmlType="submit"
              >
                Tạo nhóm
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>

      <div
        aria-label="Xem trước tạo nhóm"
        className="flex justify-center w-4/5 m-[5px] bg-[]"
      >
        <div
          aria-label="Xem trước bố cục trên máy tính"
          className="cursor-not-allowed overlay w-[900px] h-[680px] bg-[white] rounded-xl pt-[16px] pb-[10px] mx-[10px] "
        >
          <div className=" m-[10px] bg-[] h-full mix-blend-luminosity">
            <div className="mx-[20px] text-[16px] font-bold ">
              Xem trước bố cục trên máy tính
            </div>

            <div className="bg-[] h-[580px]">
              <div className="m-[10px] bg-[] h-full overflow-auto">
                <div aria-label="Group Header" className="pt-[10px] ">
                  <GroupHeader data={group} />
                </div>

                <div className="flex justify-between bg-[#C6FAF0] mx-[10px] my-[10px] rounded-xl">
                  <div className="bg-[#C6FAF0] rounded-xl py-[10px] w-3/5 m-[10px] pt-0">
                    <Shared data={group} />
                  </div>

                  <div aria-label="Preview group" className="p-[10px] w-2/5 ">
                    <PreviewGroup data={group} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
