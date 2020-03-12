import React from 'react'
import Layout from '../shared/Layout'
import { Link } from 'react-router-dom'

const Login = (props) => {
    console.log(props)
    return (
        <Layout>
            <div className='container'>
                <div className='form'>
                    <h2>Login</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        props.handleLogin()
                    }}>
                        <h3>Email:</h3>
                        <input 
                            className='text-field' 
                            name='email' 
                            type='text' 
                            placeholder='email' 
                            value={props.formData && props.formData.email} 
                            onChange={props.handleChange} 
                        />

                        <h3>Password:</h3>
                        <input 
                            className='text-field' 
                            name='password' 
                            type='password' 
                            placeholder='password' 
                            value={props.formData && props.formData.password} 
                            onChange={props.handleChange} 
                        />

                        <button>Login</button>
                        <Link className='link-2' to='/registration'>
                            <h4>Register New User</h4>
                        </Link>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Login
