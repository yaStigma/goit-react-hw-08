import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operations';
import { fetchContacts } from '../contacts/operations';



const initialState = {
  user: {
    name: null,
    email: null,
    
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  
  extraReducers: (builder) => {
    builder
    .addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true;
    })
    .addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isLoggedIn = true;
    })
.addCase(logOut.fulfilled, () => {
  return (
    initialState
  )
})
.addCase(fetchContacts.fulfilled, (state, action) => {
  state.contacts = action.payload;
})
  


    .addMatcher(isAnyOf(register.pending, logIn.pending), state => {
      state.isLoading = true;
    })
    .addMatcher(isAnyOf(register.rejected, logIn.rejected), (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    } )
  }

  
});

export default authSlice.reducer;