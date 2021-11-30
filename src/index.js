import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import PopularMoviesDetails from "./components/popular-movies/popular-movies-details";
import Header from "./components/header";
import NotFound from "./components/not-found/not-found";
document.cookie ="SameSite=lax";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router>
              <Fragment>
                  <Header/>
              <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/movie/:id" element={<PopularMoviesDetails/>} />
                  <Route path="*" element={<NotFound/>} />
              </Routes>
              </Fragment>
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
