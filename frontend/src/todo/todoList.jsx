import React from "react";
import IconButton from "../template/iconButton";
import { connect } from 'react-redux';

function TodoList(props) {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton 
                        style="success"
                        icon="check"
                        hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)} // retorna a função, não o resultado da função
                    />
                    <IconButton 
                        style="warning"
                        icon="undo"
                        hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)} // retorna a função, não o resultado da função
                    />
                    <IconButton 
                        style="danger" 
                        icon="trash-o" 
                        //hide={!todo.done}
                        onClick={() => props.handleRemove(todo)} // retorna a função, não o resultado da função
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th className="tableActions">Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

function mapStateToProps(state) {
    // vindo do main > reducer
    return {
        list: state.todo.list
    }
}

export default connect(mapStateToProps)(TodoList)