export interface User {
  name: string;
  email: string;
  photo: string;
}

export interface UserInitialState {
  user: User | null;
}
