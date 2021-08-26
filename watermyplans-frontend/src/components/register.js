import * as yup from 'yup'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const schema = yup.object().shape({
    username: yup.string().required().min(2, 'name must be at least 2 characters'), 
    email: yup.string().email().required(), 
    phoneNumber: yup.string().required().min(10, 'must be a valid phone number'),
    password: yup.string().required()

})

const initialFormValues = {
    username: '', 
    email: '', 
    phoneNumber: '', 
    password: '', 
}

const initialFormErrors = {
    username: '', 
    email: '', 
    phoneNumber: '', 
    password: '', 
}

const initialDisabled = true


const Register = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [ newUsers, setNewUsers ] = useState([])
    const [disabled, setDisabled] = useState(initialDisabled)

    const onChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
        console.log(evt.target)
        
        }
    const inputChange = (name, value) => {
        yup 
        .reach(schema, name)
        .validate(value)
        .then(() => {
            setFormErrors({
                ...formErrors, 
                [name]: ''
            })
        })
        .catch(err => {
            setFormErrors({
                ...formErrors, 
                [name]: err.message
            })
        })
        setFormValues({
            ...formValues, 
            [name]: value
        })
    }

useEffect(() => {
    schema
    .isValid(formValues)
    .then(isSchemaValid => {
    setDisabled(!isSchemaValid)
    })
}, [formValues])


    //post for adding new users
    // const postNewUser = (user) => {
    //     axios
    //     .post('', user)
    //     .then(response => {
    //         console.log("New User: ", response)
    //     })
    //     .catch(error => {
    //         console.log("Error creating new user: ", error)
    //     })
    //     .finally(() => {
    //         setFormValues(initialFormValues)
    //     })
    // }

    //submit handler for register form
    // const submitRegForm = (event) => {
    //     event.preventDefault();
    //     const newUser = {
    //         username: formValues.username, 
    //         email: formValues.email, 
    //         phoneNumber: formValues.username, 
    //         password: formValues.password,
    //     }
    //     postNewUser(newUser)
    // }

    return (
        <div className='form'>
            <h1>Welcome to Water My Plants!</h1>
            <br/>
            <h2>Create your account here!</h2>

            <form> {/*onSubmit={submitRegForm}*/}
                <label>Username:
                    <input
                    name='username'
                    type='text'
                    onChange={onChange}
                    />
                </label>

                <label>Email:
                    <input
                    name='email'
                    type='text'
                    onChange={onChange}
                    />
                </label>

                <label>Phone Number: 
                    <input 
                    name="phoneNumber"
                    type='text'
                    onChange={onChange}
                    />
                </label>

                <label>

                </label>Password: 
                    <input
                    name='password'
                    type='text'
                    onChange={onChange}
                    />
                <button type='submit'>Register</button>
                <div className='formRegisterErrors'>
                    <div>{formErrors.username}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.phoneNumber}</div>
                    <div>{formErrors.password}</div>
                </div>
            </form>

        </div>
    )
}

export default Register