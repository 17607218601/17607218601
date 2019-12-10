import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./index.scss";
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { axios, history } from "~"
import { Head } from "../../components/head"

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            hot: [],
            value: "",
            song: [],
            flag: true

        }
    }

    componentDidMount() {
        axios.get("http://47.101.151.137:3000/search/hot/detail").then(res => {
            console.log(res);
            this.setState({
                hot: res.data.data
            })
        })
    }

    todoSearch = (keyword) => {
        console.log(keyword)
        axios.get("http://47.101.151.137:3000/search?keywords=" + keyword).then(res => {
            console.log(res);
            this.setState({
                song: res.data.result.songs
            })
        })
        if (keyword) {
            this.setState({
                flag: false
            })
        }


    }
    change = () => {
        this.setState({
            flag: !this.state.flag
        })

    }

    // chuxian = () => {
    //     this.setState({
    //         flag: !this.state.flag
    //     })
    // }

    render() {
        const {
            flag
        } = this.state
        return (

            <div>
                <Head></Head>
                <WingBlank><div className="sub-title"></div></WingBlank>
                <SearchBar placeholder="输入关键词" maxLength={20}
                    onSubmit={this.todoSearch}
                    onFocus={() => this.change()}
                // onBlur={() => this.chuxian()}
                />
                <WhiteSpace />
                {
                    this.state.flag && <div className="content">
                        <p className="title">热搜榜</p>
                        <div className="list" >
                            <ul>
                                {
                                    this.state.hot.map((val, i) => {
                                        return (
                                            <li className="l" key={i}>
                                                <i className={i + 1 < 4 ? "num" : "n"}>{i + 1}</i>
                                                <p className="song">
                                                    {val.searchWord}
                                                    <img src={val.iconUrl} alt="" className="font" />
                                                </p>

                                                <p className="count">{val.score}</p>
                                                <p className="text">{val.content}</p>
                                                <p></p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                }

                <div className="search">
                    <p className="dq">单曲</p>
                    <ul>
                        {
                            !this.state.flag && this.state.song.map((val, i) => {
                                return (
                                    <Link to={"/music/?id="+val.id} key={i}>
                                        <li className="ss" key={i}>
                                            <p className="sn">{val.name}</p>
                                            <p className="zz">{val.artists[0].name}-</p>
                                            <p className="zj">{val.album.name}</p>
                                            <span className="iconfont icon-erji"></span>
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