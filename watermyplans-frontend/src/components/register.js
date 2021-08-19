
const Register = () => {

    return (
        <div className='form'>
            <h1>Welcome to Water My Plants!</h1>
            <br/>
            <h2>Create your account here!</h2>

            <form>
                <label>Username:
                    <input
                    name='username'
                    />
                </label>

                <label>Email:
                    <input
                    name='email'
                    />
                </label>

                <label>Phone Number: 
                    <input 
                    name="phoneNumber"
                    />
                </label>

                <label>

                </label>Password: 
                    <input
                    name='password'
                    />
                <button>Register</button>
            </form>

        </div>
    )
}

export default Register