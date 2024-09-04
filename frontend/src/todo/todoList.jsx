import React from "react";
import IconButton from "../template/iconButton";
import { connect } from 'react-redux';

import { bindActionCreators } from "redux";
import { markAsDone, markAsPending } from "./todoActions";

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
                        onClick={() => props.markAsDone(todo)} // retorna a função, não o resultado da função
                    />
                    <IconButton 
                        style="warning"
                        icon="undo"
                        hide={!todo.done}
                        onClick={() => props.markAsPending(todo)} // retorna a função, não o resultado da função
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

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({ markAsDone, markAsPending }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)