import React from 'react'
import Layout from '../shared/Layout'

const Registration = (props) => {
    return (
        <Layout>
            <div className='container'>
                <div className='form'>
                    <form onSubmit={props.handleRegister} >

                        <h3>Name:</h3>
                        <input 
                            className='text-field'
                            name='first_name' 
                            type='text' 
                            placeholder='first' 
                            value={props.formData && props.formData.first_name} 
                            onChange={props.handleChange} 
                        />
                        <input 
                            className='text-field'
                            name='last_name' 
                            type='text' 
                            placeholder='last' 
                            value={props.formData.last_name} 
                            onChange={props.handleChange} 
                        />

                        <h3>Username:</h3>
                        <input 
                            className='text-field'
                            name='username' 
                            type='text' 
                            placeholder='username' 
                            value={props.formData.username} 
                            onChange={props.handleChange} 
                        />

                        <h3>Email:</h3>
                        <input 
                            className='text-field'
                            name='email' 
                            type='email' 
                            placeholder='email' 
                            value={props.formData.email} 
                            onChange={props.handleChange} 
                        />

                        <h3>Artist Bio:</h3>
                        <textarea 
                            className='text-area'
                            name='artist_bio' 
                            placeholder='tell us a little about yourself' 
                            rows='7' 
                            cols='30' 
                            value={props.formData.artist_bio} 
                            onChange={props.handleChange}
                        ></textarea>

                        <h3>Password:</h3>
                        <input 
                            className='text-field'
                            name='password' 
                            type='password' 
                            placeholder='6 character min' 
                            value={props.formData.password} 
                            onChange={props.handleChange} 
                        />

                        <button>Register</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Registration
