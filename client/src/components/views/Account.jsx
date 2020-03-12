import React, { useState, useEffect } from 'react'
import Layout from '../shared/Layout'
import GalleryCard from '../shared/GalleryCard'
import ArtistBio from '../shared/ArtistBio'
import { useParams, Link } from 'react-router-dom'
import { getDigitalThreeDs, getDigitalTwoDs, getUserById } from '../../services/api-helper'

const Account = (props) => {
    const params = useParams()

    const [artist, setArtist] = useState([])
    const [digitalThreeDs, setDigitalThreeDs] = useState([])
    const [digitalTwoDs, setDigitalTwoDs] = useState([])

    useEffect(() => {
        artistDetails()
        digitalThreeDListings()
        digitalTwoDListings()
    }, [])

    const user_id = params.id
    const threes = digitalThreeDs
    const twos = digitalTwoDs

    const digitalThreeDListings = async () => {
        const res = await getDigitalThreeDs()
        setDigitalThreeDs(res.data)
    }

    const digitalTwoDListings = async () => {
        const res = await getDigitalTwoDs()
        setDigitalTwoDs(res.data)
    }

    const artistDetails = async () => {
        const res = await getUserById(user_id)
        setArtist(res.data)
    }

    const checkUser = () => {
        if (props.currentUser && (props.currentUser.username == artist.username)) {
            return true
        }
    }

    return (
        <Layout>
            <div>
                <h1>Account</h1>
                {artist.username && <ArtistBio artist={artist} />}
                {artist.username && checkUser() ? <Link to={`/account/${artist.id}/edit`} >Edit Profile</Link> : ''}

                <h5>{artist.username}'s 3D Listings</h5>
                {artist.username && checkUser() ? 
                    <Link 
                        className='create-listing-link' 
                        to={`/account/${artist.id}/createlisting/three`}>
                            Create New 3D Listing
                    </Link> : ''}
                <div className='gallery-cards'>
                    {threes && threes.filter(listing => listing.user_id == user_id).map((listing, index) => {
                        if(Object.keys(digitalThreeDs).length === 0) {
                            return (
                                <div>
                                    <h4 className="loading">Loading...</h4>
                                </div>
                            )
                        }
                        return (
                            <GalleryCard key={index} listing={listing} artist={artist} />
                        )
                    })}
                </div>

                <h5>{artist.username}'s 2D Listings</h5>
                {artist.username && checkUser() ? 
                    <Link 
                        className='create-listing-link' 
                        to={`/account/${artist.id}/createlisting/two`}>
                            Create New 2D Listing
                    </Link> : ''}
                <div className='gallery-cards'>
                    {twos && twos.filter(listing => listing.user_id == user_id).map((listing, index) => {
                        if(Object.keys(digitalTwoDs).length === 0) {
                            return (
                                <div>
                                    <h4 className="loading">Loading...</h4>
                                </div>
                            )
                        }
                        return (
                            <GalleryCard key={index} listing={listing} artist={artist} />
                        )
                    })}
                </div>

            </div>
        </Layout>
    )
}

export default Account
