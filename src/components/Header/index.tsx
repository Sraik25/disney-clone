/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Logo, Nav, NavMenu, UserImg } from './styles';

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="Logo Disnay" />
      <NavMenu>
        <a href="#">
          <img src="/images/home-icon.svg" alt="Logo home" />
          <span>HOME</span>
        </a>

        <a href="#">
          <img src="/images/search-icon.svg" alt="Logo search" />
          <span>SEARCH</span>
        </a>
        <a href="#">
          <img src="/images/watchlist-icon.svg" alt="Logo watchlist" />
          <span>WATCHLIST</span>
        </a>
        <a href="#">
          <img src="/images/original-icon.svg" alt="Logo originals" />
          <span>ORIGINALS</span>
        </a>
        <a href="#">
          <img src="/images/movie-icon.svg" alt="Logo movie" />
          <span>MOVIES</span>
        </a>
        <a href="#">
          <img src="/images/series-icon.svg" alt="Logo series" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I7qZjZL7C7H7pIuFxJt6uPtL4GtF6OLyioNu1lvg0E=s83-c-mo" />
    </Nav>
  );
};

export default Header;
