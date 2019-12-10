import React, { Component } from "react"
import "./index.scss";
import { axios, history } from "~"
import { Icon, Grid } from 'antd-mobile';
import Banners from "../../components/banner2";

export default class SongList extends Component {

    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    goback = () => {
        history.go(-1);
    }

    goto=(id)=>{
        history.push("/details/?id="+id)
    }

    componentDidMount() {
        axios.get("http://47.101.151.137:3000/top/playlist/highquality").then(res => {
            console.log(res)
            this.setState({
                list: res.data.playlists
            })
        })
    }

    render() {
        return (
            <div className="songlist">
                <div className="head">
                    <div onClick={this.goback} >
                        <Icon size="lg" color="#fff" type="left" />
                    </div>
                    <div className="he">歌单</div>
                </div>
                <div className="top">
                    <Banners></Banners>
                </div>
                <div className="contents">
                    {
                        this.state.list.map((val, i) => {
                            return (
                                <div className="gedan" key={i} onClick={()=>this.goto(val.id)}>
                                    <div className="pic">
                                        <img src={val.coverImgUrl} alt="" className="img" />
                                    </div>
                                    <i className="count">{Math.round(val.playCount/10000)}万</i>
                                    <span className="iconfont icon-bofang"></span>
                                    <p className="text">{val.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}