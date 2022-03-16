export default [
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
];
