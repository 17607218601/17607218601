import React, { Component } from "react"
import "./index.scss";
import { axios, history } from "~"
import { Carousel, WingBlank } from 'antd-mobile';

export default class Banners extends Component {
    state = {


        img: []
    }
    componentDidMount() {

        setTimeout(() => {
            axios.get("http://47.101.151.137:3000/top/playlist?limit=3").then(res => {
                console.log(res)
                this.setState({
                    img: res.data.playlists,
                });
            })

        }, 100);
    }

    goto = (id) => {
        history.push(`/details/?id=${id}`)
    }
    render() {
        return (
            <div className="banner">
                <WingBlank>
                    <Carousel className="space-carousel"
                        dots={false}
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.8}
                        autoplay
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => this.setState({ slideIndex: index })}
                    >
                        {this.state.img.map((val, index) => (
                            <a
                                onClick={() => this.goto(val.id)}
                                key={index}
                                href
                                style={{

                                    display: 'block',
                                    position: 'relative',
                                    top: this.state.slideIndex === index ? -10 : 0,
                                    height: 100,
                                    width: 280,
                                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                <img

                                    src={val.coverImgUrl}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'middle', margin: "0 auto", borderRadius: "20%" }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: '100%' });
                                    }}
                                />
                                <i className="counttt">{Math.round(val.playCount / 10000)}万</i>
                                <span className="iconfont icon-bofang"></span>
                                <p className="mz">{val.name}</p>
                                {/* <div className="ms">{val.description}</div> */}
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}