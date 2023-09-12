import { Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';
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
            <Button onClick={handleClickOpen} variant="contained">
                차 추가하기
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <Stack spacing={0} mt={1} marginX={2}>
                        <TextField autoFocus variant="standard" label='Brand' name='brand' value={car.brand} onChange={handleChange}/><br/>
                        <TextField autoFocus variant="standard" label='Model' name='model' value={car.model} onChange={handleChange}/><br/>
                        <TextField autoFocus variant="standard" label='Color' name='color' value={car.color} onChange={handleChange}/><br/>
                        <TextField autoFocus variant="standard" label='Year' name='year' value={car.year} onChange={handleChange}/><br/>
                        <TextField autoFocus variant="standard" label='Price' name='price' value={car.price} onChange={handleChange}/><br/>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose}>취소</Button>
                    <Button variant='contained' onClick={handleSave}>저장</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddCar;