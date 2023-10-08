import SmallFilmCard from '../../components/small-film-card/SmallFilmCard';

type MainPageProps = {
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmYear: number;
}

function MainPage({ promoFilmName, promoFilmGenre, promoFilmYear }: MainPageProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
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
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilmGenre}</span>
                <span className="film-card__year">{promoFilmYear}</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Kids &amp; Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul>
          <div className="catalog__films-list">
            <SmallFilmCard alt="Fantastic Beasts: The Crimes of Grindelwald" src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" />
            <SmallFilmCard alt="Bohemian Rhapsody" src="img/bohemian-rhapsody.jpg" />
            <SmallFilmCard alt="Macbeth" src="img/macbeth.jpg" />
            <SmallFilmCard alt="Aviator" src="img/aviator.jpg" />
            <SmallFilmCard alt="We need to talk about Kevin" src="img/we-need-to-talk-about-kevin.jpg" />
            <SmallFilmCard alt="What We Do in the Shadows" src="img/what-we-do-in-the-shadows.jpg" />
            <SmallFilmCard alt="Revenant" src="img/revenant.jpg" />
            <SmallFilmCard alt="Johnny English" src="img/johnny-english.jpg" />
            <SmallFilmCard alt="Shutter Island" src="img/shutter-island.jpg" />
            <SmallFilmCard alt="Pulp Fiction" src="img/pulp-fiction.jpg" />
            <SmallFilmCard alt="No Country for Old Men" src="img/no-country-for-old-men.jpg" />
            <SmallFilmCard src="img/snatch.jpg" alt="Snatch" />
            <SmallFilmCard src="img/moonrise-kingdom.jpg" alt="Moonrise Kingdom" />
            <SmallFilmCard src="img/seven-years-in-tibet.jpg" alt="Seven Years in Tibet" />
            <SmallFilmCard src="img/midnight-special.jpg" alt="Midnight Special" />
            <SmallFilmCard src="img/war-of-the-worlds.jpg" alt="War of the Worlds" />
            <SmallFilmCard src="img/dardjeeling-limited.jpg" alt="Dardjeeling Limited" />
            <SmallFilmCard src="img/orlando.jpg" alt="Orlando" />
            <SmallFilmCard src="img/mindhunter.jpg" alt="Mindhunter" />
            <SmallFilmCard src="img/midnight-special.jpg" alt="Midnight Special" />
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
