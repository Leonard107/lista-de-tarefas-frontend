import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import PendenciaForm from './pendenciaForm'
import PendenciaLista from './pendenciaLista'

export default class Pendencia extends Component {
    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <PendenciaForm />
                <PendenciaLista />
            </div>
        )
    }
}