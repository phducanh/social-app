import Link from "next/link";
import { Row, Col, Button, Menu, Dropdown, message } from "antd";
import { calculateActiveTime } from "@utils/common";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { CloseCircleOutlined, PlusOutlined, LogoutOutlined, CrownOutlined } from "@ant-design/icons";

const privacy_types = [
    {
      value: 0,
      name: "Nhóm Công khai",
      label: "Công khai",
      script: "Bất kì ai cũng có thể nhìn thấy mọi người trong nhóm và những gì họ đăng",
      icon: "/images/icons/earth-fill.png",
    },
    {
      value: 1,
      name:"Nhóm riêng tư",
      label: "Riêng tư",
      script: "Chỉ thành viên mới nhìn thấy mọi người trong nhóm và những gì họ đăng",
      icon: "/images/icons/lock-fill.png",
    }
]

export const GroupHeader = (props) => {
    const { data } = props;
    const { t } = useTranslation();

    const menu = () => {
        return (
        <Menu>
            <Menu.Item key="0" icon={<CloseCircleOutlined />}>
            Bỏ theo dõi
            </Menu.Item>
            <Menu.Item key="1" icon={<LogoutOutlined />}>
            Rời khỏi nhóm
            </Menu.Item>
        </Menu>
        );
    };

    console.log("group header");
    console.log(data?.name);

    return (
      <div aria-label="Group Header" 
        className="bg-[transparent] w-full">
        <div 
            className=""
        >
            <div aria-label="Ảnh bìa"
                className="container mx-auto h-[300px] mb-3"
            >
                <img 
                    x="0" y="0" height={"100%"} 
                    preserveAspectRatio="xMidYMid slice" width={"100%"}
                    src={data?.cover_image===undefined ? "/images/background-group-default.png" : data?.cover_image}
                    alt="background-group" 
                    className="h-full rounded-b-xl"/>
                
                {/* <Button
                    // icon={<FileImageOutlined />}
                    className="rounded-3xl bg-[#C6FAF0] justify-self-end"
                >
                    Ảnh/Video
                </Button> */}
            </div>
            
            <div aria-label="Tên nhóm">
                <div className="text-2xl font-bold" 
                    hidden={data?.name!==undefined ? true : false}
                >
                    Tên nhóm
                </div>
                <div className="text-2xl font-bold">
                    {data?.name}
                </div>
                <div aria-label="Thông tin chung"
                    className="flex justify-start mt-3"
                >
                    <div aria-label="default"
                        className="text-[15px] mr-[5px]"
                        hidden={data?.privacy!==undefined ? true : false}
                    >
                        Quyền riêng tư của nhóm
                    </div>
                    <div aria-label="Quyền riêng tư"
                        className="flex justify-start"
                        hidden={data?.privacy===undefined ? true : false}
                    >
                        <div aria-label="icon"
                            className="m-[3px] h-[18px] w-[18px]">
                            <img src={privacy_types[data?.privacy]?.icon} alt="" />
                        </div>
                        <div aria-label="chi tiết"
                            className="">
                            <div className="text-[15px] mr-[5px]">
                                {privacy_types[data?.privacy]?.name}
                            </div>
                            
                        </div>
                    </div>
                    <div className="">
                        .
                    </div>
                    <div aria-label="Thành viên"
                        className="ml-[3px] text-[15px] font-bold"
                    >
                        {data?.member === undefined ? 1 : data?.member} thành viên
                    </div>
                </div>
            </div>

            <div aria-label="Member in Group Header"
                hidden={data?.members===undefined? true:false}
                className="bg-[] p-2 h-[]"
            >
                <Row>
                    <Col aria-label="avatar member"
                        className="bg-[]" xs={24} xl={16}
                    >
                        <div
                            class="bg-[] p-2 flex justify-start"
                        >

                        
                            <div aria-label="avatar member"
                                class="bg-[] flex -space-x-1 overflow-hidden"
                            >
                                {data?.members?.slice(0, 11).map((item) => {
                                    console.log("membersssss");
                                    console.log(item.image);
                                    return (
                                        <img class="inline-block h-[40px] w-[40px] rounded-full ring-2 ring-white" src={item?.image} alt=""/>
                                    );
                                    })
                                }   
                            </div>
                            <div
                                hidden={data?.members?.length<12 ? true:false}
                                className="bg-[] font-bold m-4 mx-2 text-md text-[#3BDEC1]"
                            >
                                + {data?.member?.length-12} other
                            </div> 
                        </div>
                    </Col>

                    <Col aria-label="join button"
                        className="bg-[]" xs={24} xl={8}
                    >
                            <div
                                className="bg-[] py-2 flex justify-end"
                            >
                                <div
                                    className="bg-[] w-3/4 flex justify-start"
                                >
                                    <Dropdown overlay={menu} trigger={['click']}>
                                    
                                        <div aria-label="Join button"
                                            className="w-1/2 flex justify-start w-[155px] rounded-lg bg-[#C6FAF0] hover:bg-[#3BDEC1]"
                                        >
                                            <div aria-label="icon"
                                            className="rounded-full h-[40px] w-[40px] grid place-items-center"
                                            >
                                            <div aria-label="icon"
                                                className="bg-[] w-3/5 h-3/5 flex justify-center rounded-sm"
                                            >
                                                <img src="/images/icons/group-joined-fill.png" alt="" />
                                            </div>
                                            </div>
                                            <div aria-label="name"
                                            className="bg-[] grid place-items-center"
                                            >
                                                <span
                                                    className="font-bold"
                                                >Đã tham gia</span>
                                            </div>
                                            <div aria-label="icon"
                                            className="rounded-full h-[40px] w-[40px] grid place-items-center"
                                            >
                                            <div aria-label="icon"
                                                className="bg-[] w-3/5 h-3/5 flex justify-center rounded-sm"
                                            >
                                                <img src="/images/icons/arrow-drop-down-fill.png" alt="" />
                                            </div>
                                            </div>
                                        
                                        </div>
                                    </Dropdown>
                                    <div aria-label="Invite button"
                                        className="bg-[] w-1/3"
                                    >
                                        <div
                                            className="bg-[] ml-3 w-1/2 h-full"
                                        >
                                            <Button icon={<PlusOutlined />}
                                                className="h-full bg-[#3BDEC1] hover:bg-[#C6FAF0] rounded-lg"
                                            >
                                                <span
                                                    className="font-bold bg-[] text-[black]"
                                                >
                                                    Mời
                                                </span>
                                            </Button>
                                        </div>
                                    </div> 
                                </div>
                                
                            </div>

                    </Col>
                </Row>
                <div aria-label="avatar member and join button"
                    className="bg-[yellow]"
                >
                   
                </div>
            </div>

            <hr className="my-[10px]"/>

            <div aria-label="Group Navbar"
                className="flex justify-start"
            >
                <div
                    className="bg-[] w-3/4"
                >
                    <Button type="text"
                        className="font-bold"
                    >
                        Giới thiệu
                    </Button>
                    <Button type="text"
                        className="font-bold"
                    >
                        Thảo luận
                    </Button>
                    <Button type="text"
                        className="font-bold"
                    >
                        Xem thêm
                    </Button>
                </div>

                <div
                    className="bg-[] w-1/4 flex justify-center"
                >
                    <Button icon={<CrownOutlined />}
                        className="mx-auto text-lg w-[150px] h-[40px] font-bold rounded-3xl bg-[#C6FAF0] hover:bg-[#3BDEC1]" 
                    >
                        <span
                            className="text-[]"
                        >
                            Donate
                        </span>
                    </Button>
                </div>
            </div>

        </div>
        
      </div>
    );
  };