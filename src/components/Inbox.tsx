/** @format */

import { FC, memo, useState } from "react";
import { SiSnapchat } from "react-icons/si";
import { RiSnapchatLine } from "react-icons/ri";
import InboxCard from "./InboxCard";

interface Props {}

const Inbox: FC<Props> = (props) => {
     return (
          <>
               <div className="flex flex-row h-screen bg-red-100 shadow-xl">
                    <div className="flex flex-col justify-between items-center flex-none w-16 bg-red-700">
                         <div className="flex flex-col space-y-4 w-full items-center pt-5">
                              <a className="relative h-16 w-16 flex justify-center items-center">
                                   <svg
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                             stroke-width="2"
                                             d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                                   </svg>
                                   <div className="absolute top-0 right-0 mr-3 mt-3 bg-white w-4 h-4 text-xs text-red-500 font-bold rounded-full text-center">
                                        5
                                   </div>
                              </a>
                         </div>
                    </div>

                    <div className="w-28 w sm:w-64 flex-none bg-gray-100 p-4 flex flex-col space-y-4">
                         <div className="flex flex-row justify-between items-center mb-6">
                              <h1 className="font-semibold text-2xl">Inbox</h1>
                              <svg
                                   className="flex-none w-4 h-4"
                                   fill="none"
                                   stroke="currentColor"
                                   viewBox="0 0 24 24"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                              </svg>
                         </div>

                         <InboxCard
                              user="Sandeep Jain"
                              time="5hr"
                              message="I wanted to ask that..."
                         />
                         <InboxCard
                              user="Prateek Narang"
                              time="7hr"
                              message="I have a doubt regarding..."
                         />
                    </div>

                    <div className="flex flex-row flex-auto bg-white rounded-tl-xl border-l shadow-xl">
                         <div className="w-full border-l border-r border-gray-400 flex flex-col">
                              <div className="flex-none h-20 flex flex-row justify-between items-center p-5 border-b">
                                   <div className="flex flex-col space-y-1">
                                        <strong>Prateek Narang</strong>
                                   </div>
                              </div>

                              <div className="flex-auto overflow-y-auto p-5 space-y-4">
                                   <div className="flex flex-row space-x-2">
                                        <RiSnapchatLine />

                                        <div className="flex flex-col">
                                             <div className="bg-gray-200 rounded p-5">
                                                  Some message text
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  5hr ago
                                             </div>
                                        </div>
                                   </div>

                                   <div className="flex space-x-2 flex-row-reverse space-x-reverse">
                                        <RiSnapchatLine />

                                        <div className="flex flex-col">
                                             <div className="bg-blue-100 rounded p-5">
                                                  Some message text
                                             </div>
                                             <div className="text-sm text-gray-600">
                                                  4hr ago
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="h-40 p-4 pt-0">
                                   <input
                                        type="text"
                                        className="w-full h-full outline-none border focus:border-blue-600 hover:border-blue-600 rounded p-4 shadow-lg"></input>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

Inbox.defaultProps = {
     theme: "notSelected",
};

export default memo(Inbox);
