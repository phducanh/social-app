import Link from "next/link";
import { Row, Col, Button } from "antd";
import { calculateActiveTime } from "@utils/common";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export const GroupHeader = (props) => {
    const { data } = props;
    const { t } = useTranslation();

    let hiddenDefaultPrivacy=false, hiddenDefaultName=false;

    if (data?.privacy != undefined) {
        hiddenDefaultPrivacy=true;
    }
    if (data?.name != undefined) {
        hiddenDefaultName=true;
    }

    return (
      <div aria-label="Group Header" 
        className="bg-[white] w-full p-2 ">
        <div 
            className="m-[15px]"
        >
            <div aria-label="Ảnh bìa"
                className="container mx-auto h-[300px] mb-3"
            >
                <img 
                    x="0" y="0" height={"100%"} 
                    preserveAspectRatio="xMidYMid slice" width={"100%"}
                    src="/images/background-group-default.jpg" 
                    alt="background-group-default" 
                    className="h-full rounded-xl"/>
                
                {/* <Button
                    // icon={<FileImageOutlined />}
                    className="rounded-3xl bg-[#C6FAF0] justify-self-end"
                >
                    Ảnh/Video
                </Button> */}
            </div>
            
            <div aria-label="Tên nhóm">
                <div className="text-2xl font-bold" 
                    hidden={hiddenDefaultName}
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
                        hidden={hiddenDefaultPrivacy}
                    >
                        Quyền riêng tư của nhóm
                    </div>
                    <div aria-label="Quyền riêng tư"
                        className="flex justify-start">
                        <div aria-label="icon"
                            className="m-[3px] h-[18px] w-[18px]">
                            <img src={data?.privacy?.image} alt="" />
                        </div>
                        <div aria-label="chi tiết"
                            className="">
                            <div className="text-[15px] mr-[5px]">
                                {data?.privacy?.name}
                            </div>
                            
                        </div>
                    </div>
                    <div className="">
                        .
                    </div>
                    <div aria-label="Thành viên"
                        className="ml-[3px] text-[15px] font-bold"
                    >
                        {1} thành viên
                    </div>
                </div>
            </div>

            <hr className="my-[10px]"/>

            <div aria-label="Group Navbar"
                className="flex justify-start"
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

        </div>
        
      </div>
    );
  };