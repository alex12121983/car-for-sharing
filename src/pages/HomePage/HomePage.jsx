import React, { useState, useEffect } from 'react';

// import { getTrendingMovies } from '../../api/movies'
// import Loader from '../../components/Loader/Loader'
// import Notiflix from 'notiflix';
// import MoviesList from "components/MoviesList/MoviesList";

const HomePage = () => {
  // const [movies, setMovies] = useState(null)
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //     const getData = async () => {
  // 		try {
  // 			setIsLoading(true)
  // 			const {results} = await getTrendingMovies()

  //             if ( results.length > 0 ) {
  // 				Notiflix.Notify.success(
  // 					`Hooray! We found ${results.length} trending movies.`,
  // 				  )
  // 			}
  // 			setMovies(results)
  // 		} catch (error) {
  // 			setError(error.message);
  // 			console.log('error :>> ', error)
  // 		} finally {
  //             setIsLoading(false)
  //         }
  // 	}
  // 	getData()
  // }, []);
  // https://657834bbf08799dc804489bf.mockapi.io/api/:endpoint

  return (
    <>
      {/* {isLoading && <Loader />} */}
      {/* {error !== null && (
			<p className="c-error">
				Oops, some error occured. Please, try again later. Error: {error}
			</p>
		)} */}
      {/* {movies && <MoviesList movies={movies}/>} */}
      <p>HomePage</p>
    </>
  );
};

export default HomePage;
