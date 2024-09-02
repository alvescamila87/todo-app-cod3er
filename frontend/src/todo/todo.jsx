import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

//URL Base da API no backend
const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    // para não ter problema do this (null)
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] } // estado inicial do campo input


        // para não ter problema do this (null) e ser sempre do componente atual (todo)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    // remover item de tarefa da lista
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    // atualizar lista de tarefas
    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            //.then(resp => console.log(resp.data))
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    // receber o evento, sempre que o usuário digitar no input
    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    // lógica de adição de uma nova tarefa
    handleAdd() {
        //console.log(this.state.description)
        const description = this.state.description
        axios.post(URL, { description })
            //.then(resp => console.log('Funcionou!'))
            .then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Add" />
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}                     
                />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}