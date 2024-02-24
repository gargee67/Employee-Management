import React, { useState } from "react";
import "./App.css";
import { Homepage } from "./components/homepage/homepage";
import { Register } from "./components/register/register";
import Login from "./components/login/login";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Adminhome} from "./components/adminhome/adminhome";
import { Timesheet } from "./components/timesheet/timesheet";
import { Leave } from "./components/homepage/leavedashbord/leave";
import { Working } from "./components/homepage/workingbord/working";
import { SalaryAdmin } from "./components/adminhome/salaryadmin/salaryadmin";
import { Salary } from "./components/homepage/salary/salary";
import { Project } from "./components/homepage/project/project";
import { Adminproject } from "./components/adminhome/aproject/aproject";
import { UpdateAdmin } from "./components/adminhome/aproject/update";
import { CurrentProject } from "./components/homepage/project/currentp";

export function App(){
    
const [user, setLoginUser]= useState({});
        return(
            <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        {
                            user && user._id ? <Homepage user={user}/> : <Login setLoginUser={setLoginUser}/>
                        }
                        </Route>
                    <Route path="/login"><Login setLoginUser={setLoginUser}/></Route>
                    <Route path="/register"><Register/></Route>
                    <Route path="/admin"><Adminhome user={user}/></Route>
                    <Route path="/timesheet"><Timesheet user={user}/></Route>
                    <Route path="/leave"><Leave user={user}/></Route>
                    <Route path="/working"><Working  user={user}/></Route>
                    <Route path="/salaryadmin"><SalaryAdmin/></Route>
                    <Route path="/salary"><Salary user={user}/></Route>
                    <Route path="/project"><Project user={user}/></Route>
                    <Route path="/projectadmin"><Adminproject/></Route>
                    <Route path="/update/:procode"><UpdateAdmin/></Route>
                    <Route path="/currentproject"><CurrentProject user={user}/></Route>
                </Switch>
            </Router>
            
            </>
        )
}
