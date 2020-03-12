import React from 'react'
import '../../styles/stylesheets/gallery.css'
import { Link } from 'react-router-dom'
import cartoonCat from '../../images/cartoon-cat.png'

const GalleryCard = (props) => {
    let type = props.listing.listingType
    return (
        <div className='listing-link'>
            <Link className='link-2'
                to={`/listing/${type}/${props.listing.id}`}
            >
                <div className='gallery-card'>
                    <div className='gallery-card-image-container'>
                        <img src={props.listing.pictures} alt='placeholder' className='gallery-card-image'></img>
                    </div>
                    <h3 className='listing-text'>{props.listing.title}</h3>
                    <h4 className='listing-text'>${props.listing.price}</h4>
                </div>
            </Link>
        </div>
    )
}

export default GalleryCard
