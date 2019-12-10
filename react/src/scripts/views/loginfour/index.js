import React, { Component } from "react";

// import { NavBar, Modal, Icon, WingBlank, WhiteSpace, List, InputItem, Toast, Button } from 'antd-mobile';

import { NavBar, Icon ,WingBlank, WhiteSpace,List, InputItem, Toast , Button} from 'antd-mobile';
import { axios, history } from "~";

const mobile = /^\w{6,12}$/;
export default class loginFour extends React.Component{
    state = {
        hasError: false,
        value: '',
        senVerification:false,  //验证码禁止
        phone:'',
        captcha:''

      }
      componentDidMount(){
        var phone = window.location.href.split("?")[1]&& window.location.href.split("?")[1].split("&")[0].split("=")[1]
        var captcha = window.location.href.split("?")[1]&& window.location.href.split("?")[1].split("&")[1].split("=")[1]
        console.log(captcha)
        console.log(phone)
        this.setState({
          phone,
          captcha
        })
        axios({
          url:"http://47.101.151.137:3000/cellphone/existence/check?phone="+phone,
          method:"GET"
        }).then(list=>{
          if(list.data.exist == '1'){
            history.push("/")
          }
        })
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
      add=()=>{
        axios({
          url:`http://47.101.151.137:3000/register/cellphone?phone=${this.state.phone}&password=${this.state.value}&captcha=${this.state.captcha}&nickname=binary1345`,
          method:"GET"
        }).then(list=>{
          console.log(list)
        })
      }
    render(){
        return(
            <div className="loginTwo">
                {/* <Head title="手机号注册"></Head> */}
                <WhiteSpace></WhiteSpace>


                <WingBlank style={{marginTop:".5rem"}}>
                <List>
                <InputItem
                    type="password"
                    placeholder="设置登录密码,不少于六位"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.value}
                ></InputItem>
                </List>
                </WingBlank>


                <WingBlank style={{marginTop:".8rem"}}>
                <Button onClick={this.add} type="warning" style={{width:"100%",height:".83rem",borderRadius:".3rem",background:"#ff3a3a",textAlign:"center",lineHeight:".83rem",color:"#ffffff",} } disabled={!this.state.senVerification}>下一步</Button><WhiteSpace />
                </WingBlank>
            </div>
        )
    }
}