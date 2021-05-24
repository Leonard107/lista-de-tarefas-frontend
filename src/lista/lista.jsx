import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import ListaForm from './listaForm'
import ListaLista from './listaLista'

export default class Lista extends Component {
    render() {
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <ListaForm />
                <ListaLista />
            </div>
        )
    }
}