import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// import Notiflix from 'notiflix'

// import { getMovieDetails } from '../../api/movies'

// import Movie from 'components/Movie/Movie'
// import Loader from '../../components/Loader/Loader'

// import css from './MovieDetails.module.css'

const MovieDetails = () => {
  // const [movie, setMovie] = useState(null)
  // const { movieId } = useParams()
  // const [isLoading, setIsLoading] = useState(false)
  // const location = useLocation()
  // const [error, setError] = useState(null)

  // useEffect(() => {
  // 	const getData = async () => {
  // 		try {
  // 			setIsLoading(true)

  // 			const data = await getMovieDetails(movieId)
  // 				Notiflix.Notify.success(
  // 					`Hooray! We found info about this film.`,
  // 				  )
  // 				setMovie(data)

  // 		} catch (error) {
  // 			setError(error.message)
  // 			console.log('error :>> ', error)
  // 		} finally {
  // 			setIsLoading(false)
  // 		}
  // 	}
  // 	getData()
  // }, [movieId])

  // const goBack = useRef( location?.state?.from ?? '/')

  return (
    // movie && (
    <>
      {/* {isLoading && <Loader />}
				<Link to={goBack.current} className={css['back-link']}>
                    Back
                </Link> */}
      {/* {error !== null && (
					<p className="c-error">
					Oops, some error occured. Please, try again later. Error: {error}
					</p>
				)} */}
      {/* {movie &&  <Movie movie={movie} />} */}
      {/* <ul className={css["additional-info"]}>
					<li>
                        <Link 
							to="cast" 
							className={css["additional-info__item"]}
						>
							Cast
						</Link>
                    </li>
					<li>
						<Link 
							to="reviews" 
							className={css["additional-info__item"]}
						>
							Reviews
						</Link>
                    </li>
				</ul>
				<Suspense>
            		<Outlet />
				</Suspense> */}
      <p>Favorite Page</p>
    </>
    // )
  );
};

export default MovieDetails;
