import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import {connect} from 'react-redux';

import {Actions, ActionConst} from 'react-native-router-flux';

import * as actions from '../redux/actions/authActions'


  class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'admin@admin.com',
      password:'123456'
    }
    debugger;
    this.onChangeTextUsername = this.onChangeTextUsername.bind(this);
    this.onChangeTextPassword = this.onChangeTextPassword.bind(this);
  }
  onChangeTextUsername= (email) =>{  debugger;this.setState({email})}  
  onChangeTextPassword= (password) =>{  debugger;this.setState({password})}  
  login(){

    this.props.login(this.state.email,this.state.password).then(() => {
      setTimeout(()=>{
        debugger;
        if(this.props.error){
          alert(this.props.error.message)
        }
        else{
          Actions.secondScreen();
          //alert(this.props.userData.role+' user successfully logged in ')
        }
      },1000)
     
    })
  }
  render() {
    return (
      <Wallpaper>
        <Logo />
        <Form valueUsername={this.state.email} onChangeTextUsername={this.onChangeTextUsername}  valuePassword={this.state.password} onChangeTextPassword={this.onChangeTextPassword} />
        <SignupSection />
        <ButtonSubmit   onPress={() => this.login()} />
      </Wallpaper>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn:state.auth.isLoggedIn,
  isLoading:state.auth.isLoading,
  userData:state.auth.userData,
  error:state.auth.error
})

const mapDispatchToProps = dispatch => ({
  login:(email,password) => dispatch(actions.login({email,password}))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)
