/** @format */

import { FC, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Auth from "./pages/Auth.page";
import Chatting from "./pages/chatting.page";

interface Props {}

const App: FC<Props> = () => {
     return (
          <>
               <Suspense
                    fallback={<div className="text-red-500">Loading...</div>}>
                    <BrowserRouter>
                         <Switch>
                              <Route path="/" exact>
                                   <Redirect to="/login" />
                              </Route>
                              <Route path={["/login", "/signup"]} exact>
                                   <Auth />
                              </Route>
                              <Route path={["/chat", "/inbox"]}>
                                   <Chatting />
                              </Route>
                              <Route>
                                   <NotFoundPage />
                              </Route>
                         </Switch>
                    </BrowserRouter>
               </Suspense>
          </>
     );
};

export default App;
