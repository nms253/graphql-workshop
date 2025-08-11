import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import client from '../../graphql/apollo-client';
import { gql } from '@apollo/client';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string;
}

const signupMutation = gql`
  mutation Signup($input: CreateUserInput!) {
    createUser(input:$input) {
      id name email
    }
  }
`;
const loginMutation = gql`
  mutation Login($input: LoginInput!) {
    login(input:$input)
  }
`;

export const signup = createAsyncThunk('auth/signup', async (data: { name: string; email: string; password: string; }, { rejectWithValue }) => {
  try {
    const res = await client.mutate({ mutation: signupMutation, variables: { input: data } });
    return res.data.createUser;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

export const login = createAsyncThunk('auth/login', async (data: { email: string; password: string; }, { rejectWithValue }) => {
  try {
    const res = await client.mutate({ mutation: loginMutation, variables: { input: data } });
    localStorage.setItem('token', res.data.login);
    return res.data.login;
  } catch (err: any) {
    return rejectWithValue(err.message);
  }
});

const initialState: AuthState = {
  user: null,
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  // token: null,
  status: 'idle'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(signup.pending, (s) => { s.status = 'loading'; s.error = undefined; })
      .addCase(signup.fulfilled, (s, a) => {
        s.status = 'succeeded'; s.user = a.payload.user; s.token = a.payload.token;
      })
      .addCase(signup.rejected, (s, a) => { s.status = 'failed'; s.error = a.payload as string; })

      .addCase(login.pending, (s) => { s.status = 'loading'; s.error = undefined; })
      .addCase(login.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        state.token = action.payload;
        state.status = 'succeeded';
      })
      .addCase(login.rejected, (s, a) => { s.status = 'failed'; s.error = a.payload as string; });
  }
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
