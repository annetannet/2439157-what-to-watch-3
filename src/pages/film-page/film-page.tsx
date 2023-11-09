import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../types/film';
import CatalogFilmCard from '../../components/catalog-film-card/catalog-film-card';

type FilmPageProps = {
  film: Film;
}

function FilmPage({film}: FilmPageProps): JSX.Element {
  return (
    <>
      <Helmet><title>Film</title></Helmet>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film.src}
              alt={film.alt}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo className='logo__link' />
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width={63}
                    height={63}
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.year}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={AppRoute.AddReview} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.srcPoster}
                alt={film.altPoster}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Details
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="film-rating">
                <div className="film-rating__score">{film.rating.score}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{film.rating.level}</span>
                  <span className="film-rating__count">{film.rating.count}</span>
                </p>
              </div>
              <div className="film-card__text">
                <p>{film.textPart1}</p>
                <p>{film.textPart2}</p>
                <p className="film-card__director">
                  <strong>Director: {film.director}</strong>
                </p>
                <p className="film-card__starring">
                  <strong>{film.starring}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <CatalogFilmCard alt='Fantastic Beasts: The Crimes of Grindelwald' src='img/fantastic-beasts-the-crimes-of-grindelwald.jpg' />
            <CatalogFilmCard alt='Bohemian Rhapsody' src='img/bohemian-rhapsody.jpg' />
            <CatalogFilmCard alt='Macbeth' src='img/macbeth.jpg' />
            <CatalogFilmCard alt='Aviator' src='img/aviator.jpg' />
          </div>
        </section>
        <footer className="page-footer">
          <Logo className='logo__link' />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmPage;
