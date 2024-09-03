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
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }

    // atualizar lista de tarefas
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            //.then(resp => console.log(resp.data))
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch() {
       this.refresh(this.state.description) 
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

    // remover item de tarefa da lista
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
           .then(resp => this.refresh(this.state.description)) // mantém a descrição após remoção
    }

    // marcar tarefa como feita
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description)) // mantém a descrição após remoção
    }

    // desfazer o que foi feito de done
    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description)) // mantém a descrição após remoção
    }

    // limpar campo de pesquisa
    handleClear(){
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="Add" />
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}  
                    handleSearch={this.handleSearch}   
                    handleClear={this.handleClear}            
                />
                <TodoList 
                    //list={this.state.list} -> buscando de reducer
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                />
            </div>
        )
    }
}