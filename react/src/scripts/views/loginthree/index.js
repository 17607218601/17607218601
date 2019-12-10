import React, { Component } from "react";
import { NavBar, Modal, Icon, WingBlank, WhiteSpace, List, InputItem, Toast, Button } from 'antd-mobile';
import { history, axios } from "~";
const alert = Modal.alert;
var tims = null;
const mobile = /^\d{4}$/;
export default class loginThree extends React.Component {
  state = {
    hasError: false,
    value: '',
    senVerification: false,  //验证码禁止
    phone: "",
    time: 60,
    puones: ''
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  componentDidMount() {
    var puone = window.location.href.split("?")[1] && window.location.href.split("?")[1].split("=")[1];
    this.setState({
      phone: window.location.href.split("?")[1] && puone.split("").slice(0, 3).join("") + "*****" + puone.split("").slice(7, 11).join(""),
      puones: puone
    })
    tims = setInterval(() => {
      this.setState({
        time: --this.state.time
      })
      if (this.state.time <= 0) {
        clearInterval(tims)
        this.showAlert()
      }
    }, 1000)
  }
  onChange = (value) => {
    this.setState({
      senVerification: mobile.test(value.replace(/ /ig, "")),
      hasError: !mobile.test(value.replace(/ /ig, ""))
    })
    //   if (value.replace(/\s/g, '').length < 4) {
    //     this.setState({
    //       hasError: true,
    //     });
    //   } else {
    //     this.setState({
    //       hasError: false,
    //     });
    //   }
    this.setState({
      value,
    });
  }
  showAlert = () => {
    const alertInstance = alert('请重新发送验证码', '验证码超时', [
      { text: '返回', onPress: () => history.push("/logintwo"), style: 'default' },
      { text: '确认', onPress: () => history.push("/logintwo") },
    ]);
    setTimeout(() => {
      // 可以调用close方法以在外部close
      console.log('auto close');
      alertInstance.close();
    }, 500000);
  };
  add = () => {
    axios({
      url: `http://47.101.151.137:3000/captcha/verify?phone=${window.location.href.split("?")[1].split("=")[1]}&captcha=${this.state.value}`
    }).then(list => {
      console.log()
      clearInterval(tims)
      if (list.data.code == 200) {
        history.push("/loginfour?phone=" + this.state.puones + "&captcha=" + this.state.value)
      }
      // history.push("/loginfour?phone="+this.state.puones)
    }).catch(err => {
      const alertInstance = alert('验证码错误', '验证码错误', [
        { text: '确认', style: 'default' },
        { text: 'ok' },
      ]);
      setTimeout(() => {
        // 可以调用close方法以在外部close
        console.log('auto close');
        alertInstance.close();
      }, 500000);
    })
  }
  render() {
    return (
      <div className="loginTwo">

        <WhiteSpace></WhiteSpace>
        <WingBlank>
          <div style={{ color: "#111111", fontSize: ".40rem", padding: ".2rem 0 " }}>验证码以发送至</div>
          <div style={{ color: "#111111", fontSize: ".3rem", padding: ".2rem 0 ", display: "flex", justifyContent: "space-between", opacity: ".5" }}>
            <span>
              +86  {this.state.phone}
            </span>
            <span>
              {this.state.time}s
                        </span>
          </div>
        </WingBlank>

        <WingBlank>
          <List>
            <InputItem
              type="maxLength"
              placeholder="请输入验证码"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChange}
              value={this.state.value}
              maxLength="4"
            ></InputItem>
          </List>
        </WingBlank>


        <WingBlank style={{ marginTop: ".8rem" }}>
          <Button onClick={this.add} type="warning" style={{ width: "100%", height: ".83rem", borderRadius: ".3rem", background: "#ff3a3a", textAlign: "center", lineHeight: ".83rem", color: "#ffffff", display: !this.state.senVerification && "none" }} disabled={!this.state.senVerification}>确认</Button><WhiteSpace />
        </WingBlank>
      </div>
    )
  }
  componentWillUnmount() {
    clearInterval(tims)
  }
}