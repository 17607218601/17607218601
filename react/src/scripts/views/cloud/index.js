import React, { Component } from "react"
import "./index.scss";
import { Tabs, Badge } from "antd-mobile"
import { Head } from "../../components/head"
import { axios, history } from "~"


class Cloud extends Component {
    constructor() {
        super();
        this.state = {
            gc: [],
            gz: []
        }
    }
    componentDidMount() {
        console.log(12123)
        axios.get("http://47.101.151.137:3000/hot/topic?limit=30").then(res => {
            console.log(res);
            this.setState({
                gc: res.data.hot
            })
        })
        axios.get("http://47.101.151.137:3000/comment/hotwall/list").then(res => {
            console.log(res);
            this.setState({
                gz: res.data.data
            })
        })
    }
    render() {
        const tabs = [
            { title: <Badge>广场</Badge> },
            { title: <Badge>关注</Badge> },
        ];
        const Style = {
            border: "2px solid red",
            width: "50px",
            marginLeft: "65px"
            // display:"block",
            // margin:"0 auto"

        }
        return (
            <div>
                <Head></Head>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={this.getGoods}
                    tabBarActiveTextColor="red"
                    tabBarUnderlineStyle={Style}
                >
                    <div className="guang" style={{ backgroundColor: '#fff' }}>
                        {
                            this.state.gc.map((val, i) => {
                                return (
                                    <a href="" className="txt" key={i}>
                                        <div className="tp">
                                            <img src={val.sharePicUrl} alt="" className="img" />
                                        </div>
                                        <p className="text">{val.text}</p>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className="guan" style={{ backgroundColor: '#fff' }}>
                        {
                            this.state.gz.map((val, i) => {
                                return (
                                    <a href="" className="txt" key={i}>
                                        <div className="tp">
                                            <img src={val.simpleResourceInfo.songCoverUrl} alt="" className="img" />
                                        </div>
                                        <p className="text">{val.content}</p>
                                    </a>
                                )
                            })
                        }
                    </div>
                </Tabs>
            </div>
        )
    }
}

export default Cloud