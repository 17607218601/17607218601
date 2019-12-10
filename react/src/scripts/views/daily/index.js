import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./index.scss";
import { axios, history } from "~"
import { Head } from "../../components/head"

export default class Daily extends Component {
    constructor() {
        super()
        this.state = {
            song: []
        }
    }

    componentDidMount() {
        axios.get("http://47.101.151.137:3000/recommend/songs").then(res => {
            console.log(res.data)
            this.setState({
                song: res.data.data.dailySongs
            })
        })
    }

    render() {
        return (
            <div>
                <Head></Head>
                <div className="content">
                    <ul>
                        {
                            this.state.song.map((val, i) => {
                                return (
                                    <Link to={"/music/?id="+val.id} key={i}>
                                        <li  className="ge">
                                            <div className="pic">
                                                <img src={val.album.blurPicUrl} alt="" className="img" />
                                            </div>
                                            <p className="song">{val.name}<i className="cz">({val.alias[0]})</i></p>
                                            <p className="singer"><i className="icon"></i>{val.artists[0].name}-{val.album.name}</p>
                                            <span className="iconfont icon-bofang"></span>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
