import React,{Component} from "react";

import { NavBar, Icon ,WingBlank, WhiteSpace,List, InputItem, Toast , Button} from 'antd-mobile';
// import img  from "../../../../assets/images/Screenshot_2019-11-29-11-21-51_03.jpg"
const mobile = /^\w{1,}$/;
export default class loginFive extends React.Component{
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
    render(){
        return(
            <div className="loginTwo" style={{height:"100vh"}}>
                {/* <Head title="给自己取一个昵称"></Head> */}
                <WhiteSpace></WhiteSpace>
                <div style={{
                width:"100%",
                textAlign:"center",    
                display:"flex",
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'space-between'}}>
                    {/* <img src={img} alt="" style={{width:"3rem",height:"2.88rem"}} /> */}
                    <h2 style={{marginTop:".3rem"}}>您希望大家怎么称呼你呢</h2>
                </div>

                <WhiteSpace></WhiteSpace>
                <div></div>
                <WingBlank style={{marginTop:".5rem"}}>
                <List>
                <InputItem
                    type="text"
                    placeholder="输入昵称"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.value}
                ></InputItem>
                </List>
                </WingBlank>


                <WingBlank style={{marginTop:".8rem"}}>
                <Button type="warning" style={{width:"100%",height:".83rem",borderRadius:".3rem",background:"#ff3a3a",textAlign:"center",lineHeight:".83rem",color:"#ffffff",} } disabled={!this.state.senVerification}>开启云音乐</Button><WhiteSpace />
                </WingBlank>
            </div>
        )
    }
}