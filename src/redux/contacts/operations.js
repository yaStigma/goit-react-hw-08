import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk ('contacts/fetchAll', async(_, thunkAPI) => {
try {
    const {data} = await axios.get('/contacts');
return data
} catch (error) {
   return thunkAPI.rejectWithValue(error.message)
}
})

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
      try {
        const {data} = await axios.post('/contacts', contact);
        return data; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        const {data} = await axios.delete(`/contacts/${contactId}`);
        return data; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
      }
    }
  );

  export const updateContact = createAsyncThunk(
    'contacts/updateContact',
    async (contactId, thunkAPI) => {
      try {
        const {data} = await axios.patch(`/contacts/${contactId}`);
        return data; 
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
      }
    }
  );