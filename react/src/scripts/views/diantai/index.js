import React, { Component } from "react"
import "./index.scss";
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { axios, history } from "~"
import { Icon, Grid } from 'antd-mobile';
import DBanner from "../../components/banner3";

export default class Diantai extends Component {

    constructor() {
        super();
        this.state = {
            hot: [],
            fair:[],

        }
    }

    goback = () => {
        history.go(-1)
    }

    componentDidMount() {
        axios.get("http://47.101.151.137:3000/dj/hot?limit=9").then(res => {
            console.log(res)
            this.setState({
                hot: res.data.djRadios
            })
        })
        axios.get("http://47.101.151.137:3000/dj/toplist/pay?limit=9").then(res => {
            console.log(res)
            this.setState({
                fair: res.data.data.list
            })
        })
    }

    render() {
        return (
            <div className="diantai">
                <div className="head">
                    <div onClick={this.goback} >
                        <Icon size="lg" color="#fff" type="left" />
                    </div>
                    <div className="he">电台</div>
                </div>
                <DBanner></DBanner>
                <div className="cot">
                    <div className="tuijian">
                        <div className="title">
                            <p>热门电台</p>

                        </div>
                        <div className="cont">
                            {
                                this.state.hot.map((val, i) => {
                                    return (
                                        <a key={i} href="" className="gd">
                                            <div className="tp">
                                                <img src={val.picUrl} alt="" className="img" />
                                            </div>
                                            <p className="des">{val.copywriter}</p>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="tuijian">
                        <div className="title">
                            <p>付费精品</p>

                        </div>
                        <div className="cont">
                            {
                                this.state.fair.map((f, d) => {
                                    return (
                                        <a key={d} href="" className="gd">
                                            <div className="tp">
                                                <img src={f.picUrl} alt="" className="img" />
                                            </div>
                                            <p className="des">{f.name}</p>
                                        </a>
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

