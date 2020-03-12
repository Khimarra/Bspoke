import React from 'react'
import Layout from '../shared/Layout'
import { useParams } from 'react-router-dom'

const Create3dListing = (props) => {
    const params = useParams()
    console.log(params)
    console.log(props)

    return (
        <Layout>
            <div className='container'>
                <div className='form create-listing'>
                    <h1>Create 3D Listing</h1>
                    <form onSubmit={props.onSubmit}>
                        <h3>Title:</h3>
                        <input 
                            className='text-field'
                            name='title' 
                            type='text' 
                            placeholder='title' 
                            value={props.form3dData.title} 
                            onChange={(e) => props.handleChange(e, 'three')} 
                        />

                        <h3>Description:</h3>
                        <textarea 
                            className='text-area'
                            name='description' 
                            type='text' 
                            placeholder='description of the piece...' 
                            value={props.form3dData.description} 
                            rows='7' 
                            cols='30' 
                            onChange={(e) => props.handleChange(e, 'three')} 
                        ></textarea>

                        <h3>Price:</h3>
                        <input 
                            className='text-field'
                            name='price' 
                            type='number' 
                            placeholder='price in $' 
                            value={props.form3dData.price} 
                            onChange={(e) => props.handleChange(e, 'three')} 
                        />

                        <h3>Polygons:</h3>
                        <p>(We recommend counting in tris)</p>
                        <input 
                            className='text-field'
                            name='polygons' 
                            type='number' 
                            placeholder='number of polys' 
                            value={props.form3dData.polygons} 
                            onChange={(e) => props.handleChange(e, 'three')} 
                        />

                        <h3>Are the UVs laid out?</h3>
                        <div className='radio-options'>
                            <p>Yes</p>
                            <input 
                                className='uvd'
                                name='is_uvd' 
                                type='radio' 
                                value={true} 
                                onChange={(e) => props.handleChange(e, 'three')} 
                            />
                            <p>No</p>
                            <input 
                                className='uvd'
                                name='is_uvd' 
                                type='radio' 
                                value={false} 
                                onChange={(e) => props.handleChange(e, 'three')} 
                            />
                        </div>

                        <h3>Does it have textures?</h3>
                        <div className='radio-options'>
                            <p>Yes</p>
                            <input 
                                className='textured'
                                name='is_textured' 
                                type='radio' 
                                value={true} 
                                onChange={(e) => props.handleChange(e, 'three')} 
                            />
                            <p>No</p>
                            <input 
                                className='textured'
                                name='is_textured' 
                                type='radio' 
                                value={false} 
                                onChange={(e) => props.handleChange(e, 'three')} 
                            />
                        </div>

                        <h3>Is it rigged?</h3>
                        <div className='radio-options'>
                            <p>Yes</p>
                            <input 
                                className='rigged'
                                name='is_rigged' 
                                type='radio' 
                                value={true} 
                                onChange={(e) => props.handleChange(e, 'three')} 
                            />
                            <p>No</p>
                            <input 
                                className='rigged'
                                name='is_rigged' 
                                type='radio' 
                                value={false} 
                                onChange={(e) => props.handleChange(e, 'three')} 
                            />
                        </div>

                        <h3>Are there animations attached?</h3>
                        <div className='radio-options'>
                            <p>Yes</p>
                            <input 
                                className='animated'
                                name='is_animated' 
                                type='radio' 
                                value={true} 
                                onChange={(e) => props.handleChange(e, 'three')} 
                            />
                            <p>No</p>
                            <input 
                                className='animated'
                                name='is_animated' 
                                type='radio' 
                                value={false} 
                                onChange={(e) => props.handleChange(e, 'three')} 
                            />
                        </div>

                        <h3>Attach Files:</h3>
                        <input 
                            className='attach-button'
                            id="file" 
                            type="file" 
                            name="pictures" 
                            multiple 
                            onChange={props.handlePicturesChange} 
                        />

                        <button type='submit' >Create Listing</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Create3dListing
