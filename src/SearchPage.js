import React from 'react';
import './SearchPage.css';
import Button from '@mui/material/Button';
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>6 results ||  1 January 2023 to 6 January 2023  ||  Regina</p>
                <h1>Activities near you</h1>
                <Button variant="outlined">Price:</Button>
            </div>
            <SearchResult
                img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/e6/fa/cb/what-you-see-when-you.jpg?w=500&h=400&s=1"
                location="Castles"
                title="Stone Hall Castle"
                description="An incredible European castle experience in Regina, Saskatchewan" 
                website = "http://www.stonehallcastle.com/"
                star={4.73}

            />

            <SearchResult
                img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/35/fa/d7/royal-canadian-mounted.jpg?w=500&h=400&s=1"
                location="History Museums"
                title="RCMP Heritage Centre"
                description="The RCMP Heritage Centre is dedicated to sharing the story of the Royal Canadian Mounted Police (RCMP), Canada's national police force."
                website = "https://rcmphc.com/"
                star={4.3 }
                

            />

            <SearchResult
                img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/33/c5/06/royal-saskatchewan-museum.jpg?w=500&h=400&s=1"
                location="Speciality Museums"
                title="Royal Saskatchewan Museum"
                description="World's largest T. rex lives here. Two locations Regina, Saskatchewan and Eastend, Saskatchewan."
                website = "https://royalsaskmuseum.ca/"
                star={3.8}

            />
            <SearchResult
                img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/d7/dc/81/wascana-centre-park.jpg?w=500&h=-1&s=1"
                location="Parks"
                title="Wascana Centre Park"
                description="All year round, there is something for everyone in Wascana Centre: history, nature, environment, culture, people, animals, fun, serenity and more."
                website = "https://wascana.sk.ca/"
                star={4.1}

            />
            <SearchResult
                img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/bb/8a/80/legislative-building.jpg?w=500&h=400&s=1"
                location="Historic Sites"
                title="Legislative Building"
                description="Tours of the Legislative Building are available seven days a week with the exception of Christmas Day, Boxing Day, New Year’s Day, and Good Friday. The tours last approximately 30 minutes and are free of charge. "
                website = "https://www.legassembly.sk.ca/"
                star={5.0}

            />
            <SearchResult
                img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/4d/40/99/main-room.jpg?w=500&h=-1&s=1"
                location="Science Museums"
                title="Saskatchewan Science Centre"
                description = "The Saskatchewan Science Centre is a non-profit, non-governmental educational facility with the mission of igniting scientific curiosity in Saskatchewan communities through interactive, dynamic, and engaging opportunities. "
                website = "https://www.sasksciencecentre.com/"
                star={4.23}

            />
            <SearchResult
                img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d1/f8/4c/regina-globe-theatre.jpg?w=500&h=400&s=1"
                location="Theatres"
                title="Regina Globe Theatre"
                description="Apart from their mainstage performances, The Globe Theatre offers a variety of additional programming that includes Sandbox Theatre series, play readings, new work development, digital programming, and a dedicated theatre education program through the Globe Theatre School."
                website="https://globetheatrelive.com/"
                star={3.85}

            />
        </div>
    )
}

export default SearchPage
