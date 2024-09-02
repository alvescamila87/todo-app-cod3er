import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {

    // para não ter problema do this (null)
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] } // estado inicial do campo input


        // para não ter problema do this (null) e ser sempre do componente atual (todo)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    // receber o evento, sempre que o usuário digitar no input
    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    // lógica de adição de uma nova tarefa
    handleAdd() {
        console.log(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Add" />
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}