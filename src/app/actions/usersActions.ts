import { User } from '../dtos/userDtos';
import { USERACTIONTYPE } from '../reducers/usersReducer';

function singInAction(user: User) {
  return (dispatch: any) => {
    dispatch(signIn(user));
  };
}

const signIn = (user: User): USERACTIONTYPE => ({
  type: 'SIGN_UP',
  payload: user,
});

function singOutAction() {
  return (dispatch: any) => {
    dispatch(signOut());
  };
}

const signOut = (): USERACTIONTYPE => ({
  type: 'SIGN_OUT',

});

export { singInAction, singOutAction };
