import React, { Component } from "react"
import { Switch, Route,Redirect } from "react-router-dom"
import { Guide } from "./guide"
import { Main } from "./main"
// import Login from "./login"
import loginTwo from "./login"
import loginThree from "./loginthree"
import LazyLoad from "~/lazyload"
import loginFour from "./loginfour"
import loginFive from "./loginfive"
import loginSix from "./loginsix"
// import Radio from "./radio"
// import Search from "./search"

export class Layout extends Component {

    render() {
        return (
            <Switch>
                <Route  path="/" exact render={()=>(<Redirect to="/guide" />)}  />
                <Route path="/guide" component={Guide} />
                <Route path="/main" component={Main} />
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/logintwo" component={loginTwo} />
                <Route path="/loginthree" component={loginThree} />
                <Route path="/loginfour" component={loginFour} />
                <Route path="/loginfive" component={loginFive} />
                <Route path="/loginsix" component={loginSix} />
                <Route path="/radio/:id" component={LazyLoad(()=>import("./radio"))} />
                <Route path="/search" component={LazyLoad(()=>import("./search"))} />
                <Route path="/daily" component={LazyLoad(()=>import("./daily"))} />
                <Route path="/songlist" component={LazyLoad(()=>import("./songlist"))} />
                <Route path="/rank" component={LazyLoad(()=>import("./rank"))} />
                <Route path="/diantai" component={LazyLoad(()=>import("./diantai"))} />
                <Route path="/music" component={LazyLoad(()=>import("./music"))} />
                <Route path="/details" component={LazyLoad(()=>import("./details"))} />
                <Route render={()=>(<Redirect to="/main/find"/>)}/>
            </Switch>
        )
    }
}