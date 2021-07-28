import db from '../../firebase';
import { MOVIESACTIONTYPE } from '../reducers/movieReducer';
import { AppDispatch } from '../store';

type AppCallback = {
  (data?: any): AppDispatch;
};

function getMoviesAction() {
  console.log('accrion');
  return (dispatch: AppCallback) => {
    try {
      db.collection('movies').onSnapshot(async (snapshot) => {
        let temMovies = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        dispatch(getMovies(temMovies));
      });
    } catch (error) {}
  };
}

const getMovies = (data: any): MOVIESACTIONTYPE => ({
  type: 'GET_MOVIES',
  payload: data,
});

export { getMoviesAction };
