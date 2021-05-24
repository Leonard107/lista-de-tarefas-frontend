import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import pendenciaForm from './pendenciaForm'
import pendenciaLista from './pendenciaLista'

export default class Pendencia extends Component {
    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <pendenciaForm />
                <pendenciaLista />
            </div>
        )
    }
}