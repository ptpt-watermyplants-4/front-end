import * as yup from 'yup'
import React, { useState, useEffect } from 'react'

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

    return (
        <div className='form'>
            <h1>Welcome to Water My Plants!</h1>
            <br/>
            <h2>Create your account here!</h2>

            <form>
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
                <button>Register</button>
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