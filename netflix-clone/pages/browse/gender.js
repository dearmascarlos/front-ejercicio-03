import { useEffect, useState } from "react";

const Gender = ({id}) => {

  const baseURL = 'https://api.themoviedb.org/3'
  const API_KEY =  'b36d0e0e939c02f2df7cb44d16a5d12a'

  const [genres, setGenres] = useState()
  
  useEffect(() => {
    fetch(`${baseURL}/movie/${id}?api_key=${API_KEY}`).then(res => res.json()).then((data) => {
      console.log(data.genres);  
      setGenres(data.genres)
    })
  }, [])

  return (
    <>
        {
          genres?.map((genre, i) => (
            <span className="text-white"> {genre.name} </span>
          ))
        }
      
    </>
  );
}

export default Gender;