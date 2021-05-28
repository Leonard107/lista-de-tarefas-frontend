import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import PendenciaForm from './pendenciaForm'
import PendenciaLista from './pendenciaLista'

const URL = 'http://localhost:3003/api/listas'

export default class Pendencia extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this) 
        this.handleRemove = this.handleRemove.bind(this)
        
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then((resp) => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(lista){
        axios.delete(`${URL}/${lista._id}`)
            .then(resp => this.refresh())
    }

    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <PendenciaForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <PendenciaLista list={this.state.list} 
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}