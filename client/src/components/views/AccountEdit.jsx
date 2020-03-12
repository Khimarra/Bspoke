import React from 'react'
import Layout from '../shared/Layout'


const AccountEdit = (props) => {
    // console.log(props.currentUser)
    return (
        <Layout>
            <div className='container'>
                <div className='login-registration'>

                    <form onSubmit={props.handleEdit} >

                    <h3>Name:</h3>
                    <input 
                        className='text-field' 
                        name='first_name' 
                        type='text' 
                        placeholder={props.currentUser && props.currentUser.first_name} 
                        value={props.formData && props.formData.first_name} 
                        onChange={props.handleChange} 
                    />
                    <input
                        className='text-field' 
                        name='last_name' 
                        type='text' 
                        placeholder={props.currentUser && props.currentUser.last_name} 
                        value={props.formData && props.formData.last_name} 
                        onChange={props.handleChange} 
                    />

                    <h3>Username:</h3>
                    <input 
                        className='text-field'
                        name='username' 
                        type='text' 
                        placeholder={props.currentUser && props.currentUser.username} 
                        value={props.formData && props.formData.username} 
                        onChange={props.handleChange} 
                    />

                    <h3>Email:</h3>
                    <input 
                        className='text-field'
                        name='email' 
                        type='email' 
                        placeholder={props.currentUser && props.currentUser.email} 
                        value={props.formData && props.formData.email} 
                        onChange={props.handleChange} />

                    <h3>Artist Bio:</h3>
                    <textarea 
                        className='text-area'
                        name='artist_bio' 
                        placeholder='new bio' 
                        rows='7' 
                        cols='30' 
                        value={props.formData && props.formData.artist_bio} 
                        onChange={props.handleChange}
                    ></textarea>

                    <h3>Password:</h3>
                    <input 
                        className='text-field'
                        name='password' 
                        type='password' 
                        placeholder='6 character min' 
                        value={props.formData && props.formData.password} 
                        onChange={props.handleChange} 
                    />

                    <button type='submit'>Save Changes</button>

                    </form>

                    <form onSubmit={props.handleDelete}>
                        <button type='submit'>Delete User</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default AccountEdit
