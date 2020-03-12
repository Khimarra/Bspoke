import React, { useState, useEffect } from 'react'
import '../../styles/stylesheets/artistBio.css'
import { Link } from 'react-router-dom'
import { getUserById } from '../../services/api-helper'

const ArtistBio = (props) => {

    const [artist, setArtist] = useState({})

// checking to see where props are coming from in order to render the correct artist
    const fetchArtist = async () => {
        if (props.listing) {
            let artist_id = props.listing.user_id
            const res = await getUserById(artist_id)
            setArtist(res.data)
        } else if (props.artist) {
            let artist_id = props.artist.id
            const res = await getUserById(artist_id)
            setArtist(res.data)
        }
    }

    useEffect(() => {
        fetchArtist()
    }, []) 

    return (
        <div className='artist-bio'>
            <Link to={`/account/${artist && artist.id}`}>
                <div>
                    <h3>Artist Bio</h3>
                    <h3>{artist && artist.username}</h3>
                    <h4>{artist && artist.artist_bio}</h4>
                </div>
            </Link>
        </div>
    )
}

export default ArtistBio
