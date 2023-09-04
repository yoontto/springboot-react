import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../constans';
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses } from '@mui/x-data-grid';
import { Snackbar } from '@mui/material';
import AddCar from './AddCar';
import EditCar from './EditCar';


function CustomToolbar(){
    return (
        <GridToolbarContainer className={gridClasses.toolbarContainer}>
            <GridToolbarExport />
        </GridToolbarContainer>
    );        
}

function Carlist() {
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);

    const columns = [
        {field: 'brand', headerName: 'Brand', width: 200},
        {field: 'model', headerName: 'Model', width: 200},
        {field: 'color', headerName: 'Color', width: 200},
        {field: 'year', headerName: 'Year', width: 150},
        {field: 'price', headerName: 'Price', width: 150},
        {
            field: '_link.car.href',
            headerName: '',
            sortable: false,
            filterable: false,    
            renderCell: row => 
                <EditCar data={row} updateCar={updateCar}/>
        },
        {
            field: '_link.self.href',
            headerName: '',
            sortable: false,
            filterable: false,    
            renderCell: row => 
                <button onClick={() => onDelClick(row.id)}>Delete</button>
        }
    ];

    //삭제
    const onDelClick = (url) => {
        if (window.confirm("Are you sure to delete?")){
            fetch(url, {method: 'DELETE'})
            .then(response => {
                if(response.ok){
                    fetchCars();
                    setOpen(true)
                } else {
                    alert('The car didnt wiped out!');
                }
            })
            .catch(e => console.error(e))
        }
    }

    //수정
    const updateCar = (car, link) => {
        fetch(link,
        {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(car)   
        })
        .then(response => {
            if(response.ok){
                fetchCars();
            } else {
                alert('수정 오류!!');
            }
        })
        .catch(e => console.error(e))
    }

    //차 목록 불러오기
    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = () => {
        fetch(SERVER_URL + 'api/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(e => console.error(e));
    }

    //새로운 차 추가하기
    const addCar = (car) => {
        fetch(SERVER_URL + 'api/cars',
        {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(car)
        })
        .then(reponse => {
            if(reponse.ok) {
                fetchCars();
            } else {
                alert('차 추가 안됐음!');
            }
        })
        .catch(e => console.error(e))
    }

    return (
        <React.Fragment>
            <AddCar addsCar={addCar}/>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid 
                    rows={cars}
                    columns={columns} 
                    disableRowSelectionOnClick={true}
                    getRowId={row => row._links.self.href}
                    slots={{ toolbar: CustomToolbar }}
                    slotProps={{
                        columnMenu: { background: 'red' },
                    }}
                    />
                <Snackbar 
                    open={open}
                    autoHideDuration={2000}
                    onClose={() => setOpen(false)}    
                    message="Car deleted"
                />
            </div>
        </React.Fragment>
    );
}

export default Carlist;