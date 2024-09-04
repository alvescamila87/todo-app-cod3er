import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

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

//actionCreator 2 - com promise
export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

//actionCreator 3 - com promise
// export const add = (description) => {
//     const request = axios.post(URL, { description })
//     return [
//         { type: 'TODO_ADDED', payload: request },
//         search()
//     ]
// }

//actionCreator 3 - versão com thunk redux para retornar um metodo ao invés de action
export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}