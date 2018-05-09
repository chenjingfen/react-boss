import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {login,getUserData} from './Auth.redux'

//两个reducer需要合并
@connect(
    state=>state.auth,
    {login,getUserData}
)
class Auth extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('componentDidMount')
        this.props.getUserData()
    }
    render(){
        return (
            <div>
                <h2>我的名字是{this.props.name},年龄{this.props.age}</h2>
                {this.props.isAuth?<Redirect to='/dashboard' />:null}
                <h1>你没有权限</h1>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

export default Auth