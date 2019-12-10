import React, { Component } from "react"
import "./index.scss";
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { axios, history } from "~"
import { Head } from "../../components/head";

export default class Rank extends Component {
    constructor() {
        super()
        this.state = {
            count: [],
            ct: []
        }
    }

    componentDidMount() {
        axios.get("http://47.101.151.137:3000/toplist/detail").then(res => {
            console.log(res)
            this.setState({
                count: res.data.list,


            })

        })
    }

    render() {

        return (

            <div className="rank">
                <Head></Head>
                <div className="contain">
                    <ul>
                        {
                            this.state.count.map((val, i) => {
                                return (
                                    <li className="rlist" key={i}>
                                        <div className="pic">
                                            <img className="img" src={val.coverImgUrl} alt="" />
                                        </div>
                                        <div className="exc">
                                            <p className="title">{val.name}</p>
                                            {
                                                val.tracks.map((q, g) => {
                                                    // console.log(q)
                                                    return (
                                                        <div key={g} className="box">
                                                            <p>{g+1}.{q.first}-{q.second}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
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