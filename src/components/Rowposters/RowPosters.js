// page created by Nidhin Babu
import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'
import "./Rowposters.css"
function RowPosters(props) {
 const [url,setUrl ]=useState()
  const [movie, setMovie] = useState([])
useEffect(() => {axios.get(props.url).then(response=>
  {console.log(response.data)
    
  setMovie(response.data.results)})
} ,[])
const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },};
  const handleMovie=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
   if(response.data.results.length!==0){setUrl(response.data.results[0])}else{
    console.log("empty aray")
   }
    })
   
  }
return(
    <div className='row'>
        <h1>{props.title}</h1>
        <div className="posters">
          {movie.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" srcset="" />
      
          )}
              
              
        </div>
   { url && <Youtube opts={opts} videoId={url.key}  />}
        </div>
  )
}

export default RowPosters