import React, { Component } from "react"
import "./index.scss";

import { Carousel } from "antd-mobile"

export class Guide extends Component {
    constructor() {
        super();
        this.state = {
            imgs: [
                require("../../../assets/images/lb1.jpg"),
                require("../../../assets/images/lb2.jpg"),
                require("../../../assets/images/lb3.jpg"),
                require("../../../assets/images/lb4.png"),
            ]
        }
    }

    gotoMain = () => {
        const {
            history
        } = this.props;
        history.push("/loginTwo");
    }

    componentDidMount() {
        if (localStorage.pcount) {
            localStorage.pcount++;
            if (localStorage.pcount > 3) {
                this.props.history.push("/main/"); //重定向
            }
        } else {
            localStorage.pcount = 1;
        }
    }

    render() {
        return (
            <div className="guide">
                <Carousel
                    autoplay={false}
                    infinite
                    dots={true}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {
                        this.state.imgs.map((item, index) => {
                            return (
                                <a
                                    key={index}
                                    style={{ display: "inline-block", width: "100%", height: "100vh" }}
                                >
                                    <img src={item} alt=""
                                        style={{ width: '100%', height: "100vh" }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));

                                        }}
                                    />
                                    {index == this.state.imgs.length - 1 && <button className="g-btn" onClick={this.gotoMain}> 点击进入主页 </button>}
                                </a>
                            )
                        })
                    }

                </Carousel>
            </div>
        )
    }
}