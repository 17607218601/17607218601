import React, { Component } from "react"

import "./index.scss";

import { axios } from "~"
// import axios from "axios";

import { Carousel, Button } from "antd-mobile"

export default class Banner extends Component {
    constructor() {
        super();
        this.state = {
            banner: []
        }
    }

    componentDidMount() {
        axios.get("http://47.101.151.137:3000/banner").then(res => {
            console.log(res);
            this.setState({
                banner: res.data.banners
            })
        })
    }

    render() {
        return (
            <div className="banner">
                <Carousel
                    autoplay={true}
                    dots={true}
                    infinite
                >
                    {
                        this.state.banner.map((val, i) => {
                            return (
                                <a key={i} href={val.url}
                                    style={{ display: 'inline-block', width: '100%', height: '300' }}
                                >
                                    <img
                                        src={val.imageUrl}
                                        alt=""
                                        title={val.name}
                                        style={{ width: '100%', height: '300' }}
                                        onLoad={() => {
                                            window.dispatchEvent(new Event('resize'));
                                        }}
                                    />

                                </a>
                            )
                        })
                    }
                </Carousel>
            </div>
        )

    }
}

