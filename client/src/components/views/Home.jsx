import React, { useState, useEffect } from 'react'
import Layout from '../shared/Layout'
import Gallery from '../shared/Gallery'
import '../../styles/stylesheets/home.css'
import { getUsers, getDigitalThreeDs, getDigitalTwoDs } from '../../services/api-helper'

const Home = (props) => {

    const [artists, setArtists] = useState([])
    const [digitalThreeDs, setDigitalThreeDs] = useState([])
    const [digitalTwoDs, setDigitalTwoDs] = useState([])

    useEffect(() => {
        artistDetails()
        digitalThreeDListings()
        digitalTwoDListings()
    }, [])

    const artistDetails = async () => {
        const res = await getUsers()
        setArtists(res.data)
    }

    const digitalThreeDListings = async () => {
        const res = await getDigitalThreeDs()
        setDigitalThreeDs(res.data)
    }

    const digitalTwoDListings = async () => {
        const res = await getDigitalTwoDs()
        setDigitalTwoDs(res.data)
    }

    return (
        <Layout>
            <div className='home'>
                <div className='container'>
                    <div className='home-scroll'>
                        <h1>Find Something Special</h1>
                        <h2>Scroll Down</h2>
                    </div>
                </div>

                <div className='artist-bio-home-container'>
                    {artists && artists.map((artist, index) => {
                        if(Object.keys(artists).length === 0) {
                            return (
                                <div>
                                    <h4 className="loading">Loading...</h4>
                                </div>
                            )
                        }
                        return (
                            <Gallery 
                                key={index} 
                                artist={artist} 
                                digitalThreeDs={digitalThreeDs}
                                digitalTwoDs={digitalTwoDs}
                            />
                        )
                    })}
                </div>

            </div>
        </Layout>
    )
}

export default Home
