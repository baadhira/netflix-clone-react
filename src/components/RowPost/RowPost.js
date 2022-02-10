import React, { useEffect, useState } from "react";
import Youtube from 'react-youtube'
import { imageUrl } from "../constants/constants";
import axios from "axios";
import "./RowPost.css";
import { API_KEY } from '../constants/constants'
function RowPost(props) {
  const [movies, setMovies] = useState();

  const [moviesTrailer, setMoviesTrailer] = useState();
  useEffect(() => {
    axios
      .get(props.url)
      .then(
        (res) => {
          setMovies(res.data.results);
          console.log(res.data.results);
        },
      );

  }, [setMovies, setMoviesTrailer]);

  const handleMovie = (id) => {
    console.log(id)
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(
        (res) => {
          setMoviesTrailer(res.data.results);
          console.log(res.data.results)

        },
      );
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies?.map((obj) => (
          <div>
            <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} src={imageUrl + obj.backdrop_path} alt="" />
          </div>
        ))}
      </div>


      {moviesTrailer?.map(movie =>

        <iframe width="100%" height="390" src={`https://www.youtube.com/embed/${movie.key}`}>
        </iframe>

      )}


      {console.log(moviesTrailer)}

    </div>
  );
}

export default RowPost;