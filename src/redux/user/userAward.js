import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    updating: false,
    updateError: null,
  };

  const awardAchievementSlice = createSlice({
    name: 'awardAchievement',
    initialState,
    reducers: {
      updateStart: (state) => {
        state.updating = true;
        state.updateError = null;
      },
      updateSuccess: (state, action) => {
        state.updating = false;
        state.updateError = null;
        state.awardAchievement = action.payload;
      },
      updateFailure: (state, action) => {
        state.updating = false;
        state.updateError = action.payload;
      }, 
    },
  });

  export const { updateStart, updateSuccess, updateFailure } = awardAchievementSlice.actions;

  export default awardAchievementSlice.reducer;
