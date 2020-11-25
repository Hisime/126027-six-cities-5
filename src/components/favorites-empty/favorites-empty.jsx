import React from "react";
import {Logo} from "../logo/logo";
import {LogoType} from "../../consts";
import UserNav from "../user-nav/user-nav";

const FavoritesEmpty = () => {
  return (
    <div className="page page--favorites-empty">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <UserNav/>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan yor future
                trips.</p>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <Logo type={LogoType.FOOTER}/>
      </footer>
    </div>
  );
};

export {FavoritesEmpty};
