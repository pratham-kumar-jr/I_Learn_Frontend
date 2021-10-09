/** @format */

import { FC, memo } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

interface Props {}

const ChatBox: FC<Props> = (props) => {
     return (
          <>
               <div className="bg-white h-full flex flex-col items-end">
                    <div className="flex-1 mt-16 mr-4 w-96 bg-white shadow-xl rounded-lg relative overflow-hidden">
                         <div className="bg-red-700 h-64 rounded-t-lg absolute w-full z-0"></div>
                         <div className="flex flex-col overflow-y-auto h-full p-4 space-y-4">
                              <div className="flex flex-col z-10 ml-4 text-white">
                                   <span className="flex items-center">
                                        <HiOutlineUser className="h-12 w-12" />
                                        <div className="text-3xl m-2">
                                             Hi USER !
                                        </div>
                                   </span>
                              </div>
                              <div className="border-0 border-t-4 border-red-500 rounded z-10 shadow-md text-sm">
                                   <div className="bg-white border border-t-0 rounded-t-none rounded-b flex flex-col space-y-2">
                                        <div className="px-6 py-4 flex flex-col items-start gap-3">
                                             <div className="font-semibold ">
                                                  Ask us any Queries
                                             </div>

                                             <button
                                                  type="button"
                                                  className="bg-red-700 rounded-full text-white flex flex-row gap-2 py-3 px-5">
                                                  <svg
                                                       className="w-5 h-5 transform rotate-90"
                                                       fill="none"
                                                       stroke="currentColor"
                                                       viewBox="0 0 24 24"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                       <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                                  </svg>
                                                  <Link to="/inbox">
                                                       Ask your Doubts
                                                  </Link>
                                             </button>
                                        </div>
                                        <div className="border-t px-6 py-4">
                                             <a
                                                  href="#"
                                                  className="text-sm text-red-500 hover:text-red-300">
                                                  See all your asked questions
                                             </a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

ChatBox.defaultProps = {};

export default memo(ChatBox);
