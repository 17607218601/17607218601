import React, { Component } from "react"
import "./index.scss";
import { axios, history } from "~"
import { Head } from "../../components/head"

class Video extends Component {
    constructor() {
        super();
        this.state = {
            mv: [],
            id: ""
        }
    }

    tz=(val)=>{
        
        console.log(val)
        history.push(`/radio/${val}`)
        // axios.get("http://47.101.151.137:3000/mv/detail?mvid="+val).then(res=>{
        //     console.log(res.data.data.brs[240])
            
        // })
        
    }

    componentDidMount() {
        axios.get("http://47.101.151.137:3000/top/mv").then(res => {
            console.log(res)
            this.setState({
                mv: res.data.data,
                id: res.data.data.id
            })
        })
        // axios.get("http://47.101.151.137:3000/mv/detail?mvid="+this.state.id).then(res => {
        //     console.log(res)
        //     this.setState({
        //         // mv: res.data.data,
        //         // id: res.data.data.id
        //     })
        // })
        

    }
    render() {
        return (
            <div>
                <Head></Head>
                <div className="content">
                    {
                        this.state.mv.map((val, i) => {
                            return (
                                <a href="javascript:;" className="mv" onClick={()=>{this.tz(val.id)}} key={i}>
                                    <div className="sp">
                                        <img src={val.cover} alt="" className="pic" />
                                    </div>
                                    <div className="txt">
                                        <p className="singer">歌手：{val.artistName}</p>
                                        <p className="sing">歌名：{val.name}</p>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default Video;