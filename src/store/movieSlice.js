import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const moviesFetch = createAsyncThunk(
    'popularMovies/moviesFetch',
    async  () => {
       return fetch("https://api.themoviedb.org/3/movie/popular?api_key=4d4ed145d3584846f5922b6a467e1f85&language=en-US")
           .then((res)=>res.json())
    }
);

export const moviesDetails = createAsyncThunk(
    'popularMovies/moviesDetails',
    async  (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4d4ed145d3584846f5922b6a467e1f85&language=en-US`)
            .then((res)=>res.json())
    }
);

const movieSlice = createSlice({
    name: 'popularMovies',
    initialState: {
        popularMovies: [],
        status: null,
        error: null,
        moviesDetails:{},
        status2: null,
        error2: null,
    },
    extraReducers: {
        [moviesFetch.pending]: (state, action ) => {
            state.status='loading';
                state.error = null;
        },
        [moviesFetch.fulfilled]: (state, {payload}) => {
            state.status = 'resolved';
            state.popularMovies = payload.results;
            console.log(state.popularMovies)
        },
        [moviesFetch.rejected]: (state) => {
            state.status = 'error';
        },

        [moviesDetails.pending]: (state, action ) => {
            state.status2='loading';
            state.error2 = null;
        },
        [moviesDetails.fulfilled]: (state, {payload}) => {
            state.status2 = 'resolved';
            state.moviesDetails = payload;
            console.log(state.moviesDetails)

        },
        [moviesDetails.rejected]: (state) => {
            state.status2 = 'error';
        }


    }
});


export default movieSlice.reducer;