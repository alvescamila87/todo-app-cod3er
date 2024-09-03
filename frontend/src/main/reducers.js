import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro de Programador Pragmático',
        list: [{
            _id:1,
            description: 'Pagar streaming de aula: Udemy',
            done: true
        }, {
            _id: 2,
            description: 'Call com o time às 10:00',
            done: false
        }, {
            _id: 3,
            description: 'Consulta médica às 14:00',
            done: false  
        }]
    })
})

export default rootReducer