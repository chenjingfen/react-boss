import React from 'react'
import ReactDom from 'react-dom'
import App from './App.js'
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {counter} from "./index.redux.js";
import {BrowserRouter, Link, Route,Redirect,Switch} from 'react-router-dom'

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension : f => f
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools()
))

function Erying() {
    return <div>二营</div>
}

function Qibinglian() {
    return <div>骑兵连</div>
}

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
            <div>
                <ul>
                    <li><Link to='/'>一营</Link></li>
                    <li><Link to='/erying'>二营</Link></li>
                    <li><Link to='/qibinglian'>骑兵连</Link></li>
                </ul>
                <Switch>
                    {/*只渲染命中的第一个组件*/}
                    <Route path='/' exact component={App}></Route>
                    <Route path='/erying' component={Erying}></Route>
                    <Route path='/qibinglian' component={Qibinglian}></Route>
                    <Route path='/:location' component={Test}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))


