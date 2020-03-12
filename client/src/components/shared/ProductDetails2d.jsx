import React from 'react'

const ProductDetails = (props) => {
    console.log(props.listing)
    return (
        <div className='product-details'>
            <h3>Product Details</h3>
            <ul>
                <li>{`Height: ${props.listing.height} inches`}</li>
                <li>{`Width: ${props.listing.width} inches`}</li>
                <li>DPI: {props.listing.dpi}</li>
            </ul>
        </div>
    )
}

export default ProductDetails
