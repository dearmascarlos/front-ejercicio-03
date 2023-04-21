import { useEffect, useState } from "react";
import NavBar from "./navBar";
import Section from "./section";

import requests from "@/services/requests";

const baseURL = 'https://api.themoviedb.org/3'
const imageURL = 'https://image.tmdb.org/t/p/original'


const User = () => {

  const [heroMovie, setHeroMovie] = useState()

  useEffect(() => {
    fetch(`${baseURL}${requests.fetchTopRated}`).then(res => res.json()).then((data) => {
      setHeroMovie(data.results[0])
    })
  }, [])

  console.log(heroMovie);
  
    return (
        <div className="bg-transparent w-screen h-screen flex flex-col">
           <NavBar/>
           <Section heroMovie={heroMovie}/>
           <div className="absolute w-screen h-[750px] bg-white/80 z-0 top-0 left-0 overflow-hidden">
            <div className={'bg-cover bg-center w-full h-full'} style={{backgroundImage: `url(${imageURL}${heroMovie?.poster_path})`}}></div>
           </div>
        </div>
    );
}

export default User;