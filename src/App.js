import React, { useState } from 'react'
import styled from 'styled-components'

import makeData from './makeData'
import Table from './Table'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination,
  .update {
    padding: 0.5rem;
  }
`

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
            filter: 'sort',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
            filter: 'sort',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
            filter: '',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
            filter: '',
          },
          {
            Header: 'Status',
            accessor: 'status',
            filter: 'select',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
            filter: '',
          },
        ],
      },
    ],
    []
  )

  const [tableData, setTableData] = useState(makeData(100));
  const updateData = React.useCallback(() => setTableData(makeData(100)), [])

  return (
    <Styles>
      <Table columns={columns} data={tableData} handleDataUpdate={updateData} />
    </Styles>
  )
}

export default App

