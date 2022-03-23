import React, { Suspense } from 'react'
import DataTable from 'react-data-table-component'

const TableDrivers = ({ data }) => {
  const columns = [
    {
      name: 'ID',
      selector: 'driverCode',
      sortable: true,
    },
    {
      name: 'NAME',
      selector: 'displayName',
      sortable: true,
      grow: 3,
    },
  ]

  const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
  )

  return (
    <div>
      <Suspense fallback={loading}>
        <DataTable
          title="Movies"
          columns={columns}
          data={data}
          defaultSortFieldId={1}
          pagination
          selectableRows
        />
      </Suspense>
    </div>
  )
}
export default TableDrivers
