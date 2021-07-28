/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { singInAction, singOutAction } from '../../app/actions/usersActions';
import { selectUser } from '../../app/reducers/usersReducer';
import { auth, provider } from '../../firebase';
import { useAppSelector } from '../../hooks';
import { Logo, Nav, NavMenu, UserImg, Login, LoginContainer } from './styles';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useAppSelector(selectUser);
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const data: any = {
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        };
        dispatch(singInAction(data));
        history.push('/');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const singIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      if (result.user) {
        const data: any = {
          email: result.user.email,
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        console.log(data);
        dispatch(singInAction(data));
        history.push('/');
      }
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(singOutAction());
      history.push('/login');
    });
  };
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="Logo Disnay" />
      {!user ? (
        <LoginContainer>
          <Login onClick={() => singIn()}>Login</Login>
        </LoginContainer>
      ) : (
        <>
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
          <UserImg onClick={signOut} src={user.photo} />
        </>
      )}
    </Nav>
  );
};

export default Header;
