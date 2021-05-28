import React from 'react'
import IconButton from '../template/iconButton'
export default props => {
  
  const renderRows = () => {
    const list = props.list || []
    return list.map(lista =>(
      <tr key={lista._id}>
        <td>{lista.description}</td>
        <td>
          <IconButton style='danger' icon='trash-o'
            onClick={() => props.handleRemove(lista)}
          />
        </td>
      </tr>
    ))
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}