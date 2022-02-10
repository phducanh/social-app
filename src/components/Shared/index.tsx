import Link from "next/link";
import { Row, Col, Form, Input, Button} from "antd";
import { calculateActiveTime } from "@utils/common";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import {FileImageOutlined} from "@ant-design/icons";

const author = {
    id: "123",
    name: "Mai Phương Chu",
    image:
    "https://anhdep123.com/wp-content/uploads/2021/05/avatar-mau-trang.jpg",
  };

export const Shared = (props) => {
    const { title } = props;
    const { t } = useTranslation();

    const [privacy, setPrivacy] = useState(undefined)
    const [group_type, setGroup_type] = useState(undefined)

    const changePrivacy = (value) => {
        setPrivacy(value);
    }
  
    const changeGroup_type = (value) => {
        setGroup_type(value);
    }

    return (
      <div aria-label="Shared" 
        className="bg-[white] w-full h-[120px] p-2 mr-2 rounded-xl"
      >
        <div
            className="flex justify-start"
        >
            <div aria-label="Avatar user"
                className="mr-[12px] mt-[10px] h-[36px] w-[36px]">
                <svg aria-hidden="true" role={"none"} color={""} >
                    <mask id="jsc_c_u">
                        <circle cx={30} cy={30} fill="white" r={30}></circle>
                    </mask>\
                    <g mask="url(#jsc_c_u)">
                        <image x="0" y="0" height={"100%"} 
                        preserveAspectRatio="xMidYMid slice" width={"100%"} 
                        xlinkHref={author?.image} 
                        className="h-[36px] w-[36px]">
                        </image>
                    </g>
                </svg>
            </div>
            <div
                className="w-full"
            >
                <Input type={"text"} placeholder="Bạn đang nghĩ gì?"
                    className="bg-[gray] rounded-3xl text-[16px] w-full mt-[10px]"
                >
                </Input>
                <hr className="my-[10px]"/>
                <div
                    className="flex justify-start"
                >
                    <Button
                        icon={<FileImageOutlined />}
                        className="rounded-3xl bg-[#C6FAF0]"
                    >
                        Ảnh/Video
                    </Button>
                </div>
            </div>
            
        </div>
        

        
      </div>
    );
  };