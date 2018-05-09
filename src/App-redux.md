import React from 'react'
import {connect} from 'react-redux'
import {addGUI,removeGUI,addGunAsync} from "./index.redux.js";

const mapStatetoProps=(state)=>{
    return{num:state}
}

const actionCreators = {addGUI,removeGUI,addGunAsync}

// App=connect(mapStatetoProps,actionCreators)(App)
@connect(mapStatetoProps,actionCreators)
class App extends React.Component {
    render() {
       const  num=this.props.num
        const addGUI =this.props.addGUI
        const removeGUI = this.props.removeGUI
        const addGunAsync = this.props.addGunAsync
        return (
            <div>
                <h1>现在有机枪{num}把</h1>
                <button onClick={() => addGUI()}>申请武器</button>
                <button onClick={() => removeGUI()}>没收武器</button>
                <button onClick={() => addGunAsync()}>拖两天再给</button>
            </div>
        )

    }
}




export default App