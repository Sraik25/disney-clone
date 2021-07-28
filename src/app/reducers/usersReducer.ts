import { User, UserInitialState } from '../dtos/userDtos';
import { RootState } from '../store';

const initialState: UserInitialState = {
  user: null,
};
export type USERACTIONTYPE =
  | { type: 'SIGN_UP'; payload: User }
  | { type: 'SIGN_OUT' };

const userReducer = (
  state = initialState,
  action: USERACTIONTYPE
): UserInitialState => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        user: action.payload,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export const selectUser = (state: RootState) => state.users.user;

export default userReducer;
