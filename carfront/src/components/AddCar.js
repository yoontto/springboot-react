import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import { useState } from 'react';

function AddCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        year: '',
        fuel: '',
        price: ''
    });

    //모달 폼 열기
    const handleClickOpen = () => {
        setOpen(true);
    }

    //모달 폼 닫기
    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (event) => {
        //event.target.name : 사용자가 입력필드에 제공한 name 속성값
        //event.target.value : 새 값을 업데이트할 필드
        setCar({...car, [event.target.name]: event.target.value})
    }

    const handleSave = () => {
        props.addsCar(car);
        handleClose();
    }

    return (
        <div>
            <button onClick={handleClickOpen}>차 추가하기</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <input placeholder='Brand' name='brand' value={car.brand} onChange={handleChange}/><br/>
                    <input placeholder='Model' name='model' value={car.model} onChange={handleChange}/><br/>
                    <input placeholder='Color' name='color' value={car.color} onChange={handleChange}/><br/>
                    <input placeholder='Year' name='year' value={car.year} onChange={handleChange}/><br/>
                    <input placeholder='Price' name='price' value={car.price} onChange={handleChange}/><br/>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddCar;