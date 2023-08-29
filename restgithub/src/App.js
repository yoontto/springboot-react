//import logo from './logo.svg';
import React, {useState} from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([]);

  //API 호출
  const fetchData = () => {
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
    .then(response => response.json())
    .then(data => setData(data.items))
    .then(data => console.log(data))
    .catch(e => console.error(e))
  }

  //columns 정의
  const columns = [
    {field : 'full_name', sortable: true, filter: true},
    {field : 'html_url', sortable: true, filter: true},
    {field : 'owner.login', sortable: true, filter: true},
    {
      field: 'full_name',
      cellRenderer: params => 
        <button
          onClick={() => alert(params.value)}>
          Press me
        </button>
    },
    {
      field: 'html_url',
      headerName: '링크 이동',
      cellRenderer: params =>
        <a href={(params.value)}>
          {params.value}
        </a>
    }
  ]

  return (
    <div className="App">
      <input value={keyword} onChange={e => setKeyword(e.target.value)}/>
      <button onClick={fetchData}>Fetch</button>
      <div className='ag-theme-material' style={{height: 500, width: '90%'}}>
        <AgGridReact
          rowData={data}
          columnDefs={columns}
          pagination={true}
          paginationPageSize={8}
          />
      </div>
    </div>
  );
}

export default App;
