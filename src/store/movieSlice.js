import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


const key = '4d4ed145d3584846f5922b6a467e1f85';
const typePrefix = 'popularMovies';
const MOVIE_URL = 'https://api.themoviedb.org/3/';


export const moviesListRequest = createAsyncThunk(
    typePrefix + '/moviesFetch',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`${MOVIE_URL}movie/popular?api_key=${key}&language=en-US`)
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const data = await response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const moviesDetailsRequest = createAsyncThunk(
    typePrefix + '/moviesDetails',
    async (id, {rejectWithValue}) => {
        try {
            const response = await fetch(`${MOVIE_URL}movie/${id}?api_key=${key}&language=en-US`)
            if (!response.ok) {
                throw new Error('Something went wrong')
            }
            const data = await response.json()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }

    }
);

export const moviesPersonRequest = createAsyncThunk(
    typePrefix + '/moviesPerson',
    async (id) => {
        return fetch(`${MOVIE_URL}movie/${id}/casts?api_key=${key}&language=en-US`)
            .then((res) => res.json())
    }
);

export const moviesTrailerRequest = createAsyncThunk(
    typePrefix + '/moviesTrailer',
    async (id) => {
        return fetch(`${MOVIE_URL}movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res) => res.json())
    }
);

export const moviesGenresRequest = createAsyncThunk(
    typePrefix + '/moviesGenres',
    async () => {
        return fetch(`${MOVIE_URL}genre/movie/list?api_key=${key}&language=en-US`)
            .then((res) => res.json())
    }
);

export const moviesByGenresRequest = createAsyncThunk(
    typePrefix + '/moviesByGenres',
    async (genre_id) => {
        return fetch(`${MOVIE_URL}movie/popular?api_key=${key}&language=en-US`)
            .then((res) => res.json())
            .then(data => data.results.filter(movie => movie.genre_ids.includes(parseInt(genre_id))))
    }
);

export const moviesSearchRequest = createAsyncThunk(
    typePrefix + '/moviesSearch',
    async (nameMovie) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${key}&query=${nameMovie}`)
            .then((res) => res.json())

    }
);


const movieSlice = createSlice({
    name: 'popularMovies',
    initialState: {
        popularMovies: [],
        status: null,
        error: null,
        genre: null,
        moviesDetails: {},
        statusDetailMovie: null,
        errorDetailMovie: null,
        statusGenres: null,
        moviesPerson: [],
        moviesTrailer: [],
        moviesGenres: [],
        search: null
    },
    reducers: {
        setGenre(state, {payload}) {
            state.genre = payload;
        },
        setSearch(state, {payload}) {
            state.search = payload;
        }
    },
    extraReducers: {
        [moviesListRequest.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [moviesListRequest.fulfilled]: (state, {payload}) => {
            state.status = 'resolved';
            state.popularMovies = payload.results;
        },
        [moviesListRequest.rejected]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;

        },

        [moviesDetailsRequest.pending]: (state, action) => {
            state.statusDetailMovie = 'loading';
            state.error = null;
        },
        [moviesDetailsRequest.fulfilled]: (state, {payload}) => {
            state.statusDetailMovie = 'resolved';
            state.moviesDetails = payload;
            console.log(payload)
        },
        [moviesDetailsRequest.rejected]: (state, action) => {
            state.statusDetailMovie = 'error';
            state.error = action.payload;

        },
        [moviesPersonRequest.fulfilled]: (state, {payload}) => {
            state.statusDetailMovie = 'resolved';
            state.moviesPerson = payload.cast;
        },
        [moviesTrailerRequest.fulfilled]: (state, {payload}) => {
            state.statusDetailMovie = 'resolved';
            state.moviesTrailer = payload.results;
        },
        [moviesGenresRequest.fulfilled]: (state, {payload}) => {
            state.statusGenres = 'resolved';
            state.moviesGenres = payload.genres;
        },
        [moviesByGenresRequest.fulfilled]: (state, {payload}) => {
            state.statusGenres = 'resolved';
            state.popularMovies = payload;
        },
        [moviesSearchRequest.fulfilled]: (state, {payload}) => {
            state.status = 'resolved';
            state.popularMovies = payload.results;
        }
    }
});

export const {setGenre, setSearch} = movieSlice.actions;

export default movieSlice.reducer;