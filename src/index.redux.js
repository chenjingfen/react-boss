

const ADD_GUI = '加机关枪'
const REMOVE_GUI = '减机关枪'
//reducer
export function counter(state=0,action) {
    switch (action.type){
        case ADD_GUI:
            return state + 1
        case REMOVE_GUI:
            return state - 1
        default :
            return 10
    }
}

export function addGUI() {
    return {type:ADD_GUI}
}

export function removeGUI() {
    return {type:REMOVE_GUI}
}

export function addGunAsync() {
    return dispatch =>{
        setTimeout(()=>{
            dispatch(addGUI())
        },2000)
    }

}