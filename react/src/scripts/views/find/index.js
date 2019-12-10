import React, { Component } from "react"
import "./index.scss";
import { axios, history } from "~"
import { Head } from "../../components/head"
import Banner from "../../components/banner";
import { Link } from "react-router-dom"

class Find extends Component {
    constructor() {
        super();
        this.state = {
            gedan: [],
            mv: []
        }
    }
    componentDidMount() {
        axios.get("http://47.101.151.137:3000/personalized?limit=6").then(res => {
            console.log(res);
            this.setState({
                gedan: res.data.result
            })
        })
        axios.get("http://47.101.151.137:3000/personalized/newsong?limit=5").then(res => {
            console.log(res);
            this.setState({
                mv: res.data.result
            })
        })

    }

    tui = () => {
        history.push("/daily")
    }

    goto = (id) => {
        console.log(id)
        history.push("/details/?id="+id)
    }

    gotoM=(id)=>{
        history.push("/music/?id="+id)
    }

    render() {
        return (
            <div className="find">
                <Head></Head>
                <div className="content">
                    <Banner></Banner>
                    <div className="nav">
                        <div onClick={this.tui}>
                            <a href="#/daily" className="a1"></a>
                            <p>每日推荐</p>
                        </div>
                        <div>
                            <a href="#/songlist" className="a2"></a>
                            <p>歌单</p>
                        </div>
                        <div>
                            <a href="#/rank" className="a3"></a>
                            <p>排行榜</p>
                        </div>
                        <div>
                            <a href="#/diantai" className="a4"></a>
                            <p>电台</p>
                        </div>
                        <div>
                            <a href="#/diantai" className="a5"></a>
                            <p>直播</p>
                        </div>

                    </div>
                    <div className="tuijian">
                        <div className="title">
                            <p>推荐歌单</p>
                            <a href="">歌单广场</a>
                        </div>
                        <div className="cont">
                            {
                                this.state.gedan.map((val, i) => {
                                    return (
                                        <div className="gd" key={i} onClick={() => this.goto(val.id)}>
                                            <div className="tp">
                                                <img src={val.picUrl} alt="" className="img" />
                                            </div>
                                            <p className="des">{val.name}</p>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="tuijian">
                        <div className="title">
                            <p>推荐新音乐</p>
                            <a href="">更多</a>
                        </div>
                        <div className="cont">
                            {
                                this.state.mv.map((val, i) => {
                                    return (
                                        i < 8 && <div className="gd" key={i} onClick={() => this.gotoM(val.id)}>
                                            <div className="tp">
                                                <img src={val.song.album.picUrl} alt="" className="img" />
                                            </div>
                                            <p className="des">{val.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Find;