import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const key = '4d4ed145d3584846f5922b6a467e1f85';

export const moviesFetch = createAsyncThunk(
    'popularMovies/moviesFetch',
    async  () => {
       return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`)
           .then((res)=>res.json())
    }
);

export const moviesDetails = createAsyncThunk(
    'popularMovies/moviesDetails',
    async  (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
            .then((res)=>res.json())
    }
);

export const moviesPerson = createAsyncThunk(
    'popularMovies/moviesPerson',
    async  (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}/casts?api_key=${key}&language=en-US`)
            .then((res)=>res.json())
    }
);

export const moviesTrailer = createAsyncThunk(
    'popularMovies/moviesTrailer',
    async  (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
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
        statusDetailMovie: null,
        errorDetailMovie: null,
        moviesPerson:[],
        moviesTrailer:[]
    },
    extraReducers: {
        [moviesFetch.pending]: (state, action ) => {
            state.status='loading';
                state.error = null;
        },
        [moviesFetch.fulfilled]: (state, {payload}) => {
            state.status = 'resolved';
            state.popularMovies = payload.results;
        },
        [moviesFetch.rejected]: (state) => {
            state.status = 'error';
        },

        [moviesDetails.pending]: (state, action ) => {
            state.statusDetailMovie='loading';
            state.errorDetailMovie = null;
        },
        [moviesDetails.fulfilled]: (state, {payload}) => {
            state.statusDetailMovie = 'resolved';
            state.moviesDetails = payload;
        },
        [moviesDetails.rejected]: (state) => {
            state.statusDetailMovie = 'error';
        },
        [moviesPerson.fulfilled]: (state, {payload}) => {
            state.statusDetailMovie = 'resolved';
            state.moviesPerson = payload.cast;
        },
        [moviesTrailer.fulfilled]: (state, {payload}) => {
            state.statusDetailMovie = 'resolved';
            state.moviesTrailer = payload.results;
            console.log(payload.results)
        }



    }
});


export default movieSlice.reducer;