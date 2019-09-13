import React from 'react';
import {Redirect} from 'react-router-dom';
import * as jq from 'jquery';
import LoginModel from '../request.js';
import axios from '../axios'
class Login extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      userName: "",
      passWord: "",
      current: "signin",
      signinError: false,
      errorMessage:"Please provide valid credentials",
      isLogged:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  handleSubmit(){

  }
  render(){
      const isLogged = axios.isLoggedIn();
      if(isLogged)
         return <Redirect to="/"/>
      return this.getAccount()
  }

  getSignup(){
    return (
        <div className="m-login__signin">
          <div className="m-login__head">
            <h3 className="m-login__title">Sign Up</h3>
            <div className="m-login__desc">Enter your details to create your account:</div>
          </div>
          <form className="m-login__form m-form" action="">
            <div className="form-group m-form__group">
              <input className="form-control m-input" type="text" placeholder="Fullname" name="fullname"/>
            </div>
            <div className="form-group m-form__group">
              <input className="form-control m-input" type="text" placeholder="Email" name="email" autoComplete="off"/>
            </div>
            <div className="form-group m-form__group">
              <input className="form-control m-input" type="password" placeholder="Password" name="password"/>
            </div>
            <div className="form-group m-form__group">
              <input className="form-control m-input m-login__form-input--last" type="password" placeholder="Confirm Password" name="rpassword"/>
            </div>
            <div className="row form-group m-form__group m-login__form-sub">
              <div className="col m--align-left">
                <label className="m-checkbox m-checkbox--focus">
                  <input type="checkbox" name="agree"/> I Agree the <a href="#" className="m-link m-link--focus">terms and conditions</a>.
                  <span></span>
                </label>
                <span className="m-form__help"></span>
              </div>
            </div>
            <div className="m-login__form-action">
              <button id="m_login_signup_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">Sign Up</button>
              <button id="m_login_signup_cancel" className="btn btn-outline-focus  m-btn m-btn--pill m-btn--custom">Cancel</button>
            </div>
          </form>
        </div>
      );
  }

  getRenewPassword(){
    return (
        <div className="m-login__signin">
          <div className="m-login__head">
            <h3 className="m-login__title">Forgotten Password ?</h3>
            <div className="m-login__desc">Enter your email to reset your password:</div>
          </div>
          <form className="m-login__form m-form" action="">
            <div className="form-group m-form__group">
              <input className="form-control m-input" type="text" placeholder="Email" name="email-login" />
            </div>
            <div className="m-login__form-action">
              <button id="m_login_forget_password_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">Request</button>
              <button id="m_login_forget_password_cancel" className="btn btn-outline-focus m-btn m-btn--pill m-btn--custom">Cancel</button>
            </div>
          </form>
        </div>
      )
  }

  componentDidMount(){
      
  }

  changeState(key, value){
    var data = {};
    data[key] = value;
    this.setState(Object.assign(this.state, data));
  }

  changeForm(s){
    this.changeState("current", s)
  }

  async login(e){
    e.preventDefault();
    const username = this.state.userName;
    const pwd = this.state.passWord;
    this.changeState("signinError", false);
    if(jq.trim(username).length <=0 || jq.trim(pwd).length <= 0){
      this.changeState("signinError", true);
      return false;
    }
    jq("#blank").fadeIn(400);
    var req = new LoginModel("/oauth/token", username, pwd);
    req.send({username, password:pwd}, (resp)=>{
      //this.changeState("isLogged", true);
      jq("#blank").fadeOut(400);
      if(typeof resp === "object"){
        //  const access_token = (resp["access_token"] != undefined) ? resp["access_token"] : null;
        //  const refresh_token = (resp["refresh_token"] != undefined) ? resp["refresh_token"] : null;
        //  const token_type = (resp["token_type"] != undefined) ? resp["token_type"] : null;
        //  const time_expires = (resp["expires_in"] != undefined) ? resp["expires_in"] : null;

         if(resp.access_token !== null && resp.refresh_token !== null && resp.token_type !== null && resp.time_expires !== null){
            // window.localStorage.setItem("Bearer", access_token)
            // window.localStorage.setItem("refresh", refresh_token)
            // window.localStorage.setItem("token_type", token_type)
            // window.localStorage.setItem("time_expires", time_expires)

            const {access_token, expires_in, refresh_token, token_type} = resp;
            localStorage.setItem('jwt_token', JSON.stringify({
              bearer: access_token, 
              token_type,
              refresh: refresh_token,
              time_expire: expires_in
            }))

            this.changeState("isLogged", true);
         }
      }else{
         this.changeState("signinError", true);
         this.changeState("errorMessage", "Something went wrong.");
      }
   
    },
    (xhr, status, error)=>{
      this.changeState("signinError", true);
      this.changeState("errorMessage", "Invalid user credentials.");
      jq("#blank").fadeOut(400);
    })
    
  }

  getLogin(){
    return(
        <div className="m-login__signin">
          <div className="m-login__head">
            <h3 className="m-login__title">Sign In</h3>
          </div>
          <form className="m-login__form m-form" action="" onSubmit={this.login.bind(this)}>
            {this.state.signinError == true ? 
              <div className="alert alert-warning fade show">
                <strong>{this.state.errorMessage} </strong>
                {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button> */}
              </div> : ""}
            <div className="form-group m-form__group">
              <input className="form-control m-input" type="text" placeholder="Email" name="email-signin" id="username_login" onChange={(e)=>{this.changeState("userName", e.target.value)}}/>
            </div>
            <div className="form-group m-form__group">
              <input className="form-control m-input m-login__form-input--last" type="password" placeholder="Password" name="password" id="user_pwd_login"  onChange={(e)=>{this.changeState("passWord", e.target.value)}}/>
            </div>
            <div className="row m-login__form-sub">
              <div className="col m--align-left">
                <label className="m-checkbox m-checkbox--focus">
                  <input type="checkbox" name="remember"/> Remember me
                  <span></span>
                </label>
              </div>
              <div className="col m--align-right">
                <a href="javascript:;" id="m_login_forget_password" className="m-link" onClick={()=>{this.changeForm('reset')}}>Forget Password ?</a>
              </div>
            </div>
            <div className="m-login__form-action">
              <button id="m_login_signin_submit" className="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air">Sign In</button>
            </div>
          </form>
        </div>
      )
   }

  isLogged(){
    return false;
  }

  getAccount(){
    if(this.state.isLogged){
      return window.location.href = "/";
    }
    return (
      <div className="m-grid m-grid--hor m-grid--root m-page">
        <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin" id="m_login">
          <div className="m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside">
            <div className="m-stack m-stack--hor m-stack--desktop">
              <div className="m-stack__item m-stack__item--fluid">
                <div className="m-login__wrapper">
                  <div className="m-login__logo">
                    <a href="#">
                      <img src='/assets/default/media/img/logo/logo-2.png'/>
                    </a>
                  </div>
                  {this.state.current == "signin" ? this.getLogin() : 
                    (this.state.current == "signup" ? this.getSignup(): this.getRenewPassword())
                  }
                  
                </div>
              </div>
              <div className="m-stack__item m-stack__item--center">
                <div className="m-login__account">
                  <span className="m-login__account-msg">
                    Don't have an account yet ?
                  </span>&nbsp;&nbsp;
                  {this.state.current == "signup" ? 
                    <a href="javascript:;" className="m-link m-link--focus m-login__account-link"  onClick={this.changeForm.bind(this, "signin")}>Sign In</a> :
                    <a href="javascript:;" id="m_login_signup" className="m-link m-link--focus m-login__account-link" onClick={this.changeForm.bind(this, "signup")}>Sign Up</a>
                  }
                  
                </div>
              </div>
            </div>
          </div>
          <div className="m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1  m-login__content m-grid-item--center" style={{backgroundImage: `url('/assets/default/media/img/bg/bg-01.jpg')`}}>
            <div className="m-grid__item">
              <h4 className="m-login__welcome">Welcome to BlueSparrow</h4>
              <p className="m-login__msg">
                Manage all your content and more with BlueSparrow
              </p>
            </div>
          </div>
        </div>
        <div id="blank">
          <canvas id="can" width="100" height="60" style={{margin:'0 auto'}}></canvas>
        </div>
      </div>

    );
  }
}

export default Login;