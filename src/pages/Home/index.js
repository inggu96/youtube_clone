import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import mdata from "../../mock_movie.json";
import { RankingCarousel, HomeCarousel } from "../../components";
import MovieModal from "../../components/MovieModal";
import { getMoviesRelated } from "../../api/Movies";
import New from "../../components/Common/MotionModal/New";

const Home = ({ id }) => {
  const [relatedMovies, setRelatedMovies] = useState();

  const fetchRelatedMovies = async () => {
    const response = await getMoviesRelated(id);
    setRelatedMovies(response.data);
  };

  useEffect(() => {
    fetchRelatedMovies();
  }, []);
  
  console.log(setRelatedMovies)

  const [movies] = useState(mdata);
  const [movieInfo, setMovieInfo] = useState(movies[0]);
  const [isShow, setIsShow] = useState(false);

  const onModalClick = (id) => {
    const num = movies.findIndex((item) => item.id === id);
    setMovieInfo(movies[num]);
    setIsShow(true);
    document.body.classList.add('modal_overlay');
    document.body.classList.add('modal-open');
  };
  const onModalClose = () => {
    setIsShow(false);
    document.body.classList.remove('modal_overlay');
    document.body.classList.remove('modal-open');
  };
 
  return (
    <section className={styles.wrapper}>
      <MovieModal
        setIsShow={setIsShow}
        isShow={isShow}
        onModalClose={onModalClose}
        movieInfo={movieInfo}
      ></MovieModal>
      <article className={styles.ranking}>
        <div>
          <RankingCarousel
            movieInfo={movieInfo}
            movies={movies}
            onModalClick={onModalClick}
          />
        </div>
      </article>
      <article className={styles.category}>
        <h2>🔥 개봉 예정 🔥</h2>
        <HomeCarousel
          movieInfo={movieInfo}
          movies={movies}
          onModalClick={onModalClick}
        />
        <h2>👀 오늘 이거 볼래? 👀</h2>
        <HomeCarousel
          movieInfo={movieInfo}
          movies={movies}
          onModalClick={onModalClick}
        />
      </article>
      <article className={styles.category}>
        <h2>🔥 개봉 예정 🔥</h2>
        <HomeCarousel
          movieInfo={movieInfo}
          movies={movies}
          onModalClick={onModalClick}
        />
        <h2>👀 오늘 이거 볼래? 👀</h2>
        {relatedMovies &&
            relatedMovies.map((movie) => {
              return (
        <HomeCarousel
          title={movie.title}
          id={movie.id}
          postImage={movie.postImage}
          key={movie.id}
          movieInfo={movieInfo}
          movies={movie}
          onModalClick={onModalClick}
          />
          );
        })}
      </article>
    </section>

  );
};

export default Home;
