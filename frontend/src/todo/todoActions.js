import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

//  todoForm
//actionCreator 1
export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

/*export function changeDescription(event) {
    return {
        type: 'DESCRIPTION_CHANGED',
        payload: event.target.value
    }
}*/

//  todoForm
//actionCreator 2 - com promise
export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
    
    // return {
    //     type: 'TODO_SEARCHED',
    //     payload: request
    // }
}

//actionCreator 3 - com promise
// export const add = (description) => {
//     const request = axios.post(URL, { description })
//     return [
//         { type: 'TODO_ADDED', payload: request },
//         search()
//     ]
// }

//  todoForm
//actionCreator 3 - versão com thunk redux para retornar um metodo ao invés de action
export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

//actionCreator 4 - todoList
export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true })
            //.then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

//actionCreator 5 - todoList
export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            //.then(resp => dispatch({type: 'TODO_MARKED_AS_PENDING', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

//actionCreator 5 - todoList
export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => dispatch(search()))
    }
}

//actionCreator 6 - todoForm: usando multi
export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}