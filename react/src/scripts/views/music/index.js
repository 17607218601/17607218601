import React, { Component } from "react"
import "./index.scss";
import { SearchBar, Button, WhiteSpace, WingBlank, Icon } from 'antd-mobile';
import { axios, history } from "~"


const reg=/^\[.*\]$/ig;
export default class Music extends Component {
    constructor() {
        super()
        this.state = {
            url:"",
            detail:"",
            singer:"",
            img:"",
            lr:""
        }
    }


    componentDidMount() {

        const id = window.location.href.split("=")[1];
        console.log(id)
        axios.get("http://47.101.151.137:3000/song/url?id=" + id).then(res => {
            console.log(res);
            this.setState({
                url: res.data.data[0].url
            })
            console.log(this.state.url)
        })
        axios.get("http://47.101.151.137:3000/lyric?id=" + id).then(res => {
            console.log(res);
            this.setState({
               lr:res.data.lrc.lyric.split(/\[.*\]/ig)
                // [00:03.00]
            })
            console.log(this.state.lr)
        })

        axios.get("http://47.101.151.137:3000/song/detail?ids=" + id).then(res => {
            console.log(res);
            this.setState({
                detail:res.data.songs[0],
                singer:res.data.songs[0].ar[0],
                img:res.data.songs[0].al
            })
            console.log(this.state.detail)
            console.log(this.state.singer)
            console.log(this.state.img)
        })


        
    }
    toggle=()=>{

    }


    goback = () => {
        history.go(-1)
    }

    render() {
       

        return (
            
            <div className="music">
                <img src={this.state.img.picUrl} alt="" className="bg blur" />
                <div className="head">
                    <div onClick={this.goback} className="left" >
                        <Icon size="lg" color="#fff" type="left" />
                    </div>
                    <div className="he">{this.state.detail.name}</div>
                    <i className="singer">{this.state.singer.name}</i>
                </div>
                <div className="conts">
                    <div className="zhizhen">
                    </div>
                    <div className="box">
                        <div className="yuan move" onClick={this.toggle}>
                            <img src={this.state.img.picUrl} alt="" />
                        </div>
                    </div>
                    <div className="geci">
                        {this.state.lr}
                    </div>
                </div>
                <div className="audio">
                    <audio
                        controls
                        loop
                        autoPlay
                        preload="true"
                        id="myaudio"
                        src={this.state.url}
                    > 浏览器不支持 audio  音频播放 </audio>



                </div>

            </div>
        )
    }
}