import React, { useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';


const loginSchema = yup.object().shape({
    username: yup
    .string()
    .required()
    .min(6, "Six characters are required for a valid username"),

    password: yup
    .string()
    .required("Password is required to login to your account")
})

// LOGIN INITIAL FORM
const initialLoginForm = {
    username: '',
    password: '',
}

// LOGIN FORM ERRORS
const loginFormErrors = {
    username: '',
    password: '',
}

export default function Login() {
    const { push } = useHistory();
    // STATE
    const [ login, setLogin ] = useState(initialLoginForm)
    const [ loginErrors, setLoginErrors ] = useState(loginFormErrors)
    const [ currentUser, setCurrentUser] = useState([])

    // POST CURRENT MEMEBERS
    const postCurrentUser = member => {
        axiosWithAuth()
        .post('/auth/login', member)
        .then(response => {
            console.log("Login: ", response)
            localStorage.setItem('token', response.data.token)
            setCurrentUser([...currentUser, response]);
            push('/watermyplants')
        })
        .catch(error => {
            console.log('Error posting data: ', error)
        })
        .finally(() => {
            setLogin(initialLoginForm)
        })
    }

    // REACH FOR ERROR MESSAGES
    const getLoginErrors = (name, value) => {
        yup.reach(loginSchema, name)
        .validate(value)
        .then(() => {
            setLoginErrors({...loginErrors, [name]: ''})
        })
        .catch((error) => {
            setLoginErrors({...loginErrors, [name]: error.message})
        })
    }

    // ONCHANGE HANDLER
    const changes = (event) => {
        const { value, name } = event.target;
        setLogin({...login, [name]: value})
        getLoginErrors(name, value)
    }

        // SUBMIT HANDLER
        const submit = event => {
            event.preventDefault()
            const curUser = {
                username: login.username,
                password: login.password,
            }
            postCurrentUser(curUser)
        }

    return (
        <div className='loginFormContainer'>
                
                <form onSubmit={submit} className='loginForm'>
                    <h1 className='loginwelcome'>  Welcome Back! </h1>
                    <h2> Member Log In</h2>

                    <div className='loginErrors'>
                        <div>{loginErrors.username}</div>
                        <div>{loginErrors.password}</div>
                    </div>

                    <label>
                        Username
                        <input name='username' type='text' value={login.username} onChange={changes} />
                    </label>
                    <br/>

                    <label>
                        Password
                        <input name='password' type='password' value={login.password} onChange={changes} />
                    </label>
                    <br/>

                    <button type='submit'>Log In!</button>
                    
                </form>
            </div>
    )
}