import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/e6/fa/cb/what-you-see-when-you.jpg?w=500&h=400&s=1"  
                title="Castles"
                description=""
                website="http://www.stonehallcastle.com/"
            />
            <Card
                src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/35/fa/d7/royal-canadian-mounted.jpg?w=500&h=400&s=1" 
                title="History Museums"
                description=""
                website="https://rcmphc.com/"
            />
            <Card
                src= "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/33/c5/06/royal-saskatchewan-museum.jpg?w=500&h=400&s=1" 
                title="Speciality Museums"
                description=""
                website="https://royalsaskmuseum.ca/"
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d7/dc/81/wascana-centre-park.jpg?w=500&h=-1&s=1"
                title="Parks"
                description=""
                website="https://wascana.sk.ca/"
                
            />
            <Card
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/bb/8a/80/legislative-building.jpg?w=500&h=400&s=1"
                title="Historic Sites"
                description=""
                website="https://www.legassembly.sk.ca/"
                
            />
            <Card
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d1/f8/4c/regina-globe-theatre.jpg?w=500&h=400&s=1"
                title="Theatres"
                description=""
                website="https://globetheatrelive.com/"
                
            />
            </div>
        </div>
    )
}

export default Home
