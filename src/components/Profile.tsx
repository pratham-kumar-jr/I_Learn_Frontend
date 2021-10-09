/** @format */

import { FC, ImgHTMLAttributes, memo } from "react";
import { RiShieldUserLine } from "react-icons/ri";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneAlt, FaUsers } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { RiInformationFill } from "react-icons/ri";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
     first_name: string;
     last_name: string;
     phone_number: string;
     email: string;
     no_of_students_enrolled: number[];
     current_industry: string;
     about: string;
     profile_pic_url: string | null;
}

const handleImgError = (e: any) => {
     e.target.src =
          "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg";
};

const Profile: FC<Props> = ({
     first_name,
     last_name,
     about,
     phone_number,
     email,
     no_of_students_enrolled,
     current_industry,
     profile_pic_url,
}) => {
     return (
          <div className="flex w-min border-2 rounded-2xl p-4 pr-0 shadow-2xl ring-offset-red-600 items-center bg-red-800 m-3">
               <div className="text-white w-max">
                    <img
                         src={"" + profile_pic_url}
                         alt="img"
                         onError={handleImgError}
                         className="h-48 w-48 rounded-full object-cover object-center bg-black border "
                    />
                    <div className=" flex space-x-2 items-center p-2 text-center">
                         <RiShieldUserLine className="h-6 w-6" />
                         <span className=" font-semibold">
                              {first_name + " " + last_name}
                         </span>
                    </div>
               </div>
               <div className="ml-4 flex flex-col items-inner border-2 ring-offset-red-900 shadow-inner pl-28 py-3 bg-white rounded-l-full hover:h-60 ">
                    <div className="flex space-x-2 w-full justify-end items-center p-2">
                         <RiInformationFill className=" h-5 w-5" />
                         <div>{about}</div>
                    </div>
                    <div className="flex space-x-2 w-full justify-end items-center p-2">
                         <FaUsers className=" h-5 w-5" />
                         <div>{no_of_students_enrolled.length}</div>
                    </div>
                    <div className="flex justify-end w-full">
                         <div className="flex justify-end space-x-2 items-center p-2">
                              <AiTwotoneMail className=" h-5 w-5" />
                              <div>{email}</div>
                         </div>
                         <div className="flex space-x-2 justify-end items-center p-2">
                              <FaPhoneAlt className=" h-5 w-5" />
                              <div>{phone_number}</div>
                         </div>
                         <div className="flex space-x-2 justify-end items-center p-2">
                              <SiSubstack className=" h-5 w-5" />
                              <div>{current_industry}</div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

Profile.defaultProps = {};

export default memo(Profile);
