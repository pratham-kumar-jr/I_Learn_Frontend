/** @format */

import React, { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import ChatBox from "../components/ChatBox";
import Inbox from "../components/Inbox";

interface Props {}

const Chatting: FC<Props> = (props) => {
     return (
          <div className="md:w-1/2 w-full">
               <Switch>
                    <Route path="/chat">
                         <ChatBox />
                    </Route>
                    <Route path="/inbox">
                         <Inbox />
                    </Route>
               </Switch>
          </div>
     );
};

Chatting.defaultProps = {};

export default memo(Chatting);
