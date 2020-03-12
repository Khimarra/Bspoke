import React from 'react'
import Layout from '../shared/Layout'
import { useParams } from 'react-router-dom'

const Create2dListing = (props) => {
    const params = useParams()
    console.log(params)
    console.log(props)

    return (
        <Layout>
            <div>
                <h1>Create Listing</h1>
                <form onSubmit={props.onSubmit}>
                    <h3>Title:</h3>
                    <input 
                        name='title' 
                        type='text' 
                        placeholder='title' 
                        value={props.form2dData.title} 
                        onChange={(e) => props.handleChange(e, "two")} 
                    />

                    <h3>Description:</h3>
                    <textarea 
                        name='description' 
                        type='text' placeholder='description of the piece...' 
                        value={props.form2dData.description} 
                        rows='7' 
                        cols='30' 
                        onChange={(e) => props.handleChange(e, "two")} 
                    ></textarea>

                    <h3>Price:</h3>
                    <input 
                        name='price' 
                        type='number' 
                        placeholder='price in $' 
                        value={props.form2dData.price} 
                        onChange={(e) => props.handleChange(e, "two")} 
                    />

                    <h3>Height:</h3>
                    <input 
                        name='height' 
                        type='number' 
                        placeholder='height in inches' 
                        value={props.form2dData.height} 
                        onChange={(e) => props.handleChange(e, "two")} 
                    />

                    <h3>Width:</h3>
                    <input 
                        name='width' 
                        type='number' 
                        placeholder='width in inches' 
                        value={props.form2dData.width} 
                        onChange={(e) => props.handleChange(e, "two")} 
                    />

                    <h3>DPI:</h3>
                    <input 
                        name='dpi' 
                        type='number' 
                        placeholder='DPI' 
                        value={props.form2dData.dpi} 
                        onChange={(e) => props.handleChange(e, "two")} 
                    />

                    <br></br>
                    <button type='submit' >Create Listing</button>
                </form>
            </div>
        </Layout>
    )
}

export default Create2dListing
