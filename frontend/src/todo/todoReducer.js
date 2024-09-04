const INITIAL_STATE = { description: '', list: [] }

// const INITIAL_STATE = {
//     description: "Ler livro de Programador Pragmático",
//     list: [
//         {
//         _id: 1,
//         description: "Pagar streaming de aula: Udemy",
//         done: true,
//         },
//         {
//         _id: 2,
//         description: "Call com o time às 10:00",
//         done: false,
//         },
//         {
//         _id: 3,
//         description: "Consulta médica às 14:00",
//         done: false,
//         },
//     ],
// };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data } // precisa colocar middleware
        case 'TODO_ADDED':
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}