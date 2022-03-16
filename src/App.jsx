import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import generateData from './makeData';
import Table from './Table';
import Loader from './Loader';
import columns from './columns';

const TableWrapper = styled.div`
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
`;

function App() {
  const [tableData, setTableData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const updateData = useCallback(async () => {
    isDataLoaded && setIsDataLoaded(false);
    const data = await generateData();
    setTableData(data);
    setIsDataLoaded(true);
  }, []);

  useEffect(() => updateData(), []);

  if (!isDataLoaded) {
    return <Loader />;
  }

  return (
    <TableWrapper>
      <Table columns={columns} data={tableData} handleDataUpdate={updateData} />
    </TableWrapper>
  );
}

export default App;
