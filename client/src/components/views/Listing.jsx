import React, { useState, useEffect } from 'react'
import ProductDetails3d from '../shared/ProductDetails3d'
import ProductDetails2d from '../shared/ProductDetails2d'
import ArtistBio from '../shared/ArtistBio'
import Layout from '../shared/Layout'
import { getThreeDListingById, getTwoDListingById } from '../../services/api-helper'
import cartoonCat from '../../images/cartoon-cat.png'
import '../../styles/stylesheets/listing.css'


const Listing = (props) => {
    console.log(props)

    const [listing, setListing] = useState({})

    const fetchListing = async () => {
        let listing
        let listing_id = props.match.params.id
        if(props.match.params.listingtype === 'three') {
            const res = await getThreeDListingById(listing_id)
            listing = res.data
            console.log(res)
        } else if(props.match.params.listingtype === 'two') {
            const res = await getTwoDListingById(listing_id)
            listing = res.data
        }
        setListing(listing)
    }

    useEffect(() => {
        if(props.history) {
            fetchListing()
        }
    }, [])


    console.log(listing)

    return (
        <Layout>
            <div className='listing'>
                <div className='listing-img-container'>
                    <img src={(`${listing && listing.pictures}`)}></img>
                </div>
                
                <h1>{listing && listing.title}</h1>
                <p>{listing && listing.description}</p>
                <h2>${listing && listing.price}</h2>
                {listing.title && <ArtistBio listing={listing} />}
                {listing.title && (listing.listingType === 'three') && <ProductDetails3d listing={listing} />}
                {listing.title && (listing.listingType === 'two') && <ProductDetails2d listing={listing} />}
            </div>
        </Layout>
    )
}

export default Listing
