import React,{Component} from "react";

import { NavBar, Modal , Icon ,WingBlank, WhiteSpace,List, InputItem, Toast , Button} from 'antd-mobile';
import { axios, history } from "~";
const alert = Modal.alert;

const mobile = /^[\w.]{6,12}$/;
export default class loginSix extends React.Component{
    state = {
        hasError: false,
        value: '',
        senVerification:false,  //验证码禁止
        puone:'',
        captcha:''

      }
      componentDidMount(){
        // var phone = window.location.href.split("?")[1]&& window.location.href.split("?")[1].split("&")[0].split("=")[1]
        // var captcha = window.location.href.split("?")[1]&& window.location.href.split("?")[1].split("&")[1].split("=")[1]
        // console.log(captcha)
        // console.log(phone)
        // this.setState({
        //   phone,
        //   captcha
        // })

        var puone = window.location.href.split("?")[1]&& window.location.href.split("?")[1].split("=")[1];
        console.log(puone)

       this.setState({
        puone
       })
        // axios({
        //   url:"http://139.9.114.198:4000/cellphone/existence/check?phone="+phone,
        //   method:"GET"
        // }).then(list=>{
        //   if(list.data.exist == '1'){
        //     history.push("/")
        //   }
        // })
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
      showAlert = (name) => {
        const alertInstance = alert(name, name, [
          { text: '确认', onPress: () => console.log() },
        ]);
        setTimeout(() => {
          // 可以调用close方法以在外部close
          console.log('auto close');
          alertInstance.close();
        }, 500000);
      };
      add=()=>{
        axios({
          url:`http://47.101.151.137:3000/login/cellphone?phone=${this.state.puone}&password=${this.state.value}`,
          method:"GET",
          params:{
            cookies:17607218601
          }
        }).then(list=>{
          if(list.data.code == 200){
            console.log("跳转到首页")
            history.push("/main/find")
          }else if(list.data.code == 509){
            this.showAlert("密码错误超过限制")
          }else if(list.data.code == 502){
            this.showAlert("密码错误")
          }
        })
      }
    render(){
        return(
            <div className="loginTwo">
                <p>密码登录</p>
                <WhiteSpace></WhiteSpace>


                <WingBlank style={{marginTop:".5rem"}}>
                <List>
                <InputItem
                    type="password"
                    placeholder="请输入密码"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.value}
                ></InputItem>
                </List>
                </WingBlank>


                <WingBlank style={{marginTop:".8rem"}}>
                <Button onClick={this.add} type="warning" style={{width:"100%",height:".83rem",borderRadius:".3rem",background:"#ff3a3a",textAlign:"center",lineHeight:".83rem",color:"#ffffff",} } disabled={!this.state.senVerification}>登录</Button><WhiteSpace />
                </WingBlank>
            </div>
        )
    }
}