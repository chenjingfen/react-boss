import { createStore } from 'redux'

//新建store

function counter(state=0,action) {
    console.log(action)
    switch (action.type){
        case '加机关枪':
            return state + 1
        case '减机关枪':
            return state - 1
        default :
            return 10
    }
}
const store = createStore(counter)
const init = store.getState()
console.log(init)

//派发事件 传递action
store.dispatch({type:'加机关枪'})
console.log(store.getState())
store.dispatch({type:'加机关枪'})
console.log(store.getState())
store.dispatch({type:'加机关枪'})
console.log(store.getState())
store.dispatch({type:'加机关枪'})
console.log(store.getState())