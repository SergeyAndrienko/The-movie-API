import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


const key = '4d4ed145d3584846f5922b6a467e1f85';

export const moviesFetch = createAsyncThunk(
    'popularMovies/moviesFetch',
    async () => {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`)
            .then((res) => res.json())
    }
);

export const moviesDetails = createAsyncThunk(
    'popularMovies/moviesDetails',
    async (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
            .then((res) => res.json())
    }
);

export const moviesPerson = createAsyncThunk(
    'popularMovies/moviesPerson',
    async (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}/casts?api_key=${key}&language=en-US`)
            .then((res) => res.json())
    }
);

export const moviesTrailer = createAsyncThunk(
    'popularMovies/moviesTrailer',
    async (id) => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then((res) => res.json())
    }
);

export const moviesGenres = createAsyncThunk(
    'popularMovies/moviesGenres',
    async () => {
        return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`)
            .then((res) => res.json())
    }
);

export const moviesByGenres = createAsyncThunk(
    'popularMovies/moviesByGenres',
    async (genre_id) => {
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`)
            .then((res) => res.json())
            .then(data=>data.results.filter(movie => movie.genre_ids.includes(parseInt(genre_id))))
    }
)

export const moviesSearch = createAsyncThunk(
    'popularMovies/moviesSearch',
    async (nameMovie) => {
        return fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${key}&query=${nameMovie}`)
            .then((res) => res.json())

    }
)


const movieSlice = createSlice({
    name: 'popularMovies2',
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
        search:null
    },
    reducers: {
        setGenre(state, {payload}) {
            state.genre = payload;
        },
        setSearch(state, {payload}){
            state.search = payload;
            console.log(payload)
        }
    },
    extraReducers: {
        [moviesFetch.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [moviesFetch.fulfilled]: (state, {payload}) => {
            state.status = 'resolved';
            state.popularMovies = payload.results;
        },
        [moviesFetch.rejected]: (state) => {
            state.status = 'error';
        },

        [moviesDetails.pending]: (state, action) => {
            state.statusDetailMovie = 'loading';
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
        },
        [moviesGenres.fulfilled]: (state, {payload}) => {
            state.statusGenres = 'resolved';
            state.moviesGenres = payload.genres;
        },
        [moviesByGenres.fulfilled]: (state, {payload}) => {
            state.statusGenres = 'resolved';
            state.popularMovies = payload;
            console.log(payload)
        },
        [moviesSearch.fulfilled]: (state, {payload}) => {
            state.status = 'resolved';
            state.popularMovies = payload.results;
            console.log(payload.results)
        }
    }
});

export const {setGenre,setSearch} = movieSlice.actions;

export default movieSlice.reducer;