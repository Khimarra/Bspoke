import React from 'react'

const ProductDetails = (props) => {
    console.log(props.listing)
    console.log(typeof props.listing.is_animated)
    return (
        <div className='product-details'>
            <h3>Product Details</h3>
            <ul>
                <li>Polygons: {props.listing && props.listing.polygons}</li>
                <li>UVs: {props.listing && props.listing.is_uvd.toString()}</li>
                <li>Textures: {props.listing && props.listing.is_textured.toString()}</li>
                <li>Rig: {props.listing && props.listing.is_rigged.toString()}</li>
                <li>Animations: {props.listing && props.listing.is_animated.toString()}</li>
            </ul>
        </div>
    )
}

export default ProductDetails
