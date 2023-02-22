const CHANGE_ITEM = "CHANGE_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const ADD = "ADD";
const CLEAR = "CLEAR";
const initialTodos = JSON.parse(localStorage.getItem("list")) || [
    {
        name:"I know H.T.M.L",
        date:"2003-04-05",
        desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        id:Math.random() + Date.now(),
        isComplited:false
    },
    {
        name:"I am learning CSS",
        date:"2003-04-05",
        desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        id:Math.random() + Date.now(),
        isComplited:false
    },
    {
        name:"I want to learn JS",
        date:"2003-04-05",
        desc:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ", 
        info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        id:Math.random() + Date.now(),
        isComplited:false
    }
]
localStorage.setItem("list",JSON.stringify(initialTodos))
export function todoReducer(state = initialTodos ,action){
    switch(action.type){
        case CHANGE_ITEM:{
            const todos = state.map(val=>{
                if(val.id === action.payload.id){
                    return{
                        ...val,
                        isComplited:!val.isComplited
                    }
                }
                return val
            })
            localStorage.setItem("list",JSON.stringify(todos))
            return(
                todos
            )
            
        }

        case DELETE_ITEM:{
            const todos = state.filter(val => val.id !== action.payload.id)
            localStorage.setItem("list",JSON.stringify(todos))
            return(
                todos
            )
        }
        case ADD:{
            if(action.payload.item.name !== ''){
                localStorage.setItem("list",JSON.stringify([...state,action.payload.item]))
                return([
                    ...state,
                    action.payload.item
                ])
            }
            return state
        }

        case CLEAR:{
            const todos = state.filter(val => val.isComplited === false)
            localStorage.setItem("list",JSON.stringify(todos))
            return (
                todos
            )
        }
        default: return state
    }
}



export function changeItem(id){
    return{
        type:CHANGE_ITEM,
        payload:{
            id
        }
    }
}

export function deleteItem(id){
    return{
        type:DELETE_ITEM,
        payload:{
            id
        }
    }
}

export function addItem(item){
    return{
        type:ADD,
        payload:{
            item
        }
    }
}

export function clearItems(){
    return{
        type:CLEAR
    }
}


