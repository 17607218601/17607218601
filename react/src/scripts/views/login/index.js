import React,{Component} from "react";

import { NavBar, Modal , Icon ,WingBlank, WhiteSpace,List, InputItem, Toast , Button} from 'antd-mobile';

import { axios, history } from "~";
const mobile = /^1(3|5|6|7|8)\d{9}$/;
const alert = Modal.alert;

export default class loginTwo extends React.Component{
    state = {
        hasError: false,
        value: '',
        senVerification:false,  //验证码禁止
      }
      onErrorClick = () => {
        if (this.state.hasError) {
          Toast.info('Please enter 11 digits');
        }
      }
      onChange = (value) => {
        this.setState({
            senVerification:mobile.test(value.replace(/ /ig,"")),
            hasError:!mobile.test(value.replace(/ /ig,""))
          })

        // if (value.replace(/\s/g, '').length < 11) {
        //   this.setState({
        //     hasError: true,
        //   });
        // } else {
        //   this.setState({
        //     hasError: false,
        //   });
        // }
        this.setState({
          value,
        });
      }
      showAlert = () => {
        const alertInstance = alert('发送验证码超过限制:每个手机号一天只能发5条验证码', '超出限制', [
          { text: '返回', onPress: () => history.push("/"), style: 'default' },
          { text: '确认', onPress: () => history.push("/") },
        ]);
        setTimeout(() => {
          // 可以调用close方法以在外部close
          console.log('auto close');
          alertInstance.close();
        }, 500000);
      };
      add=()=>{
        console.log(this.state.value.replace(/ /ig,""))

        axios({
          url:`http://47.101.151.137:3000/cellphone/existence/check?phone=${this.state.value.replace(/ /ig,"")}`,
          method:"GET"
        }).then(list=>{
          if(list.data.hasPassword){
            history.push("/loginsix?phone="+this.state.value.replace(/ /ig,""))
          }else{
            axios({
              url:`http://47.101.151.137:3000/captcha/sent?phone=${this.state.value.replace(/ /ig,"")}`,
              method:"GET",
            }).then(list=>{
              if(list.data.code==200){
                history.push("/loginthree?phone="+this.state.value.replace(/ /ig,""))
              }
            }).catch(err=>{
              this.showAlert()
            })
          }
        })
        

      }
    render(){
        return(
            <div className="loginTwo">
                <WingBlank>
                <div style={{width:"100%",height:"1.83rem",lineHeight:"1.83rem",textAlign:"center"}}>
                    未注册手机号登陆后自动创建账号
                </div>
                </WingBlank>
                <WingBlank>
                <List>
                <InputItem
                    type="phone"
                    placeholder="请输入手机号"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.value}
                >+86</InputItem>
                </List>
                </WingBlank>
                

                <WingBlank style={{marginTop:".8rem"}}>
                <Button onClick={this.add} type="warning" style={{width:"100%",height:".83rem",borderRadius:".3rem",background:"#ff3a3a",textAlign:"center",lineHeight:".83rem",color:"#ffffff"} } disabled={!this.state.senVerification}>下一步</Button><WhiteSpace />
                </WingBlank>
            </div>
        )
    }
}

























// import React, { Component } from "react"

// import "./index.scss";
// import { WhiteSpace, WingBlank, List, InputItem, Button } from "antd-mobile";
// import { axios, history } from "~"

// export const mobileReg = /^1(3|5|7|8|9)\d{9}$/;
// export const codeReg = /^\d{4}$/

// var timer = null;
// export default class Login extends Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 60,
//             txt: "发送验证码",
//             mobileFlag: false,
//             loginFlag: false,
//             toggle: true,
//         }
//     }


//     checkMobile = (mobile) => {
//         console.log(mobile);
//         // if(mobileReg.test(mobile)){
//         //     this.setState({
//         //         mobileFlag:true
//         //     })
//         // }else{
//         //     this.setState({
//         //         mobileFlag:false
//         //     })
//         // }
//         if (this.state.toggle) {
//             this.setState({
//                 mobileFlag: mobileReg.test(mobile),
//                 loginFlag: (codeReg.test(this.code.state.value) && mobileReg.test(mobile))
//             })
//         }
//     }

//     // 校验验证码 
//     todoLogin = () => {
//         axios.post("/captcha/verify?phone="+this.mobile.state.value+"&captcha="+this.code.state.value    
//         ).then(res => {
//             if (!!res.data.type) {
//                 sessionStorage.token = res.data.token;
//                 sessionStorage.mobile = this.mobile.state.value
//                 history.push("/main/mine");
//             } else {
//                 sessionStorage.token = "";                                                                                                                                                   
//             }
//         })
//     }

//     // 发送验证码 
//     sendCode = () => {

//         axios.post("/captcha/sent?phone="+this.mobile.state.value).then(res => {

//         })
//         this.computedTime();
//         // ajax; 

//     }

//     computedTime = () => {
//         this.setState({
//             count: --this.state.count,
//             txt: `倒计时 ${this.state.count} S`,
//             mobileFlag: false,
//         });

//         var timer = setInterval(() => {
//             if (this.state.count > 0) {
//                 this.setState({
//                     count: --this.state.count,
//                     txt: `倒计时 ${this.state.count} S`,
//                     mobileFlag: false,
//                     toggle: false,
//                 })

//             } else {
//                 clearInterval(timer);
//                 this.setState({
//                     count: 60,
//                     txt: `发送验证码`,
//                     mobileFlag: true,
//                     toggle: true
//                 })

//             }
//         }, 1000)
//     }

//     checkCode = (code) => {
//         console.log(this.mobile);
//         this.setState({
//             loginFlag: (codeReg.test(code) && mobileReg.test(this.mobile.state.value))
//         })
//     }

//     render() {
//         const {
//             txt,
//             mobileFlag,
//             loginFlag
//         } = this.state;
//         return (
//             <div className="login ">
                
//                 <WhiteSpace />
//                 <WingBlank>
//                     <List>
//                         <WhiteSpace />
//                         <InputItem
//                             type="tel"
//                             placeholder="请输入手机号"
//                             clear
//                             ref={el => this.mobile = el}
//                             onChange={this.checkMobile}
//                         >手机号</InputItem>
//                         <WhiteSpace />
//                         <InputItem
//                             type="number"
//                             placeholder="请输入验证码"
//                             clear
//                             ref={el => this.code = el}
//                             onChange={this.checkCode}
//                         >验证码</InputItem>
//                         <Button onClick={this.sendCode} disabled={!mobileFlag} type="warning" className="l-btn" size="large" inline >{txt}</Button>
//                         <WhiteSpace />
//                     </List>
//                     <WhiteSpace />
//                     <Button type="primary" onClick={this.todoLogin} disabled={!loginFlag} >登录</Button>
//                 </WingBlank>
//             </div>

//         )
//     }
// }








































































