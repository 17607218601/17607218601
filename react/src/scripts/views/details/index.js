import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./index.scss";
import { axios, history } from "~"
import { Icon } from "antd-mobile"

export default class Details extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            img: "",
            nickname: '',
            tags: [],
            song: []
        }
    }
    componentDidMount() {
        const id = window.location.href.split("=")[1];
        console.log(id)
        axios.get("http://47.101.151.137:3000/playlist/detail?id="+id).then(res => {
            console.log(res);
            this.setState({
                list: res.data.playlist,
                img: res.data.playlist.creator.avatarUrl,
                nickname: res.data.playlist.creator.nickname,
                tags: res.data.playlist.tags,
                song: res.data.playlist.tracks
            })
            console.log(this.state.song);


        })
    }

    goback=()=>{
        history.go(-1)
    }

    goto=(id)=>{
        history.push("/music/?id="+id)
    }

    render() {
        return (
            <div className="details">
                <div onClick={this.goback} className="left" >
                    <Icon size="lg" color="#fff" type="left" />
                </div>
                <div className="head">
                    <div className="bgp">
                        <img src={this.state.list.coverImgUrl} alt="" />
                    </div>
                    <div className="top">
                        <div className="head-wrap">
                            <div className="cov">
                                <img src={this.state.list.coverImgUrl} className="tx" alt="" />
                                <span className="sicon">歌单</span>
                                <i className="num">{Math.round(this.state.list.playCount / 10000)}万</i>
                            </div>
                            <div className="right-head">
                                <h2 className="bt">
                                    {this.state.list.name}
                                </h2>
                                <div className="czz">
                                    <div className="touxiang">
                                        <img src={this.state.img} alt="" className="user" />
                                    </div>
                                    {this.state.nickname}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="biaoqian">
                        <div className="tag">
                            标签 :
                            {
                                this.state.tags.map((val, i) => {
                                    return (
                                        <em key={i} className="taglist">{val}</em>
                                    )
                                })
                            }

                        </div>
                        <div className="jianjie">
                            <div className="neirong">
                                {this.state.list.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pylist">
                    <h3 className="smtitle">歌曲列表</h3>
                    <div className="ge">
                        {
                            this.state.song.map((s, g) => {
                                return (
                                    <a className="aa" key={g} onClick={()=>this.goto(s.id)}>
                                        <div className="pm">{g + 1}</div>
                                        <div className="xq">
                                            <div className="sgchfl">
                                                <div className="geming">{s.name}</div>
                                                <div className="zhuanji">{s.ar[0].name}-{s.al.name}</div>

                                            </div>
                                            <div className="bofang">
                                                <span className="iconfont icon-bofang"></span>
                                            </div>
                                        </div>

                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
