import React, { Component } from "react"
import { NavBar, Icon } from 'antd-mobile';
import { Foot } from "../foot";
import { history } from "~";
import "./index.scss"

export class Head extends Component {
    goback = () => {
        history.go(-1);

    }

    goSearch = () => {
        history.push("/search");
    }
    render() {
        return (
            <div className="head">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.goback()}
                    rightContent={[
                        <Icon key="0" onClick={this.goSearch} type="search" style={{ marginRight: '16px' }} />,

                    ]}
                >
                    <Foot></Foot>
                </NavBar>


            </div>
        )
    }
}