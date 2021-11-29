import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const moviesDetails = createAsyncThunk(
    'movieDetail/moviesDetails',
    async  (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4d4ed145d3584846f5922b6a467e1f85&language=en-US`)
            .then((res)=>res.json())
    }
);

const movieDetail = createSlice({
    name: 'movieDetail',
    initialState: {
        moviesDetails:{},
        status: null,
        error: null,

    },
    extraReducers: {

        [moviesDetails.pending]: (state, action ) => {
            state.status='loading';
            state.error = null;
        },
        [moviesDetails.fulfilled]: (state, {payload}) => {
            state.status = 'resolved';
            state.moviesDetails = payload;
            console.log(state.moviesDetails)

        },
        [moviesDetails.rejected]: (state) => {
            state.status = 'error';
        }


    }
});


export default movieDetail.reducer;