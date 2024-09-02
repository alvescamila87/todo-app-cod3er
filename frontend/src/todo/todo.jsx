import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {

    // para não ter problema do this (null) e ser sepre do componente atual (todo)
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    // lógica de adição de uma nova tarefa
    handleAdd() {
        console.log(this)
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Add" />
                <TodoForm handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}