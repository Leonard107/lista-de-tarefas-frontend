import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='pendenciaForm'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input id='description' className='form-control' 
            placeholder="Adicione uma tarefa"></input>
        </div>

        <div className='col-xs-12 col-sm-9 col-md-2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}></IconButton>
        </div>
    </div>
)