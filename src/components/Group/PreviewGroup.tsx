import Link from "next/link";
import { Row, Col } from "antd";
import { calculateActiveTime } from "@utils/common";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export const PreviewGroup = (props) => {
    const { data } = props;
    const { t } = useTranslation();

    let hiddenPrivacy = true, hiddenGroup_type=true, hiddenDescript = true

    if (data?.privacy != undefined) {
        hiddenPrivacy=false;
    }
    if (data?.group_type != undefined) {
        hiddenGroup_type=false;
    }
    console.log("privacy")
    console.log(hiddenPrivacy);

    return (
      <div aria-label="Giới thiệu group" 
        className="bg-[white] w-full h-full p-2 mr-2 rounded-xl">
        <div 
            className="m-[15px]"
        >
            <div aria-label="Giới thiệu"
                className="bg-[]"
            >
                <div className="text-[15px] font-bold">
                    Giới thiệu
                </div>
                <div className="text-[12px] mt-[3px]"
                >
                    {data?.descript}
                </div>      
            </div>

            <div aria-label="Nội dung">
                <div aria-label="Quyền riêng tư" 
                    className="flex justify-start  bg-[]"
                    hidden={hiddenPrivacy}
                >
                    <div aria-label="icon"
                        className="m-[3px] h-[18px] bg-[] w-[18px]">
                        <img src={data?.privacy?.image} alt="" />
                    </div>
                    <div aria-label="chi tiết"
                        className="bg-[]">
                        <div className="text-[15px] font-bold">
                            {data?.privacy?.label}
                        </div>
                        <div className="text-[11px] m-[3px]">
                            {data?.privacy?.script}
                        </div>
                    </div>
                </div>

                <div aria-label="Loại nhóm" className="flex justify-start mt-2 mb-2"
                    hidden={hiddenGroup_type}
                >
                    <div aria-label="icon"
                        className="m-[3px] bg-[] h-[18px] w-[18px]">
                        <img src={data?.group_type?.image} alt="" />
                    </div>
                    <div aria-label="chi tiết"
                        className="bg-[]">
                        <div className="text-[15px] font-bold">
                            {data?.group_type?.label}
                        </div>
                        <div className="text-[11px] m-[3px]">
                            {data?.group_type?.script}
                        </div>
                    </div> 
                </div>

                <div aria-label="Tổng quát" 
                    className="flex justify-start mt-2 mb-2">
                    <div aria-label="icon"
                        className="m-[3px] h-[18px] w-[18px]">
                        <img src="/images/icons/team-fill.png" alt="team-icon" />
                    </div>
                    <div aria-label="chi tiết"
                        className="text-[15px] font-bold">
                        Tổng quát
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    );
  };