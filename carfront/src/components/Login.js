import React, { useState } from "react";
import { SERVER_URL } from '../constans.js';
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Carlist from './Carlist.js'

function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    
    const [isAuthenticated, setAuth] = useState(false);
    
    const handleChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value});
    }
    
    const login = () => {
        fetch(SERVER_URL + 'login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            const jwsToken = res.headers.get('Authorization');
            if(jwsToken !== null) {
                sessionStorage.setItem("jwt", jwsToken);
                setAuth(true);
            } else {
                setOpen(true);
            }
        })
        .catch(e => {
            console.log(e);
        })
    }

    const logout = () => {
        sessionStorage.removeItem('jwt');
        setAuth(false);
    }

    const [open, setOpen] = useState(false);


    if(isAuthenticated) {
        return <Carlist />;
    } else {
        return(
            <div>
                <Stack spacing={2} alignItems='center' mt={2}>
                    <TextField name="username" label="userName" onChange={handleChange}/>
                    <TextField name="password" label="password" type="password" onChange={handleChange} />
                    <Button variant="outlined" color="primary" onClick={login}>Login</Button>
                </Stack>
                <Snackbar 
                    open={open} 
                    autoHideDuration={3000}
                    onClose={() => setOpen(false)}
                    message="로그인 실패! 아이디와 비밀번호를 확인하세요!"
                />
            </div>
        );
    }
}

export default Login;