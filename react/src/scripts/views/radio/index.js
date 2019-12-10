import React, { Component } from "react"
import "./index.scss";
import { axios } from "~"
import { Head } from "../../components/head"

export default class Radio extends Component {
    constructor() {
        super();
        this.state = {
            url: "",
            hot: []
        }
    }
    componentDidMount() {
        const id = this.props.location.pathname.split("/radio/")[1];
        console.log(id);
        axios.get("http://47.101.151.137:3000/mv/detail?mvid=" + id).then(res => {
            console.log(res.data.data.brs[240])
            this.setState({
                url: res.data.data.brs[240]
            })
        })
        axios.get("http://47.101.151.137:3000/comment/mv?id=" + id).then(res => {
            console.log(res.data)
            this.setState({
                hot: res.data.hotComments
            })
        })
    }
    render() {
        return (
            <div>
                <Head></Head>
                <div>
                    <video
                        id="myvideo"
                        controls
                        loop
                        src={this.state.url}>
                    </video>
                </div>
                <div className="content">
                    <p className="title">
                        精彩评论
                    </p>
                    <ul>
                        {
                            this.state.hot.map((val, i) => {
                                return (
                                    <li className="mes" key={i}>
                                        <div className="tx">
                                            <img src={val.user.avatarUrl} alt="" className="pic" />
                                        </div>
                                        <p className="name">{val.user.nickname}</p>

                                        <p className="txt">{val.content}</p>

                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}