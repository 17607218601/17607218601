import React, { Component } from "react"
import "./index.scss"
import { Switch, Route, Redirect } from "react-router-dom";
import LazyLoad from "~/lazyload"



// import {Head} from "../../components/head"




export class Main extends Component {
    render() {
        return (
            <div className="main" style={{ width: '100vw', height: '100vh' }}>
                <Switch>
                    <Route path="/main/" exact render={() => (<Redirect to="/main/mine" />)} />
                    <Route path="/main/mine" component={LazyLoad(() => (import("../mine")))} />
                    <Route path="/main/find" component={LazyLoad(() => (import("../find")))} />
                    <Route path="/main/cloud" component={LazyLoad(() => (import("../cloud")))} />
                    <Route path="/main/video" component={LazyLoad(() => (import("../video")))} />
                    {/* <Route render={() => (<Redirect to="/main/find" />)} /> */}
                </Switch>
            </div>
        )
    }
}