import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import PendenciaForm from './pendenciaForm'
import PendenciaLista from './pendenciaLista'

export default class Pendencia extends Component {
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)   
    }

    handleAdd() {
        console.log(this)
    }

    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <PendenciaForm handleAdd={this.handleAdd}/>
                <PendenciaLista />
            </div>
        )
    }
}