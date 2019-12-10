
import {NavLink} from "react-router-dom";
import "./index.scss";
import React, {Component} from "react";

import {Badge} from "antd-mobile"

export const foots = [
    {txt:"我的",path:"/main/mine",name:"mine"},
    {txt:"发现",path:"/main/find",name:"find"},
    {txt:"云村",path:"/main/cloud",name:"cloud"},
    {txt:"视频",path:"/main/video",name:"video"}
]



export class Foot extends Component{
    state = {
        foots
    }
    render(){
        return (
            <footer>
                {
                    this.state.foots.map((foot,i)=>{
                        return (
                            <div key={i}>   
                                <NavLink 
                                to={foot.path}
                                activeClassName="nav-active"
                                >
                                    <span> {foot.txt}</span>
                                    {/* {i==2&&<Badge text="10" className="hot" hot style={{ marginLeft: 5 }} />} */}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}