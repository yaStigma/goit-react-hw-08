import { createSlice } from '@reduxjs/toolkit';


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
  
  
});

export default authSlice.reducer;