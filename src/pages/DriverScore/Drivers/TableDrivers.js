import React from 'react'
import { Table } from 'reactstrap'

const TableCountry = ({ seleccionarConsola, data }) => {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th className="text-center">#</th>
          <th className="text-center">Name</th>
          <th className="text-center">Code</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, id) => {
          return (
            <tr key={id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.code}</td>

              <td>
                <div className="btn-group d-flex justify-content-center">
                  <button color="primary" onClick={() => seleccionarConsola(item, 'Editar')}>
                    <span className="bi bi-pencil-square" style={{ fontSize: 20 }}></span>
                  </button>

                  <button color="primary" onClick={() => seleccionarConsola(item, 'Eliminar')}>
                    <i className="bi bi-trash" style={{ fontSize: 20 }}></i>
                  </button>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TableCountry
