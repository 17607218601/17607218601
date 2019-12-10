import React, { Component } from "react"
import "./index.scss";
import {axios,history} from "~"

import { Head } from "../../components/head"

class Mine extends Component {
    
    render() {
        return (
            <div>
                <Head></Head>
                <div className="nav">
                    <div>
                        <a href="" className="a1"></a>
                        <p>私人FM</p>
                    </div>
                    <div>
                        <a href="" className="a2"></a>
                        <p>最嗨电音</p>
                    </div>
                    <div>
                        <a href="" className="a3"></a>
                        <p>ACG专区</p>
                    </div>
                    <div>
                        <a href="" className="a4"></a>
                        <p>节奏战争</p>
                    </div>
                    <div>
                        <a href="" className="a5"></a>
                        <p>Sati空间</p>
                    </div>
                    {/* <div>
                        <a href="" className="a5"></a>
                        <p>Sati空间</p>
                    </div>
                    <div>
                        <a href="" className="a5"></a>
                        <p>Sati空间</p>
                    </div> */}

                </div>
                <div className="content">
                    <div className="list">
                        <ul>
                            <li>
                                <div className="icon">
                                    <span className="iconfont icon-yinyue"></span>
                                </div>
                                <div className="bendi">
                                    本地音乐
                                </div>
                                <div className="num">
                                    0首
                                </div>
                                <div className="bf">
                                    <span className="iconfont icon-bofang"></span>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="iconfont icon-bofang"></span>
                                </div>
                                <div className="bendi">
                                    最近播放
                                </div>
                                <div className="num">
                                    0首
                                </div>
                                <div className="bf">
                                    <span className="iconfont icon-bofang"></span>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="iconfont icon-icon-"></span>
                                </div>
                                <div className="bendi">
                                    下载管理
                                </div>
                                <div className="num">
                                    0首
                                </div>
                                <div className="bf">
                                    <span className="iconfont icon-bofang"></span>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="iconfont icon-diantai"></span>
                                </div>
                                <div className="bendi">
                                    我的电台
                                </div>
                                <div className="num">
                                    0首
                                </div>
                                <div className="bf">
                                    <span className="iconfont icon-bofang"></span>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <span className="iconfont icon-lunkuodasan-"></span>
                                </div>
                                <div className="bendi">
                                    我的收藏
                                </div>
                                <div className="num">
                                    0首
                                </div>
                                <div className="bf">
                                    <span className="iconfont icon-bofang"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="gedan">
                        <div className="title">
                            <div className="w">我的歌单</div>
                            <div className="j">
                                <span className="iconfont icon-jia"></span>
                            </div>
                            <div className="l">
                                <span className="iconfont icon-liebiao1"></span>
                            </div>
                        </div>
                        <div className="wdgd">
                            <ul>
                                <li>暂无歌单</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Mine;