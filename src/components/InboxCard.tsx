/** @format */

import { ButtonHTMLAttributes, FC, memo, useState } from "react";
import { SiSnapchat } from "react-icons/si";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
     theme?: "notSelected" | "selected";
     user: string;
     message: string;
     time: string;
}

const InboxCard: FC<Props> = ({ user, message, time, theme, ...rest }) => {
     const [show, setShow] = useState(false);

     const themeClasses =
          show === false
               ? "border-transparent hover:bg-gray-100 p-3"
               : "border-red-500 bg-red-100 ";

     return (
          <>
               <button
                    {...rest}
                    className="block border-b"
                    onClick={() => setShow(true)}>
                    <div className={"border-l-2 p-3 space-y-4 " + themeClasses}>
                         <div className="flex flex-row items-center space-x-2">
                              <SiSnapchat />
                              <strong className="flex-grow text-sm">
                                   {user}
                              </strong>
                              <div className="text-sm text-gray-600">
                                   {time}
                              </div>
                         </div>

                         <div className="flex flex-row items-center space-x-1">
                              <div className="flex-grow truncate text-xs pl-6">
                                   {message}
                              </div>
                         </div>
                    </div>
               </button>
          </>
     );
};

InboxCard.defaultProps = {};

export default memo(InboxCard);
