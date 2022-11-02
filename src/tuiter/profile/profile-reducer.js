import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        saveProfile(state, action){
            const a = action.payload;
            state.name = a[0];
            state.bio = a[1];
            state.location = a[2];
            state.website = a[3];
            state.dateOfBirth = a[4];
        }
    }
});

export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;