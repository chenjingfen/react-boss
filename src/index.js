import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter, Link, Route,Redirect,Switch} from 'react-router-dom'
import reducers from './reducers'
import Auth from './Auth'
import Dashboard from './Dashboard'
import config from './config'


const reduxDevtools = window.devToolsExtension ? window.devToolsExtension : f => f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools()
))
console.log(store.getState())


class Test extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>测试组件{this.props.match.url}</div>
    }
}
ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {/*只渲染命中的第一个组件*/}
                <Route path='/login' exact component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))


