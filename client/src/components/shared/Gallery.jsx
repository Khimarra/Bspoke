import React from 'react'
import GalleryCard from './GalleryCard'
import ArtistBio from './ArtistBio'
import '../../styles/stylesheets/gallery.css'

const Gallery = (props) => {
    const user_id = props.artist.id
    const threes = props.digitalThreeDs
    const twos = props.digitalTwoDs

    return (
        <div className='gallery'>
            <h3>Gallery</h3>
            <ArtistBio 
                artist={props.artist} 
            />
            <h5>{props.artist.username}'s 3D Listings</h5>
            <div className='dthreed-gallery-cards gallery-cards'>
                {threes && threes.filter(listing => listing.user_id === user_id).map((listing, index) => {
                    if(Object.keys(props.digitalThreeDs).length === 0) {
                        return (
                            <div>
                                <h4 className="loading">Loading...</h4>
                            </div>
                        )
                    }
                    return (
                        <GalleryCard 
                            key={index} 
                            listing={listing}
                            artist={props.artist} 
                            passListing={props.passListing}
                        />
                    )
                })}
            </div>
            <h5>{props.artist.username}'s 2D Listings</h5>
            <div className='dtwod-gallery-cards gallery-cards'>
                {twos && twos.filter(listing => listing.user_id === user_id).map((listing, index) => {
                    if(Object.keys(props.digitalTwoDs).length === 0) {
                        return (
                            <div>
                                <h4 className="loading">Loading...</h4>
                            </div>
                        )
                    }
                    return (
                        <GalleryCard 
                            key={index} 
                            listing={listing}
                            artist={props.artist}
                            passListing={props.passListing}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery
